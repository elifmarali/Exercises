# Temporal Dead Zone (TDZ) nedir?

Aşağıdaki kod çalıştırıldığında ne olur ve neden?

```js
console.log(x);
let x = 10;
```

`var x;` kullanılsaydı davranış nasıl farklı olurdu? TDZ’in pratikte karşılaşılabilecek senaryolarını ve nasıl kaçınılacağını açıkla.