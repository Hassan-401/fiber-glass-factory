/*
 * build-data.js — يبني محتوى الموقع من مجلد «داتا»
 *
 * يقرأ المجلد الأصلي للمصنع، ينسخ الصور إلى assets/img/products/<slug>/،
 * وينشئ assets/js/data.js تلقائياً.
 *
 * التشغيل:  node tools/build-data.js
 *
 * لإضافة صور جديدة: حطّها في المجلد المناسب داخل «داتا» وشغّل الأمر تاني.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'داتا');
const IMG_OUT = path.join(ROOT, 'public', 'assets', 'img', 'products');
const DATA_OUT = path.join(ROOT, 'public', 'assets', 'js', 'data.js');
const GROUPS_FILE = path.join(__dirname, 'groups.json');

/* مجموعات الصور: صور لنفس المنتج تتجمّع في منتج واحد بكاروسيل.
   الملف مراجَع يدوياً — تقدر تعدّله أو تعدّل التجميع من لوحة التحكم. */
const IMAGE_GROUPS = fs.existsSync(GROUPS_FILE)
  ? JSON.parse(fs.readFileSync(GROUPS_FILE, 'utf8'))
  : [];
/* خريطة: مسار صورة ← رقم المجموعة */
const GROUP_OF = {};
IMAGE_GROUPS.forEach((g, gi) => g.forEach(p => { GROUP_OF[p] = gi; }));

