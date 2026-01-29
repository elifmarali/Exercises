Çıktıyı yaz (kod çalıştırmadan):

```js
const x = 0;
const y = null;
const z = undefined;
console.log(x || 1, y || 1, z || 1);
console.log(x ?? 1, y ?? 1, z ?? 1);
```