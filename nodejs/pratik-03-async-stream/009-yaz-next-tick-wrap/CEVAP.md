```js
function runNextTick(fn) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => Promise.resolve(fn()).then(resolve, reject));
  });
}
```