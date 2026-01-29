## var ile loop

`var` function (veya global) scope’a aittir; döngü biteceği için `i` son değer 3 olur. `setTimeout` callback’leri çalıştığında hep aynı `i`’ye (3) bakılır → `3, 3, 3`.

`let` block scope’a aittir; her iterasyonda yeni `i` oluşur. Callback’ler kendi `i`’lerini “görür” → `0, 1, 2`.

**Özet:** Loop + async callback kullanırken `let` (veya `const`) kullan; `var` closure tuzaklarına yol açar.