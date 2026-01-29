```js
async function allSettledSummary(promises) {
  const results = await Promise.allSettled(promises);
  return results.reduce(
    (acc, r) => (r.status === 'fulfilled' ? acc.fulfilled++ : acc.rejected++, acc),
    { fulfilled: 0, rejected: 0 }
  );
}
```