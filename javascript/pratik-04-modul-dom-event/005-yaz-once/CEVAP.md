```js
function once(el, eventType, fn) {
  const wrap = (e) => {
    el.removeEventListener(eventType, wrap);
    fn(e);
  };
  el.addEventListener(eventType, wrap);
}
```