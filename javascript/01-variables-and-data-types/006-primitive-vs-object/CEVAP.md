## Primitive vs reference

**Primitive’ler** (number, string, boolean, null, undefined, symbol, bigint) değerle kopyalanır. `b = a` ile `b` `a`’nın kopyasını alır; `b`’yi değiştirmek `a`’yı etkilemez.

**Object’ler** referansla kopyalanır. `b = a` ile `b` aynı objeyi gösterir; `b.x = 1` `a.x`’i de değiştirir.

**Karşılaştırma:** Primitive’ler değerle, objeler referansla karşılaştırılır. `{} === {}` → `false`.

**Kopyalama:** Shallow copy (`Object.assign`, spread) sadece üst seviyeyi kopyalar; iç referanslar paylaşılır. Deep copy için `structuredClone`, kütüphane (örn. lodash) veya dikkatli recursive kopya kullan.