/* ------------------------------------------------------------------ */
/* خريطة الأقسام: مجلد المصدر ← بيانات القسم في الموقع                  */
/* ------------------------------------------------------------------ */
const CATEGORIES = [
  {
    slug: 'cooling-towers', dir: 'ابراج تبريد فيبرجلاس', icon: 'tower',
    name: 'أبراج تبريد فيبر جلاس', short: 'أبراج تبريد',
    desc: 'أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.',
    groups: {
      'ابراج تبريد دائريه': 'برج تبريد دائري',
      'ابراج تبريد مربعه': 'برج تبريد مربع',
      'حشو ابراج التبريد': 'حشو أبراج التبريد'
    }
  },
  {
    slug: 'bus-parts', dir: 'اجزاءاتوبيسات وسيارات فيبرجلاس', icon: 'bus',
    name: 'أجزاء أتوبيسات وسيارات فيبر جلاس', short: 'أجزاء أتوبيسات وسيارات',
    desc: 'أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.'
  },
  {
    slug: 'planters', dir: 'احواض زهور فيبرجلاس', icon: 'planter',
    name: 'أحواض زهور فيبر جلاس', short: 'أحواض زهور',
    desc: 'جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.'
  },
  {
    slug: 'light-poles', dir: 'اعمدة اناره فيبرجلاس', icon: 'lamp',
    name: 'أعمدة إنارة فيبر جلاس', short: 'أعمدة إنارة',
    desc: 'أعمدة إنارة فيبر جلاس بمقاسات وتصميمات مختلفة، خفيفة الوزن وعازلة للكهرباء ومقاومة للصدأ.'
  },
  {
    slug: 'tank-lining', dir: 'تبطين خزانات حديد وخرسانه فيبرجلاس', icon: 'lining',
    name: 'تبطين خزانات حديد وخرسانة', short: 'تبطين خزانات',
    desc: 'تبطين أحواض وخزانات الحديد والخرسانة بالفيبر جلاس المقاوم للكيماويات.'
  },
  {
    slug: 'pools', dir: 'حمامات سباحه ولوازمها فيبرجلاس', icon: 'pool',
    name: 'حمامات سباحة ولوازمها', short: 'حمامات سباحة',
    desc: 'وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.'
  },
  {
    slug: 'roof-curb', dir: 'رووف كيرب وسكاي لايت  فيبرجلاس', icon: 'roof',
    name: 'رووف كيرب فيبر جلاس', short: 'رووف كيرب',
    desc: 'رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.'
  },
  {
    slug: 'slides', dir: 'زحاليق فيبرجلاس', icon: 'slide',
    name: 'زحاليق فيبر جلاس', short: 'زحاليق',
    desc: 'زحاليق فيبر جلاس للأطفال بمقاسات وألوان مختلفة، آمنة وسطح ناعم لا يسبب احتكاكاً.'
  },
  {
    slug: 'skylight', dir: 'سكاي لايت الشفافه وشيتات معرجه فيبرجلاس', icon: 'skylight',
    name: 'سكاي لايت شفافة وشيتات معرجة', short: 'سكاي لايت وشيتات',
    desc: 'ألواح شفافة ومعرجة فيبر جلاس لإضاءة وتغطية المنشآت.'
  },
  {
    slug: 'reefer-panels', dir: 'شيتات وبلمات عربات تخزين مثلجه فيبرجلاس', icon: 'truck',
    name: 'شيتات وبلمات عربات التخزين المثلجة', short: 'شيتات وبلمات',
    desc: 'شيتات وبلمات فيبر جلاس للعربات المثلجة.'
  },
  {
    slug: 'roof-insulation', dir: 'عزل اسطح حديديه ومداخن ضد خرير المياه بالفيبرجلاس', icon: 'shield',
    name: 'عزل أسطح حديدية ومداخن', short: 'عزل أسطح ومداخن',
    desc: 'عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.'
  },
  {
    slug: 'grating', dir: 'قطاعات وهندريل وسلالم  فيبرجلاس', icon: 'grating',
    name: 'قطاعات وهندريل وسلالم (جريتينج)', short: 'جريتينج وهندريل',
    desc: 'جميع مقاسات مشايات الفيبر جلاس (الجريتينج) والهندريل والسلالم والأسوار.'
  },
  {
    slug: 'caravans', dir: 'كرفانات', icon: 'caravan',
    name: 'كرفانات فيبر جلاس', short: 'كرفانات',
    desc: 'جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.'
  },
  {
    slug: 'medical-covers', dir: 'كفرات اجهزه طبيه ومعمليه فيبرجلاس', icon: 'medical',
    name: 'كفرات أجهزة طبية ومعملية', short: 'كفرات أجهزة طبية',
    desc: 'كفرات أجهزة طبية ومعملية فيبر جلاس تُصنَّع حسب الرسم والمقاس المطلوب.'
  },
  {
    slug: 'boats', dir: 'مراكب ولنشات فيبرجلاس', icon: 'boat',
    name: 'مراكب ولنشات فيبر جلاس', short: 'مراكب ولنشات',
    desc: 'تصنيع مراكب ولنشات فيبر جلاس وأعمال الإصلاح والترميم.'
  },
  {
    slug: 'fans', dir: 'مراوح شفط الهواء ذاتية الحركه الومنيوم', icon: 'fan',
    name: 'مراوح شفط الهواء ذاتية الحركة', short: 'مراوح شفط هواء',
    desc: 'مراوح شفط الهواء ذاتية الحركة من الألومنيوم، تعمل بحركة الهواء بدون كهرباء.'
  },
  {
    slug: 'pipes-tanks', dir: 'مواسير وخزانات فيبرجلاس', icon: 'tank',
    name: 'مواسير وخزانات فيبر جلاس', short: 'مواسير وخزانات',
    desc: 'مواسير وخزانات فيبر جلاس بمقاسات مختلفة، مقاومة للتآكل والكيماويات.'
  },
  {
    slug: 'manhole-covers', dir: 'وغطاء بلعات  فيبرجلاس', icon: 'manhole',
    name: 'أغطية بلاعات فيبر جلاس', short: 'أغطية بلاعات',
    desc: 'أغطية بلاعات فيبر جلاس خفيفة الوزن وغير قابلة للصدأ أو السرقة.'
  }
];

