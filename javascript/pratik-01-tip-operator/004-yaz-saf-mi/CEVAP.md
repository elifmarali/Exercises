```js
function isPureNumber(n) {
  return typeof n === 'number' && Number.isFinite(n);
}
```

`Number.isFinite` `NaN` ve `Infinity` için `false` verir; coercion yapmaz. `isFinite("1")` `true` olurdu, `Number.isFinite("1")` `false`.