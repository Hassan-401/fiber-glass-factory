/* ============================================================
   Cloudflare Worker — موقع سوق مصرية فيبر جلاس
   يقدّم: الموقع الثابت + واجهة API + لوحة التحكم + عدّاد الزوار
   ============================================================ */

const JSON_H = { 'Content-Type': 'application/json; charset=utf-8' };
const COOKIE = 'sm_admin';
const SESSION_DAYS = 14;

const json = (data, status = 200, headers = {}) =>
  new Response(JSON.stringify(data), { status, headers: { ...JSON_H, ...headers } });
const bad = (msg, status = 400) => json({ error: msg }, status);

/* ---------------- أدوات تشفير ---------------- */
const enc = new TextEncoder();
const b64 = buf => btoa(String.fromCharCode(...new Uint8Array(buf)));
const unb64 = s => Uint8Array.from(atob(s), c => c.charCodeAt(0));
const hex = buf => [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');

async function pbkdf2(password, salt, iterations = 100000) {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: enc.encode(salt), iterations, hash: 'SHA-256' }, key, 256);
  return hex(bits);
}
/* مقارنة بزمن ثابت */
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}
async function hmac(secret, data) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return b64(await crypto.subtle.sign('HMAC', key, enc.encode(data)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

/* ---------------- الإعدادات ---------------- */
async function getSetting(env, key, fallback = null) {
  const r = await env.DB.prepare('SELECT value FROM settings WHERE key = ?').bind(key).first();
  if (!r) return fallback;
  try { return JSON.parse(r.value); } catch { return fallback; }
}
async function setSetting(env, key, value) {
  await env.DB.prepare(
    `INSERT INTO settings (key, value, updated_at) VALUES (?, ?, unixepoch())
     ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = unixepoch()`
  ).bind(key, JSON.stringify(value)).run();
}
/* سر توقيع الجلسات — يُولَّد مرة ويُخزَّن */
async function sessionSecret(env) {
  let s = await getSetting(env, '_session_secret');
  if (!s) {
    s = hex(crypto.getRandomValues(new Uint8Array(32)));
    await setSetting(env, '_session_secret', s);
  }
  return s;
}

/* ---------------- الجلسات ---------------- */
async function makeToken(env, admin) {
  const payload = `${admin.id}.${admin.pw_version}.${Date.now() + SESSION_DAYS * 864e5}`;
  return `${payload}.${await hmac(await sessionSecret(env), payload)}`;
}
async function readToken(env, token) {
  if (!token) return null;
  const i = token.lastIndexOf('.');
  if (i < 0) return null;
  const payload = token.slice(0, i), sig = token.slice(i + 1);
  if (!safeEqual(sig, await hmac(await sessionSecret(env), payload))) return null;
  const [id, pv, exp] = payload.split('.');
  if (!exp || Date.now() > +exp) return null;
  const admin = await env.DB.prepare('SELECT id, username, pw_version FROM admins WHERE id = ?').bind(+id).first();
  if (!admin || admin.pw_version !== +pv) return null;   // كلمة السر اتغيّرت → الجلسة باطلة
  return admin;
}
const getCookie = (req, name) => {
  const c = req.headers.get('Cookie') || '';
  const m = c.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
};
const setCookie = (token, maxAge) =>
  `${COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${maxAge}`;

async function requireAdmin(req, env) {
  const admin = await readToken(env, getCookie(req, COOKIE));
  if (!admin) throw new Response(JSON.stringify({ error: 'غير مصرّح' }), { status: 401, headers: JSON_H });
  // حماية CSRF: الطلبات المغيِّرة لازم تيجي من نفس الموقع
  if (req.method !== 'GET') {
    const origin = req.headers.get('Origin');
    if (origin && new URL(origin).host !== new URL(req.url).host)
      throw new Response(JSON.stringify({ error: 'مصدر غير مسموح' }), { status: 403, headers: JSON_H });
  }
  return admin;
}

/* ---------------- بناء بيانات الموقع ---------------- */
async function buildSite(env) {
  const [cats, prods, imgs, sets] = await Promise.all([
    env.DB.prepare('SELECT * FROM categories ORDER BY sort, id').all(),
    env.DB.prepare('SELECT * FROM products ORDER BY sort, id').all(),
    env.DB.prepare('SELECT product_id, url FROM product_images ORDER BY product_id, sort, id').all(),
    env.DB.prepare("SELECT key, value FROM settings WHERE key NOT LIKE '\\_%' ESCAPE '\\'").all()
  ]);

  const byProduct = {};
  for (const r of imgs.results) (byProduct[r.product_id] ||= []).push(r.url);

  const products = prods.results.filter(p => p.visible).map(p => ({
    id: p.id,
    cat: p.cat,
    name: p.name,
    name_en: p.name_en || '',
    desc: p.descr,
    desc_en: p.descr_en || '',
    group: p.grp || null,
    group_en: p.grp_en || null,
    featured: !!p.featured,
    images: byProduct[p.id] || [],
    img: (byProduct[p.id] || [])[0] || null
  }));

  const categories = cats.results.filter(c => c.visible).map(c => {
    const mine = products.filter(p => p.cat === c.id);
    return {
      id: c.id,
      name: c.name, name_en: c.name_en || '',
      short: c.short, short_en: c.short_en || '',
      desc: c.descr, desc_en: c.descr_en || '',
      icon: c.icon,
      count: mine.length,
      img: mine.length ? mine[0].img : null
    };
  });

  const settings = {};
  for (const r of sets.results) {
    try { settings[r.key] = JSON.parse(r.value); } catch { settings[r.key] = r.value; }
  }

  return { settings, categories, products };
}

/* ---------------- عدّاد الزوار ---------------- */
const monthKey = (d = new Date()) =>
  `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}`;

async function readVisits(env) {
  const mk = monthKey();
  const r = await env.DB.prepare('SELECT key, count FROM visits WHERE key IN (?, ?)').bind('total', mk).all();
  const m = Object.fromEntries(r.results.map(x => [x.key, x.count]));
  return { total: m.total || 0, month: m[mk] || 0, monthKey: mk };
}
async function bumpVisits(env) {
  const mk = monthKey();
  await env.DB.batch([
    env.DB.prepare(`INSERT INTO visits (key, count) VALUES ('total', 1)
                    ON CONFLICT(key) DO UPDATE SET count = count + 1`),
    env.DB.prepare(`INSERT INTO visits (key, count) VALUES (?, 1)
                    ON CONFLICT(key) DO UPDATE SET count = count + 1`).bind(mk)
  ]);
  return readVisits(env);
}

/* ---------------- مساعدات ---------------- */
const slugify = s => String(s).trim().toLowerCase()
  .replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-+|-+$/g, '').slice(0, 60) ||
  'item-' + Math.random().toString(36).slice(2, 8);

async function uniqueId(env, table, base) {
  let id = base, n = 1;
  while (await env.DB.prepare(`SELECT 1 FROM ${table} WHERE id = ?`).bind(id).first()) id = `${base}-${++n}`;
  return id;
}

/* صور المنتج: استبدال كامل للقائمة */
async function replaceImages(env, productId, urls) {
  const stmts = [env.DB.prepare('DELETE FROM product_images WHERE product_id = ?').bind(productId)];
  urls.forEach((u, i) => {
    if (typeof u === 'string' && u.trim())
      stmts.push(env.DB.prepare('INSERT INTO product_images (product_id, url, sort) VALUES (?, ?, ?)')
        .bind(productId, u.trim(), i));
  });
  await env.DB.batch(stmts);
}

/* ============================================================
   المُوجِّه
   ============================================================ */
export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const p = url.pathname;

    try {
      if (p.startsWith('/api/')) return await api(req, env, url, ctx);
    } catch (e) {
      if (e instanceof Response) return e;
      return json({ error: 'خطأ في الخادم', detail: String(e && e.message || e) }, 500);
    }

    return env.ASSETS.fetch(req);
  }
};

