```js
function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null || typeof a !== 'object' || typeof b !== 'object') return false;
  const keysA = Object.keys(a), keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(k => keysB.includes(k) && deepEqual(a[k], b[k]));
}
```

Array için `Object.keys` indeksleri verir; yeterli. Önce `Array.isArray` ile tip uyumu da kontrol edilebilir.