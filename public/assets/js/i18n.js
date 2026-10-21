/* ============================================================
   الترجمة — عربي / إنجليزي
   ------------------------------------------------------------
   طريقة العمل:
   1) نصوص المحتوى (الأقسام والمنتجات والإعدادات) بتيجي من قاعدة
      البيانات ومعاها نسخة إنجليزية (name_en / desc_en …)، و loadLive
      بيختار النسخة المناسبة حسب اللغة الحالية.
   2) نصوص الواجهة الثابتة بتتترجم من القاموس اللي تحت عن طريق
      المرور على عُقد النص في الصفحة — من غير ما نلمس كل سطر HTML.
      ومراقب (MutationObserver) بيترجم أي محتوى بيتضاف ديناميكياً.
   ============================================================ */
'use strict';

/* ---------- اللغة الحالية ---------- */
const LANGS = { ar: { dir: 'rtl', name: 'العربية', locale: 'ar-EG' },
                en: { dir: 'ltr', name: 'English', locale: 'en-US' } };

function pickLang() {
  try {
    const q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS[q]) { localStorage.setItem('sm-lang', q); return q; }
    const saved = localStorage.getItem('sm-lang');
    if (saved && LANGS[saved]) return saved;
  } catch (e) { /* التخزين ممكن يكون مقفول */ }
  return 'ar';
}
let LANG = pickLang();
const isEn = () => LANG === 'en';
const locale = () => LANGS[LANG].locale;

/* رقم بصيغة اللغة الحالية */
const num = n => Number(n || 0).toLocaleString(locale());

/* يختار الحقل الإنجليزي لو موجود، وإلا يرجع العربي */
function L(obj, field) {
  if (!obj) return '';
  if (isEn()) {
    const v = obj[field + '_en'];
    if (typeof v === 'string' && v.trim()) return v;
  }
  return obj[field] || '';
}

