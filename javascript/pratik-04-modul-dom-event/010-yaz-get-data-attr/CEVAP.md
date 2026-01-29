```js
function dataKeys(el) {
  return Object.keys(el.dataset);
}
```

`dataset` `data-foo-bar` → `fooBar`. Tireli isim istersen `Object.keys(el.dataset).map(k => 'data-' + k.replace(/([A-Z])/g, '-$1').toLowerCase())` gibi dönüşüm gerekir.