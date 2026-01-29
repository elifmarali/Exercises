## Date ve typeof

`typeof new Date()` → `"object"`. `Date` instance’ları referans tip olduğu için `d1 === d2` sadece aynı referans ise `true` olur; “aynı an” için değil.

Tarih karşılaştırması için `d1.getTime() === d2.getTime()` veya `+d1 === +d2` kullan. `<` / `>` doğrudan `Date` üzerinde çalışır.