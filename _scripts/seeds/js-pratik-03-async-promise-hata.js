"use strict";
const questions = [
  {
    slug: "cikti-micro-macro",
    question: `Çıktı sırasını yaz (1–6):

\`\`\`js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
queueMicrotask(() => console.log(5));
console.log(6);
\`\`\``,
    answer: `1, 4, 6, 3, 5, 2. Önce senkron (1,4,6). Sonra microtask’lar (3,5). En sonda macrotask (setTimeout → 2).`,
  },
  {
    slug: "yaz-fetch-with-timeout",
    question: `\`fetchWithTimeout(url, ms)\` yaz. \`fetch(url)\` çalışsın; \`ms\` içinde cevap gelmezse **reject** et. \`AbortController\` kullan.`,
    answer: `\`\`\`js
function fetchWithTimeout(url, ms) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  return fetch(url, { signal: c.signal })
    .finally(() => clearTimeout(t));
}
\`\`\`

\`finally\` ile timer temizlenir; reject’te de çalışır.`,
  },
  {
    slug: "yaz-sleep",
    question: `\`sleep(ms)\` yaz: \`ms\` ms bekleyip resolve eden bir Promise dönsün. \`await sleep(1000)\` gibi kullanılacak.`,
    answer: `\`\`\`js
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
\`\`\``,
  },
  {
    slug: "yaz-promise-all-settled-summary",
    question: `\`allSettledSummary(promises)\` yaz. \`Promise.allSettled\` gibi çalışsın; sonuç olarak \`{ fulfilled: number, rejected: number }\` dönsün.`,
    answer: `\`\`\`js
async function allSettledSummary(promises) {
  const results = await Promise.allSettled(promises);
  return results.reduce(
    (acc, r) => (r.status === 'fulfilled' ? acc.fulfilled++ : acc.rejected++, acc),
    { fulfilled: 0, rejected: 0 }
  );
}
\`\`\``,
  },
  {
    slug: "duzelt-async-foreach",
    question: `Amaç: \`items\` üzerinde sırayla \`asyncTask(x)\` çalışsın, bittiğinde \`done\` loglansın. Bu kod \`done\`’u beklenmeden basıyor. **Düzelt.**

\`\`\`js
async function run(items) {
  items.forEach(async (x) => await asyncTask(x));
  console.log('done');
}
\`\`\``,
    answer: `\`forEach\` callback’in Promise’ını beklemez. \`for...of\` + \`await\` kullan:

\`\`\`js
async function run(items) {
  for (const x of items) await asyncTask(x);
  console.log('done');
}
\`\`\`

Paralel istersen \`Promise.all(items.map(x => asyncTask(x)))\`; sıra kaybolur.`,
  },
  {
    slug: "yaz-retry",
    question: `\`retry(fn, n)\` yaz. \`fn\` async; reject ederse en fazla \`n\` kez tekrar dene. İlk resolve’ta o değeri dön; hep reject’te son reject’i fırlat.`,
    answer: `\`\`\`js
async function retry(fn, n) {
  let last;
  for (let i = 0; i <= n; i++) {
    try {
      return await fn();
    } catch (e) {
      last = e;
    }
  }
  throw last;
}
\`\`\``,
  },
  {
    slug: "yaz-my-race",
    question: `\`myRace(promises)\` yaz. \`Promise.race\` gibi; ilk **settle** olan (resolve veya reject) neyse onun sonucunu döndürsün. \`Promise.race\` kullanma.`,
    answer: `\`\`\`js
function myRace(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) Promise.resolve(p).then(resolve, reject);
  });
}
\`\`\`

İlk \`then\` veya \`catch\` tetiklenince \`resolve\`/\`reject\` bir kez çağrılır; diğerleri yok sayılır.`,
  },
  {
    slug: "cikti-async-await-sira",
    question: `Çıktı sırası ne olur?

\`\`\`js
async function f() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
console.log(3);
f();
console.log(4);
\`\`\``,
    answer: `3, 1, 4, 2. Önce senkron 3; \`f()\` başlar, 1 basar. \`await\` microtask’a geçer; 4 basılır. Sonra microtask, 2.`,
  },
  {
    slug: "yaz-wrap-callback",
    question: `\`promisify(fn)\` yaz. \`fn\` callback-style: \`(err, result) => {}\` son argüman. \`promisify(fn)(arg)\` Promise dönsün; resolve \`result\`, reject \`err\`.`,
    answer: `\`\`\`js
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}
\`\`\``,
  },
  {
    slug: "duzelt-try-catch-async",
    question: `Bu kod \`throw\`’u yakalamıyor; Unhandled rejection oluyor. **Neden?** Düzelt.

\`\`\`js
function get() {
  fetch('/api').then(r => r.json()).then(d => { throw new Error('fail'); });
}
try {
  get();
} catch (e) {
  console.log('caught', e);
}
\`\`\``,
    answer: `\`get()\` senkron; sadece \`fetch\` zincirini başlatır, Promise döndürmez. \`throw\` then içinde, sonraki tick’te; try/catch o anda yok.

Düzeltme: \`get\` async yap, \`await fetch\` + \`await\` zinciri, \`throw\` async içinde. Çağıranda \`await get()\` + try/catch veya \`get().catch(...)\`.`,
  },
];
module.exports = { questions };
