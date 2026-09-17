/* ============================================================
   db.js — طبقة تخزين محسّنة باستخدام IndexedDB
   ------------------------------------------------
   الهدف: استبدال localStorage للبيانات الكبيرة (cache, favorites)
   مع الحفاظ على localStorage كـ fallback آمن.

   الاستخدام:
       await Store.get('key')              // قراءة نص
       await Store.set('key', 'value')     // كتابة نص
       await Store.getJSON('key', [])      // قراءة كائن JSON
       await Store.setJSON('key', {...})   // كتابة كائن JSON
       await Store.remove('key')           // حذف
   ============================================================ */

const DB_NAME = 'eduArchiveDB';
const DB_VERSION = 1;
const DB_STORE = 'keyval';

let _dbPromise = null;

/* ============================================================
   فتح قاعدة البيانات (lazy + cached)
   ============================================================ */
function openDB() {
    if (_dbPromise) return _dbPromise;

    _dbPromise = new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            return reject(new Error('IndexedDB not supported'));
        }
        let req;
        try {
            req = indexedDB.open(DB_NAME, DB_VERSION);
        } catch (e) {
            return reject(e);
        }

        req.onupgradeneeded = (e) => {
            const db = e.target.result;
            if (!db.objectStoreNames.contains(DB_STORE)) {
                db.createObjectStore(DB_STORE);
            }
        };

        req.onsuccess = (e) => resolve(e.target.result);
        req.onerror = (e) => reject(e.target.error);
        req.onblocked = () => reject(new Error('IndexedDB blocked'));
    });

    return _dbPromise;
}

/* ============================================================
   عمليات أساسية
   ============================================================ */
async function idbGet(key, fallback = null) {
    try {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction(DB_STORE, 'readonly');
            const req = tx.objectStore(DB_STORE).get(key);
            req.onsuccess = () => resolve(req.result !== undefined ? req.result : fallback);
            req.onerror = () => resolve(fallback);
        });
    } catch (e) {
        return fallback;
    }
}

async function idbSet(key, value) {
    try {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction(DB_STORE, 'readwrite');
            const req = tx.objectStore(DB_STORE).put(value, key);
            req.onsuccess = () => resolve(true);
            req.onerror = () => resolve(false);
        });
    } catch (e) {
        return false;
    }
}

async function idbRemove(key) {
    try {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction(DB_STORE, 'readwrite');
            tx.objectStore(DB_STORE).delete(key);
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => resolve(false);
        });
    } catch (e) {
        return false;
    }
}

async function idbClear() {
    try {
        const db = await openDB();
        return new Promise((resolve) => {
            const tx = db.transaction(DB_STORE, 'readwrite');
            tx.objectStore(DB_STORE).clear();
            tx.oncomplete = () => resolve(true);
            tx.onerror = () => resolve(false);
        });
    } catch (e) {
        return false;
    }
}

/* ============================================================
   طبقة التوافق — Store
   ----------------
   - تقرأ من IndexedDB أولاً
   - إذا لم تجد، تجرّب localStorage (للترحيل التدريجي)
   - عند الكتابة، تكتب في IndexedDB مع fallback لـ localStorage
   ============================================================ */
const Store = {
    /**
     * قراءة قيمة (نص أو كائن)
     */
    async get(key, fallback = null) {
        try {
            const v = await idbGet(key, undefined);
            if (v !== undefined && v !== null) return v;
        } catch (e) { /* ignore */ }

        try {
            const raw = localStorage.getItem(key);
            if (raw !== null) {
                // ترحيل تلقائي إلى IndexedDB
                try { await idbSet(key, raw); } catch (e) {}
                return raw;
            }
        } catch (e) { /* ignore */ }

        return fallback;
    },

    /**
     * كتابة قيمة (نص أو كائن)
     */
    async set(key, value) {
        const ok = await idbSet(key, value);
        if (!ok) {
            try {
                localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));
                return true;
            } catch (e) {
                return false;
            }
        }
        return true;
    },

    /**
     * حذف قيمة
     */
    async remove(key) {
        await idbRemove(key);
        try { localStorage.removeItem(key); } catch (e) {}
    },

    /**
     * قراءة كائن JSON
     */
    async getJSON(key, fallback) {
        const v = await this.get(key, null);
        if (v === null || v === undefined) return fallback;
        if (typeof v === 'object') return v;
        try { return JSON.parse(v); } catch (e) { return fallback; }
    },

    /**
     * كتابة كائن JSON (IndexedDB يخزّن objects مباشرة)
     */
    async setJSON(key, obj) {
        return this.set(key, obj);
    },

    /**
     * مسح كل شيء (استخدمه بحذر!)
     */
    async clear() {
        await idbClear();
        try { localStorage.clear(); } catch (e) {}
    },

    /**
     * فحص الدعم
     */
    isSupported() {
        return !!window.indexedDB;
    }
};

/* ============================================================
   بديل متزامن سريع للإعدادات الصغيرة (localStorage)
   ------------------------------------------------
   الإعدادات (set_*, darkMode, lang) تبقى على localStorage
   لأنها صغيرة الحجم وتحتاج قراءة فورية عند التحميل.
   ============================================================ */
const Settings = {
    get(key, fallback = null) {
        try {
            const v = localStorage.getItem(key);
            return v !== null ? v : fallback;
        } catch (e) { return fallback; }
    },
    set(key, value) {
        try { localStorage.setItem(key, value); return true; }
        catch (e) { return false; }
    },
    remove(key) {
        try { localStorage.removeItem(key); } catch (e) {}
    },
    getJSON(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return fallback;
            return JSON.parse(raw) ?? fallback;
        } catch (e) { return fallback; }
    },
    setJSON(key, obj) {
        try { localStorage.setItem(key, JSON.stringify(obj)); return true; }
        catch (e) { return false; }
    }
};

/* ============================================================
   تصدير للاستخدام الخارجي (اختياري في حالة modules)
   ============================================================ */
if (typeof window !== 'undefined') {
    window.Store = Store;
    window.Settings = Settings;
    window.openDB = openDB;
}

console.log('✅ db.js loaded — Store + Settings ready');
