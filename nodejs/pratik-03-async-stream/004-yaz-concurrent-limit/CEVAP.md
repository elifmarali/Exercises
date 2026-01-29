```js
async function runWithLimit(tasks, limit) {
  const results = [];
  const executing = [];
  for (const t of tasks) {
    const p = Promise.resolve().then(t).then(r => { results.push(r); });
    executing.push(p);
    if (executing.length >= limit) await Promise.race(executing);
  }
  await Promise.all(executing);
  return results;
}
```
(Daha sağit bir kuyruk ve sıralı sonuç için `results` index ile tutulabilir.)