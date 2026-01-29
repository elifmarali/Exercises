```js
async function readJson(path) {
  try {
    const buf = await require('fs').promises.readFile(path, 'utf8');
    return JSON.parse(buf);
  } catch (e) {
    console.error(e);
    throw e;
  }
}
```