/* ---------- قاموس الواجهة ---------- */
const UI = {
  /* اسم الشركة — يُستخدم في عنوان الصفحة */
  'سوق مصرية فيبر جلاس': 'Souq Masreya Fiberglass',
  'سوق مصرية': 'Souq Masreya',

  /* التنقل والهيدر */
  'الرئيسية': 'Home',
  'عن الشركة': 'About',
  'الأقسام': 'Categories',
  'المنتجات': 'Products',
  'معرض الصور': 'Gallery',
  'تواصل معنا': 'Contact',
  'كل المنتجات': 'All Products',
  'أقسام المنتجات': 'Product Categories',
  'تصفح الأقسام': 'Browse Categories',
  'عرض كل الأقسام': 'View all categories',
  'فتح القائمة': 'Open menu',
  'إغلاق': 'Close',
  'القائمة': 'Menu',
  'مسار التنقل': 'Breadcrumb',
  'العودة لأعلى': 'Back to top',
  'غير موجود': 'Not found',

  /* الهيرو */
  'جودة فائقة .. تدوم طويلاً': 'Outstanding quality .. built to last',
  'منتجات فيبر جلاس لكل الاحتياجات': 'Fiberglass products for every need',
  'بنوفّرلك منتجات فيبر جلاس عالية الجودة تلبي احتياجات مختلف القطاعات بكفاءة ومتانة استثنائية.':
    'We supply high-quality fiberglass products that serve a wide range of sectors with exceptional efficiency and durability.',
  'متانة عالية ومقاومة للتآكل': 'Highly durable and corrosion-resistant',
  'مطابق لأعلى المعايير': 'Meets the highest standards',
  'حلول مخصصة تناسب احتياجك': 'Custom solutions built around your needs',
  'استكشف منتجاتنا': 'Explore our products',
  'اطلب عبر واتساب': 'Order on WhatsApp',

  /* المزايا السريعة */
  'جودة معتمدة': 'Certified quality',
  'خامات أصلية ومطابقة للمواصفات القياسية': 'Genuine materials that meet standard specifications',
  'توفير حسب الطلب': 'Available to order',
  'أي مقاس أو لون أو شكل تحتاجه': 'Any size, colour or shape you need',
  'توريد لكل المحافظات': 'Delivery nationwide',
  'أسطول نقل خاص وفرق تركيب معتمدة': 'Our own transport fleet and certified installation teams',
  'دعم فني دائم': 'Ongoing technical support',
  'استشارة هندسية مجانية قبل الشراء': 'Free engineering consultation before you buy',

  /* عناوين الأقسام */
  'أقسامنا': 'Our divisions',
  'منتجات فيبر جلاس': 'Fiberglass products',
  'لكل الاحتياجات': 'for every need',
  'من نحن': 'About us',
  'توفير الفيبر جلاس': 'Fiberglass supply',
  'لكل القطاعات': 'for every sector',
  'قسم': 'divisions',
  'منتج معروض بالصور': 'products shown with photos',
  'طن تبريد — أقصى سعة برج': 'tons — largest cooling tower',
  'طن تبريد — أصغر سعة برج': 'tons — smallest cooling tower',
  'الأكثر طلباً': 'Most requested',
  'منتجات': 'Products',
  'مختارة': 'selected for you',
  'من كل قسم': 'from every division',
  'نماذج من أكثر منتجاتنا طلباً — اضغط «اطلب الآن» ليصلنا طلبك مباشرة على واتساب.':
    'A sample of our most requested products — tap “Order now” and your request reaches us straight on WhatsApp.',
  'لماذا سوق مصرية؟': 'Why Souq Masreya?',
  'أسباب تجعلنا': 'What makes us',
  'الاختيار الأول': 'the first choice',
  'لعملائنا': 'for our clients',
  'آلية العمل': 'How it works',
  'من الطلب إلى': 'From order to',
  'التركيب': 'installation',
  'في أربع خطوات': 'in four steps',
  'لقطات من': 'A look at',
  'أعمالنا': 'our work',
  'جاهزون لتنفيذ طلبك مهما كان حجمه': 'Ready to handle your order, whatever its size',
  'أرسل لنا المواصفات أو الرسم المطلوب وسيتواصل معك القسم الهندسي بعرض سعر مفصل خلال 48 ساعة.':
    'Send us your specifications or drawing and our engineering team will come back with a detailed quote within 48 hours.',
  'تعرف علينا أكثر': 'Learn more about us',
  'اطلب دراسة فنية مجانية': 'Request a free technical study',
  'تصفح المنتجات': 'Browse products',
  'عرض التفاصيل': 'View details',
  'اطلب الآن': 'Order now',
  'الصور قريباً': 'Photos coming soon',
  'حسب الطلب': 'Available to order',

  /* عن الشركة */
  'قصتنا': 'Our story',
  'مبادئنا': 'Our principles',
  'الرؤية و': 'Vision, ',
  'والقيم': 'and values',
  'الرسالة': 'mission',
  'رؤيتنا': 'Our vision',
  'رسالتنا': 'Our mission',
  'قيمنا': 'Our values',
  'أن نكون الاسم الأول في صناعة الفيبر جلاس في مصر والشرق الأوسط، بمنتجات تنافس المستورد جودةً وسعراً.':
    'To be the leading fiberglass supplyr in Egypt and the Middle East, with products that match imported quality at a fair price.',
  'تقديم حلول فيبر جلاس متكاملة تجمع بين الجودة الهندسية والسعر العادل والالتزام بمواعيد التسليم.':
    'To deliver complete fiberglass solutions that combine engineering quality, fair pricing and on-time delivery.',
  'الأمانة في الخامة، والوضوح في السعر، والاحترام في التعامل، والالتزام بما نعد به عملاءنا.':
    'Honest materials, transparent pricing, respectful service, and keeping every promise we make.',
  'عملاؤنا': 'Our clients',
  'قطاعات': 'Sectors',
  'نخدمها': 'we serve',
  'نعمل مع شركات المقاولات والمصانع والجهات الحكومية والكومباوندات السكنية والمنشآت السياحية.':
    'We work with contractors, factories, government bodies, residential compounds and tourism facilities.',
  'المصانع والمنشآت الصناعية': 'Factories and industrial facilities',
  'أبراج تبريد دائرية ومربعة، تبطين خزانات الحديد والخرسانة، عزل الأسطح والمداخن، ومراوح شفط الهواء.':
    'Round and square cooling towers, steel and concrete tank lining, roof and chimney insulation, and air extraction fans.',
  'المقاولات والمرافق': 'Contracting and utilities',
  'كرفانات ومكاتب موقع، جريتينج وهندريل وسلالم، أغطية بلاعات، رووف كيرب وسكاي لايت.':
    'Caravans and site offices, grating, handrails and ladders, manhole covers, roof curbs and skylights.',
  'النقل والمواصلات': 'Transport',
  'أكصدامات ووش وظهر أتوبيسات، تندات، وشيتات وبلمات عربات التخزين المثلجة.':
    'Bus bumpers, front and rear panels, canopies, and panels for refrigerated vehicles.',
  'الحدائق والمنتجعات': 'Gardens and resorts',
  'حمامات سباحة ولوازمها، زحاليق أطفال، أحواض زهور، وأعمدة إنارة.':
    'Swimming pools and accessories, children’s slides, planters and lighting poles.',
  'ابدأ مشروعك معنا اليوم': 'Start your project with us today',
  'فريقنا الهندسي جاهز لدراسة احتياجك وتقديم أفضل حل بأنسب تكلفة.':
    'Our engineering team is ready to study your requirements and propose the best solution at the right cost.',
  'شركة متخصصة في توفير منتجات الفيبر جلاس لمختلف القطاعات — توفير حسب الرسم والمقاس المطلوب.':
    'A company specialised in supplying fiberglass products for a wide range of sectors — supplied to your drawing and dimensions.',
  'توفير حسب الرسم والمقاس المطلوب — من القطعة الواحدة إلى التوريدات الكبيرة':
    'Supplied to your drawing and dimensions — from a single piece to large supply contracts',
  'خبرة في قطاعات متعددة: المصانع، النقل، المقاولات، المرافق والمستشفيات':
    'Experience across many sectors: industry, transport, contracting, utilities and hospitals',
  'خامات أصلية وطبقة جل كوت خارجية تحمي السطح من الشمس والرطوبة':
    'Genuine materials with an outer gel-coat layer that protects against sun and moisture',
  'توريد وتركيب في الموقع مع متابعة فنية بعد التسليم':
    'Delivery and on-site installation with technical follow-up after handover',
  'توريد وتركيب في الموقع مع متابعة بعد التسليم': 'Delivery and on-site installation with follow-up after handover',
  'توفير حسب الرسم والمقاس — مش مقاسات جاهزة بس': 'Supplied to your drawing and dimensions — not just off-the-shelf sizes',
  'أبراج تبريد دائرية ومربعة من 10 طن حتى 5000 طن تبريد':
    'Round and square cooling towers from 10 up to 5,000 tons',
  'شغلنا بيغطي قطاعات مختلفة: المصانع (أبراج التبريد وتبطين الخزانات وعزل الأسطح والمداخن)، والنقل (أجزاء الأتوبيسات والسيارات وشيتات العربات المثلجة)، والمقاولات والمرافق (الكرفانات والجريتينج والهندريل وأغطية البلاعات ورووف كيرب والسكاي لايت)، بالإضافة للحدائق وحمامات السباحة وأحواض الزهور والزحاليق.':
    'Our work spans several sectors: industry (cooling towers, tank lining, roof and chimney insulation), transport (bus and vehicle parts, refrigerated vehicle panels), contracting and utilities (caravans, grating, handrails, manhole covers, roof curbs and skylights), as well as gardens, swimming pools, planters and children’s slides.',

  /* صفحة المنتجات */
  'بحث في المنتجات': 'Search products',
  'ابحث عن منتج … مثال: خزان، برج تبريد، كشك': 'Search for a product… e.g. tank, cooling tower, cabin',
  'ترتيب النتائج': 'Sort results',
  'تصفية حسب القسم': 'Filter by category',
  'الترتيب: الافتراضي': 'Sort: default',
  'الأكثر طلباً أولاً': 'Most requested first',
  'الاسم: أ ← ي': 'Name: A → Z',
  'الاسم: ي ← أ': 'Name: Z → A',
  'لا توجد نتائج مطابقة': 'No matching results',
  'جرّب كلمة بحث أخرى أو اختر قسماً مختلفاً، أو اسألنا مباشرة على واتساب.':
    'Try another search term or a different category — or just ask us on WhatsApp.',
  'اسأل عن منتجك': 'Ask about your product',
  'تصفح أكثر من ١١٠ منتج فيبر جلاس، واطلب أي منتج مباشرة عبر واتساب بضغطة واحدة.':
    'Browse our fiberglass catalogue and order any product on WhatsApp with a single tap.',
  'القسم ده متوفّر عندنا وبنوفّره حسب الطلب، بس لسه منزّلناش صوره على الموقع. ابعتلنا على واتساب بالمقاس أو الرسم المطلوب ونرد عليك بالتفاصيل والسعر.':
    'We do supply this line to order — we just haven’t uploaded its photos yet. Send us the size or drawing on WhatsApp and we’ll come back with details and pricing.',
  'لم تجد ما تبحث عنه؟': 'Didn’t find what you need?',
  'ننفذ': 'We build',
  'أي مقاس أو شكل': 'any size or shape',
  'بنوفّر أي منتج فيبر جلاس حسب الرسم أو الفكرة أو حتى صورة ترسلها لنا. تواصل معنا وسنتولى الباقي.':
    'We can supply any fiberglass item from a drawing, an idea, or even a photo you send us. Get in touch and we’ll handle the rest.',
  'تواصل عبر واتساب': 'Chat on WhatsApp',
  'أرسل استفسارك': 'Send your enquiry',

  /* صفحة المنتج */
  'تفاصيل المنتج': 'Product details',
  'بيانات المنتج': 'Product information',
  'هذا المنتج غير متاح': 'This product isn’t available',
  'ربما تم تعديل الرابط أو حذف المنتج. يمكنك تصفح كل المنتجات من الزر بالأسفل.':
    'The link may have changed or the product may have been removed. Browse the full catalogue below.',
  'عرض كل المنتجات': 'View all products',
  'السعر: يُحدد حسب المواصفات والكمية': 'Price: based on specification and quantity',
  'القسم': 'Category',
  'النوع': 'Type',
  'كود المنتج': 'Product code',
  'المقاسات': 'Sizes',
  'الخامة': 'Material',
  'تتوفّر حسب الطلب — ابعتلنا المقاس المطلوب': 'Available to order — send us the size you need',
  'فيبر جلاس (راتنج + ألياف زجاجية) بطبقة جل كوت خارجية':
    'Fiberglass (resin + glass fibre) with an outer gel-coat layer',
  'مميزات الفيبر جلاس': 'Why fiberglass',
  'لا يصدأ ولا يتأثر بالرطوبة أو الكيماويات': 'Never rusts; unaffected by moisture or chemicals',
  'خفيف الوزن مقارنة بالحديد والخرسانة — أسهل في النقل والتركيب':
    'Much lighter than steel or concrete — easier to transport and install',
  'عازل للكهرباء والحرارة': 'Electrically and thermally insulating',
  'يتوفّر بأي مقاس أو لون أو شكل حسب الرسم': 'Available in any size, colour or shape to your drawing',
  'اطلب هذا المنتج عبر واتساب': 'Order this product on WhatsApp',
  'اتصل بنا': 'Call us',
  'مشاركة': 'Share',
  'عند الضغط على «اطلب عبر واتساب» ستُفتح محادثة برسالة جاهزة تحتوي على اسم المنتج وكوده ورابطه، يمكنك إرسالها كما هي أو إضافة تفاصيل طلبك.':
    'Tapping “Order on WhatsApp” opens a chat with a ready-made message containing the product name, code and link. Send it as is, or add your own details.',
  'منتجات': 'Products', // (مكرر مقصود للاستخدام كعنوان)
  'ذات صلة': 'you may also like',
  'من نفس القسم': 'from the same category',
  'الصورة السابقة': 'Previous image',
  'الصورة التالية': 'Next image',
  'تم نسخ رابط المنتج': 'Product link copied',
  'تعذّرت المشاركة — انسخ الرابط من شريط العنوان': 'Couldn’t share — copy the link from the address bar',

  /* التواصل */
  'نسعد': 'We’d love to',
  'بتواصلك': 'hear from you',
  'فريقنا في خدمتك — اختر الطريقة الأنسب لك، وسنرد على استفسارك في أسرع وقت.':
    'Our team is here to help — pick whichever channel suits you and we’ll reply as soon as we can.',
  'عنوان الشركة': 'Company address',
  'أرقام الهاتف': 'Phone',
  'البريد الإلكتروني': 'Email',
  'مواعيد العمل': 'Working hours',
  'واتساب المبيعات': 'Sales WhatsApp',
  '— رد فوري خلال دقائق': '— we usually reply within minutes',
  'تابعنا على السوشيال ميديا': 'Follow us',
  'أرسل طلبك أو استفسارك': 'Send your order or enquiry',
  'نموذج التواصل': 'Contact form',
  'املأ البيانات وسيتم تجهيز رسالة واتساب جاهزة للإرسال إلى فريق المبيعات.':
    'Fill in the form and we’ll prepare a WhatsApp message ready to send to our sales team.',
  'الاسم': 'Name',
  'الاسم بالكامل': 'Full name',
  'رقم الهاتف': 'Phone number',
  'المحافظة / المدينة': 'Governorate / city',
  'مثال: القاهرة': 'e.g. Cairo',
  'القسم المطلوب': 'Category',
  '— اختر القسم —': '— Select a category —',
  'منتج مخصص حسب الطلب': 'Custom product',
  'الموضوع': 'Subject',
  'مثال: طلب عرض سعر خزان 5000 لتر': 'e.g. Quote request for a 5,000 L tank',
  'تفاصيل الطلب': 'Order details',
  'اكتب المقاسات والكميات وأي تفاصيل تساعدنا في تجهيز عرض السعر…':
    'Tell us sizes, quantities and anything else that helps us prepare your quote…',
  'إرسال عبر واتساب': 'Send on WhatsApp',
  'إرسال بالبريد': 'Send by email',
  '🔒 نسخة تجريبية — لا يتم حفظ أي بيانات على أي خادم، الرسالة تُفتح في تطبيق واتساب أو البريد لديك فقط.':
    '🔒 Nothing is stored on any server — the message simply opens in your own WhatsApp or email app.',
  'من فضلك اكتب اسمك': 'Please enter your name',
  'من فضلك اكتب رقم هاتف صحيح': 'Please enter a valid phone number',
  'من فضلك اكتب تفاصيل طلبك': 'Please describe your request',
  'من فضلك أكمل الحقول المطلوبة': 'Please complete the required fields',
  'تم تجهيز رسالة واتساب — اضغط إرسال داخل التطبيق':
    'Your WhatsApp message is ready — just hit send in the app',
  'موقع الشركة': 'Company location',
  'تجدنا': 'Find us',
  'هنا': 'here',
  'موقع الشركة على الخريطة': 'Company location on the map',
  'الأسئلة الشائعة': 'FAQ',
  'أكثر ما يُسأل': 'Frequently asked',
  'إجابات على': 'Answers to',
  'ما الذي': 'what',
  'يميزنا': 'people ask most',
  'تفضل المكالمة المباشرة؟': 'Prefer to call?',
  'خط المبيعات متاح من السبت إلى الخميس، من 9 صباحاً حتى 6 مساءً.':
    'Our sales line is open Saturday to Thursday, 9am to 6pm.',
  'محادثة واتساب': 'WhatsApp chat',
  'تحتاج مقاساً أو تصميماً خاصاً؟': 'Need a custom size or design?',

  /* الفوتر */
  'روابط سريعة': 'Quick links',
  'أقسامنا': 'Our divisions',
  'بيانات التواصل': 'Contact details',
  'تواصل واتساب': 'WhatsApp us',
  'إجمالي زوار الموقع': 'Total visitors',
  'سوق مصرية فيبر جلاس — جميع الحقوق محفوظة.': 'Souq Masreya Fiberglass — all rights reserved.',
  'تصميم وتطوير': 'Designed and developed by',
  'نسخة تجريبية': 'demo build',

  /* 404 */
  'الصفحة دي مش موجودة': 'This page doesn’t exist',
  'يمكن الرابط اتغيّر أو المنتج اتشال. تقدر ترجع للرئيسية أو تتصفح كل المنتجات.':
    'The link may have changed or the item may have been removed. Head back home or browse the catalogue.',
  'الصفحة الرئيسية': 'Home page',

  /* معرض الصور */
  'كل صور أعمالنا في مكان واحد — اضغط أي صورة لعرضها بالحجم الكامل.':
    'Every photo of our work in one place — tap any image to view it full size.',
  'كل الصور': 'All photos',
  'صورة': 'photo',
  'صور': 'photos',
  'عرض المنتج': 'View product',
  'لا توجد صور في هذا القسم': 'No photos in this category yet',
  'إغلاق المعرض': 'Close viewer',

  /* عام */
  'بيانات الشركة': 'Company details',
  'طلبك': 'your order',
  'كيف': 'How',
  'من': 'from'
};

