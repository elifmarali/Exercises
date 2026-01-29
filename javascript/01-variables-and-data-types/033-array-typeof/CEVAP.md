## Array ve typeof

Diziler object’tir; `typeof []` → `"object"`. Ayrım için `Array.isArray(x)` kullan; `instanceof Array` farklı realm’lerde yanıltıcı olabilir. `Object.prototype.toString.call([])` → `"[object Array]"` de kullanılabilir ancak `Array.isArray` daha sade ve standart.