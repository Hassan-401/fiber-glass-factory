/*
 * build-i18n.js — يولّد i18n.sql: أعمدة إنجليزية + ترجمات المحتوى
 *
 * التشغيل:  node tools/build-i18n.js
 * ثم:       wrangler d1 execute souq-masreya-fiberglass --remote --file=./i18n.sql
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const q = s => "'" + String(s).replace(/'/g, "''") + "'";
const J = v => q(JSON.stringify(v));

const read = f => fs.readFileSync(path.join(ROOT, 'public', 'assets', 'js', f), 'utf8');
const { CATEGORIES, PRODUCTS } = new Function(read('data.js') + '\nreturn {CATEGORIES, PRODUCTS};')();

/* ---------- الأقسام ---------- */
const CATS = {
  'cooling-towers':  ['Fiberglass Cooling Towers', 'Cooling Towers',
    'Corrosion-resistant fiberglass cooling towers, round and square, from 10 up to 5,000 tons of cooling capacity.'],
  'bus-parts':       ['Fiberglass Bus & Vehicle Parts', 'Bus & Vehicle Parts',
    'Fiberglass bumpers, bus front and rear panels, and every other bus or vehicle part made in fiberglass.'],
  'planters':        ['Fiberglass Planters', 'Planters',
    'Every type of fiberglass planter — square and round, in a range of sizes and colours.'],
  'light-poles':     ['Fiberglass Lighting Poles', 'Lighting Poles',
    'Fiberglass lighting poles in various heights and designs — lightweight, non-conductive and rust-free.'],
  'tank-lining':     ['Steel & Concrete Tank Lining', 'Tank Lining',
    'Lining of steel and concrete tanks and basins with chemical-resistant fiberglass.'],
  'pools':           ['Swimming Pools & Accessories', 'Swimming Pools',
    'Fiberglass swimming pool units, diving boards and pool accessories in all sizes.'],
  'roof-curb':       ['Fiberglass Roof Curbs', 'Roof Curbs',
    'Square and round fiberglass roof curbs for air extraction systems.'],
  'slides':          ['Fiberglass Slides', 'Slides',
    'Fiberglass children’s slides in a range of sizes and colours — safe, with a smooth friction-free surface.'],
  'skylight':        ['Clear Skylights & Corrugated Sheets', 'Skylights & Sheets',
    'Clear and corrugated fiberglass sheets for lighting and roofing.'],
  'reefer-panels':   ['Refrigerated Vehicle Sheets & Panels', 'Reefer Panels',
    'Fiberglass sheets and panels for refrigerated vehicles.'],
  'roof-insulation': ['Steel Roof & Chimney Insulation', 'Roof & Chimney Insulation',
    'Fiberglass insulation for steel roofs and chimneys — stops leaks and corrosion.'],
  'grating':         ['Grating, Handrails & Ladders', 'Grating & Handrails',
    'Fiberglass grating in all sizes, plus handrails, ladders and fencing.'],
  'caravans':        ['Fiberglass Caravans', 'Caravans',
    'Steel and fiberglass caravans in every size — offices, guard cabins, rest rooms and mobile units.'],
  'medical-covers':  ['Medical & Lab Equipment Covers', 'Medical Covers',
    'Fiberglass covers for medical and laboratory equipment, made to your drawing and dimensions.'],
  'boats':           ['Fiberglass Boats & Launches', 'Boats & Launches',
    'Fiberglass boats and launches, plus repair and restoration work.'],
  'fans':            ['Wind-Driven Air Extraction Fans', 'Extraction Fans',
    'Aluminium wind-driven air extraction fans — they run on air movement, no electricity needed.'],
  'pipes-tanks':     ['Fiberglass Pipes & Tanks', 'Pipes & Tanks',
    'Fiberglass pipes and tanks in various sizes, resistant to corrosion and chemicals.'],
  'manhole-covers':  ['Fiberglass Manhole Covers', 'Manhole Covers',
    'Lightweight fiberglass manhole covers — rust-free and not worth stealing.']
};

