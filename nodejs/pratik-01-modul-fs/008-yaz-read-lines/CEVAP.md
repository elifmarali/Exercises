```js
async function readLines(filePath) {
  const s = await require('fs').promises.readFile(filePath, 'utf8');
  return s.split('\n');
}
```