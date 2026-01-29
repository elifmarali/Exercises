Default `size = 10` sadece `undefined`’ta devreye girer. `opts = { size: 0 }` ile `size` 0; doğru. Ama `opts = {}` ile `size` `undefined` → 10. Sorun `opts` default’unda: `opts = {}` verince `{ size: 10 }` kullanılmıyor, `size` yok → 10. Eğer “`opts.size` yoksa 10” isteniyorsa mevcut mantık doğru. “`opts` yoksa `{ size: 10 }`” için:

```js
function create(opts) {
  const { size = 10 } = opts ?? {};
  return { size };
}
```