```js
const fs = require('fs');
const path = require('path');
function requireDir(dirPath) {
  const out = {};
  for (const f of fs.readdirSync(dirPath)) {
    if (!f.endsWith('.js')) continue;
    const name = path.basename(f, '.js');
    out[name] = require(path.join(dirPath, f));
  }
  return out;
}
```