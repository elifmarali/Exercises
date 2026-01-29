```js
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) return NaN;
  return a + b;
}
```

Veya `Number.isFinite` ile:
```js
function sum(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) return NaN;
  return a + b;
}
```