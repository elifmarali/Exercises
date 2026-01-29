## Modül scope

ES modüllerinde üst seviye scope modül scope’tur; global değil. `var` bile global’e eklenmez. `let`/`const` de modül scope’a aittir.

Modül dosyaları otomatik strict kabul edilir, `this` `undefined` olur. Export edilenler dışarı açılır; diğer her şey modüle özel kalır.