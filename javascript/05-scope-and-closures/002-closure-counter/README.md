# Aşağıdaki "sayaç" closure'ı nasıl çalışıyor? `increment` her çağrıda aynı `count`'a mı erişiyor?

```js
function makeCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}
const c = makeCounter();
console.log(c(), c(), c());
```

Çıktı ne olur? `count` neden silinmiyor?