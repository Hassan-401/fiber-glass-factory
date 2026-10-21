-- ============================================================
-- قاعدة بيانات موقع سوق مصرية فيبر جلاس (Cloudflare D1)
-- ============================================================

-- ---------- إعدادات الموقع ----------
-- كل إعداد مخزّن كـ JSON عشان نقدر نخزّن نصوص ومصفوفات وكائنات
CREATE TABLE IF NOT EXISTS settings (
  key        TEXT PRIMARY KEY,
  value      TEXT NOT NULL,              -- JSON
  updated_at INTEGER NOT NULL DEFAULT (unixepoch())
);

-- ---------- الأقسام ----------
CREATE TABLE IF NOT EXISTS categories (
  id       TEXT PRIMARY KEY,             -- slug، مثال: cooling-towers
  name     TEXT NOT NULL,
  short    TEXT NOT NULL,
  descr    TEXT NOT NULL DEFAULT '',
  icon     TEXT NOT NULL DEFAULT 'box',
  sort     INTEGER NOT NULL DEFAULT 0,
  visible  INTEGER NOT NULL DEFAULT 1
);

-- ---------- المنتجات ----------
CREATE TABLE IF NOT EXISTS products (
  id       TEXT PRIMARY KEY,
  cat      TEXT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  name     TEXT NOT NULL,
  descr    TEXT NOT NULL DEFAULT '',
  grp      TEXT,                         -- نوع فرعي داخل القسم (مثال: برج تبريد دائري)
  featured INTEGER NOT NULL DEFAULT 0,
  sort     INTEGER NOT NULL DEFAULT 0,
  visible  INTEGER NOT NULL DEFAULT 1
);
CREATE INDEX IF NOT EXISTS idx_products_cat ON products(cat, sort);

-- ---------- صور المنتجات (الكاروسيل) ----------
CREATE TABLE IF NOT EXISTS product_images (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  url        TEXT NOT NULL,              -- مسار ثابت أو /api/img/<id>
  sort       INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX IF NOT EXISTS idx_images_product ON product_images(product_id, sort);

-- ---------- الصور المرفوعة من لوحة التحكم ----------
CREATE TABLE IF NOT EXISTS uploads (
  id         TEXT PRIMARY KEY,           -- معرّف عشوائي يظهر في الرابط
  mime       TEXT NOT NULL,
  size       INTEGER NOT NULL,
  data       BLOB NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
);

-- ---------- مستخدمو لوحة التحكم ----------
CREATE TABLE IF NOT EXISTS admins (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  username   TEXT NOT NULL UNIQUE,
  salt       TEXT NOT NULL,
  hash       TEXT NOT NULL,              -- PBKDF2-SHA256
  pw_version INTEGER NOT NULL DEFAULT 1, -- يزيد عند تغيير كلمة السر فتبطل الجلسات القديمة
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
);

-- ---------- عدّاد الزوار ----------
-- key = 'total' أو 'YYYY-MM'
CREATE TABLE IF NOT EXISTS visits (
  key   TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0
);
