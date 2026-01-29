Çıktı sırası ne olur?

```js
async function f() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}
console.log(3);
f();
console.log(4);
```