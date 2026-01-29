"use strict";
const questions = [
  { slug: "to-primitive", question: "Obje primitive’e nasıl çevrilir? `valueOf` ve `toString` sırası nedir?", answer: "`valueOf` önce denenir; primitive dönmezse `toString`. `Symbol.toPrimitive` varsa o öncelikli. Sayı bağlamında `valueOf` → `toString`; string’de genelde `toString`." },
  { slug: "abstract-equality", question: "`==` karşılaştırmasında `null` ve `undefined` nasıl davranır? `null == undefined`?", answer: "`null == undefined` → true (özel kural). Diğer değerlerle karşılaştırmada normal coercion kuralları uygulanır." },
  { slug: "string-number-coercion", question: "`1 + '2'` ve `'1' + 2` sonuçları nelerdir? `+` operatörü ne zaman birleştirme yapar?", answer: "Biri string ise concatenation. `1 + '2'` → `'12'`, `'1' + 2` → `'12'`. İkisi de sayıysa toplama." },
  { slug: "boolean-coercion", question: "`if (x)` gibi bağlamda boolean coercion nasıl yapılır? Falsy listesi?", answer: "ToBoolean: falsy → false, diğerleri true. Falsy: false, 0, -0, 0n, '', null, undefined, NaN." },
  { slug: "number-coercion", question: "`Number('')`, `Number(null)`, `Number(undefined)`, `Number('  \t ')` sonuçları?", answer: "`Number('')` → 0. `Number(null)` → 0. `Number(undefined)` → NaN. `Number('  \t ')` → 0 (boşluk trim)." },
  { slug: "boxing", question: "Primitive üzerinde `'a'.toUpperCase()` nasıl çalışır? Wrapper (boxing) nedir?", answer: "Geçici wrapper obje oluşturulur, metot çalışır, obje atılır. Primitive’ler için otomatik boxing." },
  { slug: "array-to-string", question: "`[].toString()`, `[1,2].toString()`, `[null].toString()` sonuçları nelerdir?", answer: "`[].toString()` → `''`. `[1,2]` → `'1,2'`. `[null]` → `'null'` (elemanlar toString ile)." },
  { slug: "object-to-number", question: "`+{}` ve `+[]` sonuçları nelerdir? Neden?", answer: "`+{}` → NaN (`toString` → `'[object Object]'` sayı değil). `+[]` → 0 (`[].toString()` → `''`, `Number('')` → 0)." },
  { slug: "avoiding-coercion", question: "Coercion’dan kaçınmak için ne yapılır? `===` ve açık dönüşüm ne sağlar?", answer: "`===` tip dönüşümü yapmaz. `Number(x)`, `String(x)`, `Boolean(x)` ile açık dönüşüm; `==` yerine `===` tercih edilir." },
  { slug: "symbol-coercion", question: "`Symbol` number veya string’e zorla çevrilebilir mi? `+Symbol()` veya `'' + Symbol()`?", answer: "Çevrilemez; `TypeError`. `String(sym)` sadece `sym.description` için; genel coercion’da Symbol’ler hariç tutulur." },
];
module.exports = { questions };
