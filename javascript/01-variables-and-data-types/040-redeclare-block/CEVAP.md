## Redeclaration ve shadowing

`let`/`const` aynı scope’ta yeniden bildirilemez; `let x; let x;` → `SyntaxError`. `var` ile aynı scope’ta tekrar `var x` geçerlidir; son atama geçerli olur.

Farklı block’larda `let x` tanımlanabilir (shadowing). İç block dıştaki `x`’i gizler; dıştaki `x`’e içeriden erişilemez. Okunabilirlik için shadowing abartılı kullanılmamalıdır.