```js
function flatten(arr) {
  return arr.reduce((acc, x) => acc.concat(Array.isArray(x) ? x : [x]), []);
}
```

Veya `for` + `push` / `spread` ile. Sadece bir seviye; `[5]` kalır.