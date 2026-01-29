"use strict";
const questions = [
  { slug: "array-mutating-vs-not", question: "Hangi dizi metotları orijinali değiştirir (mutate), hangileri yeni dizi döner? `push`, `map`, `sort`, `slice`?", answer: "Mutate: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`. Yeni dizi: `map`, `filter`, `slice`, `concat`, `flat`." },
  { slug: "map-vs-foreach", question: "`map` ile `forEach` farkı nedir? Dönüş değeri ve kullanım tercihi?", answer: "`map` yeni dizi döner; `forEach` undefined. Dönüşüm için `map`, sadece yan etki (log, side effect) için `forEach`." },
  { slug: "filter-reduce", question: "`filter` ve `reduce` ne yapar? `reduce` ile `filter` veya `map` benzeri işlem nasıl yapılır?", answer: "`filter`: koşula uyanları döner. `reduce`: tek değere indirger. `reduce` ile `filter`/`map` taklit edilebilir ama okunabilirlik için doğrudan `filter`/`map` tercih edilir." },
  { slug: "find-findIndex", question: "`find` ile `findIndex` farkı nedir? Bulunamazsa ne döner?", answer: "`find` elemanı, `findIndex` indeksi döner. Bulunamazsa `find` → undefined, `findIndex` → -1." },
  { slug: "some-every", question: "`some` ve `every` ne döner? Boş dizide `some` ve `every` sonucu nedir?", answer: "`some`: en az biri truthy → true. `every`: hepsi truthy → true. Boş dizide `some` → false, `every` → true." },
  { slug: "spread-array-copy", question: "`const b = [...a]` shallow copy mi deep copy mi? İç içe dizi/obje nasıl etkilenir?", answer: "Shallow copy. İç içe referanslar paylaşılır; değişirse her iki “kopyada” da görülür. Deep için `structuredClone` veya kütüphane." },
  { slug: "array-from", question: "`Array.from` ne işe yarar? `Array.from({ length: 3 }, (_, i) => i)` ne üretir?", answer: "Array-like veya iterable’dan dizi oluşturur. İkinci argüman map fonksiyonu. Örnek → `[0, 1, 2]`." },
  { slug: "flat-flatMap", question: "`flat` ve `flatMap` ne yapar? `flat(1)` ile `flat(Infinity)` farkı?", answer: "`flat(depth)`: iç içe dizileri düzleştirir. `flat(1)` bir seviye, `Infinity` hepsi. `flatMap` = `map` + `flat(1)`." },
  { slug: "sort-stable", question: "`sort` kararlı mı? Sayı sıralarken neden `(a,b) => a - b` kullanılır?", answer: "ES2019’dan itibaren stable. Varsayılan compare string’e çevirir; sayı için `(a,b) => a - b` gerekir. Yoksa `[10,2,1].sort()` yanlış sıra verir." },
  { slug: "includes-vs-indexOf", question: "`includes` ile `indexOf` farkı nedir? `NaN` için hangisi doğru çalışır?", answer: "`includes` boolean döner, `indexOf` indeks (-1 yoksa). `[NaN].indexOf(NaN)` → -1; `[NaN].includes(NaN)` → true. `includes` NaN’da doğru." },
];
module.exports = { questions };