/* ------------------------------------------------------------------ */
/* أدوات مساعدة                                                        */
/* ------------------------------------------------------------------ */
const IMG_RE = /\.(jpe?g|png|webp)$/i;
const AR_RE = /[؀-ۿ]/;
// أرقام عربية ← لاتينية
const fixDigits = s => s.replace(/[٠-٩]/g, d => String(d.charCodeAt(0) - 0x0660));

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(e => e.isFile() && IMG_RE.test(e.name) && !e.name.startsWith('~$'))
    .map(e => e.name)
    .sort((a, b) => a.localeCompare(b, 'ar'));
}
function listDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => e.name);
}

/* اسم المنتج من اسم الملف: نستعمله فقط لو فيه كلام عربي مفيد */
function nameFromFile(file, fallback, idx) {
  let base = fixDigits(path.basename(file, path.extname(file))).trim();
  base = base.replace(/\s+/g, ' ');
  // أسماء أجهزة/واتساب/فيسبوك التلقائية = مش مفيدة
  const junk = /^(IMG|IMAGE|PHOTO|FB_IMG|CIMG|DSC|WA)[-_ ]?\d*/i.test(base) || /^\d+$/.test(base) || !AR_RE.test(base);
  if (junk) return fallback + ' – موديل ' + String(idx).padStart(2, '0');
  return base.replace(/\s*فيبرجلاس\s*/g, ' فيبر جلاس ').replace(/\s+/g, ' ').trim();
}

/* برج 100 دائري → برج تبريد دائري 100 طن */
function towerName(file, groupLabel, idx) {
  const base = fixDigits(path.basename(file, path.extname(file)));
  const m = base.match(/(\d{1,4})/);
  // رقم الطن معتبر فقط لو اسم الملف متسمّي يدوياً بالعربي (مش IMG_2026…)
  if (m && AR_RE.test(base) && +m[1] <= 5000) return groupLabel + ' ' + m[1] + ' طن';
  return groupLabel + ' – موديل ' + String(idx).padStart(2, '0');
}

/* تصحيحات يدوية لأسماء مأخوذة من أسماء الملفات */
const NAME_FIXES = {
  'اكصدام فيبر جلاس': 'أكصدام فيبر جلاس',
  'تندة جرار1 فيبر جلاس': 'تندة جرار فيبر جلاس',
  'تندة عربة كهرباء12': 'تندة عربة كهرباء فيبر جلاس',
  'ظهر اتوبيس': 'ظهر أتوبيس فيبر جلاس',
  'وش اتوبيس فيبر جلاس': 'وش أتوبيس فيبر جلاس',
  'وحدة حمام سباحه': 'وحدة حمام سباحة فيبر جلاس'
};

/* ------------------------------------------------------------------ */
/* بناء الأقسام والمنتجات                                              */
/* ------------------------------------------------------------------ */
fs.rmSync(IMG_OUT, { recursive: true, force: true });
fs.mkdirSync(IMG_OUT, { recursive: true });

const outCats = [];
const outProducts = [];
let copied = 0;

