```js
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const out = Array.isArray(obj) ? [] : {};
  for (const k of Object.keys(obj)) out[k] = deepClone(obj[k]);
  return out;
}
```

Döngüsel referans yok sayılır; gerekirse `WeakMap` ile takip edilir.