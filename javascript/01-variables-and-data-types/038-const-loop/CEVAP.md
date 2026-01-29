## const ve loop

`for ( ; ; )` içinde `i++` yeniden atama gerektirir; `const` izin vermez. `for (const i = 0; i < 3; i++)` → `TypeError`.

`for (const x of arr)` her iterasyonda yeni `x` binding’i oluşturur; atama yok, sadece yeni değer atanır. `for...of` ve `for...in` ile `const` güvenle kullanılır.