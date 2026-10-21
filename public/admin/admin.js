/* ============================================================
   لوحة تحكم سوق مصرية فيبر جلاس
   ============================================================ */
'use strict';

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, m =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

/* حالة اللوحة */
const S = { categories: [], products: [], settings: {}, visits: {}, uploads: [], selected: new Set() };

/* ---------------- نداء الـ API ---------------- */
async function call(path, opts = {}) {
  const res = await fetch('/api' + path, {
    credentials: 'same-origin',
    headers: opts.body && !(opts.body instanceof FormData)
      ? { 'Content-Type': 'application/json' } : undefined,
    ...opts
  });
  let data = null;
  try { data = await res.json(); } catch { /* رد بدون JSON */ }
  if (res.status === 401) { showLogin(); throw new Error('انتهت الجلسة — سجّل دخولك تاني'); }
  if (!res.ok) throw new Error((data && data.error) || 'حصل خطأ غير متوقع');
  return data;
}
const post = (p, b) => call(p, { method: 'POST', body: JSON.stringify(b) });
const put = (p, b) => call(p, { method: 'PUT', body: JSON.stringify(b) });
const del = p => call(p, { method: 'DELETE' });

/* ---------------- تنبيه ---------------- */
let toastT;
function toast(msg, isErr) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.toggle('err', !!isErr);
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 3000);
}
function flagSaved() {
  const f = $('#savedFlag');
  f.hidden = false;
  setTimeout(() => f.hidden = true, 2200);
}
const guard = fn => async (...a) => { try { await fn(...a); } catch (e) { toast(e.message, true); } };

/* ---------------- الدخول ---------------- */
function showLogin() { $('#login').hidden = false; $('#app').hidden = true; }
function showApp() { $('#login').hidden = true; $('#app').hidden = false; }

$('#loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = $('#lgBtn'), err = $('#lgErr');
  btn.disabled = true; err.hidden = true;
  try {
    await post('/auth/login', { username: $('#lgUser').value, password: $('#lgPass').value });
    $('#lgPass').value = '';
    await start();
  } catch (ex) {
    err.textContent = ex.message; err.hidden = false;
  } finally { btn.disabled = false; }
});

$('#logoutBtn').addEventListener('click', guard(async () => {
  await post('/auth/logout', {});
  location.reload();
}));

/* ---------------- التبويبات ---------------- */
const TITLES = {
  dash: 'لوحة المعلومات', cats: 'الأقسام', prods: 'المنتجات',
  media: 'الصور', settings: 'بيانات الموقع', content: 'محتوى الصفحات', account: 'حسابي'
};
$$('.side__nav button').forEach(b => b.addEventListener('click', () => {
  $$('.side__nav button').forEach(x => x.classList.toggle('is-active', x === b));
  $$('.tab').forEach(t => t.hidden = t.dataset.tab !== b.dataset.tab);
  $('#pageTitle').textContent = TITLES[b.dataset.tab] || '';
  $('.side').classList.remove('is-open');
  if (b.dataset.tab === 'media') loadMedia();
}));
$('#burger').addEventListener('click', () => $('.side').classList.toggle('is-open'));

/* ---------------- تحميل البيانات ---------------- */
async function start() {
  const me = await call('/auth/me');
  $('#whoami').textContent = me.username;
  showApp();
  await refresh();
}
async function refresh() {
  const d = await call('/admin/all');
  S.categories = d.categories;
  S.products = d.products;
  S.settings = d.settings;
  S.visits = d.visits;
  renderDash();
  renderCats();
  renderCatFilter();
  renderProds();
  renderSettings();
  renderContent();
}

