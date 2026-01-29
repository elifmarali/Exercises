## instanceof vs typeof

`typeof` primitive ve `"function"` / `"object"` ayrımı için; `instanceof` “bu constructor’ın instance’ı mı?” için kullanılır. `[] instanceof Object` → `true`, `typeof []` → `"object"`.

Farklı realm’lerde aynı “tip” farklı constructor’larla temsil edilebilir; `instanceof` `false` dönebilir. `Array.isArray`, `Object.prototype.toString.call` veya `Symbol.toStringTag` gibi yöntemler daha güvenilir olabilir.