/*
 * cluster-images.js — يجمّع صور المنتج الواحد في مجموعة واحدة
 *
 * يقرأ tools/hashes.json ويقترح مجموعات (صور لنفس المنتج) داخل كل قسم،
 * ويكتب الاقتراح في tools/groups.json للمراجعة البصرية قبل الاعتماد.
 *
 * التشغيل:  node tools/cluster-images.js [--dist 12] [--color 26]
 */
'use strict';
const fs = require('fs');
const path = require('path');

const H = JSON.parse(fs.readFileSync(path.join(__dirname, 'hashes.json'), 'utf8'));
const arg = (k, d) => {
  const i = process.argv.indexOf('--' + k);
  return i > -1 ? +process.argv[i + 1] : d;
};
const MAX_D = arg('dist', 12);     // أقصى فرق في dHash (من 64 بت)
const MAX_C = arg('color', 26);    // أقصى فرق في متوسط اللون لكل قناة

const files = Object.keys(H).filter(f => !H[f].error);

function hamming(a, b) {
  let n = 0;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) n++;
  return n;
}
/* فرق شبكة الألوان 8×8 — متوسط الفرق المطلق لكل قناة */
function gridDiff(a, b) {
  let s = 0;
  for (let i = 0; i < a.length; i++)
    s += Math.abs(a[i][0] - b[i][0]) + Math.abs(a[i][1] - b[i][1]) + Math.abs(a[i][2] - b[i][2]);
  return s / (a.length * 3);
}

const catOf = f => f.split('/')[3];

/* ---------- union-find ---------- */
const parent = {};
const find = x => (parent[x] === x ? x : (parent[x] = find(parent[x])));
const union = (a, b) => { const ra = find(a), rb = find(b); if (ra !== rb) parent[ra] = rb; };
files.forEach(f => parent[f] = f);

const byCat = {};
files.forEach(f => (byCat[catOf(f)] = byCat[catOf(f)] || []).push(f));

const pairs = [];
for (const cat of Object.keys(byCat)) {
  const list = byCat[cat];
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const a = H[list[i]], b = H[list[j]];
      const d = hamming(a.d, b.d);
      const c = gridDiff(a.grid, b.grid);
      if (d <= MAX_D && c <= MAX_C) {
        union(list[i], list[j]);
        pairs.push({ a: list[i], b: list[j], d, c: +c.toFixed(1) });
      }
    }
  }
}

/* ---------- تجميع ---------- */
const clusters = {};
files.forEach(f => (clusters[find(f)] = clusters[find(f)] || []).push(f));

const groups = Object.values(clusters)
  .map(g => g.sort())
  .filter(g => g.length > 1)
  .sort((a, b) => catOf(a[0]).localeCompare(catOf(b[0])) || a[0].localeCompare(b[0]));

const merged = groups.reduce((n, g) => n + g.length, 0);
console.log('عتبات: dHash ≤ ' + MAX_D + '  |  لون ≤ ' + MAX_C);
console.log(files.length + ' صورة → ' + (files.length - merged + groups.length) + ' منتج');
console.log(groups.length + ' مجموعة تضم ' + merged + ' صورة\n');
groups.forEach(g => {
  console.log('• ' + catOf(g[0]) + '  (' + g.length + ')  ' +
    g.map(f => path.basename(f)).join(' , '));
});

fs.writeFileSync(path.join(__dirname, 'groups.json'),
  JSON.stringify(groups, null, 2), 'utf8');
console.log('\nتمت الكتابة في tools/groups.json');
