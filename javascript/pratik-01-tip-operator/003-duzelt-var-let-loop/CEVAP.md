`var` function scope; döngü bitince `i === 3`. `setTimeout` callback'leri aynı `i`'ye bakıyor → 3,3,3.

`var` → `let` yap. `let` block scope; her iterasyonda ayrı `i`. Çıktı: 0, 1, 2.