/* ---------- قواعد بالأنماط ---------- */
const RX = [
  [/^(\d[\d,٬.٠-٩]*)\s+منتج$/, (m, n) => `${n} product${n === '1' ? '' : 's'}`],
  [/^(\d[\d,٬.٠-٩]*)\s+صور(?:ة)?$/, (m, n) => `${n} photo${n === '1' ? '' : 's'}`],
  [/^(\d[\d,٬.٠-٩]*)\s+قسم$/, (m, n) => `${n} divisions`],
  [/^الكود:\s*(.+)$/, (m, c) => `Code: ${c}`],
  [/^صورة\s+(\d+)$/, (m, n) => `Image ${n}`],
  [/^زوار هذا الشهر\s*\((.+)\)$/, (m, mo) => `Visitors this month (${mo})`],
  [/^كود المنتج:\s*(\S+)\s*—\s*القسم:\s*(.+)$/, (m, code, cat) => `Product code: ${code} — Category: ${cat}`],
  [/^كل الأقسام\s*\((\d+)\)$/, (m, n) => `All categories (${n})`],
  [/^(.+?)\s*\((\d+)\)$/, (m, name, n) => `${UI[name] || name} (${n})`],
  [/^عرض\s+(.+)$/, (m, name) => `View ${name}`],
  [/^اسأل عن\s+(.+)$/, (m, name) => `Ask about ${name}`],
  [/^(.+?)\s+—\s+الصور قريباً$/, (m, name) => `${name} — photos coming soon`],
  [/^عرض كل المنتجات\s*\((\d+)\s*منتج\)$/, (m, n) => `View all products (${n})`],
  [/^(\d+)\s*قسماً يغطي احتياجات المصانع والنقل والمقاولات والمرافق،\s*بـ\s*(\d+)\s*منتجاً معروضاً بالصور — وأي مقاس آخر يتوفّر حسب الطلب\.$/,
    (m, c, p) => `${c} divisions covering industry, transport, contracting and utilities, with ${p} products shown in photos — and any other size available to order.`],
  [/^(\d+)\s*قسم يغطي المصانع والنقل والمقاولات والمرافق$/,
    (m, c) => `${c} divisions covering industry, transport, contracting and utilities`],
  [/^(\d+)\s*قسماً متكاملاً يضم أكثر من .+ منتج فيبر جلاس — جاهز أو متوفّر حسب الطلب\.$/,
    (m, c) => `${c} complete divisions covering our full fiberglass range — in stock or available to order.`]
];

