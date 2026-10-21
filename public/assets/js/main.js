/* ============================================================
   السكربت الرئيسي — بناء العناصر المشتركة وكل التفاعلات
   ============================================================ */

/* ---------- أدوات مساعدة ---------- */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const catById  = id => CATEGORIES.find(c => c.id === id);
const prodById = id => PRODUCTS.find(p => p.id === id);
const esc = s => String(s).replace(/[&<>"']/g, m =>
  ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[m]));

/* الشبكات اللي ليها رابط فعلي بس */
const socialLinks = () => (SITE.social || []).filter(s => s.url && s.url !== '#');

/* رابط طلب عبر واتساب */
function waLink(product) {
  let msg;
  if (product) {
    const c = catById(product.cat);
    let url = '';
    try { url = new URL('product.html?id=' + product.id, location.href).href; } catch (e) {}
    msg = isEn()
      ? `Hello ${SITE.name} 👋\n\n` +
        `I'd like a quote for the following product:\n\n` +
        `📦 Product: ${product.name}\n` +
        `🏷️ Category: ${c ? c.name : ''}\n` +
        `🔢 Code: ${product.id.toUpperCase()}\n` +
        (url ? `🔗 Link: ${url}\n` : '') +
        `\nCould you share the price and lead time? Thank you.`
      : `السلام عليكم ${SITE.name} 👋\n\n` +
        `أرغب في الاستفسار وطلب عرض سعر للمنتج التالي:\n\n` +
        `📦 المنتج: ${product.name}\n` +
        `🏷️ القسم: ${c ? c.name : ''}\n` +
        `🔢 الكود: ${product.id.toUpperCase()}\n` +
        (url ? `🔗 الرابط: ${url}\n` : '') +
        `\nبرجاء إفادتي بالسعر ومدة التنفيذ. وشكراً.`;
  } else {
    msg = isEn()
      ? `Hello ${SITE.name} 👋\nI'd like to know more about your products and request a quote.`
      : `السلام عليكم ${SITE.name} 👋\nأرغب في الاستفسار عن منتجاتكم وطلب عرض سعر.`;
  }
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/* ============================================================
   تحميل البيانات الحيّة من قاعدة البيانات
   ------------------------------------------------------------
   الملفات config.js و data.js نسخة احتياطية مدمجة مع الموقع،
   ولو الـ API رد بنجاح بنستبدل محتواها بالبيانات الحالية من D1.
   التعديل بيتم في نفس الكائنات (مش إعادة تعيين) عشان تفضل const.
   ============================================================ */
async function loadLive() {
  try {
    const r = await fetch('/api/site', { cache: 'no-store' });
    if (!r.ok) return;
    const d = await r.json();
    if (d.settings && Object.keys(d.settings).length) {
      Object.assign(SITE, d.settings);
      // الإعدادات الإنجليزية بتحلّ محل العربية لما اللغة إنجليزي
      if (isEn()) ['name', 'short', 'tagline', 'address', 'hours', 'hoursNote', 'about', 'why', 'steps', 'faq']
        .forEach(k => {
          const v = d.settings[k + '_en'];
          if (v && (!Array.isArray(v) || v.length)) SITE[k] = v;
        });
    }
    /* يستبدل الحقول العربية بالإنجليزية لما اللغة إنجليزي */
    const byLang = (o, map) => {
      if (!isEn()) return o;
      const out = { ...o };
      for (const [to, from] of Object.entries(map))
        if (o[from] && String(o[from]).trim()) out[to] = o[from];
      return out;
    };
    if (Array.isArray(d.categories) && d.categories.length)
      CATEGORIES.splice(0, CATEGORIES.length, ...d.categories.map(c =>
        byLang(c, { name: 'name_en', short: 'short_en', desc: 'desc_en' })));
    if (Array.isArray(d.products) && d.products.length)
      PRODUCTS.splice(0, PRODUCTS.length, ...d.products.map(p =>
        byLang(p, { name: 'name_en', desc: 'desc_en', group: 'group_en' })));
  } catch (e) {
    /* الموقع بيشتغل بالنسخة المدمجة لو الـ API مش متاح */
  }
}

/* ---------- الهيدر ---------- */
function renderHeader() {
  const el = $('#site-header'); if (!el) return;
  const page = document.body.dataset.page || '';
  const on = p => page === p ? ' class="active"' : '';

  el.outerHTML = `
  <header class="header" id="header">
    <div class="container header__in">
      <a class="logo" href="index.html">
        <span class="logo__mark"><img src="${SITE.logo}" alt="${esc(SITE.name)}" width="52" height="52"></span>
        <span class="logo__txt">
          <span class="logo__name">${SITE.name}</span>
          <span class="logo__sub">${SITE.tagline}</span>
        </span>
      </a>

      <nav class="nav">
        <ul class="nav__list">
          <li><a href="index.html"${on('home')}>الرئيسية</a></li>
          <li><a href="about.html"${on('about')}>عن الشركة</a></li>
          <li class="has-drop">
            <a href="categories.html"${on('categories')}>الأقسام ${icon('chevron','caret')}</a>
            <div class="drop">
              ${CATEGORIES.map(c => `<a href="products.html?cat=${c.id}">${icon(c.icon)}<span>${c.short}</span></a>`).join('')}
            </div>
          </li>
          <li><a href="products.html"${on('products')}>المنتجات</a></li>
          <li><a href="gallery.html"${on('gallery')}>معرض الصور</a></li>
          <li><a href="contact.html"${on('contact')}>تواصل معنا</a></li>
          <li class="nav__lang">${langToggleHTML()}</li>
        </ul>
      </nav>

      <div class="header__cta">
        <a class="btn btn-wa btn-sm" href="${waLink()}" target="_blank" rel="noopener">
          ${icon('whatsapp')}<span>اطلب عبر واتساب</span>
        </a>
        <button class="burger" id="burger" aria-label="فتح القائمة" aria-expanded="false"><span></span></button>
      </div>
    </div>
  </header>

  <div class="drawer" id="drawer">
    <div class="drawer__mask" data-close></div>
    <aside class="drawer__panel" role="dialog" aria-label="القائمة">
      <div class="drawer__head">
        <a class="logo" href="index.html">
          <span class="logo__mark"><img src="${SITE.logo}" alt="${esc(SITE.name)}" width="52" height="52"></span>
          <span class="logo__txt"><span class="logo__name">${SITE.short}</span></span>
        </a>
        <button class="drawer__close" data-close aria-label="إغلاق">${icon('close')}</button>
      </div>
      <div class="drawer__lang">${langToggleHTML()}</div>
      <nav class="drawer__nav">
        <a href="index.html"${on('home')}>الرئيسية</a>
        <a href="about.html"${on('about')}>عن الشركة</a>
        <a href="categories.html"${on('categories')}>الأقسام</a>
        <a href="products.html"${on('products')}>كل المنتجات</a>
        <a href="gallery.html"${on('gallery')}>معرض الصور</a>
        <a href="contact.html"${on('contact')}>تواصل معنا</a>
        <div class="drawer__group">
          <div class="drawer__label">تصفح الأقسام</div>
          ${CATEGORIES.map(c => `<a class="sub" href="products.html?cat=${c.id}">${c.short}</a>`).join('')}
        </div>
      </nav>
      <div class="drawer__foot">
        <a class="btn btn-wa btn-block" href="${waLink()}" target="_blank" rel="noopener">${icon('whatsapp')} اطلب عبر واتساب</a>
        <a class="btn btn-ghost btn-block" href="tel:${SITE.phone1.replace(/\s/g,'')}">${icon('phone')} <bdi>${SITE.phone1}</bdi></a>
      </div>
    </aside>
  </div>`;
}

/* ---------- الفوتر ---------- */
function renderFooter() {
  const el = $('#site-footer'); if (!el) return;
  el.outerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__logo">
            <span class="logo__mark"><img src="${SITE.logo}" alt="${esc(SITE.name)}" width="52" height="52"></span>
            <span class="logo__txt">
              <span class="logo__name">${SITE.name}</span>
              <span class="logo__sub">${SITE.tagline}</span>
            </span>
          </div>
          <p>${SITE.about}</p>
          <div class="footer__social">
            ${socialLinks().map(s => `<a href="${s.url}" target="_blank" rel="noopener" title="${s.name}" aria-label="${s.name}">${icon(s.key)}</a>`).join('')}
          </div>
        </div>

        <div>
          <h4>روابط سريعة</h4>
          <ul class="footer__links">
            <li><a href="index.html">الرئيسية</a></li>
            <li><a href="about.html">عن الشركة</a></li>
            <li><a href="categories.html">أقسام المنتجات</a></li>
            <li><a href="products.html">كل المنتجات</a></li>
            <li><a href="gallery.html">معرض الصور</a></li>
            <li><a href="contact.html">تواصل معنا</a></li>
            <li><a href="contact.html#faq-anchor">الأسئلة الشائعة</a></li>
          </ul>
        </div>

        <div>
          <h4>أقسامنا</h4>
          <ul class="footer__links">
            ${CATEGORIES.slice(0, 7).map(c => `<li><a href="products.html?cat=${c.id}">${c.short}</a></li>`).join('')}
            <li><a href="categories.html">عرض كل الأقسام</a></li>
          </ul>
        </div>

        <div>
          <h4>بيانات التواصل</h4>
          <ul class="footer__contact">
            <li>${icon('pin')}<span>${SITE.address}</span></li>
            <li>${icon('phone')}<span>${
              [SITE.phone1, SITE.phone2, SITE.landline].filter(Boolean)
                .map(n => `<a href="tel:${String(n).replace(/\s/g,'')}"><bdi>${n}</bdi></a>`)
                .join('<br>')}</span></li>
            ${SITE.email ? `<li>${icon('mail')}<span><a href="mailto:${SITE.email}">${SITE.email}</a></span></li>` : ''}
            <li>${icon('clock')}<span>${SITE.hours}<br>${SITE.hoursNote}</span></li>
          </ul>
          <a class="btn btn-wa btn-sm" href="${waLink()}" target="_blank" rel="noopener" style="margin-top:6px">
            ${icon('whatsapp')} تواصل واتساب
          </a>
        </div>
      </div>

      <div class="visits">
        <div class="visits__grid">
          <div class="visit">
            <span class="visit__ico">${icon('eye')}</span>
            <span class="visit__txt">
              <span class="visit__n is-loading" id="visitsTotal">…</span>
              <span class="visit__l">إجمالي زوار الموقع</span>
            </span>
          </div>
          <div class="visit">
            <span class="visit__ico">${icon('calendar')}</span>
            <span class="visit__txt">
              <span class="visit__n is-loading" id="visitsMonth">…</span>
              <span class="visit__l">زوار هذا الشهر (${monthLabel()})</span>
            </span>
          </div>
        </div>
      </div>

      ${SITE.demo ? `<div class="demo-note">
        ⚠️ نسخة تجريبية — أرقام التواصل والعناوين وروابط السوشيال ميديا مؤقتة لأغراض العرض فقط.
        المنتجات والصور حقيقية من الشركة.
      </div>` : ''}

      <div class="footer__bottom">
        <span>© <span id="year"></span> ${SITE.name} — جميع الحقوق محفوظة.</span>
        <span>تصميم وتطوير <a href="#">نسخة تجريبية</a></span>
      </div>
    </div>
  </footer>

  <a class="fab-wa" href="${waLink()}" target="_blank" rel="noopener" aria-label="اطلب عبر واتساب">
    ${icon('whatsapp')}<span>اطلب عبر واتساب</span>
  </a>
  <button class="to-top" id="toTop" aria-label="العودة لأعلى">${icon('arrowUp')}</button>
  <div class="toast" id="toast">${icon('checkSolid')}<span></span></div>`;

  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
}

/* ---------- بطاقة منتج ---------- */
function productCard(p) {
  const c = catById(p.cat);
  const specs =
    `<span class="prod__spec">الكود: ${esc(p.id.toUpperCase())}</span>` +
    (p.group ? `<span class="prod__spec">${esc(p.group)}</span>` : '');
  return `
  <article class="prod reveal">
    <div class="prod__media">
      <img src="${p.img}" alt="${esc(p.name)}" loading="lazy" width="800" height="600">
      ${p.tag ? `<span class="prod__badge">${esc(p.tag)}</span>` : ''}
      ${p.images && p.images.length > 1
        ? `<span class="prod__shots">${p.images.length} صور</span>` : ''}
      <span class="prod__cat">${esc(c ? c.short : '')}</span>
      <a class="prod__quick" href="product.html?id=${p.id}" aria-label="عرض ${esc(p.name)}"><span>عرض التفاصيل</span></a>
    </div>
    <div class="prod__body">
      <h3 class="prod__title"><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
      <p class="prod__desc">${esc(p.desc)}</p>
    </div>
    <div class="prod__specs">${specs}</div>
    <div class="prod__foot">
      <a class="btn btn-wa btn-sm" href="${waLink(p)}" target="_blank" rel="noopener">${icon('whatsapp')} اطلب الآن</a>
      <a class="icon-btn" href="product.html?id=${p.id}" aria-label="تفاصيل المنتج">${icon('arrow')}</a>
    </div>
  </article>`;
}

/* خامة مؤقتة للأقسام اللي لسه مفيش لها صور */
function placeholder(label) {
  return `<div class="ph" role="img" aria-label="${esc(label)} — الصور قريباً">
    <img src="${SITE.logo}" alt="" aria-hidden="true">
    <span>الصور قريباً</span>
  </div>`;
}

/* ---------- بطاقة قسم ---------- */
function categoryCard(c) {
  return `
  <article class="cat-card reveal">
    <a class="cat-card__media" href="products.html?cat=${c.id}" aria-label="${esc(c.name)}">
      ${c.img
        ? `<img src="${c.img}" alt="${esc(c.name)}" loading="lazy" width="900" height="650">`
        : placeholder(c.name)}
      <span class="cat-card__count">${c.count ? c.count + ' منتج' : 'حسب الطلب'}</span>
      <span class="cat-card__ico">${icon(c.icon)}</span>
    </a>
    <div class="cat-card__body">
      <h3 class="cat-card__title"><a href="products.html?cat=${c.id}">${esc(c.name)}</a></h3>
      <p class="cat-card__desc">${esc(c.desc)}</p>
      <a class="cat-card__link" href="products.html?cat=${c.id}">تصفح المنتجات ${icon('arrow')}</a>
    </div>
  </article>`;
}

/* ---------- التفاعلات ---------- */
function initUI() {
  /* الدرج الجانبي */
  const burger = $('#burger'), drawer = $('#drawer');
  if (burger && drawer) {
    const toggle = open => {
      drawer.classList.toggle('is-open', open);
      burger.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', () => toggle(!drawer.classList.contains('is-open')));
    $$('[data-close]', drawer).forEach(b => b.addEventListener('click', () => toggle(false)));
    $$('a', drawer).forEach(a => a.addEventListener('click', () => toggle(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') toggle(false); });
  }

  /* ظل الهيدر + زر العودة لأعلى */
  const header = $('#header'), toTop = $('#toTop');
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-stuck', y > 8);
    if (toTop) toTop.classList.toggle('show', y > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ظهور تدريجي */
  const items = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); obs.unobserve(en.target); } });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(el => io.observe(el));
  } else items.forEach(el => el.classList.add('in'));

  /* العدادات */
  const nums = $$('[data-count]');
  if (nums.length && 'IntersectionObserver' in window) {
    const io2 = new IntersectionObserver((entries, obs) => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        obs.unobserve(en.target);
        const el = en.target, target = +el.dataset.count, sfx = el.dataset.suffix || '';
        const dur = 1500, t0 = performance.now();
        const tick = now => {
          const k = Math.min((now - t0) / dur, 1);
          el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))).toLocaleString(locale()) + sfx;
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: .4 });
    nums.forEach(el => io2.observe(el));
  } else nums.forEach(el => el.textContent = el.dataset.count + (el.dataset.suffix || ''));

  /* الأسئلة الشائعة */
  $$('.faq__q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq__item');
      const body = $('.faq__a', item);
      const open = item.classList.contains('is-open');
      $$('.faq__item').forEach(i => { i.classList.remove('is-open'); $('.faq__a', i).style.maxHeight = null; });
      if (!open) { item.classList.add('is-open'); body.style.maxHeight = body.scrollHeight + 'px'; }
    });
  });
}

/* ============================================================
   عدّاد الزوار
   ------------------------------------------------------------
   عدّادان: إجمالي الزوار منذ إطلاق الموقع، وزوار الشهر الحالي.
   يعتمد على خدمة abacus المجانية — عدّاد مجهول تماماً، لا يُرسل
   أي بيانات عن الزائر، مجرد زيادة رقم.

   الزيارة تُحسب مرة واحدة لكل جلسة تصفّح (sessionStorage)، فالتنقل
   بين صفحات الموقع لا يزوّد العدّاد. باقي الصفحات تقرأ الرقم فقط.
   ============================================================ */

/* اسم الشهر الحالي بالعربي، مثل: أكتوبر 2026 */
function monthLabel(d = new Date()) {
  const m = ['يناير','فبراير','مارس','أبريل','مايو','يونيو',
             'يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  return m[d.getMonth()] + ' ' + d.getFullYear();
}
/* مفتاح الشهر: m-2026-10 */
function monthKey(d = new Date()) {
  return 'm-' + d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
}

function initVisits() {
  const elTotal = $('#visitsTotal'), elMonth = $('#visitsMonth');
  if (!elTotal || !elMonth) return;

  // أول زيارة في الجلسة بتزوّد العدّاد، وباقي الصفحات بتقرأ بس
  let counted = false;
  try { counted = sessionStorage.getItem('sm-visit') === '1'; } catch (e) {}
  if (!counted) { try { sessionStorage.setItem('sm-visit', '1'); } catch (e) {} }

  fetch('/api/visits', { method: counted ? 'GET' : 'POST', cache: 'no-store' })
    .then(r => r.ok ? r.json() : null)
    .then(d => {
      if (!d) throw new Error('no data');
      [[elTotal, d.total], [elMonth, d.month]].forEach(([el, v]) => {
        el.classList.remove('is-loading');
        countUp(el, v || 0);
      });
    })
    .catch(() => { elTotal.textContent = '—'; elMonth.textContent = '—'; });
}

/* عدّ تصاعدي قصير للرقم */
function countUp(el, target) {
  const dur = 1100, t0 = performance.now();
  const fmt = n => n.toLocaleString(locale());
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = fmt(target); return; }
  const tick = now => {
    const k = Math.min((now - t0) / dur, 1);
    el.textContent = fmt(Math.round(target * (1 - Math.pow(1 - k, 3))));
    if (k < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- إشعار ---------- */
function toast(msg) {
  const t = $('#toast'); if (!t) return;
  $('span', t).textContent = msg;
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ---------- التشغيل ---------- */
async function boot(pageInit) {
  await loadLive();
  renderHeader();
  if (typeof pageInit === 'function') pageInit();
  renderFooter();
  initUI();
  initVisits();
  translateTitle();
  translateTree(document.body);   // ترجمة نصوص الواجهة الثابتة
  watchTranslate();               // وأي محتوى بيتضاف بعد كده
  bindLangToggle();
}
