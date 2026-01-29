## delete

`delete` object property'lerini kaldırır. `var`/`let`/`const` ile tanımlı değişkenler ve fonksiyon bildirimleri silinemez; `delete` non-strict’te `false` döner, strict’te `SyntaxError` olabilir.

`configurable: false` property’ler silinemez. `delete arr[i]` dizide `i` indeksini “boş” yapar (`empty`); `length` değişmez. Sık `delete` kullanımı performans ve tahmin edilebilirlik açısından genelde önerilmez; gerekiyorsa Map/Set veya yeni obje üretmek tercih edilir.