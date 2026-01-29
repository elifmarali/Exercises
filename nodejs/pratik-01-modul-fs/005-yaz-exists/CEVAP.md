```js
async function exists(filePath) {
  try {
    await require('fs').promises.access(filePath);
    return true;
  } catch (e) {
    if (e.code === 'ENOENT') return false;
    throw e;
  }
}
```