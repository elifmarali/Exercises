"use strict";
const questions = [
  { slug: "object-literal-shorthand", question: "Property shorthand ve method shorthand nedir? `{ x, f() {} }` geçerli mi?", answer: "Evet. `{ x }` → `{ x: x }`. `{ f() {} }` → `{ f: function f() {} }`." },
  { slug: "computed-property", question: "Computed property `[key]` ne işe yarar? `const k = 'a'; { [k]: 1 }` sonucu nedir?", answer: "Key ifadeyle hesaplanır. `{ [k]: 1 }` → `{ a: 1 }`. Dinamik key için kullanılır." },
  { slug: "object-assign", question: "`Object.assign` ne yapar? Hedef obje mutate edilir mi? Aynı key birden fazla kaynaktaysa?", answer: "Kaynakları hedefe kopyalar (shallow). Hedef mutate edilir. Aynı key varsa son kaynaktaki kazanır." },
  { slug: "keys-values-entries", question: "`Object.keys`, `values`, `entries` ne döner? Symbol key’ler dahil mi?", answer: "Sadece own, enumerable property’ler. Symbol key’ler dahil değil; onlar için `Object.getOwnPropertySymbols`." },
  { slug: "hasOwnProperty-safe", question: "`obj.hasOwnProperty('x')` neden riskli? Güvenli alternatifler neler?", answer: "`obj` prototype’ı override edilmiş veya `Object.create(null)` ise hata olabilir. `Object.hasOwn(obj,'x')` veya `Object.prototype.hasOwnProperty.call(obj,'x')` kullan." },
  { slug: "destructuring-rename", question: "Destructuring’de property’yi yeniden adlandırmak nasıl yapılır? `const { x: y } = o` ne anlama gelir?", answer: "`const { x: y } = o` → `o.x` değeri `y` değişkenine atanır; `x` adı kullanılmaz." },
  { slug: "proto-vs-prototype", question: "`__proto__` ile `prototype` farkı nedir? Hangisi standart, hangisi tarihsel?", answer: "`prototype`: constructor’ın instance’lara verdiği obje. `__proto__`: instance’ın prototype’ı (constructor’ın `prototype`’ına referans). `__proto__` accessor tarihsel; `Object.getPrototypeOf` tercih edilir." },
  { slug: "object-create", question: "`Object.create(proto)` ne yapar? `Object.create(null)` neden kullanılır?", answer: "Verilen `proto` ile yeni obje oluşturur. `Object.create(null)` prototype’sız “saf” obje; Map benzeri key-value için." },
  { slug: "freeze-seal", question: "`Object.freeze` ile `Object.seal` farkı nedir? İkisi de shallow mı?", answer: "`seal`: ekleme/silme yasak, değer değişebilir. `freeze`: değer değişimi de yasak. İkisi de shallow; iç objeler etkilenmez." },
  { slug: "getter-setter", question: "Getter ve setter nasıl tanımlanır? Property descriptor’da `get`/`set` ne yapar?", answer: "`get` okumada, `set` yazmada çalışır. `Object.defineProperty` veya literal `get name(){}` / `set name(v){}` ile tanımlanır." },
];
module.exports = { questions };