/* ---------------- لوحة المعلومات ---------------- */
function renderDash() {
  const visible = S.products.filter(p => p.visible).length;
  const noImg = S.products.filter(p => !p.images.length).length;
  $('#dashCards').innerHTML = [
    [S.categories.length, 'قسم'],
    [S.products.length, 'منتج'],
    [visible, 'منتج ظاهر في الموقع'],
    [noImg, 'منتج بدون صور'],
    [(S.visits.total || 0).toLocaleString('ar-EG'), 'إجمالي زوار الموقع'],
    [(S.visits.month || 0).toLocaleString('ar-EG'), 'زوار هذا الشهر']
  ].map(([n, l]) => `<div class="card"><b>${n}</b><span>${l}</span></div>`).join('');

  $('#dashCats').innerHTML = [...S.categories]
    .map(c => ({ ...c, n: S.products.filter(p => p.cat === c.id).length }))
    .sort((a, b) => b.n - a.n)
    .map(c => `<div class="row"><div class="row__main"><b>${esc(c.name)}</b></div>
               <span class="tag">${c.n} منتج</span></div>`).join('');
}

/* ---------------- الأقسام ---------------- */
function renderCats() {
  $('#catList').innerHTML = S.categories.map(c => {
    const n = S.products.filter(p => p.cat === c.id).length;
    const first = S.products.find(p => p.cat === c.id && p.images.length);
    return `
    <div class="row${c.visible ? '' : ' is-hidden'}" draggable="true" data-id="${esc(c.id)}">
      <span class="row__grip">⠿</span>
      <span class="row__thumb${first ? '' : ' is-empty'}">${first ? `<img src="${esc(first.images[0])}" alt="">` : ''}</span>
      <span class="row__main">
        <b>${esc(c.name)}</b>
        <span>${esc(c.id)} — ${esc(c.descr || '')}</span>
      </span>
      <span class="row__tags">
        <span class="tag">${n} منتج</span>
        ${c.visible ? '' : '<span class="tag tag--off">مخفي</span>'}
      </span>
      <span class="row__acts">
        <button class="btn btn-ghost btn-xs" data-edit="${esc(c.id)}">تعديل</button>
      </span>
    </div>`;
  }).join('');

  $$('#catList [data-edit]').forEach(b =>
    b.addEventListener('click', () => editCat(b.dataset.edit)));
  dragSort($('#catList'), ids => post('/admin/reorder', { table: 'categories', ids })
    .then(() => { reorderLocal(S.categories, ids); flagSaved(); }));
}

const ICONS = ['tower', 'bus', 'planter', 'lamp', 'lining', 'pool', 'roof', 'slide', 'skylight',
  'truck', 'shield', 'grating', 'caravan', 'medical', 'boat', 'fan', 'tank', 'manhole', 'box'];

function catForm(c = {}) {
  return `
    <label>اسم القسم <input id="f_name" value="${esc(c.name || '')}"></label>
    <label>اسم مختصر (يظهر في القوائم) <input id="f_short" value="${esc(c.short || '')}"></label>
    <label>الوصف <textarea id="f_descr" rows="3">${esc(c.descr || '')}</textarea></label>
    <label>الأيقونة
      <select id="f_icon">${ICONS.map(i =>
        `<option value="${i}"${c.icon === i ? ' selected' : ''}>${i}</option>`).join('')}</select>
    </label>
    <label><input type="checkbox" id="f_visible" ${c.visible === 0 ? '' : 'checked'} style="width:auto;margin-inline-end:7px">
      ظاهر في الموقع</label>`;
}
function editCat(id) {
  const c = S.categories.find(x => x.id === id) || {};
  openModal(id ? 'تعديل قسم' : 'قسم جديد', catForm(c), guard(async () => {
    const payload = {
      name: $('#f_name').value.trim(),
      short: $('#f_short').value.trim() || $('#f_name').value.trim(),
      descr: $('#f_descr').value.trim(),
      icon: $('#f_icon').value,
      visible: $('#f_visible').checked
    };
    if (!payload.name) throw new Error('اكتب اسم القسم');
    if (id) await put('/admin/categories/' + encodeURIComponent(id), payload);
    else await post('/admin/categories', payload);
    closeModal(); await refresh(); toast('تم الحفظ'); flagSaved();
  }), id ? guard(async () => {
    const n = S.products.filter(p => p.cat === id).length;
    if (!confirm(n ? `القسم فيه ${n} منتج وهيتحذفوا معاه. متأكد؟` : 'حذف القسم؟')) return;
    await del('/admin/categories/' + encodeURIComponent(id) + '?force=1');
    closeModal(); await refresh(); toast('تم الحذف');
  }) : null);
}
$('#addCat').addEventListener('click', () => editCat(null));

