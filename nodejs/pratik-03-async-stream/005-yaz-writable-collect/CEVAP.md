```js
const { Writable } = require('stream');
const chunks = [];
const w = new Writable({
  write(chunk, enc, cb) { chunks.push(chunk); cb(); }
});
w.on('finish', () => resolve(Buffer.concat(chunks)));
// ...
```
 pipe veya `write` + `end` ile beslenir.