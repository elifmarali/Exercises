"use strict";
const questions = [
  {
    slug: "yaz-flatten",
    question: `\`flatten(arr)\` yaz: tek seviye iç içe diziyi düzleştirsin. \`[1, [2, 3], [4, [5]]]\` → \`[1, 2, 3, 4, [5]]\`. \`flat(1)\` kullanma; \`reduce\` veya döngü ile yap.`,
    answer: `\`\`\`js
function flatten(arr) {
  return arr.reduce((acc, x) => acc.concat(Array.isArray(x) ? x : [x]), []);
}
\`\`\`

Veya \`for\` + \`push\` / \`spread\` ile. Sadece bir seviye; \`[5]\` kalır.`,
  },
  {
    slug: "yaz-groupby",
    question: `\`groupBy(arr, key)\` yaz. \`key\` bir string ise obje property adı (örn. \`"type"\`); obje elemanlarında \`obj[key]\` değerine göre grupla. Sonuç \`{ "a": [...], "b": [...] }\` formatında.`,
    answer: `\`\`\`js
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key];
    if (!acc[k]) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {});
}
\`\`\`

\`key\` fonksiyon olacak şekilde \`groupBy(arr, fn)\` da genişletilebilir.`,
  },
  {
    slug: "yaz-debounce",
    question: `\`debounce(fn, ms)\` yaz. Dönen fonksiyon \`ms\` boyunca tekrar çağrılmazsa en son çağrıda \`fn\` çalışsın. Timer sıfırlansın.`,
    answer: `\`\`\`js
function debounce(fn, ms) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), ms);
  };
}
\`\`\`

\`this\` korunur; \`apply\` ile args geçilir.`,
  },
  {
    slug: "yaz-unique",
    question: `\`unique(arr)\` yaz: dizideki **tekrarları** kaldır, ilk geçişi tut. Primitive’ler için yeterli. \`Set\` veya \`filter\` + \`indexOf\` kullan.`,
    answer: `\`\`\`js
function unique(arr) {
  return [...new Set(arr)];
}
\`\`\`

\`filter\` ile: \`arr.filter((x, i) => arr.indexOf(x) === i)\`. Set daha kısa ve genelde hızlı.`,
  },
  {
    slug: "yaz-deep-clone",
    question: `Sadece primitive, düz obje ve dizi (iç içe) için \`deepClone(obj)\` yaz. \`structuredClone\` kullanma; recurse ile kopyala.`,
    answer: `\`\`\`js
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const out = Array.isArray(obj) ? [] : {};
  for (const k of Object.keys(obj)) out[k] = deepClone(obj[k]);
  return out;
}
\`\`\`

Döngüsel referans yok sayılır; gerekirse \`WeakMap\` ile takip edilir.`,
  },
  {
    slug: "duzelt-reduce-toplam",
    question: `Bu kod toplamı yanlış hesaplıyor. **Hatayı bul** ve düzelt; sonra çalıştırıp doğrula.

\`\`\`js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n);
console.log(sum);
\`\`\``,
    answer: `\`reduce\` ilk \`acc\` değeri yok; ilk eleman \`acc\` olur, ikinci elemandan itibaren \`n\`. Burada \`1 + 2 + 3 + 4\` olur, toplam 10 — aslında doğru. Ama genel kullanım için initial value vermek daha iyi:

\`\`\`js
const sum = nums.reduce((acc, n) => acc + n, 0);
\`\`\`

Eğer “yanlış” boş dizi ise: \`[].reduce(...)\` initial olmadan hata verir. \`, 0\` ekleyince \`[]\` → 0.`,
  },
  {
    slug: "yaz-curry-add",
    question: `\`add\` curry olsun: \`add(1)(2)(3)\` → 6, \`add(1, 2)(3)\` → 6. En az bir argüman her çağrıda var; toplam 3 sayı gelince sonucu dön.`,
    answer: `\`\`\`js
function add(...args) {
  const sum = (a, b) => a + b;
  const run = (...next) => {
    const all = [...args, ...next];
    if (all.length >= 3) return all.slice(0, 3).reduce(sum, 0);
    return add(...all);
  };
  return run;
}
\`\`\`

Daha esnek: \`run\` içinde \`length >= N\` veya “boş çağrı” ile \`valueOf\` kullanımı yapılabilir.`,
  },
  {
    slug: "yaz-chunk",
    question: `\`chunk(arr, size)\` yaz. Diziyi \`size\`’lık parçalara böl. \`chunk([1,2,3,4,5], 2)\` → \`[[1,2],[3,4],[5]]\`.`,
    answer: `\`\`\`js
function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
\`\`\`

\`reduce\` ile de yazılabilir.`,
  },
  {
    slug: "yaz-obj-from-pairs",
    question: `\`fromPairs(pairs)\` yaz: \`[[k1,v1],[k2,v2]]\` → \`{ k1: v1, k2: v2 }\`. \`Object.fromEntries\` kullanma; döngü ile yap.`,
    answer: `\`\`\`js
function fromPairs(pairs) {
  const obj = {};
  for (const [k, v] of pairs) obj[k] = v;
  return obj;
}
\`\`\`

\`reduce\`: \`pairs.reduce((o,[k,v])=>(o[k]=v,o),{})\`.`,
  },
  {
    slug: "yaz-memoize",
    question: `\`memoize(fn)\` yaz. \`fn\` tek primitive argüman alıyor. Aynı argümanla tekrar çağrıda cache’ten dön; ilk seferde \`fn\`’i çağırıp sonucu sakla.`,
    answer: `\`\`\`js
function memoize(fn) {
  const cache = new Map();
  return function (x) {
    if (cache.has(x)) return cache.get(x);
    const v = fn(x);
    cache.set(x, v);
    return v;
  };
}
\`\`\`

Çoklu argüman için key üret (örn. \`JSON.stringify(args)\` veya \`[].join\`); primitive ile burada tek argüman yeterli.`,
  },
];
module.exports = { questions };
