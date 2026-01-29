`forEach` callback’in Promise’ını beklemez. `for...of` + `await` kullan:

```js
async function run(items) {
  for (const x of items) await asyncTask(x);
  console.log('done');
}
```

Paralel istersen `Promise.all(items.map(x => asyncTask(x)))`; sıra kaybolur.