## delete vs undefined atama

`delete obj.x` property’yi tamamen kaldırır; `'x' in obj` → `false`. `obj.x = undefined` property’yi tutar, değeri `undefined` yapar; `'x' in obj` → `true`.

`for..in` ve `Object.keys` her iki durumda da `x`’i listeler (undefined olsa bile). `JSON.stringify` `undefined` value’ları atar; property yokmuş gibi davranır. “Gerçekten yok” istiyorsan `delete`, “var ama boş” istiyorsan `undefined` atama kullan.