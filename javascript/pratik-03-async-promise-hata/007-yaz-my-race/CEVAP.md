```js
function myRace(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) Promise.resolve(p).then(resolve, reject);
  });
}
```

İlk `then` veya `catch` tetiklenince `resolve`/`reject` bir kez çağrılır; diğerleri yok sayılır.