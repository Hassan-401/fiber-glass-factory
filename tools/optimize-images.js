/*
 * optimize-images.js — يصغّر الصور الكبيرة باستخدام المتصفح (canvas)
 *
 * بيشغّل سيرفر محلي مؤقت وصفحة بتقرأ كل صورة أكبر من الحد المسموح،
 * بترسمها على canvas بعرض أقصى 1600px وتحفظها JPEG بجودة 82%.
 *
 * التشغيل:  node tools/optimize-images.js
 * وبعدها افتح  http://localhost:8792/  في المتصفح وسيب الصفحة تخلّص.
 */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'assets', 'img', 'products');
const MAX_W = 1600;
const MAX_BYTES = 300 * 1024;
const PORT = 8792;

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(jpe?g|png)$/i.test(e.name)) out.push(p);
  }
  return out;
}

const targets = walk(DIR)
  .filter(f => fs.statSync(f).size > MAX_BYTES)
  .map(f => path.relative(ROOT, f).replace(/\\/g, '/'));

console.log(targets.length + ' صورة محتاجة ضغط');
if (!targets.length) process.exit(0);

const PAGE = `<!doctype html><meta charset=utf-8><title>ضغط الصور</title>
<style>body{font:14px system-ui;background:#111;color:#eee;padding:16px}b{color:#0094f5}</style>
<p id=s>...</p><pre id=log></pre>
<script>
const files = ${JSON.stringify(targets)};
const MAX_W = ${MAX_W};
const log = document.getElementById('log'), s = document.getElementById('s');
function load(src){return new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src;});}
(async()=>{
  let done=0;
  for(const f of files){
    try{
      const img = await load('/'+f+'?raw=1');
      const scale = Math.min(1, MAX_W/img.naturalWidth);
      const w = Math.round(img.naturalWidth*scale), h = Math.round(img.naturalHeight*scale);
      const c = document.createElement('canvas'); c.width=w; c.height=h;
      const ctx = c.getContext('2d');
      ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h);         // خلفية بيضاء بدل الشفافية
      ctx.drawImage(img,0,0,w,h);
      const dataUrl = c.toDataURL('image/jpeg', 0.82);
      const r = await fetch('/save?f='+encodeURIComponent(f), {method:'POST', body:dataUrl});
      const t = await r.text();
      log.textContent += f+'  '+img.naturalWidth+'x'+img.naturalHeight+' -> '+w+'x'+h+'  '+t+'\\n';
    }catch(e){ log.textContent += f+'  ERROR '+e+'\\n'; }
    done++; s.innerHTML = '<b>'+done+'</b> / '+files.length;
  }
  s.innerHTML += ' — تم ✔';
  fetch('/done');
})();
</script>`;

const server = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x');
  if (u.pathname === '/') { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); return res.end(PAGE); }

  if (u.pathname === '/save') {
    const rel = u.searchParams.get('f');
    const abs = path.join(ROOT, rel);
    if (!abs.startsWith(DIR)) { res.writeHead(403); return res.end('bad path'); }
    let body = '';
    req.on('data', d => body += d);
    req.on('end', () => {
      const b = Buffer.from(body.split(',')[1], 'base64');
      const before = fs.statSync(abs).size;
      // لو الملف PNG نحفظه JPEG ونشيل القديم
      const out = abs.replace(/\.png$/i, '.jpg');
      fs.writeFileSync(out, b);
      if (out !== abs) fs.unlinkSync(abs);
      res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(Math.round(before / 1024) + 'KB -> ' + Math.round(b.length / 1024) + 'KB' + (out !== abs ? ' (png→jpg)' : ''));
    });
    return;
  }

  if (u.pathname === '/done') {
    res.writeHead(200).end('ok');
    setTimeout(() => { syncDataPaths(); console.log('تم ✔'); server.close(); process.exit(0); }, 300);
    return;
  }

  const abs = path.join(ROOT, decodeURIComponent(u.pathname));
  fs.readFile(abs, (e, d) => {
    if (e) { res.writeHead(404); return res.end(); }
    const ext = path.extname(abs).toLowerCase();
    res.writeHead(200, { 'Content-Type': ext === '.png' ? 'image/png' : 'image/jpeg' });
    res.end(d);
  });
});

/* بعد تحويل أي PNG إلى JPG، نصلّح المسارات في data.js */
function syncDataPaths() {
  const dataFile = path.join(ROOT, 'assets', 'js', 'data.js');
  if (!fs.existsSync(dataFile)) return;
  let src = fs.readFileSync(dataFile, 'utf8');
  let n = 0;
  src = src.replace(/assets\/img\/products\/[^"']+\.png/g, rel => {
    if (fs.existsSync(path.join(ROOT, rel))) return rel;
    const jpg = rel.replace(/\.png$/, '.jpg');
    if (fs.existsSync(path.join(ROOT, jpg))) { n++; return jpg; }
    return rel;
  });
  fs.writeFileSync(dataFile, src, 'utf8');
  console.log('تم تصحيح ' + n + ' مسار في data.js');
}

server.listen(PORT, () => console.log('افتح http://localhost:' + PORT + '/'));
