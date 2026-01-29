```js
function fromPairs(pairs) {
  const obj = {};
  for (const [k, v] of pairs) obj[k] = v;
  return obj;
}
```

`reduce`: `pairs.reduce((o,[k,v])=>(o[k]=v,o),{})`.