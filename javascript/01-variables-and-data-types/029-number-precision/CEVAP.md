## Float precision

IEEE 754 binary float’ta `0.1`, `0.2` tam temsil edilemez; toplam `0.30000000000000004` gibi bir değere denk gelir, bu yüzden `=== 0.3` `false` olur.

**Pratik:** Para birimi için ondalık kütüphanesi (decimal.js, big.js) veya cent/sent gibi integer birim kullan. Karşılaştırmada tolerans (`epsilon`) veya rounded compare kullan; doğrudan `===` kullanma.