Çıktı sırasını yaz (1–6):

```js
console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);
queueMicrotask(() => console.log(5));
console.log(6);
```