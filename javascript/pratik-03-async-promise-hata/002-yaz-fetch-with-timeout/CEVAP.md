```js
function fetchWithTimeout(url, ms) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  return fetch(url, { signal: c.signal })
    .finally(() => clearTimeout(t));
}
```

`finally` ile timer temizlenir; reject’te de çalışır.