"use strict";
const questions = [
  {
    slug: "cikti-1-typeof-coercion",
    question: `Aşağıdaki kodun **çıktısını** yaz (console.log satırları sırayla ne basar?):

\`\`\`js
let a = null;
let b = typeof a;
let c = "" + a;
console.log(b, c);
console.log(0 == "0", 0 === "0");
console.log([] + [], [] + {});
\`\`\`

Cevabını kod çalıştırmadan, adım adım mantıkla üret.`,
    answer: `\`b\` → \`"object"\` (\`typeof null\`). \`c\` → \`"null"\` (\`"" + null\` string coercion).
- \`console.log(b, c)\` → \`object null\`
- \`0 == "0"\` → \`true\`, \`0 === "0"\` → \`false\`
- \`[] + []\` → \`""\`, \`[] + {}\` → \`"[object Object]"\`

Pratik: Tarayıcı veya Node ile çalıştırıp doğrula.`,
  },
  {
    slug: "yaz-sayilari-topla",
    question: `\`sum(a, b)\` adında bir fonksiyon yaz. İki sayı alıp toplamlarını dönsün. Eğer argümanlar sayı değilse (veya eksikse) \`NaN\` dönmeli; \`Number\` coercion kullanma, sadece gerçek sayı kabul et.

Örnek: \`sum(1, 2)\` → 3, \`sum("1", 2)\` → \`NaN\`, \`sum(1)\` → \`NaN\`.`,
    answer: `\`\`\`js
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) return NaN;
  return a + b;
}
\`\`\`

Veya \`Number.isFinite\` ile:
\`\`\`js
function sum(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) return NaN;
  return a + b;
}
\`\`\``,
  },
  {
    slug: "duzelt-var-let-loop",
    question: `Bu kod 0,1,2 yerine 3,3,3 basıyor. **Neden?** Sadece **tek bir kelime** değiştirerek (var→let veya let→var) doğru çıktıyı al. Kodu çalıştırıp doğrula.

\`\`\`js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10);
}
\`\`\``,
    answer: `\`var\` function scope; döngü bitince \`i === 3\`. \`setTimeout\` callback'leri aynı \`i\`'ye bakıyor → 3,3,3.

\`var\` → \`let\` yap. \`let\` block scope; her iterasyonda ayrı \`i\`. Çıktı: 0, 1, 2.`,
  },
  {
    slug: "yaz-saf-mi",
    question: `\`isPureNumber(n)\` yaz: \`n\` yalnızca sonlu bir sayıysa (sayı tipinde, \`NaN\` ve \`Infinity\` değilse) \`true\`, değilse \`false\` dönsün. \`isNaN\` / \`Number.isNaN\` ve \`isFinite\` / \`Number.isFinite\` farkını bilerek seç.`,
    answer: `\`\`\`js
function isPureNumber(n) {
  return typeof n === 'number' && Number.isFinite(n);
}
\`\`\`

\`Number.isFinite\` \`NaN\` ve \`Infinity\` için \`false\` verir; coercion yapmaz. \`isFinite("1")\` \`true\` olurdu, \`Number.isFinite("1")\` \`false\`.`,
  },
  {
    slug: "cikti-2-optional-nullish",
    question: `Çıktıyı yaz (kod çalıştırmadan):

\`\`\`js
const x = 0;
const y = null;
const z = undefined;
console.log(x || 1, y || 1, z || 1);
console.log(x ?? 1, y ?? 1, z ?? 1);
\`\`\``,
    answer: `\`||\`: İlk falsy’de sağa geçer. \`x || 1\` → 1, \`y || 1\` → 1, \`z || 1\` → 1.

\`??\`: Sadece \`null\` / \`undefined\`’ta sağa geçer. \`x ?? 1\` → 0, \`y ?? 1\` → 1, \`z ?? 1\` → 1.`,
  },
  {
    slug: "yaz-clamp",
    question: `\`clamp(n, min, max)\` yaz: \`n < min\` ise \`min\`, \`n > max\` ise \`max\`, else \`n\` dönsün. Sayı olmayan veya \`min > max\` için makul davran (örn. \`NaN\` veya \`min\`).`,
    answer: `\`\`\`js
function clamp(n, min, max) {
  if (typeof n !== 'number' || Number.isNaN(n)) return NaN;
  if (min > max) return NaN; // veya min
  if (n < min) return min;
  if (n > max) return max;
  return n;
}
\`\`\`

Kısa: \`Math.min(max, Math.max(min, n))\` (NaN / min>max kontrolü yok).`,
  },
  {
    slug: "duzelt-destructuring-default",
    question: `Amaç: \`opts\` verilmezse \`{ size: 10 }\` kullan. Bu kod \`size\` hep 10 üretiyor; \`opts = { size: 0 }\` verince de 10 oluyor. **Neden?** Düzelt.

\`\`\`js
function create(opts = { size: 10 }) {
  const { size = 10 } = opts;
  return { size };
}
\`\`\``,
    answer: `Default \`size = 10\` sadece \`undefined\`’ta devreye girer. \`opts = { size: 0 }\` ile \`size\` 0; doğru. Ama \`opts = {}\` ile \`size\` \`undefined\` → 10. Sorun \`opts\` default’unda: \`opts = {}\` verince \`{ size: 10 }\` kullanılmıyor, \`size\` yok → 10. Eğer “\`opts.size\` yoksa 10” isteniyorsa mevcut mantık doğru. “\`opts\` yoksa \`{ size: 10 }\`” için:

\`\`\`js
function create(opts) {
  const { size = 10 } = opts ?? {};
  return { size };
}
\`\`\``,
  },
  {
    slug: "yaz-deep-equality-primitive",
    question: `Sadece **primitive** ve **düz obje/dizi** (iç içe objeler dahil) için \`deepEqual(a, b)\` yaz. \`===\` ile primitive, recurse ile obje/dizi. Date, RegExp, Map ihmal.`,
    answer: `\`\`\`js
function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null || typeof a !== 'object' || typeof b !== 'object') return false;
  const keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(k => keysB.includes(k) && deepEqual(a[k], b[k]));
}
\`\`\`

Array için \`Object.keys\` indeksleri verir; yeterli. Önce \`Array.isArray\` ile tip uyumu da kontrol edilebilir.`,
  },
  {
    slug: "cikti-3-object-is",
    question: `Çıktıyı yaz:

\`\`\`js
console.log(Object.is(NaN, NaN), NaN === NaN);
console.log(Object.is(0, -0), 0 === -0);
console.log(Object.is({}, {}));
\`\`\``,
    answer: `\`Object.is(NaN, NaN)\` → true, \`NaN === NaN\` → false.
\`Object.is(0, -0)\` → false, \`0 === -0\` → true.
\`Object.is({}, {})\` → false (farklı referans).`,
  },
  {
    slug: "yaz-pick-omit",
    question: `\`pick(obj, keys)\` ve \`omit(obj, keys)\` yaz. \`pick\`: sadece \`keys\`’teki property’leri içeren yeni obje. \`omit\`: \`keys\`’tekiler hariç. Orijinali değiştirme.`,
    answer: `\`\`\`js
function pick(obj, keys) {
  return Object.fromEntries(keys.filter(k => k in obj).map(k => [k, obj[k]]));
}
function omit(obj, keys) {
  const set = new Set(keys);
  return Object.fromEntries(Object.entries(obj).filter(([k]) => !set.has(k)));
}
\`\`\`

Alternatif: \`pick\` için \`keys.reduce((a,k) => (k in obj && (a[k]=obj[k]), a), {})\`, \`omit\` için \`keys\` dışındakileri \`reduce\` veya \`Object.entries\` + \`filter\` ile topla.`,
  },
];
module.exports = { questions };
