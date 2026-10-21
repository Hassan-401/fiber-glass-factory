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
    "img": "assets/img/products/cooling-towers/01.png"
  },
  {
    "id": "bus-parts",
    "name": "أجزاء أتوبيسات وسيارات فيبر جلاس",
    "short": "أجزاء أتوبيسات وسيارات",
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "icon": "bus",
    "count": 6,
    "img": "assets/img/products/bus-parts/01.jpg"
  },
  {
    "id": "planters",
    "name": "أحواض زهور فيبر جلاس",
    "short": "أحواض زهور",
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "icon": "planter",
    "count": 11,
    "img": "assets/img/products/planters/01.jpg"
  },
  {
    "id": "light-poles",
    "name": "أعمدة إنارة فيبر جلاس",
    "short": "أعمدة إنارة",
    "desc": "أعمدة إنارة فيبر جلاس بمقاسات وتصميمات مختلفة، خفيفة الوزن وعازلة للكهرباء ومقاومة للصدأ.",
    "icon": "lamp",
    "count": 3,
    "img": "assets/img/products/light-poles/01.jpg"
  },
  {
    "id": "tank-lining",
    "name": "تبطين خزانات حديد وخرسانة",
    "short": "تبطين خزانات",
    "desc": "تبطين أحواض وخزانات الحديد والخرسانة بالفيبر جلاس المقاوم للكيماويات.",
    "icon": "lining",
    "count": 2,
    "img": "assets/img/products/tank-lining/01.jpg"
  },
  {
    "id": "pools",
    "name": "حمامات سباحة ولوازمها",
    "short": "حمامات سباحة",
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "icon": "pool",
    "count": 5,
    "img": "assets/img/products/pools/01.jpg"
  },
  {
    "id": "roof-curb",
    "name": "رووف كيرب فيبر جلاس",
    "short": "رووف كيرب",
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "icon": "roof",
    "count": 18,
    "img": "assets/img/products/roof-curb/01.jpg"
  },
  {
    "id": "slides",
    "name": "زحاليق فيبر جلاس",
    "short": "زحاليق",
    "desc": "زحاليق فيبر جلاس للأطفال بمقاسات وألوان مختلفة، آمنة وسطح ناعم لا يسبب احتكاكاً.",
    "icon": "slide",
    "count": 2,
    "img": "assets/img/products/slides/01.jpg"
  },
  {
    "id": "skylight",
    "name": "سكاي لايت شفافة وشيتات معرجة",
    "short": "سكاي لايت وشيتات",
    "desc": "ألواح شفافة ومعرجة فيبر جلاس لإضاءة وتغطية المنشآت.",
    "icon": "skylight",
    "count": 1,
    "img": "assets/img/products/skylight/01.jpg"
  },
  {
    "id": "reefer-panels",
    "name": "شيتات وبلمات عربات التخزين المثلجة",
    "short": "شيتات وبلمات",
    "desc": "شيتات وبلمات فيبر جلاس للعربات المثلجة.",
    "icon": "truck",
    "count": 2,
    "img": "assets/img/products/reefer-panels/01.jpg"
  },
  {
    "id": "roof-insulation",
    "name": "عزل أسطح حديدية ومداخن",
    "short": "عزل أسطح ومداخن",
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "icon": "shield",
    "count": 17,
    "img": "assets/img/products/roof-insulation/01.jpg"
  },
  {
    "id": "grating",
    "name": "قطاعات وهندريل وسلالم (جريتينج)",
    "short": "جريتينج وهندريل",
    "desc": "جميع مقاسات مشايات الفيبر جلاس (الجريتينج) والهندريل والسلالم والأسوار.",
    "icon": "grating",
    "count": 2,
    "img": "assets/img/products/grating/01"
  },
  {
    "id": "caravans",
    "name": "كرفانات فيبر جلاس",
    "short": "كرفانات",
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "icon": "caravan",
    "count": 55,
    "img": "assets/img/products/caravans/01.jpg"
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
    "img": "assets/img/products/manhole-covers/01.jpg"
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
    "img": "assets/img/products/cooling-towers/01.png",
    "images": [
      "assets/img/products/cooling-towers/01.png"
    ]
  },
  {
    "id": "cooling-towers-02",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 30 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/02.png",
    "images": [
      "assets/img/products/cooling-towers/02.png"
    ]
  },
  {
    "id": "cooling-towers-03",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 50 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/03.jpg",
    "images": [
      "assets/img/products/cooling-towers/03.jpg"
    ]
  },
  {
    "id": "cooling-towers-04",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 60 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/04.jpg",
    "images": [
      "assets/img/products/cooling-towers/04.jpg"
    ]
  },
  {
    "id": "cooling-towers-05",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 80 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/05.jpg",
    "images": [
      "assets/img/products/cooling-towers/05.jpg"
    ]
  },
  {
    "id": "cooling-towers-06",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 100 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/06.jpg",
    "images": [
      "assets/img/products/cooling-towers/06.jpg"
    ]
  },
  {
    "id": "cooling-towers-07",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 125 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/07.jpg",
    "images": [
      "assets/img/products/cooling-towers/07.jpg"
    ]
  },
  {
    "id": "cooling-towers-08",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري 200 طن",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/08.jpg",
    "images": [
      "assets/img/products/cooling-towers/08.jpg"
    ]
  },
  {
    "id": "cooling-towers-09",
    "cat": "cooling-towers",
    "name": "برج تبريد دائري – موديل 09",
    "group": "برج تبريد دائري",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/09.jpg",
    "images": [
      "assets/img/products/cooling-towers/09.jpg"
    ]
  },
  {
    "id": "cooling-towers-10",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع 100 طن – صورة 1",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/10.jpg",
    "images": [
      "assets/img/products/cooling-towers/10.jpg"
    ]
  },
  {
    "id": "cooling-towers-11",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع 100 طن – صورة 2",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/11.jpg",
    "images": [
      "assets/img/products/cooling-towers/11.jpg"
    ]
  },
  {
    "id": "cooling-towers-12",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع – موديل 12",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/12.jpg",
    "images": [
      "assets/img/products/cooling-towers/12.jpg"
    ]
  },
  {
    "id": "cooling-towers-13",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع – موديل 13",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/13.jpg",
    "images": [
      "assets/img/products/cooling-towers/13.jpg"
    ]
  },
  {
    "id": "cooling-towers-14",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع – موديل 14",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/14.jpg",
    "images": [
      "assets/img/products/cooling-towers/14.jpg"
    ]
  },
  {
    "id": "cooling-towers-15",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع – موديل 15",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/15.jpg",
    "images": [
      "assets/img/products/cooling-towers/15.jpg"
    ]
  },
  {
    "id": "cooling-towers-16",
    "cat": "cooling-towers",
    "name": "برج تبريد مربع – موديل 16",
    "group": "برج تبريد مربع",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/16.jpg",
    "images": [
      "assets/img/products/cooling-towers/16.jpg"
    ]
  },
  {
    "id": "cooling-towers-17",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 17",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/17.jpg",
    "images": [
      "assets/img/products/cooling-towers/17.jpg"
    ]
  },
  {
    "id": "cooling-towers-18",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 18",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/18.jpg",
    "images": [
      "assets/img/products/cooling-towers/18.jpg"
    ]
  },
  {
    "id": "cooling-towers-19",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 19",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/19.jpg",
    "images": [
      "assets/img/products/cooling-towers/19.jpg"
    ]
  },
  {
    "id": "cooling-towers-20",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 20",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/20.jpg",
    "images": [
      "assets/img/products/cooling-towers/20.jpg"
    ]
  },
  {
    "id": "cooling-towers-21",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 21",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/21.jpg",
    "images": [
      "assets/img/products/cooling-towers/21.jpg"
    ]
  },
  {
    "id": "cooling-towers-22",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 22",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/22.jpg",
    "images": [
      "assets/img/products/cooling-towers/22.jpg"
    ]
  },
  {
    "id": "cooling-towers-23",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 23",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/23.jpg",
    "images": [
      "assets/img/products/cooling-towers/23.jpg"
    ]
  },
  {
    "id": "cooling-towers-24",
    "cat": "cooling-towers",
    "name": "حشو أبراج التبريد – موديل 24",
    "group": "حشو أبراج التبريد",
    "desc": "أبراج تبريد من الفيبر جلاس المقاوم للتآكل، دائرية ومربعة، من 10 طن تبريد إلى 5000 طن تبريد.",
    "featured": false,
    "img": "assets/img/products/cooling-towers/24.jpg",
    "images": [
      "assets/img/products/cooling-towers/24.jpg"
    ]
  },
  {
    "id": "bus-parts-01",
    "cat": "bus-parts",
    "name": "أكصدام فيبر جلاس",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": true,
    "img": "assets/img/products/bus-parts/01.jpg",
    "images": [
      "assets/img/products/bus-parts/01.jpg"
    ]
  },
  {
    "id": "bus-parts-02",
    "cat": "bus-parts",
    "name": "تندة جرار فيبر جلاس",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/bus-parts/02.jpg",
    "images": [
      "assets/img/products/bus-parts/02.jpg"
    ]
  },
  {
    "id": "bus-parts-03",
    "cat": "bus-parts",
    "name": "تندة عربة كهرباء فيبر جلاس",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/bus-parts/03.jpg",
    "images": [
      "assets/img/products/bus-parts/03.jpg"
    ]
  },
  {
    "id": "bus-parts-04",
    "cat": "bus-parts",
    "name": "ظهر أتوبيس فيبر جلاس",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/bus-parts/04.jpg",
    "images": [
      "assets/img/products/bus-parts/04.jpg"
    ]
  },
  {
    "id": "bus-parts-05",
    "cat": "bus-parts",
    "name": "وش أتوبيس فيبر جلاس",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/bus-parts/05.jpg",
    "images": [
      "assets/img/products/bus-parts/05.jpg"
    ]
  },
  {
    "id": "bus-parts-06",
    "cat": "bus-parts",
    "name": "أجزاء أتوبيسات وسيارات – موديل 06",
    "group": null,
    "desc": "أكصدامات فيبر جلاس، وش أتوبيس فيبر جلاس، وجميع أجزاء الأتوبيسات والسيارات من الفيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/bus-parts/06.jpg",
    "images": [
      "assets/img/products/bus-parts/06.jpg"
    ]
  },
  {
    "id": "planters-01",
    "cat": "planters",
    "name": "أحواض زهور – موديل 01",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": true,
    "img": "assets/img/products/planters/01.jpg",
    "images": [
      "assets/img/products/planters/01.jpg"
    ]
  },
  {
    "id": "planters-02",
    "cat": "planters",
    "name": "أحواض زهور – موديل 02",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/02.jpg",
    "images": [
      "assets/img/products/planters/02.jpg"
    ]
  },
  {
    "id": "planters-03",
    "cat": "planters",
    "name": "أحواض زهور – موديل 03",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/03.jpg",
    "images": [
      "assets/img/products/planters/03.jpg"
    ]
  },
  {
    "id": "planters-04",
    "cat": "planters",
    "name": "أحواض زهور – موديل 04",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/04.jpg",
    "images": [
      "assets/img/products/planters/04.jpg"
    ]
  },
  {
    "id": "planters-05",
    "cat": "planters",
    "name": "أحواض زهور – موديل 05",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/05.jpg",
    "images": [
      "assets/img/products/planters/05.jpg"
    ]
  },
  {
    "id": "planters-06",
    "cat": "planters",
    "name": "أحواض زهور – موديل 06",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/06.jpg",
    "images": [
      "assets/img/products/planters/06.jpg"
    ]
  },
  {
    "id": "planters-07",
    "cat": "planters",
    "name": "أحواض زهور – موديل 07",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/07.jpg",
    "images": [
      "assets/img/products/planters/07.jpg"
    ]
  },
  {
    "id": "planters-08",
    "cat": "planters",
    "name": "أحواض زهور – موديل 08",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/08.jpg",
    "images": [
      "assets/img/products/planters/08.jpg"
    ]
  },
  {
    "id": "planters-09",
    "cat": "planters",
    "name": "أحواض زهور – موديل 09",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/09.jpg",
    "images": [
      "assets/img/products/planters/09.jpg"
    ]
  },
  {
    "id": "planters-10",
    "cat": "planters",
    "name": "أحواض زهور – موديل 10",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/10.jpg",
    "images": [
      "assets/img/products/planters/10.jpg"
    ]
  },
  {
    "id": "planters-11",
    "cat": "planters",
    "name": "أحواض زهور – موديل 11",
    "group": null,
    "desc": "جميع أنواع أحواض الزهور فيبر جلاس، مربعة ودائرية، بمقاسات وألوان مختلفة.",
    "featured": false,
    "img": "assets/img/products/planters/11.jpg",
    "images": [
      "assets/img/products/planters/11.jpg"
    ]
  },
  {
    "id": "light-poles-01",
    "cat": "light-poles",
    "name": "أعمدة إنارة – موديل 01",
    "group": null,
    "desc": "أعمدة إنارة فيبر جلاس بمقاسات وتصميمات مختلفة، خفيفة الوزن وعازلة للكهرباء ومقاومة للصدأ.",
    "featured": true,
    "img": "assets/img/products/light-poles/01.jpg",
    "images": [
      "assets/img/products/light-poles/01.jpg"
    ]
  },
  {
    "id": "light-poles-02",
    "cat": "light-poles",
    "name": "أعمدة إنارة – موديل 02",
    "group": null,
    "desc": "أعمدة إنارة فيبر جلاس بمقاسات وتصميمات مختلفة، خفيفة الوزن وعازلة للكهرباء ومقاومة للصدأ.",
    "featured": false,
    "img": "assets/img/products/light-poles/02.jpg",
    "images": [
      "assets/img/products/light-poles/02.jpg"
    ]
  },
  {
    "id": "light-poles-03",
    "cat": "light-poles",
    "name": "أعمدة إنارة – موديل 03",
    "group": null,
    "desc": "أعمدة إنارة فيبر جلاس بمقاسات وتصميمات مختلفة، خفيفة الوزن وعازلة للكهرباء ومقاومة للصدأ.",
    "featured": false,
    "img": "assets/img/products/light-poles/03.jpg",
    "images": [
      "assets/img/products/light-poles/03.jpg"
    ]
  },
  {
    "id": "tank-lining-01",
    "cat": "tank-lining",
    "name": "تبطين خزانات – موديل 01",
    "group": null,
    "desc": "تبطين أحواض وخزانات الحديد والخرسانة بالفيبر جلاس المقاوم للكيماويات.",
    "featured": true,
    "img": "assets/img/products/tank-lining/01.jpg",
    "images": [
      "assets/img/products/tank-lining/01.jpg"
    ]
  },
  {
    "id": "tank-lining-02",
    "cat": "tank-lining",
    "name": "تبطين خزانات – موديل 02",
    "group": null,
    "desc": "تبطين أحواض وخزانات الحديد والخرسانة بالفيبر جلاس المقاوم للكيماويات.",
    "featured": false,
    "img": "assets/img/products/tank-lining/02.jpg",
    "images": [
      "assets/img/products/tank-lining/02.jpg"
    ]
  },
  {
    "id": "pools-01",
    "cat": "pools",
    "name": "وحدة حمام سباحة فيبر جلاس",
    "group": null,
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "featured": true,
    "img": "assets/img/products/pools/01.jpg",
    "images": [
      "assets/img/products/pools/01.jpg"
    ]
  },
  {
    "id": "pools-02",
    "cat": "pools",
    "name": "حمامات سباحة – موديل 02",
    "group": null,
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/pools/02.jpg",
    "images": [
      "assets/img/products/pools/02.jpg",
      "assets/img/products/pools/03.jpg"
    ]
  },
  {
    "id": "pools-03",
    "cat": "pools",
    "name": "حمامات سباحة – موديل 03",
    "group": null,
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/pools/04.jpg",
    "images": [
      "assets/img/products/pools/04.jpg"
    ]
  },
  {
    "id": "pools-04",
    "cat": "pools",
    "name": "حمامات سباحة – موديل 04",
    "group": null,
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/pools/05.jpg",
    "images": [
      "assets/img/products/pools/05.jpg"
    ]
  },
  {
    "id": "pools-05",
    "cat": "pools",
    "name": "حمامات سباحة – موديل 05",
    "group": null,
    "desc": "وحدات حمامات السباحة والمنطّات وجميع مقاسات حمامات السباحة فيبر جلاس.",
    "featured": false,
    "img": "assets/img/products/pools/06.jpg",
    "images": [
      "assets/img/products/pools/06.jpg"
    ]
  },
  {
    "id": "roof-curb-01",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 01",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": true,
    "img": "assets/img/products/roof-curb/01.jpg",
    "images": [
      "assets/img/products/roof-curb/01.jpg"
    ]
  },
  {
    "id": "roof-curb-02",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 02",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/02.jpg",
    "images": [
      "assets/img/products/roof-curb/02.jpg"
    ]
  },
  {
    "id": "roof-curb-03",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 03",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/03.jpg",
    "images": [
      "assets/img/products/roof-curb/03.jpg"
    ]
  },
  {
    "id": "roof-curb-04",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 04",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/04.jpg",
    "images": [
      "assets/img/products/roof-curb/04.jpg"
    ]
  },
  {
    "id": "roof-curb-05",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 05",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/05.jpg",
    "images": [
      "assets/img/products/roof-curb/05.jpg",
      "assets/img/products/roof-curb/16.jpg"
    ]
  },
  {
    "id": "roof-curb-06",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 06",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/06.jpg",
    "images": [
      "assets/img/products/roof-curb/06.jpg",
      "assets/img/products/roof-curb/15.jpg"
    ]
  },
  {
    "id": "roof-curb-07",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 07",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/07.jpg",
    "images": [
      "assets/img/products/roof-curb/07.jpg",
      "assets/img/products/roof-curb/14.jpg"
    ]
  },
  {
    "id": "roof-curb-08",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 08",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/08.jpg",
    "images": [
      "assets/img/products/roof-curb/08.jpg"
    ]
  },
  {
    "id": "roof-curb-09",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 09",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/09.jpg",
    "images": [
      "assets/img/products/roof-curb/09.jpg"
    ]
  },
  {
    "id": "roof-curb-10",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 10",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/10.jpg",
    "images": [
      "assets/img/products/roof-curb/10.jpg"
    ]
  },
  {
    "id": "roof-curb-11",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 11",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/11.jpg",
    "images": [
      "assets/img/products/roof-curb/11.jpg"
    ]
  },
  {
    "id": "roof-curb-12",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 12",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/12.jpg",
    "images": [
      "assets/img/products/roof-curb/12.jpg"
    ]
  },
  {
    "id": "roof-curb-13",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 13",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/13.jpg",
    "images": [
      "assets/img/products/roof-curb/13.jpg"
    ]
  },
  {
    "id": "roof-curb-14",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 14",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/17.jpg",
    "images": [
      "assets/img/products/roof-curb/17.jpg"
    ]
  },
  {
    "id": "roof-curb-15",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 15",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/18.jpg",
    "images": [
      "assets/img/products/roof-curb/18.jpg"
    ]
  },
  {
    "id": "roof-curb-16",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 16",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/19.jpg",
    "images": [
      "assets/img/products/roof-curb/19.jpg"
    ]
  },
  {
    "id": "roof-curb-17",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 17",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/20.jpg",
    "images": [
      "assets/img/products/roof-curb/20.jpg"
    ]
  },
  {
    "id": "roof-curb-18",
    "cat": "roof-curb",
    "name": "رووف كيرب – موديل 18",
    "group": null,
    "desc": "رووف كيرب فيبر جلاس مربعة ودائرية لأعمال شفط الهواء.",
    "featured": false,
    "img": "assets/img/products/roof-curb/21.jpg",
    "images": [
      "assets/img/products/roof-curb/21.jpg"
    ]
  },
  {
    "id": "slides-01",
    "cat": "slides",
    "name": "زحاليق – موديل 01",
    "group": null,
    "desc": "زحاليق فيبر جلاس للأطفال بمقاسات وألوان مختلفة، آمنة وسطح ناعم لا يسبب احتكاكاً.",
    "featured": true,
    "img": "assets/img/products/slides/01.jpg",
    "images": [
      "assets/img/products/slides/01.jpg"
    ]
  },
  {
    "id": "slides-02",
    "cat": "slides",
    "name": "زحاليق – موديل 02",
    "group": null,
    "desc": "زحاليق فيبر جلاس للأطفال بمقاسات وألوان مختلفة، آمنة وسطح ناعم لا يسبب احتكاكاً.",
    "featured": false,
    "img": "assets/img/products/slides/02.jpg",
    "images": [
      "assets/img/products/slides/02.jpg"
    ]
  },
  {
    "id": "skylight-01",
    "cat": "skylight",
    "name": "سكاي لايت وشيتات – موديل 01",
    "group": null,
    "desc": "ألواح شفافة ومعرجة فيبر جلاس لإضاءة وتغطية المنشآت.",
    "featured": true,
    "img": "assets/img/products/skylight/01.jpg",
    "images": [
      "assets/img/products/skylight/01.jpg"
    ]
  },
  {
    "id": "reefer-panels-01",
    "cat": "reefer-panels",
    "name": "شيتات وبلمات – موديل 01",
    "group": null,
    "desc": "شيتات وبلمات فيبر جلاس للعربات المثلجة.",
    "featured": true,
    "img": "assets/img/products/reefer-panels/01.jpg",
    "images": [
      "assets/img/products/reefer-panels/01.jpg"
    ]
  },
  {
    "id": "reefer-panels-02",
    "cat": "reefer-panels",
    "name": "شيتات وبلمات – موديل 02",
    "group": null,
    "desc": "شيتات وبلمات فيبر جلاس للعربات المثلجة.",
    "featured": false,
    "img": "assets/img/products/reefer-panels/02.jpg",
    "images": [
      "assets/img/products/reefer-panels/02.jpg"
    ]
  },
  {
    "id": "roof-insulation-01",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 01",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": true,
    "img": "assets/img/products/roof-insulation/01.jpg",
    "images": [
      "assets/img/products/roof-insulation/01.jpg"
    ]
  },
  {
    "id": "roof-insulation-02",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 02",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/02.jpg",
    "images": [
      "assets/img/products/roof-insulation/02.jpg"
    ]
  },
  {
    "id": "roof-insulation-03",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 03",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/03.jpg",
    "images": [
      "assets/img/products/roof-insulation/03.jpg"
    ]
  },
  {
    "id": "roof-insulation-04",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 04",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/04.jpg",
    "images": [
      "assets/img/products/roof-insulation/04.jpg"
    ]
  },
  {
    "id": "roof-insulation-05",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 05",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/05.jpg",
    "images": [
      "assets/img/products/roof-insulation/05.jpg"
    ]
  },
  {
    "id": "roof-insulation-06",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 06",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/06.jpg",
    "images": [
      "assets/img/products/roof-insulation/06.jpg"
    ]
  },
  {
    "id": "roof-insulation-07",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 07",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/07.jpg",
    "images": [
      "assets/img/products/roof-insulation/07.jpg"
    ]
  },
  {
    "id": "roof-insulation-08",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 08",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/08.jpg",
    "images": [
      "assets/img/products/roof-insulation/08.jpg",
      "assets/img/products/roof-insulation/18.jpg"
    ]
  },
  {
    "id": "roof-insulation-09",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 09",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/09.jpg",
    "images": [
      "assets/img/products/roof-insulation/09.jpg"
    ]
  },
  {
    "id": "roof-insulation-10",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 10",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/10.jpg",
    "images": [
      "assets/img/products/roof-insulation/10.jpg"
    ]
  },
  {
    "id": "roof-insulation-11",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 11",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/11.jpg",
    "images": [
      "assets/img/products/roof-insulation/11.jpg",
      "assets/img/products/roof-insulation/13.jpg",
      "assets/img/products/roof-insulation/17.jpg"
    ]
  },
  {
    "id": "roof-insulation-12",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 12",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/12.jpg",
    "images": [
      "assets/img/products/roof-insulation/12.jpg"
    ]
  },
  {
    "id": "roof-insulation-13",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 13",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/14.jpg",
    "images": [
      "assets/img/products/roof-insulation/14.jpg"
    ]
  },
  {
    "id": "roof-insulation-14",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 14",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/15.jpg",
    "images": [
      "assets/img/products/roof-insulation/15.jpg"
    ]
  },
  {
    "id": "roof-insulation-15",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 15",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/16.jpg",
    "images": [
      "assets/img/products/roof-insulation/16.jpg"
    ]
  },
  {
    "id": "roof-insulation-16",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 16",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/19.jpg",
    "images": [
      "assets/img/products/roof-insulation/19.jpg"
    ]
  },
  {
    "id": "roof-insulation-17",
    "cat": "roof-insulation",
    "name": "عزل أسطح ومداخن – موديل 17",
    "group": null,
    "desc": "عزل الأسطح الحديدية والمداخن بالفيبر جلاس ضد خرير المياه والتآكل.",
    "featured": false,
    "img": "assets/img/products/roof-insulation/20.jpg",
    "images": [
      "assets/img/products/roof-insulation/20.jpg"
    ]
  },
  {
    "id": "grating-01",
    "cat": "grating",
    "name": "جريتينج وهندريل – موديل 01",
    "group": null,
    "desc": "جميع مقاسات مشايات الفيبر جلاس (الجريتينج) والهندريل والسلالم والأسوار.",
    "featured": true,
    "img": "assets/img/products/grating/01",
    "images": [
      "assets/img/products/grating/01"
    ]
  },
  {
    "id": "grating-02",
    "cat": "grating",
    "name": "جريتينج وهندريل – موديل 02",
    "group": null,
    "desc": "جميع مقاسات مشايات الفيبر جلاس (الجريتينج) والهندريل والسلالم والأسوار.",
    "featured": false,
    "img": "assets/img/products/grating/02.jpg",
    "images": [
      "assets/img/products/grating/02.jpg"
    ]
  },
  {
    "id": "caravans-01",
    "cat": "caravans",
    "name": "كرفانات – موديل 01",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": true,
    "img": "assets/img/products/caravans/01.jpg",
    "images": [
      "assets/img/products/caravans/01.jpg",
      "assets/img/products/caravans/25.jpg",
      "assets/img/products/caravans/27.jpg",
      "assets/img/products/caravans/28.jpg"
    ]
  },
  {
    "id": "caravans-02",
    "cat": "caravans",
    "name": "كرفانات – موديل 02",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/02.jpg",
    "images": [
      "assets/img/products/caravans/02.jpg"
    ]
  },
  {
    "id": "caravans-03",
    "cat": "caravans",
    "name": "كرفانات – موديل 03",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/03.jpg",
    "images": [
      "assets/img/products/caravans/03.jpg"
    ]
  },
  {
    "id": "caravans-04",
    "cat": "caravans",
    "name": "كرفانات – موديل 04",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/04.jpg",
    "images": [
      "assets/img/products/caravans/04.jpg"
    ]
  },
  {
    "id": "caravans-05",
    "cat": "caravans",
    "name": "كرفانات – موديل 05",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/05.jpg",
    "images": [
      "assets/img/products/caravans/05.jpg"
    ]
  },
  {
    "id": "caravans-06",
    "cat": "caravans",
    "name": "كرفانات – موديل 06",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/06.jpg",
    "images": [
      "assets/img/products/caravans/06.jpg"
    ]
  },
  {
    "id": "caravans-07",
    "cat": "caravans",
    "name": "كرفانات – موديل 07",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/07.jpg",
    "images": [
      "assets/img/products/caravans/07.jpg"
    ]
  },
  {
    "id": "caravans-08",
    "cat": "caravans",
    "name": "كرفانات – موديل 08",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/08.jpg",
    "images": [
      "assets/img/products/caravans/08.jpg"
    ]
  },
  {
    "id": "caravans-09",
    "cat": "caravans",
    "name": "كرفانات – موديل 09",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/09.jpg",
    "images": [
      "assets/img/products/caravans/09.jpg",
      "assets/img/products/caravans/10.jpg"
    ]
  },
  {
    "id": "caravans-10",
    "cat": "caravans",
    "name": "كرفانات – موديل 10",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/11.jpg",
    "images": [
      "assets/img/products/caravans/11.jpg"
    ]
  },
  {
    "id": "caravans-11",
    "cat": "caravans",
    "name": "كرفانات – موديل 11",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/12.jpg",
    "images": [
      "assets/img/products/caravans/12.jpg"
    ]
  },
  {
    "id": "caravans-12",
    "cat": "caravans",
    "name": "كرفانات – موديل 12",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/13.jpg",
    "images": [
      "assets/img/products/caravans/13.jpg"
    ]
  },
  {
    "id": "caravans-13",
    "cat": "caravans",
    "name": "كرفانات – موديل 13",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/14.jpg",
    "images": [
      "assets/img/products/caravans/14.jpg"
    ]
  },
  {
    "id": "caravans-14",
    "cat": "caravans",
    "name": "كرفانات – موديل 14",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/15.jpg",
    "images": [
      "assets/img/products/caravans/15.jpg",
      "assets/img/products/caravans/17.jpg"
    ]
  },
  {
    "id": "caravans-15",
    "cat": "caravans",
    "name": "كرفانات – موديل 15",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/16.jpg",
    "images": [
      "assets/img/products/caravans/16.jpg"
    ]
  },
  {
    "id": "caravans-16",
    "cat": "caravans",
    "name": "كرفانات – موديل 16",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/18.jpg",
    "images": [
      "assets/img/products/caravans/18.jpg"
    ]
  },
  {
    "id": "caravans-17",
    "cat": "caravans",
    "name": "كرفانات – موديل 17",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/19.jpg",
    "images": [
      "assets/img/products/caravans/19.jpg"
    ]
  },
  {
    "id": "caravans-18",
    "cat": "caravans",
    "name": "كرفانات – موديل 18",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/20.jpg",
    "images": [
      "assets/img/products/caravans/20.jpg"
    ]
  },
  {
    "id": "caravans-19",
    "cat": "caravans",
    "name": "كرفانات – موديل 19",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/21.jpg",
    "images": [
      "assets/img/products/caravans/21.jpg"
    ]
  },
  {
    "id": "caravans-20",
    "cat": "caravans",
    "name": "كرفانات – موديل 20",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/22.jpg",
    "images": [
      "assets/img/products/caravans/22.jpg"
    ]
  },
  {
    "id": "caravans-21",
    "cat": "caravans",
    "name": "كرفانات – موديل 21",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/23.jpg",
    "images": [
      "assets/img/products/caravans/23.jpg"
    ]
  },
  {
    "id": "caravans-22",
    "cat": "caravans",
    "name": "كرفانات – موديل 22",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/24.jpg",
    "images": [
      "assets/img/products/caravans/24.jpg"
    ]
  },
  {
    "id": "caravans-23",
    "cat": "caravans",
    "name": "كرفانات – موديل 23",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/26.jpg",
    "images": [
      "assets/img/products/caravans/26.jpg"
    ]
  },
  {
    "id": "caravans-24",
    "cat": "caravans",
    "name": "كرفانات – موديل 24",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/29.jpg",
    "images": [
      "assets/img/products/caravans/29.jpg"
    ]
  },
  {
    "id": "caravans-25",
    "cat": "caravans",
    "name": "كرفانات – موديل 25",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/30.jpg",
    "images": [
      "assets/img/products/caravans/30.jpg"
    ]
  },
  {
    "id": "caravans-26",
    "cat": "caravans",
    "name": "كرفانات – موديل 26",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/31.jpg",
    "images": [
      "assets/img/products/caravans/31.jpg"
    ]
  },
  {
    "id": "caravans-27",
    "cat": "caravans",
    "name": "كرفانات – موديل 27",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/32.jpg",
    "images": [
      "assets/img/products/caravans/32.jpg"
    ]
  },
  {
    "id": "caravans-28",
    "cat": "caravans",
    "name": "كرفانات – موديل 28",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/33.jpg",
    "images": [
      "assets/img/products/caravans/33.jpg"
    ]
  },
  {
    "id": "caravans-29",
    "cat": "caravans",
    "name": "كرفانات – موديل 29",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/34.jpg",
    "images": [
      "assets/img/products/caravans/34.jpg"
    ]
  },
  {
    "id": "caravans-30",
    "cat": "caravans",
    "name": "كرفانات – موديل 30",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/35.jpg",
    "images": [
      "assets/img/products/caravans/35.jpg"
    ]
  },
  {
    "id": "caravans-31",
    "cat": "caravans",
    "name": "كرفانات – موديل 31",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/36.jpg",
    "images": [
      "assets/img/products/caravans/36.jpg"
    ]
  },
  {
    "id": "caravans-32",
    "cat": "caravans",
    "name": "كرفانات – موديل 32",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/37.jpg",
    "images": [
      "assets/img/products/caravans/37.jpg"
    ]
  },
  {
    "id": "caravans-33",
    "cat": "caravans",
    "name": "كرفانات – موديل 33",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/38.jpg",
    "images": [
      "assets/img/products/caravans/38.jpg"
    ]
  },
  {
    "id": "caravans-34",
    "cat": "caravans",
    "name": "كرفانات – موديل 34",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/39.jpg",
    "images": [
      "assets/img/products/caravans/39.jpg"
    ]
  },
  {
    "id": "caravans-35",
    "cat": "caravans",
    "name": "كرفانات – موديل 35",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/40.jpg",
    "images": [
      "assets/img/products/caravans/40.jpg"
    ]
  },
  {
    "id": "caravans-36",
    "cat": "caravans",
    "name": "كرفانات – موديل 36",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/41.jpg",
    "images": [
      "assets/img/products/caravans/41.jpg"
    ]
  },
  {
    "id": "caravans-37",
    "cat": "caravans",
    "name": "كرفانات – موديل 37",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/42.jpg",
    "images": [
      "assets/img/products/caravans/42.jpg"
    ]
  },
  {
    "id": "caravans-38",
    "cat": "caravans",
    "name": "كرفانات – موديل 38",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/43.jpg",
    "images": [
      "assets/img/products/caravans/43.jpg"
    ]
  },
  {
    "id": "caravans-39",
    "cat": "caravans",
    "name": "كرفانات – موديل 39",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/44.jpg",
    "images": [
      "assets/img/products/caravans/44.jpg"
    ]
  },
  {
    "id": "caravans-40",
    "cat": "caravans",
    "name": "كرفانات – موديل 40",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/45.jpg",
    "images": [
      "assets/img/products/caravans/45.jpg"
    ]
  },
  {
    "id": "caravans-41",
    "cat": "caravans",
    "name": "كرفانات – موديل 41",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/46.jpg",
    "images": [
      "assets/img/products/caravans/46.jpg"
    ]
  },
  {
    "id": "caravans-42",
    "cat": "caravans",
    "name": "كرفانات – موديل 42",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/47.jpg",
    "images": [
      "assets/img/products/caravans/47.jpg"
    ]
  },
  {
    "id": "caravans-43",
    "cat": "caravans",
    "name": "كرفانات – موديل 43",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/48.jpg",
    "images": [
      "assets/img/products/caravans/48.jpg"
    ]
  },
  {
    "id": "caravans-44",
    "cat": "caravans",
    "name": "كرفانات – موديل 44",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/49.jpg",
    "images": [
      "assets/img/products/caravans/49.jpg"
    ]
  },
  {
    "id": "caravans-45",
    "cat": "caravans",
    "name": "كرفانات – موديل 45",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/50.jpg",
    "images": [
      "assets/img/products/caravans/50.jpg"
    ]
  },
  {
    "id": "caravans-46",
    "cat": "caravans",
    "name": "كرفانات – موديل 46",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/51.jpg",
    "images": [
      "assets/img/products/caravans/51.jpg"
    ]
  },
  {
    "id": "caravans-47",
    "cat": "caravans",
    "name": "كرفانات – موديل 47",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/52.jpg",
    "images": [
      "assets/img/products/caravans/52.jpg"
    ]
  },
  {
    "id": "caravans-48",
    "cat": "caravans",
    "name": "كرفانات – موديل 48",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/53.jpg",
    "images": [
      "assets/img/products/caravans/53.jpg"
    ]
  },
  {
    "id": "caravans-49",
    "cat": "caravans",
    "name": "كرفانات – موديل 49",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/54.jpg",
    "images": [
      "assets/img/products/caravans/54.jpg"
    ]
  },
  {
    "id": "caravans-50",
    "cat": "caravans",
    "name": "كرفانات – موديل 50",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/55.jpg",
    "images": [
      "assets/img/products/caravans/55.jpg"
    ]
  },
  {
    "id": "caravans-51",
    "cat": "caravans",
    "name": "كرفانات – موديل 51",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/56.jpg",
    "images": [
      "assets/img/products/caravans/56.jpg"
    ]
  },
  {
    "id": "caravans-52",
    "cat": "caravans",
    "name": "كرفانات – موديل 52",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/57.jpg",
    "images": [
      "assets/img/products/caravans/57.jpg"
    ]
  },
  {
    "id": "caravans-53",
    "cat": "caravans",
    "name": "كرفانات – موديل 53",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/58.jpg",
    "images": [
      "assets/img/products/caravans/58.jpg"
    ]
  },
  {
    "id": "caravans-54",
    "cat": "caravans",
    "name": "كرفانات – موديل 54",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/59.jpg",
    "images": [
      "assets/img/products/caravans/59.jpg"
    ]
  },
  {
    "id": "caravans-55",
    "cat": "caravans",
    "name": "كرفانات – موديل 55",
    "group": null,
    "desc": "جميع مقاسات الكرفانات الحديدية والفيبر جلاس — مكاتب، أكشاك حراسة، غرف استراحة ووحدات متنقلة.",
    "featured": false,
    "img": "assets/img/products/caravans/60.jpg",
    "images": [
      "assets/img/products/caravans/60.jpg"
    ]
  },
  {
    "id": "manhole-covers-01",
    "cat": "manhole-covers",
    "name": "أغطية بلاعات – موديل 01",
    "group": null,
    "desc": "أغطية بلاعات فيبر جلاس خفيفة الوزن وغير قابلة للصدأ أو السرقة.",
    "featured": true,
    "img": "assets/img/products/manhole-covers/01.jpg",
    "images": [
      "assets/img/products/manhole-covers/01.jpg"
    ]
  },
  {
    "id": "manhole-covers-02",
    "cat": "manhole-covers",
    "name": "أغطية بلاعات – موديل 02",
    "group": null,
    "desc": "أغطية بلاعات فيبر جلاس خفيفة الوزن وغير قابلة للصدأ أو السرقة.",
    "featured": false,
    "img": "assets/img/products/manhole-covers/02.jpg",
    "images": [
      "assets/img/products/manhole-covers/02.jpg"
    ]
  },
  {
    "id": "manhole-covers-03",
    "cat": "manhole-covers",
    "name": "أغطية بلاعات – موديل 03",
    "group": null,
    "desc": "أغطية بلاعات فيبر جلاس خفيفة الوزن وغير قابلة للصدأ أو السرقة.",
    "featured": false,
    "img": "assets/img/products/manhole-covers/03.jpg",
    "images": [
      "assets/img/products/manhole-covers/03.jpg"
    ]
  }
];
