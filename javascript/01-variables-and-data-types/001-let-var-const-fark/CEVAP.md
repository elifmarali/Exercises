## Temel farklar

| Özellik | var | let | const |
|--------|-----|-----|-------|
| Scope | function | block | block |
| Tekrar atama | Evet | Evet | Hayır |
| Yeniden bildirim | Evet (aynı scope) | Hayır | Hayır |
| Hoisting | Evet (undefined) | Evet (TDZ) | Evet (TDZ) |

`var` function scope’a sahiptir; `if`, `for` gibi bloklar scope oluşturmaz. `let` ve `const` block scope’a sahiptir.

`const` ile tanımlanan değişkenlere yeniden atama yapılamaz. Ancak referans tiplerde (objeler, diziler) içerik değiştirilebilir; `const` sadece referansın kendisini sabitler.

**Best practice:** Varsayılan olarak `const` kullan; değer değişecekse `let`. `var` kullanma.