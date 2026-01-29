## Primitive immutability

Primitive’ler değer olarak saklanır; “içleri” değiştirilemez. `s[0] = 'x'` sessizce yok sayılır (strict’te hata yok ama değişim de olmaz).

`toUpperCase`, `replace`, `trim` vs. yeni string döndürür; orijinali değiştirmez.

**Fayda:** Güvenli paylaşım, yan etki azaltma, cache’leme kolaylığı. Performans için engine’ler interning ve optimizasyon yapar.