/* ---------- المجموعات الفرعية ---------- */
const GROUPS = {
  'برج تبريد دائري': 'Round Cooling Tower',
  'برج تبريد مربع': 'Square Cooling Tower',
  'حشو أبراج التبريد': 'Cooling Tower Fill'
};

/* ---------- منتجات بأسماء يدوية ---------- */
const NAMES = {
  'أكصدام فيبر جلاس': 'Fiberglass Bumper',
  'تندة جرار فيبر جلاس': 'Fiberglass Tractor Canopy',
  'تندة عربة كهرباء فيبر جلاس': 'Fiberglass Utility Vehicle Canopy',
  'ظهر أتوبيس فيبر جلاس': 'Fiberglass Bus Rear Panel',
  'وش أتوبيس فيبر جلاس': 'Fiberglass Bus Front Panel',
  'وحدة حمام سباحة فيبر جلاس': 'Fiberglass Swimming Pool Unit'
};

/* اسم المنتج بالإنجليزي */
function productEn(p) {
  if (NAMES[p.name]) return NAMES[p.name];

  // «برج تبريد دائري 100 طن» و «… – صورة 2»
  let m = p.name.match(/^(.+?)\s+(\d+)\s*طن(?:\s*–\s*صورة\s*(\d+))?$/);
  if (m && GROUPS[m[1]])
    return `${GROUPS[m[1]]} – ${m[2]} Ton` + (m[3] ? ` (Photo ${m[3]})` : '');

  // «حشو أبراج التبريد – موديل 17»
  m = p.name.match(/^(.+?)\s*–\s*موديل\s*(\d+)$/);
  if (m) {
    const base = GROUPS[m[1]] || (CATS[p.cat] ? CATS[p.cat][1] : m[1]);
    return `${base} – Model ${m[2]}`;
  }
  return CATS[p.cat] ? CATS[p.cat][1] : p.name;
}

/* ---------- الإعدادات ---------- */
const SETTINGS_EN = {
  tagline_en: 'Outstanding quality .. built to last',
  address_en: '6th of October City — Third Industrial Zone Extension, Giza, Egypt',
  hours_en: 'Saturday – Thursday, 9am – 6pm',
  hoursNote_en: 'Closed on Friday',
  about_en:
    'A factory specialised in fiberglass products across many sectors: cooling towers, caravans, ' +
    'bus and vehicle parts, roof curbs and skylights, roof and chimney insulation, grating and ' +
    'handrails, planters, swimming pools and more.',
  why_en: [
    { icon: 'shield', title: 'Corrosion and rust resistant',
      text: 'Fiberglass doesn’t rust and isn’t affected by moisture or chemicals, so it lasts for years in the harshest environments.' },
    { icon: 'ruler', title: 'Made to your dimensions',
      text: 'We produce any size, shape or colour to your drawing — from a single piece to complete production runs.' },
    { icon: 'gear', title: 'Experience across sectors',
      text: 'From industrial cooling towers to medical equipment covers and bus parts — hands-on experience in every sector.' },
    { icon: 'award', title: 'Genuine materials',
      text: 'Resins and glass fibre that meet specification, with an outer gel-coat layer that protects the surface from the sun.' },
    { icon: 'truck', title: 'Delivery and installation',
      text: 'We handle transport and on-site installation with a specialised technical team.' },
    { icon: 'headset', title: 'Advice before you buy',
      text: 'We help you choose the right size, thickness and material for how the product will actually be used.' }
  ],
  steps_en: [
    { t: 'Message us on WhatsApp', d: 'Send a photo, a drawing, or just describe the product and size you need.' },
    { t: 'Quote and specification', d: 'We reply with the technical specification, the price and the lead time.' },
    { t: 'Manufacturing', d: 'Your item goes into production and is checked before handover.' },
    { t: 'Delivery and installation', d: 'We deliver to your site and install where needed.' }
  ],
  faq_en: [
    { q: 'How do I place an order?',
      a: 'Tap “Order on WhatsApp” on any product and a chat opens with a ready-made message containing the product name, code and link. Send it and add the size or quantity you need.' },
    { q: 'Do you make custom sizes?',
      a: 'Yes. Most of our work is made to your drawing and dimensions, not just off-the-shelf sizes. Send us the drawing or measurements and we’ll come back with details.' },
    { q: 'What cooling tower capacities are available?',
      a: 'Round and square cooling towers from 10 up to 5,000 tons of cooling, plus tower fill and spare parts.' },
    { q: 'Why choose fiberglass over steel or concrete?',
      a: 'Fiberglass doesn’t rust and isn’t affected by moisture or chemicals. It’s far lighter, so it’s easier to transport and install, and it insulates against both electricity and heat.' },
    { q: 'Do you deliver outside Cairo?',
      a: 'Yes, we deliver nationwide. Transport cost depends on distance and shipment size and is quoted along with the price.' },
    { q: 'Is there a warranty?',
      a: 'Yes — we warrant against manufacturing defects. The period varies by product type and is confirmed in the quote.' }
  ]
};

