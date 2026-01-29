## Strict mode etkileri

- Atanmamış değişkene yazma (`x = 1`) `ReferenceError`; non-strict’te global leak.
- Duplicate parametre `SyntaxError`.
- `delete` ile silinemez şeyleri silmek `TypeError`.
- `with` yasak.

Hoisting davranışı aynı kalır; `var` hâlâ hoist edilir. Fark, bazı hataların erken ve net şekilde ortaya çıkmasıdır.

**Öneri:** Modül ve `class` içi kod zaten strict; projede tamamen strict kullan.