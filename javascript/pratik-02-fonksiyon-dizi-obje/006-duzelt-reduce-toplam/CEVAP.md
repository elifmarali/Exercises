`reduce` ilk `acc` değeri yok; ilk eleman `acc` olur, ikinci elemandan itibaren `n`. Burada `1 + 2 + 3 + 4` olur, toplam 10 — aslında doğru. Ama genel kullanım için initial value vermek daha iyi:

```js
const sum = nums.reduce((acc, n) => acc + n, 0);
```

Eğer “yanlış” boş dizi ise: `[].reduce(...)` initial olmadan hata verir. `, 0` ekleyince `[]` → 0.