## Block scope

`let`/`const` block scope’a aittir; `if` bloğu bittikten sonra `x` tanımsızdır, `console.log(x)` → `ReferenceError`.

`var` kullanılsaydı `x` function/global scope’ta olurdu; `console.log(x)` `1` basardı. `switch` içinde `case` blokları tek scope paylaşır; `let`/`const` için `case` bloklarını `{ }` ile sarmak iyi fikirdir. `catch (e)` parametresi de block scope’a aittir.