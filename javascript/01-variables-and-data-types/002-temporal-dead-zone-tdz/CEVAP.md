## TDZ nedir?

`let` ve `const` ile tanımlanan değişkenler, bildirim satırına kadar “temporal dead zone”da sayılır. Bu aralıkta değişkene erişmek `ReferenceError` fırlatır.

```js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
```

`var` kullanılsaydı hoisting nedeniyle `undefined` basılır; hata olmaz.

**Neden var?** Erken erişimi engelleyerek mantık hatalarını azaltmak ve `const`/`let` davranışını öngörülebilir kılmak.

**Pratik:** Değişkenleri kullanıldıkları yere yakın, mümkünse blokun üst kısmında tanımla; fonksiyonları çağırmadan önce tanımlanmış olduklarından emin ol.