/* ---------------- المنتجات ---------------- */
function renderCatFilter() {
  $('#filterCat').innerHTML = '<option value="">كل الأقسام</option>' +
    S.categories.map(c => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join('');
}
function filteredProds() {
  const cat = $('#filterCat').value;
  const q = $('#searchProd').value.trim().toLowerCase();
  return S.products.filter(p =>
    (!cat || p.cat === cat) &&
    (!q || (p.name + ' ' + p.id + ' ' + (p.grp || '')).toLowerCase().includes(q)));
}
function renderProds() {
  const list = filteredProds();
  $('#prodCount').textContent = `${list.length} من ${S.products.length}`;
  $('#prodList').innerHTML = list.map(p => {
    const c = S.categories.find(x => x.id === p.cat);
    return `
    <div class="row${p.visible ? '' : ' is-hidden'}" draggable="true" data-id="${esc(p.id)}">
      <input type="checkbox" data-pick="${esc(p.id)}" ${S.selected.has(p.id) ? 'checked' : ''}>
      <span class="row__grip">⠿</span>
      <span class="row__thumb${p.images.length ? '' : ' is-empty'}">${
        p.images.length ? `<img src="${esc(p.images[0])}" alt="">` : ''}</span>
      <span class="row__main">
        <b>${esc(p.name)}</b>
        <span>${esc(c ? c.name : p.cat)}${p.grp ? ' — ' + esc(p.grp) : ''}</span>
      </span>
      <span class="row__tags">
        ${p.images.length > 1 ? `<span class="tag">${p.images.length} صور</span>` : ''}
        ${p.featured ? '<span class="tag tag--star">مختار</span>' : ''}
        ${p.visible ? '' : '<span class="tag tag--off">مخفي</span>'}
      </span>
      <span class="row__acts">
        <button class="btn btn-ghost btn-xs" data-edit="${esc(p.id)}">تعديل</button>
      </span>
    </div>`;
  }).join('') || '<p class="hint">مفيش منتجات مطابقة.</p>';

  $$('#prodList [data-edit]').forEach(b =>
    b.addEventListener('click', () => editProd(b.dataset.edit)));
  $$('#prodList [data-pick]').forEach(b => b.addEventListener('change', () => {
    b.checked ? S.selected.add(b.dataset.pick) : S.selected.delete(b.dataset.pick);
    $('#mergeBtn').hidden = S.selected.size < 2;
  }));
  $('#mergeBtn').hidden = S.selected.size < 2;

  dragSort($('#prodList'), ids => {
    // الترتيب داخل القسم الواحد فقط
    post('/admin/reorder', { table: 'products', ids })
      .then(() => { reorderLocal(S.products, ids); flagSaved(); });
  });
}
$('#filterCat').addEventListener('change', renderProds);
$('#searchProd').addEventListener('input', renderProds);

/* نافذة المنتج */
let modalImages = [];
function prodForm(p = {}) {
  return `
    <label>اسم المنتج <input id="f_name" value="${esc(p.name || '')}"></label>
    <label>القسم
      <select id="f_cat">${S.categories.map(c =>
        `<option value="${esc(c.id)}"${p.cat === c.id ? ' selected' : ''}>${esc(c.name)}</option>`).join('')}</select>
    </label>
    <label>النوع الفرعي (اختياري) <input id="f_grp" value="${esc(p.grp || '')}" placeholder="مثال: برج تبريد دائري"></label>
    <label>الوصف <textarea id="f_descr" rows="3">${esc(p.descr || '')}</textarea></label>

    <label style="margin-bottom:6px">صور المنتج (الأولى هي الرئيسية — الباقي يظهر ككاروسيل)</label>
    <div class="imgs" id="f_imgs"></div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
      <label class="btn btn-ghost btn-xs" style="margin:0">
        + رفع صورة <input type="file" accept="image/*" multiple hidden id="f_up">
      </label>
      <button class="btn btn-ghost btn-xs" type="button" id="f_pick">اختيار من الصور الموجودة</button>
    </div>

    <label><input type="checkbox" id="f_featured" ${p.featured ? 'checked' : ''} style="width:auto;margin-inline-end:7px">
      يظهر في «منتجات مختارة» بالصفحة الرئيسية</label>
    <label><input type="checkbox" id="f_visible" ${p.visible === 0 ? '' : 'checked'} style="width:auto;margin-inline-end:7px">
      ظاهر في الموقع</label>`;
}
function renderModalImages() {
  $('#f_imgs').innerHTML = modalImages.map((u, i) => `
    <div class="imgs__item${i === 0 ? ' is-main' : ''}">
      ${i === 0 ? '<b>رئيسية</b>' : ''}
      <img src="${esc(u)}" alt="">
      <button type="button" class="x" data-rm="${i}" title="حذف">✕</button>
      <div class="mv">
        <button type="button" data-mv="${i},-1" ${i === 0 ? 'disabled' : ''}>→</button>
        <button type="button" data-mv="${i},1" ${i === modalImages.length - 1 ? 'disabled' : ''}>←</button>
      </div>
    </div>`).join('') || '<p class="hint">مفيش صور — ارفع صورة أو اختار من الموجود.</p>';

  $$('#f_imgs [data-rm]').forEach(b => b.addEventListener('click', () => {
    modalImages.splice(+b.dataset.rm, 1); renderModalImages();
  }));
  $$('#f_imgs [data-mv]').forEach(b => b.addEventListener('click', () => {
    const [i, d] = b.dataset.mv.split(',').map(Number);
    const j = i + d;
    if (j < 0 || j >= modalImages.length) return;
    [modalImages[i], modalImages[j]] = [modalImages[j], modalImages[i]];
    renderModalImages();
  }));
}
function editProd(id) {
  const p = S.products.find(x => x.id === id) || {};
  if (!S.categories.length) return toast('ضيف قسم الأول', true);
  modalImages = [...(p.images || [])];

  openModal(id ? 'تعديل منتج' : 'منتج جديد', prodForm(p), guard(async () => {
    const payload = {
      name: $('#f_name').value.trim(),
      cat: $('#f_cat').value,
      grp: $('#f_grp').value.trim(),
      descr: $('#f_descr').value.trim(),
      featured: $('#f_featured').checked,
      visible: $('#f_visible').checked,
      images: modalImages
    };
    if (!payload.name) throw new Error('اكتب اسم المنتج');
    if (id) await put('/admin/products/' + encodeURIComponent(id), payload);
    else await post('/admin/products', payload);
    closeModal(); await refresh(); toast('تم الحفظ'); flagSaved();
  }), id ? guard(async () => {
    if (!confirm('حذف المنتج نهائياً؟')) return;
    await del('/admin/products/' + encodeURIComponent(id));
    closeModal(); await refresh(); toast('تم الحذف');
  }) : null);

  renderModalImages();
  $('#f_up').addEventListener('change', guard(async e => {
    for (const file of e.target.files) {
      const fd = new FormData(); fd.append('file', file);
      const r = await call('/admin/upload', { method: 'POST', body: fd });
      modalImages.push(r.url);
    }
    e.target.value = ''; renderModalImages(); toast('تم الرفع');
  }));
  $('#f_pick').addEventListener('click', guard(async () => {
    await loadMedia();
    const urls = [...new Set([
      ...S.uploads.map(u => u.url),
      ...S.products.flatMap(x => x.images)
    ])];
    openPicker(urls, u => { modalImages.push(u); renderModalImages(); });
  }));
}
$('#addProd').addEventListener('click', () => editProd(null));

/* دمج منتجات */
$('#mergeBtn').addEventListener('click', guard(async () => {
  const ids = [...S.selected];
  const names = ids.map(i => (S.products.find(p => p.id === i) || {}).name).filter(Boolean);
  const target = ids[0];
  if (!confirm(`هيتم دمج ${ids.length} منتج في:\n«${names[0]}»\n\n` +
               `كل الصور هتتجمّع في منتج واحد والباقي هيتحذف. متأكد؟`)) return;
  const r = await post('/admin/products/merge', { target, sources: ids.slice(1) });
  S.selected.clear();
  await refresh();
  toast(`تم الدمج — ${r.images} صورة في منتج واحد`);
}));

/* ---------------- الصور ---------------- */
async function loadMedia() {
  const d = await call('/admin/uploads');
  S.uploads = d.uploads;
  $('#mediaGrid').innerHTML = S.uploads.map(u => `
    <figure>
      <img src="${esc(u.url)}" alt="" loading="lazy">
      <figcaption>
        <span>${Math.round(u.size / 1024)}KB</span>
        <button data-del="${esc(u.id)}">حذف</button>
      </figcaption>
    </figure>`).join('') || '<p class="hint">مفيش صور مرفوعة. صور الموقع الأصلية جاية مع الموقع نفسه.</p>';
  $$('#mediaGrid [data-del]').forEach(b => b.addEventListener('click', guard(async () => {
    if (!confirm('حذف الصورة نهائياً؟')) return;
    await del('/admin/uploads/' + b.dataset.del);
    await loadMedia(); toast('تم الحذف');
  })));
}
$('#uploadInput').addEventListener('change', guard(async e => {
  for (const file of e.target.files) {
    const fd = new FormData(); fd.append('file', file);
    await call('/admin/upload', { method: 'POST', body: fd });
  }
  e.target.value = '';
  await loadMedia(); toast('تم الرفع');
}));

function openPicker(urls, onPick) {
  const html = `<div class="media">${urls.map(u =>
    `<figure style="cursor:pointer" data-u="${esc(u)}"><img src="${esc(u)}" alt="" loading="lazy"></figure>`
  ).join('')}</div>`;
  const prev = { title: $('#modalTitle').textContent, body: $('#modalBody').innerHTML };
  const pick = document.createElement('div');
  pick.className = 'modal'; pick.style.zIndex = 70;
  pick.innerHTML = `<div class="modal__mask"></div><div class="modal__box">
    <header><h3>اختار صورة</h3><button>✕</button></header>
    <div class="modal__body">${html}</div></div>`;
  document.body.appendChild(pick);
  const close = () => pick.remove();
  pick.querySelector('.modal__mask').addEventListener('click', close);
  pick.querySelector('header button').addEventListener('click', close);
  pick.querySelectorAll('[data-u]').forEach(f =>
    f.addEventListener('click', () => { onPick(f.dataset.u); close(); }));
  void prev;
}

/* ---------------- بيانات الموقع ---------------- */
const FIELDS = [
  ['name', 'اسم المصنع'], ['short', 'الاسم المختصر'], ['tagline', 'الشعار النصي'],
  ['whatsapp', 'رقم الواتساب (دولي بدون +)'], ['phone1', 'تليفون 1'], ['phone2', 'تليفون 2'],
  ['landline', 'أرضي'], ['email', 'بريد إلكتروني'], ['email2', 'بريد المبيعات'],
  ['address', 'العنوان'], ['hours', 'مواعيد العمل'], ['hoursNote', 'ملاحظة المواعيد'],
  ['mapEmbed', 'رابط الخريطة (embed)'], ['logo', 'مسار الشعار']
];
function renderSettings() {
  $('#setBasic').innerHTML = FIELDS.map(([k, l]) =>
    `<label>${l}<input data-set="${k}" value="${esc(S.settings[k] ?? '')}"></label>`).join('');
  renderSocial();
}
function renderSocial() {
  const list = Array.isArray(S.settings.social) ? S.settings.social : [];
  $('#setSocial').innerHTML = list.map((s, i) => `
    <div class="row" style="margin-bottom:6px">
      <input data-soc="${i}.key" value="${esc(s.key || '')}" placeholder="facebook" style="max-width:130px">
      <input data-soc="${i}.name" value="${esc(s.name || '')}" placeholder="فيسبوك" style="max-width:130px">
      <input data-soc="${i}.url" value="${esc(s.url === '#' ? '' : (s.url || ''))}" placeholder="https://…">
      <button class="btn btn-danger btn-xs" data-socdel="${i}">حذف</button>
    </div>`).join('');
  $$('#setSocial [data-socdel]').forEach(b => b.addEventListener('click', () => {
    S.settings.social.splice(+b.dataset.socdel, 1); renderSocial();
  }));
}
$('#addSocial').addEventListener('click', () => {
  S.settings.social = Array.isArray(S.settings.social) ? S.settings.social : [];
  S.settings.social.push({ key: '', name: '', url: '' });
  renderSocial();
});
$('#saveSettings').addEventListener('click', guard(async () => {
  const payload = {};
  $$('[data-set]').forEach(i => payload[i.dataset.set] = i.value.trim());
  const social = [];
  $$('#setSocial .row').forEach((row, i) => {
    const g = k => (row.querySelector(`[data-soc="${i}.${k}"]`) || {}).value || '';
    if (g('key').trim()) social.push({ key: g('key').trim(), name: g('name').trim() || g('key').trim(), url: g('url').trim() });
  });
  payload.social = social;
  await put('/admin/settings', payload);
  await refresh(); toast('تم حفظ بيانات الموقع'); flagSaved();
}));

/* ---------------- محتوى الصفحات ---------------- */
function listEditor(el, items, fields, mk) {
  el.innerHTML = items.map((it, i) => `
    <div class="panel" style="padding:12px;margin-bottom:8px">
      ${fields.map(([k, l, type]) => type === 'area'
        ? `<label>${l}<textarea data-li="${i}.${k}" rows="2">${esc(it[k] || '')}</textarea></label>`
        : `<label>${l}<input data-li="${i}.${k}" value="${esc(it[k] || '')}"></label>`).join('')}
      <button class="btn btn-danger btn-xs" data-lidel="${i}">حذف</button>
    </div>`).join('');
  $$('[data-lidel]', el).forEach(b => b.addEventListener('click', () => {
    items.splice(+b.dataset.lidel, 1); listEditor(el, items, fields, mk);
  }));
}
function collect(el, fields) {
  const out = [];
  $$('.panel', el).forEach((p, i) => {
    const o = {};
    fields.forEach(([k]) => {
      const f = p.querySelector(`[data-li="${i}.${k}"]`);
      o[k] = f ? f.value.trim() : '';
    });
    if (Object.values(o).some(v => v)) out.push(o);
  });
  return out;
}
const WHY_F = [['icon', 'الأيقونة'], ['title', 'العنوان'], ['text', 'النص', 'area']];
const STEP_F = [['t', 'العنوان'], ['d', 'الوصف', 'area']];
const FAQ_F = [['q', 'السؤال'], ['a', 'الإجابة', 'area']];

function renderContent() {
  $('#aboutText').value = S.settings.about || '';
  S.settings.why = Array.isArray(S.settings.why) ? S.settings.why : [];
  S.settings.steps = Array.isArray(S.settings.steps) ? S.settings.steps : [];
  S.settings.faq = Array.isArray(S.settings.faq) ? S.settings.faq : [];
  listEditor($('#whyList'), S.settings.why, WHY_F);
  listEditor($('#stepsList'), S.settings.steps, STEP_F);
  listEditor($('#faqList'), S.settings.faq, FAQ_F);
}
$('#addWhy').addEventListener('click', () => { S.settings.why.push({ icon: 'shield', title: '', text: '' }); renderContent(); });
$('#addStep').addEventListener('click', () => { S.settings.steps.push({ t: '', d: '' }); renderContent(); });
$('#addFaq').addEventListener('click', () => { S.settings.faq.push({ q: '', a: '' }); renderContent(); });
$('#saveContent').addEventListener('click', guard(async () => {
  await put('/admin/settings', {
    about: $('#aboutText').value.trim(),
    why: collect($('#whyList'), WHY_F),
    steps: collect($('#stepsList'), STEP_F),
    faq: collect($('#faqList'), FAQ_F)
  });
  await refresh(); toast('تم حفظ المحتوى'); flagSaved();
}));

/* ---------------- الحساب ---------------- */
$('#savePw').addEventListener('click', guard(async () => {
  const err = $('#pwErr'); err.hidden = true;
  const cur = $('#pwCur').value, n1 = $('#pwNew').value, n2 = $('#pwNew2').value;
  if (n1 !== n2) { err.textContent = 'كلمتا السر الجديدتان غير متطابقتين'; err.hidden = false; return; }
  if (n1.length < 8) { err.textContent = 'كلمة السر لازم تكون 8 حروف على الأقل'; err.hidden = false; return; }
  await post('/auth/password', { current: cur, next: n1 });
  $('#pwCur').value = $('#pwNew').value = $('#pwNew2').value = '';
  toast('تم تغيير كلمة السر'); flagSaved();
}));
$('#saveUn').addEventListener('click', guard(async () => {
  const err = $('#unErr'); err.hidden = true;
  const r = await post('/auth/username', { username: $('#unNew').value, password: $('#unPw').value });
  $('#whoami').textContent = r.username;
  $('#unNew').value = $('#unPw').value = '';
  toast('تم تغيير اسم المستخدم'); flagSaved();
}));

/* ---------------- نافذة عامة ---------------- */
let modalSave, modalDel;
function openModal(title, body, onSave, onDelete) {
  $('#modalTitle').textContent = title;
  $('#modalBody').innerHTML = body;
  $('#modal').hidden = false;
  modalSave = onSave; modalDel = onDelete;
  $('#modalDelete').hidden = !onDelete;
}
function closeModal() { $('#modal').hidden = true; $('#modalBody').innerHTML = ''; }
$$('#modal [data-close]').forEach(b => b.addEventListener('click', closeModal));
$('#modalSave').addEventListener('click', () => modalSave && modalSave());
$('#modalDelete').addEventListener('click', () => modalDel && modalDel());
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---------------- السحب لإعادة الترتيب ---------------- */
function dragSort(container, onDrop) {
  let dragged = null;
  $$('.row[draggable]', container).forEach(row => {
    row.addEventListener('dragstart', () => { dragged = row; row.style.opacity = '.4'; });
    row.addEventListener('dragend', () => {
      row.style.opacity = '';
      $$('.row', container).forEach(r => r.classList.remove('drag-over'));
      onDrop($$('.row[data-id]', container).map(r => r.dataset.id));
    });
    row.addEventListener('dragover', e => { e.preventDefault(); row.classList.add('drag-over'); });
    row.addEventListener('dragleave', () => row.classList.remove('drag-over'));
    row.addEventListener('drop', e => {
      e.preventDefault();
      row.classList.remove('drag-over');
      if (!dragged || dragged === row) return;
      const rows = $$('.row[data-id]', container);
      rows.indexOf(dragged) < rows.indexOf(row)
        ? row.after(dragged) : row.before(dragged);
    });
  });
}
function reorderLocal(arr, ids) {
  ids.forEach((id, i) => { const it = arr.find(x => x.id === id); if (it) it.sort = i; });
  arr.sort((a, b) => a.sort - b.sort);
}

/* ---------------- بدء ---------------- */
(async () => {
  try { await start(); } catch { showLogin(); }
})();
