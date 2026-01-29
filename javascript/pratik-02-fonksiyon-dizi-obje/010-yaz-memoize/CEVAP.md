```js
function memoize(fn) {
  const cache = new Map();
  return function (x) {
    if (cache.has(x)) return cache.get(x);
    const v = fn(x);
    cache.set(x, v);
    return v;
  };
}
```

Çoklu argüman için key üret (örn. `JSON.stringify(args)` veya `[].join`); primitive ile burada tek argüman yeterli.