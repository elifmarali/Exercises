## number to string

`(42).toString()` ve `String(42)` sonuç olarak `"42"` verir. `String` her tip için çalışır; `null` → `"null"`, `undefined` → `"undefined"`. `x.toString()` `null`/`undefined` için hata verir.

`String(x)` güvenli genel dönüşüm; `x?.toString()` veya `'' + x` da kullanılır ama `String(x)` daha açık ve öngörülebilirdir.