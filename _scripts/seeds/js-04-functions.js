"use strict";
const questions = [
  { slug: "fn-declaration-expression", question: "Fonksiyon declaration ile function expression farkı nedir? Hoisting nasıl değişir?", answer: "Declaration: `function f() {}` tamamen hoist edilir. Expression: `const f = function () {}`; `f` hoist edilir ama atama yapılmaz; çağrı atamadan önceyse TypeError." },
  { slug: "arrow-this", question: "Ok fonksiyonu `this`’i nereden alır? Kendi `this`’i var mı?", answer: "Kendi `this`’i yok; lexical `this` kullanır (tanımlandığı yerdeki `this`). `call`/`apply`/`bind` ile değiştirilemez." },
  { slug: "arrow-arguments", question: "Ok fonksiyonunda `arguments` kullanılabilir mi? Alternatif nedir?", answer: "Kullanılamaz; kendi `arguments`’ı yok. Rest parametre kullan: `(...args) => { }`." },
  { slug: "default-params", question: "Default parametre `function f(a, b = 1) {}` nasıl çalışır? `f(1, undefined)` ile `f(1, null)` farkı nedir?", answer: "Sadece `undefined` için default devreye girer. `f(1, undefined)` → b=1; `f(1, null)` → b=null." },
  { slug: "rest-params", question: "Rest parametre `...rest` ne yapar? `arguments` ile farkı nedir?", answer: "Kalan argümanları diziye toplar. `arguments` array-like, rest gerçek dizi; ayrıca `arguments` ok fonksiyonunda yok." },
  { slug: "callback-hof", question: "Higher-order function nedir? Callback kullanımı nasıl örnektir?", answer: "Fonksiyon alan veya döndüren fonksiyon. `map`, `filter`, `setTimeout` callback’i HOF kullanımına örnektir." },
  { slug: "closure-basics", question: "Closure kısaca nedir? Fonksiyon “nerede” tanımlıysa oranın scope’una nasıl erişir?", answer: "Fonksiyon kendi lexical scope’unu “hatırlar”; dışarıda çağrılsa bile o scope’a erişir. Buna closure denir." },
  { slug: "iife-use", question: "IIFE ne işe yarar? Günümüzde modül veya block scope ile yerine geçen ne kullanılır?", answer: "Hemen çalışan, kendi scope’unu oluşturan fonksiyon. Günümüzde modül ve `let`/`const` block scope çoğu ihtiyacı karşılar." },
  { slug: "pure-function", question: "Pure function nedir? Side effect ve aynı girdi–aynı çıktı ilişkisi neden önemli?", answer: "Side effect yok; aynı girdi her zaman aynı çıktıyı verir. Test ve tahmin edilebilirlik için önemli; memoization ve paralel işlemde de faydalı." },
  { slug: "recursion-base", question: "Özyinelemede base case neden şart? Base case olmazsa ne olur?", answer: "Duruş noktası yoksa sonsuz çağrı; stack overflow. Base case ile özyineleme sonlanır." },
];
module.exports = { questions };
