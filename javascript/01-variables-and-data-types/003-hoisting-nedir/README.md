# JavaScript’te hoisting nedir?

Aşağıdaki kodun çıktısı ne olur? Adım adım açıkla.

```js
console.log(a);
var a = 5;
console.log(a);
function foo() { console.log('foo'); }
foo();
```

Fonksiyon bildirimleri (declaration) ile fonksiyon ifadeleri (expression) hoisting açısından nasıl farklı davranır?