"use strict";
const questions = [
  {
    slug: "yaz-esm-util",
    question: `Bir ES modül \`utils.js\` yaz: \`capitalize(s)\` (ilk harf büyük) ve \`reverse(s)\` (string ters) export et. Default export yok. Sonra \`main.js\`’ten import edip \`capitalize(reverse("hello"))\` çağır.`,
    answer: `\`\`\`js
// utils.js
export function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1).toLowerCase();
}
export function reverse(s) {
  return [...s].reverse().join('');
}
\`\`\`
\`\`\`js
// main.js
import { capitalize, reverse } from './utils.js';
console.log(capitalize(reverse('hello'))); // "Ollah"
\`\`\``,
  },
  {
    slug: "yaz-event-delegate",
    question: `\`delegate(parent, eventType, selector, handler)\` yaz. \`parent\`’a \`eventType\` (örn. \`"click"\`) dinleyici ekle; sadece \`selector\`’a uyan hedefe tıklanırsa \`handler(e, target)\` çağrılsın. Basit \`matches\` ile.`,
    answer: `\`\`\`js
function delegate(parent, eventType, selector, handler) {
  parent.addEventListener(eventType, (e) => {
    const t = e.target.closest(selector);
    if (t && parent.contains(t)) handler(e, t);
  });
}
\`\`\`

\`closest\` yoksa \`target\`’tan yukarı \`parent\`’a kadar \`matches\` ile tara.`,
  },
  {
    slug: "yaz-toggle-class",
    question: `\`toggleClass(el, className)\` yaz. \`el\` bir DOM element; \`className\` varsa kaldır, yoksa ekle. \`classList.toggle\` kullanma; \`classList.add\` / \`remove\` ve \`contains\` ile yap.`,
    answer: `\`\`\`js
function toggleClass(el, className) {
  if (el.classList.contains(className)) el.classList.remove(className);
  else el.classList.add(className);
}
\`\`\``,
  },
  {
    slug: "yaz-create-element-attr",
    question: `\`create(tag, attrs, children)\` yaz. \`tag\` string, \`attrs\` \`{ id, class, "data-x": "y" }\`, \`children\` string veya \`Node\` dizisi. Tek \`document.createElement\` + attribute + append.`,
    answer: `\`\`\`js
function create(tag, attrs = {}, children = []) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  for (const c of children) el.append(typeof c === 'string' ? document.createTextNode(c) : c);
  return el;
}
\`\`\`

\`class\` için \`className\` kullanılabilir; \`setAttribute('class', v)\` de çalışır.`,
  },
  {
    slug: "yaz-once",
    question: `\`once(el, eventType, fn)\` yaz. \`fn\` en fazla bir kez çalışsın; çalıştıktan sonra listener kaldırılsın.`,
    answer: `\`\`\`js
function once(el, eventType, fn) {
  const wrap = (e) => {
    el.removeEventListener(eventType, wrap);
    fn(e);
  };
  el.addEventListener(eventType, wrap);
}
\`\`\``,
  },
  {
    slug: "yaz-qs-all-text",
    question: `\`querySelectorAllText(selector)\` yaz. \`document.querySelectorAll(selector)\` ile eşleşenlerin **textContent**’lerini dizi olarak döndür.`,
    answer: `\`\`\`js
function querySelectorAllText(selector) {
  return [...document.querySelectorAll(selector)].map(el => el.textContent);
}
\`\`\``,
  },
  {
    slug: "cikti-event-phase",
    question: `Aşağıdaki HTML ile \`div\` ve \`button\`’a click listener ekleniyor (capture false). Butona tıklanınca sırayla ne log’lanır? \`stopPropagation\` yok.

\`\`\`html
<div id="d"><button id="b">OK</button></div>
\`\`\`
\`\`\`js
d.addEventListener('click', () => console.log('div'));
b.addEventListener('click', () => console.log('btn'));
\`\`\``,
    answer: `Önce \`btn\`, sonra \`div\`. Bubbling: hedef → … → root. Butona tıklanınca önce \`b\`, sonra \`d\` log’lanır.`,
  },
  {
    slug: "yaz-dynamic-import-chanks",
    question: `\`loadWhenVisible(el, importFn)\` yaz. \`el\` görünür olunca \`importFn()\` (dynamic import) çalışsın. \`IntersectionObserver\` kullan; tek sefer tetiklensin.`,
    answer: `\`\`\`js
function loadWhenVisible(el, importFn) {
  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    io.disconnect();
    importFn();
  }, { threshold: 0 });
  io.observe(el);
}
\`\`\``,
  },
  {
    slug: "yaz-prevent-double-submit",
    question: `Bir \`<form>\` submit’inde çift gönderimi engelle. Submit sırasında butonu disable et; fetch (veya form submit) bitene kadar tekrar submit edilmesin. Küçük bir snippet ile göster.`,
    answer: `\`\`\`js
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  if (btn.disabled) return;
  btn.disabled = true;
  try {
    await fetch(form.action, { method: 'POST', body: new FormData(form) });
    // ...
  } finally {
    btn.disabled = false;
  }
});
\`\`\`

Form native submit kullanıyorsa \`submit\` içinde \`btn.disabled = true\` yeterli; sayfa yenilenirse form tekrar gönderilmez.`,
  },
  {
    slug: "yaz-get-data-attr",
    question: `\`dataKeys(el)\` yaz. \`el\` üzerindeki \`data-*\` attribute’larının key’lerini (\`data-x\` → \`x\`) dizi olarak dönsün. \`dataset\` kullan.`,
    answer: `\`\`\`js
function dataKeys(el) {
  return Object.keys(el.dataset);
}
\`\`\`

\`dataset\` \`data-foo-bar\` → \`fooBar\`. Tireli isim istersen \`Object.keys(el.dataset).map(k => 'data-' + k.replace(/([A-Z])/g, '-$1').toLowerCase())\` gibi dönüşüm gerekir.`,
  },
];
module.exports = { questions };
