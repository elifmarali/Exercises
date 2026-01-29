```js
function add(...args) {
  const sum = (a, b) => a + b;
  const run = (...next) => {
    const all = [...args, ...next];
    if (all.length >= 3) return all.slice(0, 3).reduce(sum, 0);
    return add(...all);
  };
  return run;
}
```

Daha esnek: `run` içinde `length >= N` veya “boş çağrı” ile `valueOf` kullanımı yapılabilir.