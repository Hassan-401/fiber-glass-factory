/* ملف البيانات — مولَّد تلقائياً بواسطة tools/build-data.js
 * لا تعدّل هذا الملف يدوياً؛ عدّل مجلد «داتا» أو السكربت ثم أعد التشغيل:
 *     node tools/build-data.js
 * بيانات التواصل والسوشيال ميديا في assets/js/config.js (عدّلها هناك).
 */

const CATEGORIES = [
  {
    "id": "cooling-towers",
    "name": "أبراج تبريد فيبر جلاس",
    "short": "أبراج تبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "icon": "tower",
    "count": 24,
    "img": "assets/img/products/cooling-towers/01.webp"
  },
  {
    "id": "bus-parts",
    "name": "أجزاء أتوبيسات وسيارات فيبر جلاس",
    "short": "أجزاء أتوبيسات وسيارات",
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "icon": "bus",
    "count": 6,
    "img": "assets/img/products/bus-parts/01.webp"
  },
  {
    "id": "planters",
    "name": "أحواض زهور فيبر جلاس",
    "short": "أحواض زهور",
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "icon": "planter",
    "count": 11,
    "img": "assets/img/products/planters/01.webp"
  },
  {
    "id": "light-poles",
    "name": "أعمدة إنارة فيبر جلاس",
    "short": "أعمدة إنارة",
    "desc": "أعمدة إنارة فيبر جلاس بمقاسات وتصميمات مختلفة، خفيفة الوزن وعازلة للكهرباء ومقاومة للصدأ.",
    "icon": "lamp",
    "count": 3,
    "img": "assets/img/products/light-poles/01.webp"
  },
  {
    "id": "tank-lining",
    "name": "تبطين خزانات حديد وخرسانة",
    "short": "تبطين خزانات",
    "desc": "تبطين أحواض وخزانات الحديد والخرسانة بالفيبر جلاس المقاوم للكيماويات.",
    "icon": "lining",
    "count": 2,
    "img": "assets/img/products/tank-lining/01.webp"
  },
  {
    "id": "pools",
    "name": "حمامات سباحة ولوازمها",
    "short": "حمامات سباحة",
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "icon": "pool",
    "count": 5,
    "img": "assets/img/products/pools/01.webp"
  },
  {
    "id": "roof-curb",
    "name": "رووف كيرب فيبر جلاس",
    "short": "رووف كيرب",
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "icon": "roof",
    "count": 18,
    "img": "assets/img/products/roof-curb/01.webp"
  },
  {
    "id": "slides",
    "name": "زحاليق فيبر جلاس",
    "short": "زحاليق",
    "desc": "زحاليق فيبر جلاس للأطفال بمقاسات وألوان مختلفة، آمنة وسطح ناعم لا يسبب احتكاكاً.",
    "icon": "slide",
    "count": 2,
    "img": "assets/img/products/slides/01.webp"
  },
  {
    "id": "skylight",
    "name": "سكاي لايت شفافة وشيتات معرجة",
    "short": "سكاي لايت وشيتات",
    "desc": "ألواح شفافة ومعرجة فيبر جلاس لإضاءة وتغطية المنشآت.",
    "icon": "skylight",
    "count": 1,
    "img": "assets/img/products/skylight/01.webp"
  },
  {
    "id": "reefer-panels",
    "name": "شيتات وبلمات عربات التخزين المثلجة",
    "short": "شيتات وبلمات",
    "desc": "شيتات وبلمات فيبر جلاس للعربات المثلجة.",
    "icon": "truck",
    "count": 2,
    "img": "assets/img/products/reefer-panels/01.webp"
  },
  {
    "id": "roof-insulation",
    "name": "عزل أسطح حديدية ومداخن",
    "short": "عزل أسطح ومداخن",
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "icon": "shield",
    "count": 17,
    "img": "assets/img/products/roof-insulation/01.webp"
  },
  {
    "id": "grating",
    "name": "قطاعات وهندريل وسلالم (جريتينج)",
    "short": "جريتينج وهندريل",
    "desc": "جميع مقاسات مشايات الفيبر جلاس (الجريتينج) والهندريل والسلالم والأسوار.",
    "icon": "grating",
    "count": 2,
    "img": "assets/img/products/grating/01.webp"
  },
  {
    "id": "caravans",
    "name": "كرفانات فيبر جلاس",
    "short": "كرفانات",
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "icon": "caravan",
    "count": 55,
    "img": "assets/img/products/caravans/01.webp"
  },
  {
    "id": "medical-covers",
    "name": "كفرات أجهزة طبية ومعملية",
    "short": "كفرات أجهزة طبية",
    "desc": "كفرات أجهزة طبية ومعملية فيبر جلاس تُصنَّع حسب الرسم والمقاس المطلوب.",
    "icon": "medical",
    "count": 0,
    "img": null
  },
  {
    "id": "boats",
    "name": "مراكب ولنشات فيبر جلاس",
    "short": "مراكب ولنشات",
    "desc": "تصنيع مراكب ولنشات فيبر جلاس وأعمال الإصلاح والترميم.",
    "icon": "boat",
    "count": 0,
    "img": null
  },
  {
    "id": "fans",
    "name": "مراوح شفط الهواء ذاتية الحركة",
    "short": "مراوح شفط هواء",
    "desc": "مراوح شفط الهواء ذاتية الحركة من الألومنيوم، تعمل بحركة الهواء بدون كهرباء.",
    "icon": "fan",
    "count": 0,
    "img": null
  },
  {
    "id": "pipes-tanks",
    "name": "مواسير وخزانات فيبر جلاس",
    "short": "مواسير وخزانات",
    "desc": "مواسير وخزانات فيبر جلاس بمقاسات مختلفة، مقاومة للتآكل والكيماويات.",
    "icon": "tank",
    "count": 0,
    "img": null
  },
  {
    "id": "manhole-covers",
    "name": "أغطية بلاعات فيبر جلاس",
    "short": "أغطية بلاعات",
    "desc": "أغطية بلاعات فيبر جلاس خفيفة الوزن وغير قابلة للصدأ أو السرقة.",
    "icon": "manhole",
    "count": 3,
    "img": "assets/img/products/manhole-covers/01.webp"
  }
];

