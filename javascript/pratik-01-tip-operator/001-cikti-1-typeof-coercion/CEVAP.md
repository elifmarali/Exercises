`b` → `"object"` (`typeof null`). `c` → `"null"` (`"" + null` string coercion).
- `console.log(b, c)` → `object null`
- `0 == "0"` → `true`, `0 === "0"` → `false`
- `[] + []` → `""`, `[] + {}` → `"[object Object]"`

Pratik: Tarayıcı veya Node ile çalıştırıp doğrula.