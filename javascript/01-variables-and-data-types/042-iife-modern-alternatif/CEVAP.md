## IIFE ve alternatifler

IIFE, fonksiyon scope oluşturup “private” değişken saklamak ve global kirliliği azaltmak için kullanılıyordu. `var` block scope’a sahip olmadığı için `{ var x = 1 }` yeterli değildi.

`let`/`const` ile block scope yeterli: `{ let x = 1; }`. Modüller zaten izole scope sağlar. Günümüzde IIFE çoğunlukla modül + block + `let`/`const` ile gereksiz hale gelmiştir.