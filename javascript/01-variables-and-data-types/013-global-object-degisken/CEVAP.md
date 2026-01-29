## Global kirlilik

- Script seviyesinde `var x = 1` global’e eklenir (non-strict, non-module).
- `y = 1` (bildirimsiz atama) global’de `y` oluşturur; strict’te `ReferenceError`.

**Riskler:** İsim çakışmaları, third-party script’lerle etkileşim, test izolasyonu zorluğu, güvenlik (global’e hassas veri sızmaması).

**Öneri:** Modül kullan; `let`/`const` tercih et; global’e bilerek yazma. Gerekirse `globalThis` ile env’e göre (`window` vs `global`) eriş.