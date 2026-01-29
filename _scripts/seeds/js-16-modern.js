"use strict";
const questions = [
  { slug: "destructuring-basics", question: "Array ve object destructuring nasıl yapılır? Default değer ve rest ile kullanım?", answer: "`const [a,b] = arr`, `const {x,y} = obj`. Default: `const [a=0] = []`. Rest: `const [a,...r] = arr` veya `const {x,...r} = obj`." },
  { slug: "spread-uses", question: "Spread `...` nerelerde kullanılır? Clone, merge, fonksiyon argümanı örnekleri?", answer: "Dizi/obje clone: `[...a]`, `{...o}`. Merge: `{...a,...b}`. Argüman: `f(...args)`. Rest’ten farkı: rest toplar, spread açar." },
  { slug: "class-syntax", question: "`class` ile `extends` ve `super` nasıl kullanılır? Static metot ne işe yarar?", answer: "`extends` kalıtım; `super` üst sınıf constructor/metodu. `static` sınıfa ait; instance’da yok. `super()` constructor’da zorunlu (extends varsa)." },
  { slug: "proxy-reflect", question: "`Proxy` ne işe yarar? `Reflect` neden kullanılır?", answer: "Proxy obje üzerinde get/set/apply vb. trap’ler; davranışı özelleştirir. Reflect aynı işlemleri standart şekilde yapar; trap içinden default davranışı tetiklemek için kullanılır." },
  { slug: "symbol-iterator", question: "`Symbol.iterator` ne işe yarar? `for...of` nasıl çalışır?", answer: "Iterable’ın iterator’ünü döndüren metot. `for...of` bu iterator’ü kullanır. Özel objelere iterasyon eklemek için `Symbol.iterator` tanımlanır." },
  { slug: "generators", question: "Generator `function*` ve `yield` nasıl çalışır? Lazy iteration ile ilişkisi?", answer: "`yield` duraklar; `next()` ile devam. Iterator döner; lazy sequence için uygun. `for...of` generator’ı tüketir." },
  { slug: "optional-chaining-summary", question: "`?.` nerede kullanılır? `obj?.a?.b` ve `fn?.()` farkı?", answer: "Erişim zincirinde null/undefined’da durur, undefined döner. `fn?.()` optional çağrı; fn yoksa çağrı yapılmaz." },
  { slug: "nullish-coalescing-summary", question: "`??` ile `||` özet farkı? Hangi durumda `??` kullanılmalı?", answer: "`??` sadece null/undefined’da sağ tarafı kullanır. 0 veya '' geçerli değerken `||` bunları atar; bu durumda `??` tercih edilir." },
  { slug: "globalThis", question: "`globalThis` nedir? Neden `window` veya `global` yerine kullanılır?", answer: "Ortama göre global obje (window, global, self). Cross-platform kodda tek referans; `globalThis` kullanılır." },
  { slug: "array-at", question: "`at(-1)` ne yapar? `arr[arr.length-1]` ile farkı?", answer: "Negatif indeks sondan; `at(-1)` son eleman. `arr[arr.length-1]` ile aynı sonuç ama `at` daha okunaklı ve negatif index doğrudan desteklenir." },
];
module.exports = { questions };