const PRODUCTS = [
  {
    "id": "cooling-towers-01",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 20 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": true,
    "img": "assets/img/products/cooling-towers/01.webp",
    "images": [
      "assets/img/products/cooling-towers/01.webp"
    ]
  },
  {
    "id": "cooling-towers-02",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 30 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/02.webp",
    "images": [
      "assets/img/products/cooling-towers/02.webp"
    ]
  },
  {
    "id": "cooling-towers-03",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 50 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/03.webp",
    "images": [
      "assets/img/products/cooling-towers/03.webp"
    ]
  },
  {
    "id": "cooling-towers-04",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 60 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/04.webp",
    "images": [
      "assets/img/products/cooling-towers/04.webp"
    ]
  },
  {
    "id": "cooling-towers-05",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 80 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/05.webp",
    "images": [
      "assets/img/products/cooling-towers/05.webp"
    ]
  },
  {
    "id": "cooling-towers-06",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 100 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/06.webp",
    "images": [
      "assets/img/products/cooling-towers/06.webp"
    ]
  },
  {
    "id": "cooling-towers-07",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 125 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/07.webp",
    "images": [
      "assets/img/products/cooling-towers/07.webp"
    ]
  },
  {
    "id": "cooling-towers-08",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 200 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/08.webp",
    "images": [
      "assets/img/products/cooling-towers/08.webp"
    ]
  },
  {
    "id": "cooling-towers-09",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري – موديل 09",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/09.webp",
    "images": [
      "assets/img/products/cooling-towers/09.webp"
    ]
  },
  {
    "id": "cooling-towers-10",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع 100 طن – صورة 1",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/10.webp",
    "images": [
      "assets/img/products/cooling-towers/10.webp"
    ]
  },
  {
    "id": "cooling-towers-11",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع 100 طن – صورة 2",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/11.webp",
    "images": [
      "assets/img/products/cooling-towers/11.webp"
    ]
  },
  {
    "id": "cooling-towers-12",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع – موديل 12",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/12.webp",
    "images": [
      "assets/img/products/cooling-towers/12.webp"
    ]
  },
  {
    "id": "cooling-towers-13",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع – موديل 13",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/13.webp",
    "images": [
      "assets/img/products/cooling-towers/13.webp"
    ]
  },
  {
    "id": "cooling-towers-14",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع – موديل 14",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/14.webp",
    "images": [
      "assets/img/products/cooling-towers/14.webp"
    ]
  },
  {
    "id": "cooling-towers-15",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع – موديل 15",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/15.webp",
    "images": [
      "assets/img/products/cooling-towers/15.webp"
    ]
  },
  {
    "id": "cooling-towers-16",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع – موديل 16",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/16.webp",
    "images": [
      "assets/img/products/cooling-towers/16.webp"
    ]
  },
  {
    "id": "cooling-towers-17",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 17",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/17.webp",
    "images": [
      "assets/img/products/cooling-towers/17.webp"
    ]
  },
  {
    "id": "cooling-towers-18",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 18",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/18.webp",
    "images": [
      "assets/img/products/cooling-towers/18.webp"
    ]
  },
  {
    "id": "cooling-towers-19",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 19",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/19.webp",
    "images": [
      "assets/img/products/cooling-towers/19.webp"
    ]
  },
  {
    "id": "cooling-towers-20",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 20",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/20.webp",
    "images": [
      "assets/img/products/cooling-towers/20.webp"
    ]
  },
  {
    "id": "cooling-towers-21",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 21",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/21.webp",
    "images": [
      "assets/img/products/cooling-towers/21.webp"
    ]
  },
  {
    "id": "cooling-towers-22",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 22",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/22.webp",
    "images": [
      "assets/img/products/cooling-towers/22.webp"
    ]
  },
  {
    "id": "cooling-towers-23",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 23",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/23.webp",
    "images": [
      "assets/img/products/cooling-towers/23.webp"
    ]
  },
  {
    "id": "cooling-towers-24",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 24",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/24.webp",
    "images": [
      "assets/img/products/cooling-towers/24.webp"
    ]
  },
  {
    "id": "bus-parts-01",
    "cat": "bus-parts",
    "name": "أكصدام فيبر جلاس",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": true,
    "img": "assets/img/products/bus-parts/01.webp",
    "images": [
      "assets/img/products/bus-parts/01.webp"
    ]
  },
  {
    "id": "bus-parts-02",
    "cat": "bus-parts",
    "name": "تندة جرار فيبر جلاس",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/bus-parts/02.webp",
    "images": [
      "assets/img/products/bus-parts/02.webp"
    ]
  },
  {
    "id": "bus-parts-03",
    "cat": "bus-parts",
    "name": "تندة عربة كهرباء فيبر جلاس",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/bus-parts/03.webp",
    "images": [
      "assets/img/products/bus-parts/03.webp"
    ]
  },
  {
    "id": "bus-parts-04",
    "cat": "bus-parts",
    "name": "ظهر أتوبيس فيبر جلاس",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/bus-parts/04.webp",
    "images": [
      "assets/img/products/bus-parts/04.webp"
    ]
  },
  {
    "id": "bus-parts-05",
    "cat": "bus-parts",
    "name": "وش أتوبيس فيبر جلاس",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/bus-parts/05.webp",
    "images": [
      "assets/img/products/bus-parts/05.webp"
    ]
  },
  {
    "id": "bus-parts-06",
    "cat": "bus-parts",
    "name": "أجزاء أتوبيسات وسيارات – موديل 06",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/bus-parts/06.webp",
    "images": [
      "assets/img/products/bus-parts/06.webp"
    ]
  },
  {
    "id": "planters-01",
    "cat": "planters",
    "name": "أحواض زهور – موديل 01",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": true,
    "img": "assets/img/products/planters/01.webp",
    "images": [
      "assets/img/products/planters/01.webp"
    ]
  },
  {
    "id": "planters-02",
    "cat": "planters",
    "name": "أحواض زهور – موديل 02",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/02.webp",
    "images": [
      "assets/img/products/planters/02.webp"
    ]
  },
  {
    "id": "planters-03",
    "cat": "planters",
    "name": "أحواض زهور – موديل 03",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/03.webp",
    "images": [
      "assets/img/products/planters/03.webp"
    ]
  },
  {
    "id": "planters-04",
    "cat": "planters",
    "name": "أحواض زهور – موديل 04",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/04.webp",
    "images": [
      "assets/img/products/planters/04.webp"
    ]
  },
  {
    "id": "planters-05",
    "cat": "planters",
    "name": "أحواض زهور – موديل 05",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/05.webp",
    "images": [
      "assets/img/products/planters/05.webp"
    ]
  },
  {
    "id": "planters-06",
    "cat": "planters",
    "name": "أحواض زهور – موديل 06",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/06.webp",
    "images": [
      "assets/img/products/planters/06.webp"
    ]
  },
  {
    "id": "planters-07",
    "cat": "planters",
    "name": "أحواض زهور – موديل 07",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/07.webp",
    "images": [
      "assets/img/products/planters/07.webp"
    ]
  },
  {
    "id": "planters-08",
    "cat": "planters",
    "name": "أحواض زهور – موديل 08",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/08.webp",
    "images": [
      "assets/img/products/planters/08.webp"
    ]
  },
  {
    "id": "planters-09",
    "cat": "planters",
    "name": "أحواض زهور – موديل 09",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/09.webp",
    "images": [
      "assets/img/products/planters/09.webp"
    ]
  },
  {
    "id": "planters-10",
    "cat": "planters",
    "name": "أحواض زهور – موديل 10",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/10.webp",
    "images": [
      "assets/img/products/planters/10.webp"
    ]
  },
  {
    "id": "planters-11",
    "cat": "planters",
    "name": "أحواض زهور – موديل 11",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/11.webp",
    "images": [
      "assets/img/products/planters/11.webp"
    ]
  },
  {
    "id": "light-poles-01",
    "cat": "light-poles",
    "name": "أعمدة إنارة – موديل 01",
    "group": null,
    "desc": "أعمدة إنارة فيبر جلاس بمقاسات وتصميمات مختلفة، خفيفة الوزن وعازلة للكهرباء ومقاومة للصدأ.",
    "featured": true,
    "img": "assets/img/products/light-poles/01.webp",
    "images": [
      "assets/img/products/light-poles/01.webp"
    ]
  },
  {
    "id": "light-poles-02",
    "cat": "light-poles",
    "name": "أعمدة إنارة – موديل 02",
    "group": null,
    "desc": "أعمدة إنارة فيبر جلاس بمقاسات وتصميمات مختلفة، خفيفة الوزن وعازلة للكهرباء ومقاومة للصدأ.",
    "featured": false,
    "img": "assets/img/products/light-poles/02.webp",
    "images": [
      "assets/img/products/light-poles/02.webp"
    ]
  },
  {
    "id": "light-poles-03",
    "cat": "light-poles",
    "name": "أعمدة إنارة – موديل 03",
    "group": null,
    "desc": "أعمدة إنارة فيبر جلاس بمقاسات وتصميمات مختلفة، خفيفة الوزن وعازلة للكهرباء ومقاومة للصدأ.",
    "featured": false,
    "img": "assets/img/products/light-poles/03.webp",
    "images": [
      "assets/img/products/light-poles/03.webp"
    ]
  },
  {
    "id": "tank-lining-01",
    "cat": "tank-lining",
    "name": "تبطين خزانات – موديل 01",
    "group": null,
    "desc": "تبطين أحواض وخزانات الحديد والخرسانة بالفيبر جلاس المقاوم للكيماويات.",
    "featured": true,
    "img": "assets/img/products/tank-lining/01.webp",
    "images": [
      "assets/img/products/tank-lining/01.webp"
    ]
  },
  {
    "id": "tank-lining-02",
    "cat": "tank-lining",
    "name": "تبطين خزانات – موديل 02",
    "group": null,
    "desc": "تبطين أحواض وخزانات الحديد والخرسانة بالفيبر جلاس المقاوم للكيماويات.",
    "featured": false,
    "img": "assets/img/products/tank-lining/02.webp",
    "images": [
      "assets/img/products/tank-lining/02.webp"
    ]
  },
  {
    "id": "pools-01",
    "cat": "pools",
    "name": "وحدة حمام سباحة فيبر جلاس",
    "group": null,
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "featured": true,
    "img": "assets/img/products/pools/01.webp",
    "images": [
      "assets/img/products/pools/01.webp"
    ]
  },
  {
    "id": "pools-02",
    "cat": "pools",
    "name": "حمامات سباحة – موديل 02",
    "group": null,
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/pools/02.webp",
    "images": [
      "assets/img/products/pools/02.webp",
      "assets/img/products/pools/03.webp"
    ]
  },
  {
    "id": "pools-03",
    "cat": "pools",
    "name": "حمامات سباحة – موديل 03",
    "group": null,
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/pools/04.webp",
    "images": [
      "assets/img/products/pools/04.webp"
    ]
  },
  {
    "id": "pools-04",
    "cat": "pools",
    "name": "حمامات سباحة – موديل 04",
    "group": null,
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/pools/05.webp",
    "images": [
      "assets/img/products/pools/05.webp"
    ]
  },
  {
    "id": "pools-05",
    "cat": "pools",
    "name": "حمامات سباحة – موديل 05",
    "group": null,
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/pools/06.webp",
    "images": [
      "assets/img/products/pools/06.webp"
    ]
  },
  {
    "id": "roof-curb-01",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 01",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": true,
    "img": "assets/img/products/roof-curb/01.webp",
    "images": [
      "assets/img/products/roof-curb/01.webp"
    ]
  },
  {
    "id": "roof-curb-02",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 02",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/02.webp",
    "images": [
      "assets/img/products/roof-curb/02.webp"
    ]
  },
  {
    "id": "roof-curb-03",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 03",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/03.webp",
    "images": [
      "assets/img/products/roof-curb/03.webp"
    ]
  },
  {
    "id": "roof-curb-04",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 04",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/04.webp",
    "images": [
      "assets/img/products/roof-curb/04.webp"
    ]
  },
  {
    "id": "roof-curb-05",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 05",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/05.webp",
    "images": [
      "assets/img/products/roof-curb/05.webp",
      "assets/img/products/roof-curb/16.webp"
    ]
  },
  {
    "id": "roof-curb-06",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 06",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/06.webp",
    "images": [
      "assets/img/products/roof-curb/06.webp",
      "assets/img/products/roof-curb/15.webp"
    ]
  },
  {
    "id": "roof-curb-07",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 07",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/07.webp",
    "images": [
      "assets/img/products/roof-curb/07.webp",
      "assets/img/products/roof-curb/14.webp"
    ]
  },
  {
    "id": "roof-curb-08",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 08",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/08.webp",
    "images": [
      "assets/img/products/roof-curb/08.webp"
    ]
  },
  {
    "id": "roof-curb-09",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 09",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/09.webp",
    "images": [
      "assets/img/products/roof-curb/09.webp"
    ]
  },
  {
    "id": "roof-curb-10",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 10",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/10.webp",
    "images": [
      "assets/img/products/roof-curb/10.webp"
    ]
  },
  {
    "id": "roof-curb-11",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 11",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/11.webp",
    "images": [
      "assets/img/products/roof-curb/11.webp"
    ]
  },
  {
    "id": "roof-curb-12",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 12",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/12.webp",
    "images": [
      "assets/img/products/roof-curb/12.webp"
    ]
  },
  {
    "id": "roof-curb-13",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 13",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/13.webp",
    "images": [
      "assets/img/products/roof-curb/13.webp"
    ]
  },
  {
    "id": "roof-curb-14",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 14",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/17.webp",
    "images": [
      "assets/img/products/roof-curb/17.webp"
    ]
  },
  {
    "id": "roof-curb-15",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 15",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/18.webp",
    "images": [
      "assets/img/products/roof-curb/18.webp"
    ]
  },
  {
    "id": "roof-curb-16",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 16",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/19.webp",
    "images": [
      "assets/img/products/roof-curb/19.webp"
    ]
  },
  {
    "id": "roof-curb-17",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 17",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/20.webp",
    "images": [
      "assets/img/products/roof-curb/20.webp"
    ]
  },
  {
    "id": "roof-curb-18",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 18",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/21.webp",
    "images": [
      "assets/img/products/roof-curb/21.webp"
    ]
  },
  {
    "id": "slides-01",
    "cat": "slides",
    "name": "زحاليق – موديل 01",
    "group": null,
    "desc": "زحاليق فيبر جلاس للأطفال بمقاسات وألوان مختلفة، آمنة وسطح ناعم لا يسبب احتكاكاً.",
    "featured": true,
    "img": "assets/img/products/slides/01.webp",
    "images": [
      "assets/img/products/slides/01.webp"
    ]
  },
  {
    "id": "slides-02",
    "cat": "slides",
    "name": "زحاليق – موديل 02",
    "group": null,
    "desc": "زحاليق فيبر جلاس للأطفال بمقاسات وألوان مختلفة، آمنة وسطح ناعم لا يسبب احتكاكاً.",
    "featured": false,
    "img": "assets/img/products/slides/02.webp",
    "images": [
      "assets/img/products/slides/02.webp"
    ]
  },
  {
    "id": "skylight-01",
    "cat": "skylight",
    "name": "سكاي لايت وشيتات – موديل 01",
    "group": null,
    "desc": "ألواح شفافة ومعرجة فيبر جلاس لإضاءة وتغطية المنشآت.",
    "featured": true,
    "img": "assets/img/products/skylight/01.webp",
    "images": [
      "assets/img/products/skylight/01.webp"
    ]
  },
  {
    "id": "reefer-panels-01",
    "cat": "reefer-panels",
    "name": "شيتات وبلمات – موديل 01",
    "group": null,
    "desc": "شيتات وبلمات فيبر جلاس للعربات المثلجة.",
    "featured": true,
    "img": "assets/img/products/reefer-panels/01.webp",
    "images": [
      "assets/img/products/reefer-panels/01.webp"
    ]
  },
  {
    "id": "reefer-panels-02",
    "cat": "reefer-panels",
    "name": "شيتات وبلمات – موديل 02",
    "group": null,
    "desc": "شيتات وبلمات فيبر جلاس للعربات المثلجة.",
    "featured": false,
    "img": "assets/img/products/reefer-panels/02.webp",
    "images": [
      "assets/img/products/reefer-panels/02.webp"
    ]
  },
  {
    "id": "roof-insulation-01",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 01",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": true,
    "img": "assets/img/products/roof-insulation/01.webp",
    "images": [
      "assets/img/products/roof-insulation/01.webp"
    ]
  },
  {
    "id": "roof-insulation-02",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 02",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/02.webp",
    "images": [
      "assets/img/products/roof-insulation/02.webp"
    ]
  },
  {
    "id": "roof-insulation-03",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 03",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/03.webp",
    "images": [
      "assets/img/products/roof-insulation/03.webp"
    ]
  },
  {
    "id": "roof-insulation-04",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 04",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/04.webp",
    "images": [
      "assets/img/products/roof-insulation/04.webp"
    ]
  },
  {
    "id": "roof-insulation-05",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 05",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/05.webp",
    "images": [
      "assets/img/products/roof-insulation/05.webp"
    ]
  },
  {
    "id": "roof-insulation-06",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 06",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/06.webp",
    "images": [
      "assets/img/products/roof-insulation/06.webp"
    ]
  },
  {
    "id": "roof-insulation-07",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 07",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/07.webp",
    "images": [
      "assets/img/products/roof-insulation/07.webp"
    ]
  },
  {
    "id": "roof-insulation-08",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 08",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/08.webp",
    "images": [
      "assets/img/products/roof-insulation/08.webp",
      "assets/img/products/roof-insulation/18.webp"
    ]
  },
  {
    "id": "roof-insulation-09",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 09",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/09.webp",
    "images": [
      "assets/img/products/roof-insulation/09.webp"
    ]
  },
  {
    "id": "roof-insulation-10",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 10",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/10.webp",
    "images": [
      "assets/img/products/roof-insulation/10.webp"
    ]
  },
  {
    "id": "roof-insulation-11",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 11",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/11.webp",
    "images": [
      "assets/img/products/roof-insulation/11.webp",
      "assets/img/products/roof-insulation/13.webp",
      "assets/img/products/roof-insulation/17.webp"
    ]
  },
  {
    "id": "roof-insulation-12",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 12",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/12.webp",
    "images": [
      "assets/img/products/roof-insulation/12.webp"
    ]
  },
  {
    "id": "roof-insulation-13",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 13",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/14.webp",
    "images": [
      "assets/img/products/roof-insulation/14.webp"
    ]
  },
  {
    "id": "roof-insulation-14",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 14",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/15.webp",
    "images": [
      "assets/img/products/roof-insulation/15.webp"
    ]
  },
  {
    "id": "roof-insulation-15",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 15",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/16.webp",
    "images": [
      "assets/img/products/roof-insulation/16.webp"
    ]
  },
  {
    "id": "roof-insulation-16",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 16",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/19.webp",
    "images": [
      "assets/img/products/roof-insulation/19.webp"
    ]
  },
  {
    "id": "roof-insulation-17",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 17",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/20.webp",
    "images": [
      "assets/img/products/roof-insulation/20.webp"
    ]
  },
  {
    "id": "grating-01",
    "cat": "grating",
    "name": "جريتينج وهندريل – موديل 01",
    "group": null,
    "desc": "جميع مقاسات مشايات الفيبر جلاس (الجريتينج) والهندريل والسلالم والأسوار.",
    "featured": true,
    "img": "assets/img/products/grating/01.webp",
    "images": [
      "assets/img/products/grating/01.webp"
    ]
  },
  {
    "id": "grating-02",
    "cat": "grating",
    "name": "جريتينج وهندريل – موديل 02",
    "group": null,
    "desc": "جميع مقاسات مشايات الفيبر جلاس (الجريتينج) والهندريل والسلالم والأسوار.",
    "featured": false,
    "img": "assets/img/products/grating/02.webp",
    "images": [
      "assets/img/products/grating/02.webp"
    ]
  },
  {
    "id": "caravans-01",
    "cat": "caravans",
    "name": "كرفانات – موديل 01",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": true,
    "img": "assets/img/products/caravans/01.webp",
    "images": [
      "assets/img/products/caravans/01.webp",
      "assets/img/products/caravans/25.webp",
      "assets/img/products/caravans/27.webp",
      "assets/img/products/caravans/28.webp"
    ]
  },
  {
    "id": "caravans-02",
    "cat": "caravans",
    "name": "كرفانات – موديل 02",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/02.webp",
    "images": [
      "assets/img/products/caravans/02.webp"
    ]
  },
  {
    "id": "caravans-03",
    "cat": "caravans",
    "name": "كرفانات – موديل 03",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/03.webp",
    "images": [
      "assets/img/products/caravans/03.webp"
    ]
  },
  {
    "id": "caravans-04",
    "cat": "caravans",
    "name": "كرفانات – موديل 04",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/04.webp",
    "images": [
      "assets/img/products/caravans/04.webp"
    ]
  },
  {
    "id": "caravans-05",
    "cat": "caravans",
    "name": "كرفانات – موديل 05",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/05.webp",
    "images": [
      "assets/img/products/caravans/05.webp"
    ]
  },
  {
    "id": "caravans-06",
    "cat": "caravans",
    "name": "كرفانات – موديل 06",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/06.webp",
    "images": [
      "assets/img/products/caravans/06.webp"
    ]
  },
  {
    "id": "caravans-07",
    "cat": "caravans",
    "name": "كرفانات – موديل 07",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/07.webp",
    "images": [
      "assets/img/products/caravans/07.webp"
    ]
  },
  {
    "id": "caravans-08",
    "cat": "caravans",
    "name": "كرفانات – موديل 08",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/08.webp",
    "images": [
      "assets/img/products/caravans/08.webp"
    ]
  },
  {
    "id": "caravans-09",
    "cat": "caravans",
    "name": "كرفانات – موديل 09",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/09.webp",
    "images": [
      "assets/img/products/caravans/09.webp",
      "assets/img/products/caravans/10.webp"
    ]
  },
  {
    "id": "caravans-10",
    "cat": "caravans",
    "name": "كرفانات – موديل 10",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/11.webp",
    "images": [
      "assets/img/products/caravans/11.webp"
    ]
  },
  {
    "id": "caravans-11",
    "cat": "caravans",
    "name": "كرفانات – موديل 11",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/12.webp",
    "images": [
      "assets/img/products/caravans/12.webp"
    ]
  },
  {
    "id": "caravans-12",
    "cat": "caravans",
    "name": "كرفانات – موديل 12",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/13.webp",
    "images": [
      "assets/img/products/caravans/13.webp"
    ]
  },
  {
    "id": "caravans-13",
    "cat": "caravans",
    "name": "كرفانات – موديل 13",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/14.webp",
    "images": [
      "assets/img/products/caravans/14.webp"
    ]
  },
  {
    "id": "caravans-14",
    "cat": "caravans",
    "name": "كرفانات – موديل 14",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/15.webp",
    "images": [
      "assets/img/products/caravans/15.webp",
      "assets/img/products/caravans/17.webp"
    ]
  },
  {
    "id": "caravans-15",
    "cat": "caravans",
    "name": "كرفانات – موديل 15",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/16.webp",
    "images": [
      "assets/img/products/caravans/16.webp"
    ]
  },
  {
    "id": "caravans-16",
    "cat": "caravans",
    "name": "كرفانات – موديل 16",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/18.webp",
    "images": [
      "assets/img/products/caravans/18.webp"
    ]
  },
  {
    "id": "caravans-17",
    "cat": "caravans",
    "name": "كرفانات – موديل 17",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/19.webp",
    "images": [
      "assets/img/products/caravans/19.webp"
    ]
  },
  {
    "id": "caravans-18",
    "cat": "caravans",
    "name": "كرفانات – موديل 18",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/20.webp",
    "images": [
      "assets/img/products/caravans/20.webp"
    ]
  },
  {
    "id": "caravans-19",
    "cat": "caravans",
    "name": "كرفانات – موديل 19",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/21.webp",
    "images": [
      "assets/img/products/caravans/21.webp"
    ]
  },
  {
    "id": "caravans-20",
    "cat": "caravans",
    "name": "كرفانات – موديل 20",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/22.webp",
    "images": [
      "assets/img/products/caravans/22.webp"
    ]
  },
  {
    "id": "caravans-21",
    "cat": "caravans",
    "name": "كرفانات – موديل 21",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/23.webp",
    "images": [
      "assets/img/products/caravans/23.webp"
    ]
  },
  {
    "id": "caravans-22",
    "cat": "caravans",
    "name": "كرفانات – موديل 22",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/24.webp",
    "images": [
      "assets/img/products/caravans/24.webp"
    ]
  },
  {
    "id": "caravans-23",
    "cat": "caravans",
    "name": "كرفانات – موديل 23",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/26.webp",
    "images": [
      "assets/img/products/caravans/26.webp"
    ]
  },
  {
    "id": "caravans-24",
    "cat": "caravans",
    "name": "كرفانات – موديل 24",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/29.webp",
    "images": [
      "assets/img/products/caravans/29.webp"
    ]
  },
  {
    "id": "caravans-25",
    "cat": "caravans",
    "name": "كرفانات – موديل 25",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/30.webp",
    "images": [
      "assets/img/products/caravans/30.webp"
    ]
  },
  {
    "id": "caravans-26",
    "cat": "caravans",
    "name": "كرفانات – موديل 26",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/31.webp",
    "images": [
      "assets/img/products/caravans/31.webp"
    ]
  },
  {
    "id": "caravans-27",
    "cat": "caravans",
    "name": "كرفانات – موديل 27",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/32.webp",
    "images": [
      "assets/img/products/caravans/32.webp"
    ]
  },
  {
    "id": "caravans-28",
    "cat": "caravans",
    "name": "كرفانات – موديل 28",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/33.webp",
    "images": [
      "assets/img/products/caravans/33.webp"
    ]
  },
  {
    "id": "caravans-29",
    "cat": "caravans",
    "name": "كرفانات – موديل 29",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/34.webp",
    "images": [
      "assets/img/products/caravans/34.webp"
    ]
  },
  {
    "id": "caravans-30",
    "cat": "caravans",
    "name": "كرفانات – موديل 30",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/35.webp",
    "images": [
      "assets/img/products/caravans/35.webp"
    ]
  },
  {
    "id": "caravans-31",
    "cat": "caravans",
    "name": "كرفانات – موديل 31",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/36.webp",
    "images": [
      "assets/img/products/caravans/36.webp"
    ]
  },
  {
    "id": "caravans-32",
    "cat": "caravans",
    "name": "كرفانات – موديل 32",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/37.webp",
    "images": [
      "assets/img/products/caravans/37.webp"
    ]
  },
  {
    "id": "caravans-33",
    "cat": "caravans",
    "name": "كرفانات – موديل 33",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/38.webp",
    "images": [
      "assets/img/products/caravans/38.webp"
    ]
  },
  {
    "id": "caravans-34",
    "cat": "caravans",
    "name": "كرفانات – موديل 34",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/39.webp",
    "images": [
      "assets/img/products/caravans/39.webp"
    ]
  },
  {
    "id": "caravans-35",
    "cat": "caravans",
    "name": "كرفانات – موديل 35",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/40.webp",
    "images": [
      "assets/img/products/caravans/40.webp"
    ]
  },
  {
    "id": "caravans-36",
    "cat": "caravans",
    "name": "كرفانات – موديل 36",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/41.webp",
    "images": [
      "assets/img/products/caravans/41.webp"
    ]
  },
  {
    "id": "caravans-37",
    "cat": "caravans",
    "name": "كرفانات – موديل 37",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/42.webp",
    "images": [
      "assets/img/products/caravans/42.webp"
    ]
  },
  {
    "id": "caravans-38",
    "cat": "caravans",
    "name": "كرفانات – موديل 38",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/43.webp",
    "images": [
      "assets/img/products/caravans/43.webp"
    ]
  },
  {
    "id": "caravans-39",
    "cat": "caravans",
    "name": "كرفانات – موديل 39",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/44.webp",
    "images": [
      "assets/img/products/caravans/44.webp"
    ]
  },
  {
    "id": "caravans-40",
    "cat": "caravans",
    "name": "كرفانات – موديل 40",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/45.webp",
    "images": [
      "assets/img/products/caravans/45.webp"
    ]
  },
  {
    "id": "caravans-41",
    "cat": "caravans",
    "name": "كرفانات – موديل 41",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/46.webp",
    "images": [
      "assets/img/products/caravans/46.webp"
    ]
  },
  {
    "id": "caravans-42",
    "cat": "caravans",
    "name": "كرفانات – موديل 42",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/47.webp",
    "images": [
      "assets/img/products/caravans/47.webp"
    ]
  },
  {
    "id": "caravans-43",
    "cat": "caravans",
    "name": "كرفانات – موديل 43",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/48.webp",
    "images": [
      "assets/img/products/caravans/48.webp"
    ]
  },
  {
    "id": "caravans-44",
    "cat": "caravans",
    "name": "كرفانات – موديل 44",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/49.webp",
    "images": [
      "assets/img/products/caravans/49.webp"
    ]
  },
  {
    "id": "caravans-45",
    "cat": "caravans",
    "name": "كرفانات – موديل 45",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/50.webp",
    "images": [
      "assets/img/products/caravans/50.webp"
    ]
  },
  {
    "id": "caravans-46",
    "cat": "caravans",
    "name": "كرفانات – موديل 46",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/51.webp",
    "images": [
      "assets/img/products/caravans/51.webp"
    ]
  },
  {
    "id": "caravans-47",
    "cat": "caravans",
    "name": "كرفانات – موديل 47",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/52.webp",
    "images": [
      "assets/img/products/caravans/52.webp"
    ]
  },
  {
    "id": "caravans-48",
    "cat": "caravans",
    "name": "كرفانات – موديل 48",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/53.webp",
    "images": [
      "assets/img/products/caravans/53.webp"
    ]
  },
  {
    "id": "caravans-49",
    "cat": "caravans",
    "name": "كرفانات – موديل 49",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/54.webp",
    "images": [
      "assets/img/products/caravans/54.webp"
    ]
  },
  {
    "id": "caravans-50",
    "cat": "caravans",
    "name": "كرفانات – موديل 50",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/55.webp",
    "images": [
      "assets/img/products/caravans/55.webp"
    ]
  },
  {
    "id": "caravans-51",
    "cat": "caravans",
    "name": "كرفانات – موديل 51",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/56.webp",
    "images": [
      "assets/img/products/caravans/56.webp"
    ]
  },
  {
    "id": "caravans-52",
    "cat": "caravans",
    "name": "كرفانات – موديل 52",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/57.webp",
    "images": [
      "assets/img/products/caravans/57.webp"
    ]
  },
  {
    "id": "caravans-53",
    "cat": "caravans",
    "name": "كرفانات – موديل 53",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/58.webp",
    "images": [
      "assets/img/products/caravans/58.webp"
    ]
  },
  {
    "id": "caravans-54",
    "cat": "caravans",
    "name": "كرفانات – موديل 54",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/59.webp",
    "images": [
      "assets/img/products/caravans/59.webp"
    ]
  },
  {
    "id": "caravans-55",
    "cat": "caravans",
    "name": "كرفانات – موديل 55",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/60.webp",
    "images": [
      "assets/img/products/caravans/60.webp"
    ]
  },
  {
    "id": "manhole-covers-01",
    "cat": "manhole-covers",
    "name": "أغطية بلاعات – موديل 01",
    "group": null,
    "desc": "أغطية بلاعات فيبر جلاس خفيفة الوزن وغير قابلة للصدأ أو السرقة.",
    "featured": true,
    "img": "assets/img/products/manhole-covers/01.webp",
    "images": [
      "assets/img/products/manhole-covers/01.webp"
    ]
  },
  {
    "id": "manhole-covers-02",
    "cat": "manhole-covers",
    "name": "أغطية بلاعات – موديل 02",
    "group": null,
    "desc": "أغطية بلاعات فيبر جلاس خفيفة الوزن وغير قابلة للصدأ أو السرقة.",
    "featured": false,
    "img": "assets/img/products/manhole-covers/02.webp",
    "images": [
      "assets/img/products/manhole-covers/02.webp"
    ]
  },
  {
    "id": "manhole-covers-03",
    "cat": "manhole-covers",
    "name": "أغطية بلاعات – موديل 03",
    "group": null,
    "desc": "أغطية بلاعات فيبر جلاس خفيفة الوزن وغير قابلة للصدأ أو السرقة.",
    "featured": false,
    "img": "assets/img/products/manhole-covers/03.webp",
    "images": [
      "assets/img/products/manhole-covers/03.webp"
    ]
  }
];