function tr(s) {
  if (!isEn()) return null;
  const k = s.replace(/\s+/g, ' ').trim();
  if (!k) return null;
  if (UI[k] !== undefined) return UI[k];
  for (const [re, fn] of RX) {
    const m = k.match(re);
    if (m) return fn(...m);
  }
  return null;
}

/* ترجمة نص واحد — بترجّع العربي زي ما هو لو مفيش ترجمة */
function T(s) { const v = tr(s); return v === null ? s : v; }

/* ---------- تطبيق الترجمة على الصفحة ---------- */
const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA']);

function translateTree(root) {
  if (!isEn() || !root) return;
  const doc = root.ownerDocument || document;
  const walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: n => (n.parentNode && SKIP.has(n.parentNode.nodeName))
      ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  const jobs = [];
  let n;
  while ((n = walker.nextNode())) {
    const t = tr(n.nodeValue);
    if (t !== null && t !== n.nodeValue) jobs.push([n, t]);
  }
  jobs.forEach(([node, text]) => {
    // نحافظ على المسافات حوالين النص
    const lead = node.nodeValue.match(/^\s*/)[0];
    const tail = node.nodeValue.match(/\s*$/)[0];
    node.nodeValue = lead + text + tail;
  });

  const els = root.nodeType === 1 ? [root, ...root.querySelectorAll('*')] : [...root.querySelectorAll('*')];
  els.forEach(el => {
    if (!el.getAttribute) return;
    ['placeholder', 'title', 'aria-label', 'alt'].forEach(a => {
      const v = el.getAttribute(a);
      if (!v) return;
      const t = tr(v);
      if (t !== null && t !== v) el.setAttribute(a, t);
    });
  });
}

