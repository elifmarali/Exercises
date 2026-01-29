```js
async function retry(fn, n) {
  let last;
  for (let i = 0; i <= n; i++) {
    try {
      return await fn();
    } catch (e) {
      last = e;
    }
  }
  throw last;
}
```