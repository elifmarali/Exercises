Bu kod `throw`’u yakalamıyor; Unhandled rejection oluyor. **Neden?** Düzelt.

```js
function get() {
  fetch('/api').then(r => r.json()).then(d => { throw new Error('fail'); });
}
try {
  get();
} catch (e) {
  console.log('caught', e);
}
```