/* يترجم أي محتوى بيتضاف للصفحة بعد التحميل */
function watchTranslate() {
  if (!isEn()) return;
  new MutationObserver(muts => {
    for (const m of muts)
      for (const node of m.addedNodes)
        if (node.nodeType === 1 || node.nodeType === 3) {
          if (node.nodeType === 3) {
            const t = tr(node.nodeValue);
            if (t !== null && t !== node.nodeValue) node.nodeValue = t;
          } else translateTree(node);
        }
  }).observe(document.body, { childList: true, subtree: true });
}

/* ---------- زر تبديل اللغة ---------- */
function setLang(code) {
  if (!LANGS[code] || code === LANG) return;
  try { localStorage.setItem('sm-lang', code); } catch (e) {}
  const u = new URL(location.href);
  u.searchParams.delete('lang');
  location.href = u.toString();     // إعادة تحميل عشان تتبدّل البيانات والاتجاه
}
function langToggleHTML() {
  return `<div class="lang" role="group" aria-label="Language">
    ${Object.keys(LANGS).map(c =>
      `<button type="button" data-lang="${c}" class="${c === LANG ? 'is-active' : ''}"
        ${c === LANG ? 'aria-current="true"' : ''}>${c === 'ar' ? 'ع' : 'EN'}</button>`).join('')}
  </div>`;
}
function bindLangToggle(root = document) {
  root.querySelectorAll('[data-lang]').forEach(b =>
    b.addEventListener('click', () => setLang(b.dataset.lang)));
}

/* ترجمة عنوان الصفحة (الجزء الثابت منه) */
function translateTitle() {
  if (!isEn() || !document.title) return;
  document.title = document.title.split('|')
    .map(part => {
      const t = tr(part.trim());
      return t === null ? part.trim() : t;
    })
    .join(' | ');
  const md = document.querySelector('meta[name="description"]');
  if (md) { const t = tr(md.content); if (t !== null) md.content = t; }
}

/* ---------- تهيئة اتجاه الصفحة ---------- */
function applyDir() {
  const html = document.documentElement;
  html.setAttribute('lang', LANG);
  html.setAttribute('dir', LANGS[LANG].dir);
  html.setAttribute('data-lang', LANG);
}
applyDir();
