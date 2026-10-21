/*
 * hash-images.js — يحسب بصمة بصرية (dHash + متوسط ألوان) لكل صورة منتج
 * عشان نكتشف الصور اللي لنفس المنتج ونجمّعها في كاروسيل بدل منتجات منفصلة.
 *
 * التشغيل:  node tools/hash-images.js   ثم افتح http://localhost:8793/
 * الناتج:   tools/hashes.json
 */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'public', 'assets', 'img', 'products');
const OUT = path.join(__dirname, 'hashes.json');
const PORT = 8793;

function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(jpe?g|png)$/i.test(e.name))
      out.push(path.relative(path.join(ROOT, 'public'), p).replace(/\\/g, '/'));
  }
  return out;
}
const files = walk(DIR);
console.log(files.length + ' صورة');

const PAGE = `<!doctype html><meta charset=utf-8><title>بصمات الصور</title>
<style>body{font:14px system-ui;background:#111;color:#eee;padding:16px}</style><p id=s>...</p>
<script>
const files = ${JSON.stringify(files)};
const s = document.getElementById('s');
function load(src){return new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src;});}

// dHash 9x8 => 64 بت، مقاوم لاختلاف الإضاءة والحجم
function dhash(img){
  const w=9,h=8,c=document.createElement('canvas');c.width=w;c.height=h;
  const x=c.getContext('2d',{willReadFrequently:true});
  x.fillStyle='#fff';x.fillRect(0,0,w,h);x.drawImage(img,0,0,w,h);
  const d=x.getImageData(0,0,w,h).data; let bits='';
  for(let y=0;y<h;y++)for(let i=0;i<w-1;i++){
    const a=(y*w+i)*4, b=(y*w+i+1)*4;
    const ga=d[a]*.299+d[a+1]*.587+d[a+2]*.114;
    const gb=d[b]*.299+d[b+1]*.587+d[b+2]*.114;
    bits += ga>gb?'1':'0';
  }
  return bits;
}
// متوسط اللون + نسبة الأبعاد، بيساعد في تمييز المنتجات المتشابهة شكلاً ومختلفة لوناً
function meta(img){
  const n=8,c=document.createElement('canvas');c.width=n;c.height=n;
  const x=c.getContext('2d',{willReadFrequently:true});
  x.fillStyle='#fff';x.fillRect(0,0,n,n);x.drawImage(img,0,0,n,n);
  const d=x.getImageData(0,0,n,n).data;
  let r=0,g=0,b=0;const grid=[];
  for(let i=0;i<d.length;i+=4){r+=d[i];g+=d[i+1];b+=d[i+2];grid.push([d[i],d[i+1],d[i+2]]);}
  const k=d.length/4;
  return {rgb:[Math.round(r/k),Math.round(g/k),Math.round(b/k)], grid,
          ar:+(img.naturalWidth/img.naturalHeight).toFixed(3),
          w:img.naturalWidth, h:img.naturalHeight};
}
(async()=>{
  const out={};
  for(let i=0;i<files.length;i++){
    const f=files[i];
    try{ const img=await load('/'+f); out[f]={d:dhash(img), ...meta(img)}; }
    catch(e){ out[f]={error:String(e)}; }
    if(i%10===0) s.textContent=i+' / '+files.length;
  }
  await fetch('/save',{method:'POST',body:JSON.stringify(out)});
  s.textContent='تم ✔ '+files.length;
})();
</script>`;

const server = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x');
  if (u.pathname === '/') { res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); return res.end(PAGE); }
  if (u.pathname === '/save') {
    let b = ''; req.on('data', d => b += d);
    req.on('end', () => {
      fs.writeFileSync(OUT, b);
      res.writeHead(200).end('ok');
      console.log('تم الحفظ في ' + OUT);
      setTimeout(() => { server.close(); process.exit(0); }, 200);
    });
    return;
  }
  const abs = path.join(ROOT, 'public', decodeURIComponent(u.pathname));
  fs.readFile(abs, (e, d) => {
    if (e) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { 'Content-Type': path.extname(abs).toLowerCase() === '.png' ? 'image/png' : 'image/jpeg' });
    res.end(d);
  });
});
server.listen(PORT, () => console.log('افتح http://localhost:' + PORT + '/'));
