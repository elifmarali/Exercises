## globalThis

`globalThis` (ES2020) ortama bağımsız global object referansıdır. Tarayıcıda `window`, Node’da `global`, Worker’da `self` karşılık gelir; `globalThis` hepsinde aynı kavramı verir.

Cross-platform kodda global’e erişmek için `globalThis` kullan; `window` sadece tarayıcıda, `global` sadece Node’da vardır. Edge runtime, deno vb. için de `globalThis` tutarlıdır.