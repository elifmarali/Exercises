```js
function copyStream(src, dest) {
  return new Promise((resolve, reject) => {
    src.pipe(dest);
    dest.on('finish', resolve);
    dest.on('error', reject);
    src.on('error', reject);
  });
}
```