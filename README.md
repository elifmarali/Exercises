# Q&A Öğrenme Arşivi

JavaScript, React, Next.js (TSX) ve Node.js için sıfırdan ileri seviyeye kapsamlı soru–cevap arşivi. Kendini test etmek, eksikleri görmek, mülakatlara hazırlanmak ve gerçek proje senaryolarına alışmak için tasarlandı.

## Yapı

```
Exercises/
├── javascript/     # JS: değişkenler, scope, async, tip sistemi, vb.
├── react/          # React + TSX: hooks, lifecycle, state, performans, vb.
├── nextjs/         # Next.js + TSX: App Router, SSR/SSG/ISR, API, vb.
├── nodejs/         # Node: event loop, HTTP, güvenlik, API, vb.
├── content/        # Seed JSON (soru/cevap kaynağı)
├── _scripts/       # Üretim script’leri
└── README.md
```

Her teknoloji kendi altında **konu bazlı** klasörlere ayrılır. Konular temelden ileri seviyeye sıralanır.

## Konu ve soru formatı

- Her **konu** bir klasör (örn. `01-variables-and-data-types`, `03-hooks-basics`).
- Her **soru** kendi klasöründe: `001-kisa-slug`, `002-baska-slug`, …
- Her soru klasöründe iki dosya:
  - **`README.md`**: Sadece soru. Cevap yok; önce sen düşün, çöz.
  - **`CEVAP.md`**: Detaylı cevap, alternatifler, best practice, edge case’ler.

Önce `README.md` ile soruyu oku, cevabı kendin üretmeye çalış; sonra `CEVAP.md` ile kontrol et.

## Konu listeleri

### JavaScript
- `01-variables-and-data-types` — Değişkenler, tipler, `let`/`var`/`const`, `typeof`, `null`/`undefined`, Symbol, BigInt
- `02-operators-and-expressions` — Operatörler, coercion, short-circuit
- `03-control-flow` — `if`/`else`, `switch`, döngüler, `break`/`continue`
- `04-functions` — Fonksiyonlar, arrow, closure, higher-order
- `05-scope-and-closures` — Scope, closure, TDZ, module scope
- `06-arrays-and-iteration` — Dizi metotları, `map`/`filter`/`reduce`, iterasyon
- `07-objects-and-prototypes` — Objeler, prototip, `instanceof`
- `08-es6-modules` — `import`/`export`, modül davranışı
- `09-asynchronous-javascript` — Callback, Promise, `async`/`await`, event loop
- `10-error-handling` — `try`/`catch`, `throw`, hata stratejileri
- `11-this-and-context` — `this`, `bind`/`call`/`apply`
- `12-type-coercion-and-equality` — `==` vs `===`, coercion kuralları
- `13-design-patterns` — Modül, singleton, factory, observer, vb.
- `14-memory-and-performance` — GC, bellek sızıntıları, basit performans
- `15-regex-and-strings` — Regex, string metotları
- `16-modern-js-features` — ES6+ özellikler, optional chaining, `??`, vb.

### React (TSX ağırlıklı)
- `01-components-and-tsx` — Bileşenler, JSX/TSX, temel type’lar
- `02-props-and-state` — Props, state, tek yönlü veri akışı
- `03-hooks-basics` — `useState`, `useEffect` temelleri
- `04-hooks-advanced` — `useReducer`, `useMemo`, `useCallback`, custom hooks
- `05-lifecycle-and-effects` — Lifecycle, effect cleanup, dependency array
- `06-context-and-state-management` — Context, state yönetimi
- `07-routing` — React Router, route params, nested routes
- `08-forms-and-validation` — Form state, validation
- `09-api-and-data-fetching` — Fetch, SWR/React Query benzeri pattern’ler
- `10-performance-optimization` — Memoization, lazy load, profil
- `11-testing` — Unit, component, mocking
- `12-typescript-in-react` — Generic’ler, utility types, strict mode
- `13-patterns-and-architecture` — Bileşen yapısı, compound components, vb.
- `14-security-and-best-practices` — XSS, sanitization, güvenli pattern’ler

### Next.js (TSX ağırlıklı)
- `01-fundamentals-and-routing` — Temeller, dosya tabanlı routing
- `02-pages-and-app-router` — Pages vs App Router, layout, loading
- `03-data-fetching-and-caching` — `fetch`, cache, revalidate
- `04-api-routes-and-server-actions` — API routes, Server Actions
- `05-middleware-and-auth` — Middleware, auth pattern’leri
- `06-styling-and-assets` — CSS, `Image`, `Font`
- `07-deployment-and-optimization` — Build, deploy, optimizasyon
- `08-ssr-ssg-isr` — SSR, SSG, ISR senaryoları
- `09-typescript-and-types` — Next + TS type’ları
- `10-performance-and-security` — Performans ve güvenlik
- `11-testing` — Next + test
- `12-advanced-patterns` — İleri pattern’ler

### Node.js
- `01-fundamentals-and-modules` — Modül sistemi, `require` vs `import`
- `02-event-loop-and-async` — Event loop, `setImmediate`, `process.nextTick`
- `03-streams-and-buffers` — Stream’ler, Buffer
- `04-file-system-and-path` — `fs`, `path`
- `05-http-and-express` — HTTP, Express temelleri
- `06-api-design-and-rest` — REST, API tasarımı
- `07-middleware-and-error-handling` — Middleware, hata yönetimi
- `08-security` — Güvenlik temelleri
- `09-performance-and-scalability` — Performans, ölçekleme
- `10-testing` — Node + test
- `11-databases-and-orm` — DB erişimi, ORM pattern’leri
- `12-authentication-and-sessions` — Auth, session
- `13-deployment` — Deploy, process manager, env

