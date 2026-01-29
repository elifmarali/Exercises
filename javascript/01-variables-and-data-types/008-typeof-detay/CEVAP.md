## typeof sonuçları

- `typeof null` → `"object"` (bilinen bug).
- `typeof []` → `"object"`.
- `typeof function f(){}` → `"function"`.
- `typeof 42n` → `"bigint"`.

**Sınırlar:** `typeof` array vs object, null vs object ayrımını yapamaz.

**Ayırt etmek için:** `Array.isArray(x)` ile array; `x === null` ile null kontrolü. Obje alt tipleri için `instanceof` veya `Object.prototype.toString.call(x)` kullanılabilir.