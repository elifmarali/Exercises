```js
async function sequence(tasks) {
  const out = [];
  for (const t of tasks) out.push(await t());
  return out;
}
```