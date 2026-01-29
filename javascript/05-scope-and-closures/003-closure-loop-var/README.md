# `var` ile döngü + closure tuzakı: Aşağıdaki kod ne basar? Neden?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 100);
}
```

`let` kullanınca neden düzelir? IIFE ile (eski yöntem) nasıl çözülürdü?