for (const cat of CATEGORIES) {
  const srcDir = path.join(SRC, cat.dir);
  const destDir = path.join(IMG_OUT, cat.slug);
  fs.mkdirSync(destDir, { recursive: true });

  // ملفات القسم نفسه + أي مجلدات فرعية
  const entries = [];
  listImages(srcDir).forEach(f => entries.push({ file: path.join(srcDir, f), group: null }));
  for (const sub of listDirs(srcDir)) {
    listImages(path.join(srcDir, sub)).forEach(f =>
      entries.push({ file: path.join(srcDir, sub, f), group: sub }));
  }

  if (cat.groups) {
    const cap = f => {
      const b = fixDigits(path.basename(f, path.extname(f)));
      const m = b.match(/(\d{1,4})/);
      return (m && AR_RE.test(b) && +m[1] <= 5000) ? +m[1] : 9999;
    };
    const order = Object.keys(cat.groups);
    entries.sort((a, b) =>
      order.indexOf(a.group) - order.indexOf(b.group) || cap(a.file) - cap(b.file));
  }

  // نسخ الصور أولاً عشان نعرف مسارها النهائي قبل التجميع
  const copiedEntries = [];
  let i = 0;
  for (const e of entries) {
    i++;
    // ملفات اسمها امتداد فقط (مثل «.jpg») بترجع extname فاضي — نستنتج الامتداد من الاسم
    let ext = path.extname(e.file).toLowerCase();
    if (!ext) {
      const base = path.basename(e.file).toLowerCase();
      ext = /^.(jpe?g|png|webp)$/.test(base) ? base : '.jpg';
    }
    ext = ext.replace('.jpeg', '.jpg');
    const outName = String(i).padStart(2, '0') + ext;
    fs.copyFileSync(e.file, path.join(destDir, outName));
    copied++;
    copiedEntries.push({
      ...e,
      idx: i,
      out: 'assets/img/products/' + cat.slug + '/' + outName
    });
  }

  /* تجميع الصور اللي لنفس المنتج في مدخل واحد */
  const seenGroup = {};
  const items = [];
  for (const e of copiedEntries) {
    const gi = GROUP_OF[e.out];
    if (gi !== undefined && seenGroup[gi] !== undefined) {
      items[seenGroup[gi]].images.push(e.out);   // صورة إضافية لنفس المنتج
      continue;
    }
    if (gi !== undefined) seenGroup[gi] = items.length;
    items.push({ ...e, images: [e.out] });
  }

  let n = 0;
  for (const e of items) {
    n++;
    const groupLabel = e.group && cat.groups ? cat.groups[e.group] : null;
    let name = groupLabel
      ? towerName(e.file, groupLabel, n)
      : nameFromFile(e.file, cat.short, n);
    if (NAME_FIXES[name]) name = NAME_FIXES[name];

    outProducts.push({
      id: cat.slug + '-' + String(n).padStart(2, '0'),
      cat: cat.slug,
      name,
      group: groupLabel || null,
      desc: cat.desc,
      featured: n === 1,          // أول منتج في كل قسم يظهر في «منتجات مختارة»
      img: e.images[0],           // الصورة الرئيسية
      images: e.images            // كل صور المنتج (كاروسيل)
    });
  }

  const mine = outProducts.filter(p => p.cat === cat.slug);

  // أسماء متكررة داخل نفس القسم (صورتين لنفس الموديل) → نرقّمها
  const total = {}, used = {};
  mine.forEach(p => { total[p.name] = (total[p.name] || 0) + 1; });
  mine.forEach(p => {
    if (total[p.name] > 1) {
      used[p.name] = (used[p.name] || 0) + 1;
      p.name += ' – صورة ' + used[p.name];
    }
  });

  outCats.push({
    id: cat.slug,
    name: cat.name,
    short: cat.short,
    desc: cat.desc,
    icon: cat.icon,
    count: mine.length,
    img: mine.length ? mine[0].img : null   // null = خامة مؤقتة بلون الشعار
  });
  console.log(String(mine.length).padStart(3) + '  ' + cat.slug);
}

/* ------------------------------------------------------------------ */
/* كتابة data.js                                                       */
/* ------------------------------------------------------------------ */
const banner = `/* ملف البيانات — مولَّد تلقائياً بواسطة tools/build-data.js
 * لا تعدّل هذا الملف يدوياً؛ عدّل مجلد «داتا» أو السكربت ثم أعد التشغيل:
 *     node tools/build-data.js
 * بيانات التواصل والسوشيال ميديا في assets/js/config.js (عدّلها هناك).
 */
`;

const js = banner +
  '\nconst CATEGORIES = ' + JSON.stringify(outCats, null, 2) + ';\n' +
  '\nconst PRODUCTS = ' + JSON.stringify(outProducts, null, 2) + ';\n';

fs.writeFileSync(DATA_OUT, js, 'utf8');

console.log('\n' + outCats.length + ' أقسام | ' + outProducts.length + ' منتج | ' + copied + ' صورة منسوخة');
console.log('أقسام بلا صور: ' + outCats.filter(c => !c.count).map(c => c.id).join(', '));
