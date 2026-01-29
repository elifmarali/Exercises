## NaN ve kontrol

`NaN` (Not a Number), geçersiz sayısal işlem sonucudur. IEEE 754’e göre `NaN !== NaN`; bu yüzden `NaN === NaN` → `false`.

- `isNaN("hello")` → `true` (önce coercion: `Number("hello")` → `NaN`, sonra `isNaN(NaN)`).
- `Number.isNaN("hello")` → `false` (sadece gerçek `NaN` için `true`).

**Güvenli kontrol:** `Number.isNaN(x)` kullan. Coercion istemiyorsan `isNaN` kullanma.

**Alternatif:** `x !== x` yalnızca `NaN` için `true` olur ama `Number.isNaN` daha okunabilir.