async function api(req, env, url, ctx) {
  const p = url.pathname.replace(/\/+$/, '');
  const m = req.method;
  const body = async () => {
    try { return await req.json(); } catch { return {}; }
  };

  /* ---------- عام ---------- */
  if (p === '/api/site' && m === 'GET') {
    const data = await buildSite(env);
    return json(data, 200, { 'Cache-Control': 'public, max-age=30' });
  }

  if (p === '/api/visits' && m === 'GET') return json(await readVisits(env));
  if (p === '/api/visits' && m === 'POST') return json(await bumpVisits(env));

  /* صور مرفوعة من لوحة التحكم */
  if (p.startsWith('/api/img/') && m === 'GET') {
    const id = p.slice('/api/img/'.length);
    const r = await env.DB.prepare('SELECT mime, data FROM uploads WHERE id = ?').bind(id).first();
    if (!r) return new Response('غير موجود', { status: 404 });
    // D1 بترجّع الـ BLOB كمصفوفة أرقام — لازم نحوّلها لبايتات قبل الإرسال
    let bytes = r.data;
    if (Array.isArray(bytes)) bytes = new Uint8Array(bytes);
    else if (bytes instanceof ArrayBuffer) bytes = new Uint8Array(bytes);
    else if (typeof bytes === 'string') bytes = Uint8Array.from(atob(bytes), c => c.charCodeAt(0));
    return new Response(bytes, {
      headers: {
        'Content-Type': r.mime,
        'Content-Length': String(bytes.byteLength),
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  }

  /* ---------- الدخول ---------- */
  if (p === '/api/auth/login' && m === 'POST') {
    const { username, password } = await body();
    if (!username || !password) return bad('اكتب اسم المستخدم وكلمة السر');
    const admin = await env.DB.prepare('SELECT * FROM admins WHERE username = ?')
      .bind(String(username).trim()).first();
    // نحسب الهاش دايماً حتى لو المستخدم مش موجود، عشان ميبانش الفرق في الوقت
    const salt = admin ? admin.salt : 'dummy-salt-value';
    const calc = await pbkdf2(String(password), salt);
    if (!admin || !safeEqual(calc, admin.hash)) return bad('اسم المستخدم أو كلمة السر غير صحيحة', 401);
    const token = await makeToken(env, admin);
    return json({ ok: true, username: admin.username }, 200,
      { 'Set-Cookie': setCookie(token, SESSION_DAYS * 86400) });
  }

  if (p === '/api/auth/logout' && m === 'POST')
    return json({ ok: true }, 200, { 'Set-Cookie': setCookie('', 0) });

  if (p === '/api/auth/me' && m === 'GET') {
    const admin = await readToken(env, getCookie(req, COOKIE));
    return admin ? json({ username: admin.username }) : json({ error: 'غير مصرّح' }, 401);
  }

  if (p === '/api/auth/password' && m === 'POST') {
    const admin = await requireAdmin(req, env);
    const { current, next } = await body();
    if (!current || !next) return bad('اكتب كلمة السر الحالية والجديدة');
    if (String(next).length < 8) return bad('كلمة السر الجديدة لازم تكون 8 حروف على الأقل');
    const row = await env.DB.prepare('SELECT * FROM admins WHERE id = ?').bind(admin.id).first();
    if (!safeEqual(await pbkdf2(String(current), row.salt), row.hash))
      return bad('كلمة السر الحالية غير صحيحة', 403);
    const salt = hex(crypto.getRandomValues(new Uint8Array(16)));
    const hash = await pbkdf2(String(next), salt);
    await env.DB.prepare(
      'UPDATE admins SET salt = ?, hash = ?, pw_version = pw_version + 1 WHERE id = ?'
    ).bind(salt, hash, admin.id).run();
    // الجلسة الحالية بطلت → نسجّل دخول جديد بنفس الطلب
    const fresh = await env.DB.prepare('SELECT id, username, pw_version FROM admins WHERE id = ?')
      .bind(admin.id).first();
    return json({ ok: true }, 200,
      { 'Set-Cookie': setCookie(await makeToken(env, fresh), SESSION_DAYS * 86400) });
  }

  if (p === '/api/auth/username' && m === 'POST') {
    const admin = await requireAdmin(req, env);
    const { username, password } = await body();
    const name = String(username || '').trim();
    if (name.length < 3) return bad('اسم المستخدم لازم يكون 3 حروف على الأقل');
    const row = await env.DB.prepare('SELECT * FROM admins WHERE id = ?').bind(admin.id).first();
    if (!safeEqual(await pbkdf2(String(password || ''), row.salt), row.hash))
      return bad('كلمة السر غير صحيحة', 403);
    const taken = await env.DB.prepare('SELECT 1 FROM admins WHERE username = ? AND id <> ?')
      .bind(name, admin.id).first();
    if (taken) return bad('اسم المستخدم محجوز');
    await env.DB.prepare('UPDATE admins SET username = ? WHERE id = ?').bind(name, admin.id).run();
    return json({ ok: true, username: name });
  }

  /* ---------- كل اللي تحت محمي ---------- */
  if (!p.startsWith('/api/admin/')) return bad('مسار غير معروف', 404);
  await requireAdmin(req, env);

  /* لقطة كاملة للوحة التحكم (بتشمل المخفي كمان) */
  if (p === '/api/admin/all' && m === 'GET') {
    const [cats, prods, imgs, sets, vis] = await Promise.all([
      env.DB.prepare('SELECT * FROM categories ORDER BY sort, id').all(),
      env.DB.prepare('SELECT * FROM products ORDER BY sort, id').all(),
      env.DB.prepare('SELECT * FROM product_images ORDER BY product_id, sort, id').all(),
      env.DB.prepare("SELECT key, value FROM settings WHERE key NOT LIKE '\\_%' ESCAPE '\\'").all(),
      readVisits(env)
    ]);
    const byProduct = {};
    for (const r of imgs.results) (byProduct[r.product_id] ||= []).push(r.url);
    const settings = {};
    for (const r of sets.results) {
      try { settings[r.key] = JSON.parse(r.value); } catch { settings[r.key] = r.value; }
    }
    return json({
      categories: cats.results,
      products: prods.results.map(x => ({ ...x, images: byProduct[x.id] || [] })),
      settings,
      visits: vis
    });
  }

  /* ---------- الأقسام ---------- */
  if (p === '/api/admin/categories' && m === 'POST') {
    const b = await body();
    if (!b.name) return bad('اكتب اسم القسم');
    const id = await uniqueId(env, 'categories', b.id ? slugify(b.id) : slugify(b.name));
    const max = await env.DB.prepare('SELECT COALESCE(MAX(sort), 0) AS s FROM categories').first();
    await env.DB.prepare(
      'INSERT INTO categories (id, name, short, descr, icon, sort, visible, name_en, short_en, descr_en) ' +
      'VALUES (?,?,?,?,?,?,?,?,?,?)'
    ).bind(id, b.name, b.short || b.name, b.descr || '', b.icon || 'box',
           max.s + 1, b.visible === false ? 0 : 1,
           b.name_en || '', b.short_en || '', b.descr_en || '').run();
    return json({ ok: true, id });
  }

  if (p.startsWith('/api/admin/categories/')) {
    const id = decodeURIComponent(p.slice('/api/admin/categories/'.length));
    if (m === 'PUT') {
      const b = await body();
      await env.DB.prepare(
        `UPDATE categories SET name = COALESCE(?, name), short = COALESCE(?, short),
         descr = COALESCE(?, descr), icon = COALESCE(?, icon),
         sort = COALESCE(?, sort), visible = COALESCE(?, visible),
         name_en = COALESCE(?, name_en), short_en = COALESCE(?, short_en),
         descr_en = COALESCE(?, descr_en) WHERE id = ?`
      ).bind(b.name ?? null, b.short ?? null, b.descr ?? null, b.icon ?? null,
             b.sort ?? null, b.visible === undefined ? null : (b.visible ? 1 : 0),
             b.name_en ?? null, b.short_en ?? null, b.descr_en ?? null, id).run();
      return json({ ok: true });
    }
    if (m === 'DELETE') {
      const n = await env.DB.prepare('SELECT COUNT(*) AS c FROM products WHERE cat = ?').bind(id).first();
      if (n.c > 0 && new URL(req.url).searchParams.get('force') !== '1')
        return bad(`القسم فيه ${n.c} منتج — احذف المنتجات الأول أو أكّد الحذف`, 409);
      await env.DB.prepare('DELETE FROM categories WHERE id = ?').bind(id).run();
      return json({ ok: true });
    }
  }

  /* ---------- المنتجات ---------- */
  if (p === '/api/admin/products' && m === 'POST') {
    const b = await body();
    if (!b.name) return bad('اكتب اسم المنتج');
    if (!b.cat) return bad('اختار القسم');
    const id = await uniqueId(env, 'products', slugify(b.cat) + '-' + slugify(b.name).slice(0, 24));
    const max = await env.DB.prepare('SELECT COALESCE(MAX(sort), 0) AS s FROM products WHERE cat = ?')
      .bind(b.cat).first();
    await env.DB.prepare(
      'INSERT INTO products (id, cat, name, descr, grp, featured, sort, visible, name_en, descr_en, grp_en) ' +
      'VALUES (?,?,?,?,?,?,?,?,?,?,?)'
    ).bind(id, b.cat, b.name, b.descr || '', b.grp || null,
           b.featured ? 1 : 0, max.s + 1, b.visible === false ? 0 : 1,
           b.name_en || '', b.descr_en || '', b.grp_en || null).run();
    await replaceImages(env, id, b.images || []);
    return json({ ok: true, id });
  }

  if (p.startsWith('/api/admin/products/')) {
    const id = decodeURIComponent(p.slice('/api/admin/products/'.length));
    if (m === 'PUT') {
      const b = await body();
      await env.DB.prepare(
        `UPDATE products SET cat = COALESCE(?, cat), name = COALESCE(?, name),
         descr = COALESCE(?, descr), grp = ?, featured = COALESCE(?, featured),
         sort = COALESCE(?, sort), visible = COALESCE(?, visible),
         name_en = COALESCE(?, name_en), descr_en = COALESCE(?, descr_en),
         grp_en = ? WHERE id = ?`
      ).bind(b.cat ?? null, b.name ?? null, b.descr ?? null, b.grp || null,
             b.featured === undefined ? null : (b.featured ? 1 : 0),
             b.sort ?? null, b.visible === undefined ? null : (b.visible ? 1 : 0),
             b.name_en ?? null, b.descr_en ?? null, b.grp_en || null, id).run();
      if (Array.isArray(b.images)) await replaceImages(env, id, b.images);
      return json({ ok: true });
    }
    if (m === 'DELETE') {
      await env.DB.batch([
        env.DB.prepare('DELETE FROM product_images WHERE product_id = ?').bind(id),
        env.DB.prepare('DELETE FROM products WHERE id = ?').bind(id)
      ]);
      return json({ ok: true });
    }
  }

  /* دمج منتجات في منتج واحد: صورهم كلها تروح للأول */
  if (p === '/api/admin/products/merge' && m === 'POST') {
    const { target, sources } = await body();
    if (!target || !Array.isArray(sources) || !sources.length) return bad('اختار المنتجات المراد دمجها');
    const cur = await env.DB.prepare('SELECT url FROM product_images WHERE product_id = ? ORDER BY sort, id')
      .bind(target).all();
    const urls = cur.results.map(r => r.url);
    for (const s of sources) {
      if (s === target) continue;
      const r = await env.DB.prepare('SELECT url FROM product_images WHERE product_id = ? ORDER BY sort, id')
        .bind(s).all();
      r.results.forEach(x => { if (!urls.includes(x.url)) urls.push(x.url); });
    }
    await replaceImages(env, target, urls);
    await env.DB.batch(sources.filter(s => s !== target).flatMap(s => [
      env.DB.prepare('DELETE FROM product_images WHERE product_id = ?').bind(s),
      env.DB.prepare('DELETE FROM products WHERE id = ?').bind(s)
    ]));
    return json({ ok: true, images: urls.length });
  }

  /* ---------- الترتيب ---------- */
  if (p === '/api/admin/reorder' && m === 'POST') {
    const { table, ids } = await body();
    if (!['categories', 'products'].includes(table)) return bad('جدول غير معروف');
    if (!Array.isArray(ids)) return bad('قائمة غير صالحة');
    await env.DB.batch(ids.map((id, i) =>
      env.DB.prepare(`UPDATE ${table} SET sort = ? WHERE id = ?`).bind(i, id)));
    return json({ ok: true });
  }

  /* ---------- الإعدادات ---------- */
  if (p === '/api/admin/settings' && m === 'PUT') {
    const b = await body();
    const entries = Object.entries(b).filter(([k]) => !k.startsWith('_'));
    if (!entries.length) return bad('مفيش بيانات');
    await env.DB.batch(entries.map(([k, v]) =>
      env.DB.prepare(
        `INSERT INTO settings (key, value, updated_at) VALUES (?, ?, unixepoch())
         ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = unixepoch()`
      ).bind(k, JSON.stringify(v))));
    return json({ ok: true, saved: entries.length });
  }

  /* ---------- رفع الصور ---------- */
  if (p === '/api/admin/upload' && m === 'POST') {
    const form = await req.formData();
    const file = form.get('file');
    if (!file || typeof file === 'string') return bad('مفيش ملف');
    if (!/^image\//.test(file.type)) return bad('الملف لازم يكون صورة');
    if (file.size > 3 * 1024 * 1024) return bad('أقصى حجم للصورة 3 ميجابايت');
    const buf = await file.arrayBuffer();
    const id = hex(crypto.getRandomValues(new Uint8Array(12)));
    await env.DB.prepare('INSERT INTO uploads (id, mime, size, data) VALUES (?,?,?,?)')
      .bind(id, file.type, buf.byteLength, [...new Uint8Array(buf)]).run();
    return json({ ok: true, url: `/api/img/${id}`, size: buf.byteLength });
  }

  if (p === '/api/admin/uploads' && m === 'GET') {
    const r = await env.DB.prepare(
      'SELECT id, mime, size, created_at FROM uploads ORDER BY created_at DESC LIMIT 300').all();
    return json({ uploads: r.results.map(u => ({ ...u, url: `/api/img/${u.id}` })) });
  }

  if (p.startsWith('/api/admin/uploads/') && m === 'DELETE') {
    const id = p.slice('/api/admin/uploads/'.length);
    const used = await env.DB.prepare('SELECT COUNT(*) AS c FROM product_images WHERE url = ?')
      .bind(`/api/img/${id}`).first();
    if (used.c > 0) return bad(`الصورة مستخدمة في ${used.c} منتج`, 409);
    await env.DB.prepare('DELETE FROM uploads WHERE id = ?').bind(id).run();
    return json({ ok: true });
  }

  return bad('مسار غير معروف', 404);
}
