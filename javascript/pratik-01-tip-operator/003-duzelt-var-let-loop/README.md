Bu kod 0,1,2 yerine 3,3,3 basıyor. **Neden?** Sadece **tek bir kelime** değiştirerek (var→let veya let→var) doğru çıktıyı al. Kodu çalıştırıp doğrula.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10);
}
```