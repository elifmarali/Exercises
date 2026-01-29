```js
function loadWhenVisible(el, importFn) {
  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    io.disconnect();
    importFn();
  }, { threshold: 0 });
  io.observe(el);
}
```