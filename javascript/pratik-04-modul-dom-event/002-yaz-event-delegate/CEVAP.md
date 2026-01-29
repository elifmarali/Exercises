```js
function delegate(parent, eventType, selector, handler) {
  parent.addEventListener(eventType, (e) => {
    const t = e.target.closest(selector);
    if (t && parent.contains(t)) handler(e, t);
  });
}
```

`closest` yoksa `target`’tan yukarı `parent`’a kadar `matches` ile tara.