## İçerik üretimi (seed + generate)

Hedef: **her konu için en az 100 farklı soru**. İçerik `content/<tech>/<konu>.json` üzerinden yönetilir; script’ler bu JSON’dan `README.md` + `CEVAP.md` üretir.

### 1. Seed ile JSON oluşturma

```bash
node _scripts/seed-content.js <tech> <konu>
# Örnek:
node _scripts/seed-content.js javascript 01-variables-and-data-types
```

JSON formatı: `{ "topic": "...", "questions": [ { "id", "slug", "question", "answer" } ] }`.  
Yeni soruları `_scripts/seeds/<tech>-<konu>.js` benzeri seed dosyasına ekleyip `seed-content.js`’i o konuya yönlendirebilirsin.

### 2. Q&A klasörlerini üretme

```bash
node _scripts/generate-qa.js <tech> <konu>
# Örnek:
node _scripts/generate-qa.js javascript 01-variables-and-data-types
```

Bu komut `<tech>/<konu>/` altında `001-slug`, `002-slug`, … klasörlerini ve her birinde `README.md` (soru) + `CEVAP.md` (cevap) oluşturur.

### 3. Yeni soru ekleme

1. İlgili seed dosyasına `{ slug, question, answer }` ekle (veya doğrudan `content/.../ konu.json`’ı düzenle).
2. `seed-content.js` ile JSON’ı güncelle (seed kullanıyorsan).
3. `generate-qa.js` ile konuyu yeniden üret. Var olan soruların üzerine yazılır; sıra `id` / dizideki sıraya göre belirlenir.

### 4. Yeni konu ekleme

1. `_scripts/seeds/` altında `<tech>-<konu>.js` oluştur (örn. `react-04-hooks-advanced.js`); `module.exports = { questions: [ ... ] }`.
2. `seed-content.js` içindeki `SEED` map'ine ilgili tech → konu-klasörü → `require(...)` ekle.
3. `node _scripts/seed-content.js <tech> <konu-klasörü>` çalıştır.
4. `node _scripts/generate-qa.js <tech> <konu-klasörü>` veya `generate-all-qa.js` ile Q&A klasörlerini üret.

## Mevcut içerik özeti

**71 konu** dolu. Çoğu konuda **10 soru**; aşağıdakiler önceki oluşturmalardan dolayı daha fazla:

| Teknoloji | Konu | Soru |
|-----------|------|------|
| JavaScript | `01-variables-and-data-types` | 100 |
| JavaScript | `05-scope-and-closures` | 21 |
| JavaScript | `09-asynchronous-javascript` | 20 |
| React | `03-hooks-basics` | 21 |
| Node.js | `02-event-loop-and-async` | 20 |

Diğer tüm konularda (JS 02–16; React 01–14; Next.js 01–12; Node 01–13) **10’ar soru** var. Toplam **71 konu**.

### Pratik konular (4’er adet, kod odaklı)

Her teknolojide **4 pratik konu** var; sorular **sayısal / uygulama** ağırlıklı: “çıktı ne?”, “bu kodu yaz”, “hatayı düzelt”, “şunu implement et” tarzı. Kendi ortamında yazıp çalıştırarak pratik yapabilirsin.

| Teknoloji | Pratik konular |
|-----------|----------------|
| **JavaScript** | `pratik-01-tip-operator`, `pratik-02-fonksiyon-dizi-obje`, `pratik-03-async-promise-hata`, `pratik-04-modul-dom-event` |
| **React** | `pratik-01-bilesen-jsx`, `pratik-02-state-form`, `pratik-03-effect-api`, `pratik-04-performans-test` |
| **Next.js** | `pratik-01-routing-pages`, `pratik-02-data-fetch`, `pratik-03-api-middleware`, `pratik-04-deploy-env` |
| **Node.js** | `pratik-01-modul-fs`, `pratik-02-http-express`, `pratik-03-async-stream`, `pratik-04-api-guvenlik` |

Her pratik konuda **10 soru**. Önce `README.md` ile soruyu oku, kodu kendin yazıp deneyle; sonra `CEVAP.md` ile karşılaştır.

## Kullanım önerileri

- Konu bazlı ilerle; temelden ileri seviyeye sırayı takip et.
- Önce `README.md`’deki soruyu cevaplamayı dene, sonra `CEVAP.md` ile karşılaştır.
- **Pratik konularda** kodu gerçekten yazıp çalıştır; çıktı, “yaz” ve “düzelt” sorularında kendini test et.
- Eksik kaldığın konuları tekrar et; mülakat öncesi ilgili konu klasörlerini tarayabilirsin.
- React / Next.js için sorular TSX odaklı; Node.js tarafında backend, event loop, güvenlik ve API senaryoları ön planda.

## Teknik notlar

- **React / Next.js**: TypeScript ve TSX öncelikli.
- **JavaScript**: Temel tipler ve dil özelliklerinden başlayıp async, modül, performans konularına kadar.
- **Node.js**: Backend mantığı, event loop, asenkron yapı, API ve güvenlik vurgulu.

Bu yapı, uzun vadeli öğrenme, tekrar ve mülakat hazırlığı için sürdürülebilir bir temel sağlar. Konu başına 10 soru yeterli; istersen seed ile artırabilirsin.
