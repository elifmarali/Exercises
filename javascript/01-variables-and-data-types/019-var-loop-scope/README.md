# Aşağıdaki kodun çıktısı ne olur? `var` kullanıldığı için neden beklenmedik sonuç çıkar?

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

`let` ile değiştirince neden doğru çalışır? Closure ve loop scope ilişkisini açıkla.