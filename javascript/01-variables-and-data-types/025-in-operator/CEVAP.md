## in vs hasOwnProperty

`'x' in obj` `obj` veya prototype zincirinde `x` var mı diye bakar. `obj.hasOwnProperty('x')` sadece kendi property’lerine bakar, prototype’a bakmaz.

`Object.create(null)` ile `hasOwnProperty` yoktur; `obj.hasOwnProperty('x')` `TypeError` verir. Güvenli kullanım: `Object.prototype.hasOwnProperty.call(obj, 'x')` veya `Object.hasOwn(obj, 'x')` (ES2022+).