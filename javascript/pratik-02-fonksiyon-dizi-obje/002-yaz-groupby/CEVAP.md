```js
function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const k = item[key];
    if (!acc[k]) acc[k] = [];
    acc[k].push(item);
    return acc;
  }, {});
}
```

`key` fonksiyon olacak şekilde `groupBy(arr, fn)` da genişletilebilir.