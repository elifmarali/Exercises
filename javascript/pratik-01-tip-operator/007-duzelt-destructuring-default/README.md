Amaç: `opts` verilmezse `{ size: 10 }` kullan. Bu kod `size` hep 10 üretiyor; `opts = { size: 0 }` verince de 10 oluyor. **Neden?** Düzelt.

```js
function create(opts = { size: 10 }) {
  const { size = 10 } = opts;
  return { size };
}
```