/* ---------- بناء SQL ---------- */
const out = [];
out.push('-- أعمدة وترجمات إنجليزية — مولَّد بواسطة tools/build-i18n.js');
// ALTER آمنة: لو العمود موجود السطر هيفشل، فنشغّلها مرة واحدة فقط
out.push('ALTER TABLE categories ADD COLUMN name_en  TEXT NOT NULL DEFAULT \'\';');
out.push('ALTER TABLE categories ADD COLUMN short_en TEXT NOT NULL DEFAULT \'\';');
out.push('ALTER TABLE categories ADD COLUMN descr_en TEXT NOT NULL DEFAULT \'\';');
out.push('ALTER TABLE products   ADD COLUMN name_en  TEXT NOT NULL DEFAULT \'\';');
out.push('ALTER TABLE products   ADD COLUMN descr_en TEXT NOT NULL DEFAULT \'\';');
out.push('ALTER TABLE products   ADD COLUMN grp_en   TEXT;');
out.push('');

CATEGORIES.forEach(c => {
  const t = CATS[c.id];
  if (!t) { console.warn('قسم بدون ترجمة: ' + c.id); return; }
  out.push(`UPDATE categories SET name_en = ${q(t[0])}, short_en = ${q(t[1])}, descr_en = ${q(t[2])} WHERE id = ${q(c.id)};`);
});
out.push('');

PRODUCTS.forEach(p => {
  const name = productEn(p);
  const descr = CATS[p.cat] ? CATS[p.cat][2] : '';
  const grp = p.group ? (GROUPS[p.group] || null) : null;
  out.push(`UPDATE products SET name_en = ${q(name)}, descr_en = ${q(descr)}, grp_en = ${grp ? q(grp) : 'NULL'} WHERE id = ${q(p.id)};`);
});
out.push('');

Object.entries(SETTINGS_EN).forEach(([k, v]) => {
  out.push(`INSERT INTO settings (key, value) VALUES (${q(k)}, ${J(v)}) ` +
           `ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = unixepoch();`);
});

fs.writeFileSync(path.join(ROOT, 'i18n.sql'), out.join('\n') + '\n', 'utf8');
console.log('i18n.sql جاهز');
console.log(`  ${CATEGORIES.length} قسم | ${PRODUCTS.length} منتج | ${Object.keys(SETTINGS_EN).length} إعداد`);
console.log('  عينة أسماء:');
PRODUCTS.slice(0, 3).concat(PRODUCTS.filter(p => p.cat === 'bus-parts').slice(0, 2))
  .forEach(p => console.log(`    ${p.name}  ←  ${productEn(p)}`));
