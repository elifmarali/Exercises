## Error objeleri

`typeof new Error()` → `"object"`. `instanceof Error` → `true`. `message` ve `stack` (ortam desteği varsa) standart property’lerdir.

`throw` ile `Error` (veya alt sınıf) kullanmak stack trace, tutarlı yapı ve hata yakalama için faydalıdır. `throw "string"` gibi kullanımlardan kaçın; `new Error("...")` veya custom `Error` alt sınıfları tercih et.