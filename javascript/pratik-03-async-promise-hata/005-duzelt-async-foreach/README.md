Amaç: `items` üzerinde sırayla `asyncTask(x)` çalışsın, bittiğinde `done` loglansın. Bu kod `done`’u beklenmeden basıyor. **Düzelt.**

```js
async function run(items) {
  items.forEach(async (x) => await asyncTask(x));
  console.log('done');
}
```