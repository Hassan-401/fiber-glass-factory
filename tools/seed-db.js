/*
 * seed-db.js — يحوّل محتوى الموقع الحالي (config.js + data.js) إلى seed.sql
 *
 * التشغيل:  node tools/seed-db.js [--password "كلمة السر"]
 * الناتج:   seed.sql  (يُطبَّق على D1 بأمر wrangler d1 execute)
 *
 * ملاحظة: تشفير كلمة السر هنا PBKDF2-SHA256 بنفس إعدادات الـ Worker
 *         (100000 دورة، SHA-256، 256 بت) عشان الهاش يتطابق.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const q = s => "'" + String(s).replace(/'/g, "''") + "'";
const J = v => q(JSON.stringify(v));

/* ---------- قراءة المحتوى الحالي ---------- */
const read = f => fs.readFileSync(path.join(ROOT, 'public', 'assets', 'js', f), 'utf8');
const SITE = new Function(read('config.js') + '\nreturn SITE;')();
const { CATEGORIES, PRODUCTS } = new Function(read('data.js') + '\nreturn {CATEGORIES, PRODUCTS};')();

/* ---------- كلمة سر المدير ---------- */
const argIdx = process.argv.indexOf('--password');
const password = argIdx > -1 ? process.argv[argIdx + 1] : null;
if (!password) {
  console.error('لازم تحدد كلمة السر:  node tools/seed-db.js --password "..."');
  process.exit(1);
}
if (password.length < 8) {
  console.error('كلمة السر لازم تكون 8 حروف على الأقل');
  process.exit(1);
}
const salt = crypto.randomBytes(16).toString('hex');
const hash = crypto.pbkdf2Sync(password, salt, 100000, 32, 'sha256').toString('hex');
const username = 'admin';

/* ---------- الإعدادات ---------- */
/* بنستبعد الحقول اللي مش بتاعة إعدادات الموقع */
const SETTINGS = { ...SITE };
delete SETTINGS.counter;        // العدّاد بقى في قاعدة البيانات نفسها

const lines = [];
lines.push('-- بيانات أولية مولَّدة بواسطة tools/seed-db.js — لا تعدّلها يدوياً');
lines.push('DELETE FROM product_images;');
lines.push('DELETE FROM products;');
lines.push('DELETE FROM categories;');
lines.push('DELETE FROM settings;');
lines.push('DELETE FROM admins;');
lines.push('');

for (const [k, v] of Object.entries(SETTINGS))
  lines.push(`INSERT INTO settings (key, value) VALUES (${q(k)}, ${J(v)});`);
lines.push('');

CATEGORIES.forEach((c, i) => {
  lines.push(
    `INSERT INTO categories (id, name, short, descr, icon, sort, visible) VALUES (` +
    `${q(c.id)}, ${q(c.name)}, ${q(c.short)}, ${q(c.desc || '')}, ${q(c.icon || 'box')}, ${i}, 1);`);
});
lines.push('');

const perCat = {};
PRODUCTS.forEach(p => {
  const n = (perCat[p.cat] = (perCat[p.cat] || 0) + 1) - 1;
  lines.push(
    `INSERT INTO products (id, cat, name, descr, grp, featured, sort, visible) VALUES (` +
    `${q(p.id)}, ${q(p.cat)}, ${q(p.name)}, ${q(p.desc || '')}, ` +
    `${p.group ? q(p.group) : 'NULL'}, ${p.featured ? 1 : 0}, ${n}, 1);`);
  const imgs = p.images && p.images.length ? p.images : (p.img ? [p.img] : []);
  imgs.forEach((u, k) =>
    lines.push(`INSERT INTO product_images (product_id, url, sort) VALUES (${q(p.id)}, ${q('/' + u)}, ${k});`));
});
lines.push('');

lines.push(`INSERT INTO admins (username, salt, hash) VALUES (${q(username)}, ${q(salt)}, ${q(hash)});`);
lines.push(`INSERT INTO visits (key, count) VALUES ('total', 0) ON CONFLICT(key) DO NOTHING;`);

fs.writeFileSync(path.join(ROOT, 'seed.sql'), lines.join('\n') + '\n', 'utf8');

const imgCount = PRODUCTS.reduce((n, p) => n + ((p.images && p.images.length) || (p.img ? 1 : 0)), 0);
console.log('seed.sql جاهز');
console.log(`  ${CATEGORIES.length} قسم | ${PRODUCTS.length} منتج | ${imgCount} صورة`);
console.log(`  ${Object.keys(SETTINGS).length} إعداد`);
console.log(`  مستخدم لوحة التحكم: ${username}`);
