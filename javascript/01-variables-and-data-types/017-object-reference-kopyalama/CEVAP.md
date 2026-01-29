## Shallow vs deep

**Shallow:** Sadece üst seviye kopyalanır; iç objeler/diziler referansla paylaşılır. `Object.assign`, `{...obj}`, `[...arr]` shallow.

**Deep:** İç içe tüm yapı kopyalanır. `structuredClone` (Node 17+, modern tarayıcı) çoğu built-in için uygun; function, Symbol, bazı object türleri clone edilmez.

**Dikkat:** Circular reference’lar `structuredClone` ile hata verebilir. Özel türler için lodash `cloneDeep` veya manuel recursive copy gerekebilir.