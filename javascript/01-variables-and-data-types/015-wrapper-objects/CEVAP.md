## Wrapper objects

`Number`, `String`, `Boolean` hem constructor hem primitif’lere metot sağlar. `'a'.toUpperCase()` çağrıldığında geçici `String` wrapper oluşturulur, metot çalışır, wrapper atılır.

`typeof new Number(1)` → `"object"`. `new Number(1) === 1` → `false` (object vs primitive).

**Öneri:** Primitive kullan (`1`, `'a'`, `true`); `new Number` / `new String` kullanma. Gerekiyorsa `Number(...)`, `String(...)` ile conversion yap.