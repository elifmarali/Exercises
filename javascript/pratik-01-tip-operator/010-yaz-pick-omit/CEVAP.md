```js
function pick(obj, keys) {
  return Object.fromEntries(keys.filter(k => k in obj).map(k => [k, obj[k]]));
}
function omit(obj, keys) {
  const set = new Set(keys);
  return Object.fromEntries(Object.entries(obj).filter(([k]) => !set.has(k)));
}
```

Alternatif: `pick` için `keys.reduce((a,k) => (k in obj && (a[k]=obj[k]), a), {})`, `omit` için `keys` dışındakileri `reduce` veya `Object.entries` + `filter` ile topla.