```js
async function writeJson(path, obj) {
  await require('fs').promises.writeFile(path, JSON.stringify(obj, null, 2), 'utf8');
}
```