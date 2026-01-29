## Regex ve typeof

`typeof /abc/` → `"object"`. Regex’ler object’tir; primitive değil.

Literal `/.../` ve `new RegExp('...')` aynı tipi üretir. Literal statik pattern’ler için daha okunaklı; dinamik pattern’de `RegExp` constructor gerekir. `RegExp` instance’ları `exec`, `test`, `source`, `flags` gibi property’lere sahiptir.