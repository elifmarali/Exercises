```js
function eventOnce(emitter, event) {
  return new Promise((resolve) => emitter.once(event, resolve));
}
```