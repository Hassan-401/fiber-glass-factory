/*
 * to-webp.js — يحوّل كل صور الموقع إلى WebP
 *
 * بيشغّل سيرفر محلي وصفحة بتقرأ كل صورة، ترسمها على canvas وتحفظها WebP
 * بعرض أقصى 1600px وجودة 82%، وبيحذف الملف الأصلي بعد نجاح التحويل.
 * وبيحدّث مسارات data.js وبيولّد webp.sql لتحديث قاعدة البيانات.
 *
 * التشغيل:  node tools/to-webp.js   ثم افتح http://localhost:8796/
 *
 * ملاحظة: logo.png بيتحوّل لـ logo.webp لكن النسخة PNG بتفضل موجودة
 *         لأن أيقونة المتصفح (favicon) أأمن بصيغة PNG.
 */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PUB = path.join(ROOT, 'public');
const IMG = path.join(PUB, 'assets', 'img');
const MAX_W = 1600;
const QUALITY = 0.82;
const PORT = 8796;
const KEEP = new Set(['assets/img/logo.png']);   // ملفات ما نحذفهاش بعد التحويل

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(jpe?g|png)$/i.test(e.name))
      out.push(path.relative(PUB, p).replace(/\\/g, '/'));
  }
  return out;
}

const targets = walk(IMG);
console.log(targets.length + ' صورة للتحويل');
if (!targets.length) process.exit(0);

const PAGE = `<!doctype html><meta charset=utf-8><title>تحويل إلى WebP</title>
<style>body{font:14px system-ui;background:#111;color:#eee;padding:16px}b{color:#0094f5}
pre{max-height:70vh;overflow:auto;font-size:12px;line-height:1.5}</style>
<p id=s>...</p><p id=sum></p><pre id=log></pre>
<script>
const files = ${JSON.stringify(targets)};
const MAX_W = ${MAX_W}, Q = ${QUALITY};
const log = document.getElementById('log'), s = document.getElementById('s'), sum = document.getElementById('sum');

function load(src){return new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src;});}
function hasAlpha(img){
  // نكشف الشفافية عشان نحافظ عليها بدل ما نحط خلفية بيضا
  const n=40,c=document.createElement('canvas');c.width=n;c.height=n;
  const x=c.getContext('2d',{willReadFrequently:true});
  x.clearRect(0,0,n,n);x.drawImage(img,0,0,n,n);
  const d=x.getImageData(0,0,n,n).data;
  for(let i=3;i<d.length;i+=4) if(d[i]<250) return true;
  return false;
}
(async()=>{
  let done=0, before=0, after=0, failed=0;
  for(const f of files){
    try{
      const img = await load('/'+f+'?raw=1');
      const scale = Math.min(1, MAX_W/img.naturalWidth);
      const w = Math.round(img.naturalWidth*scale), h = Math.round(img.naturalHeight*scale);
      const c = document.createElement('canvas'); c.width=w; c.height=h;
      const ctx = c.getContext('2d');
      if(!hasAlpha(img)){ ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h); }
      ctx.drawImage(img,0,0,w,h);

      const blob = await new Promise(r => c.toBlob(r, 'image/webp', Q));
      if(!blob || !blob.type.includes('webp')) throw new Error('المتصفح مش داعم WebP');

      const r = await fetch('/save?f='+encodeURIComponent(f), {method:'POST', body: blob});
      const t = await r.json();
      before += t.before; after += t.after;
      log.textContent += f+'  '+img.naturalWidth+'x'+img.naturalHeight+' → '+w+'x'+h+
        '  '+Math.round(t.before/1024)+'KB → '+Math.round(t.after/1024)+'KB\\n';
    }catch(e){ failed++; log.textContent += 'FAIL '+f+'  '+e+'\\n'; }
    done++; s.innerHTML = '<b>'+done+'</b> / '+files.length + (failed?('  — فشل: '+failed):'');
  }
  sum.innerHTML = 'الإجمالي: <b>'+Math.round(before/1048576*10)/10+'MB</b> → <b>'+
    Math.round(after/1048576*10)/10+'MB</b>';
  await fetch('/done',{method:'POST'});
  s.innerHTML += ' — تم ✔';
})();
</script>`;

const converted = [];   // [مسار قديم, مسار جديد]

const server = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x');

  if (u.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(PAGE);
  }

  if (u.pathname === '/save' && req.method === 'POST') {
    const rel = u.searchParams.get('f');
    const abs = path.join(PUB, rel);
    if (!path.resolve(abs).startsWith(path.resolve(IMG))) { res.writeHead(403); return res.end(); }
    const chunks = [];
    req.on('data', d => chunks.push(d));
    req.on('end', () => {
      const buf = Buffer.concat(chunks);
      const before = fs.statSync(abs).size;
      const out = abs.replace(/\.(jpe?g|png)$/i, '.webp');
      fs.writeFileSync(out, buf);
      if (!KEEP.has(rel)) fs.unlinkSync(abs);
      converted.push([rel, path.relative(PUB, out).replace(/\\/g, '/')]);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ before, after: buf.length }));
    });
    return;
  }

  if (u.pathname === '/done') {
    res.writeHead(200).end('ok');
    setTimeout(() => { finish(); server.close(); process.exit(0); }, 300);
    return;
  }

  const abs = path.join(PUB, decodeURIComponent(u.pathname));
  fs.readFile(abs, (e, d) => {
    if (e) { res.writeHead(404); return res.end(); }
    const ext = path.extname(abs).toLowerCase();
    res.writeHead(200, {
      'Content-Type': ext === '.png' ? 'image/png' : ext === '.webp' ? 'image/webp' : 'image/jpeg'
    });
    res.end(d);
  });
});

/* تحديث data.js + توليد SQL لقاعدة البيانات */
function finish() {
  const map = Object.fromEntries(converted);

  const dataFile = path.join(PUB, 'assets', 'js', 'data.js');
  if (fs.existsSync(dataFile)) {
    let src = fs.readFileSync(dataFile, 'utf8');
    let n = 0;
    for (const [oldP, newP] of converted) {
      const re = new RegExp(oldP.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      const hits = src.match(re);
      if (hits) { src = src.replace(re, newP); n += hits.length; }
    }
    fs.writeFileSync(dataFile, src, 'utf8');
    console.log('data.js: ' + n + ' مسار اتحدّث');
  }

  const q = s => "'" + String(s).replace(/'/g, "''") + "'";
  const sql = converted
    .filter(([o]) => o.startsWith('assets/img/products/'))
    .map(([o, nw]) => `UPDATE product_images SET url = ${q('/' + nw)} WHERE url = ${q('/' + o)};`);
  // الشعار في الإعدادات
  if (map['assets/img/logo.png'])
    sql.push(`UPDATE settings SET value = ${q('"assets/img/logo.webp"')} WHERE key = 'logo';`);

  fs.writeFileSync(path.join(ROOT, 'webp.sql'), sql.join('\n') + '\n', 'utf8');
  console.log('webp.sql: ' + sql.length + ' سطر');
  console.log('تم ✔  —  طبّق السطر ده على قاعدة البيانات:');
  console.log('  wrangler d1 execute souq-masreya-fiberglass --remote --file=./webp.sql');
}

server.listen(PORT, () => console.log('افتح http://localhost:' + PORT + '/'));
