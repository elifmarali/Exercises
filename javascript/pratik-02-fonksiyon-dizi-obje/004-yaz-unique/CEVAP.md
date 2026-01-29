```js
function unique(arr) {
  return [...new Set(arr)];
}
```

`filter` ile: `arr.filter((x, i) => arr.indexOf(x) === i)`. Set daha kısa ve genelde hızlı.