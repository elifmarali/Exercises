# Module pattern (closure ile private state) nasıl çalışır? Aşağıdaki yapıda `count` dışarıdan neden erişilemez?

```js
const counter = (function() {
  let count = 0;
  return {
    inc() { count++; return count; },
    get() { return count; }
  };
})();
```

ES modülleri ile farkı nedir?