```js
const path = require('path');
function safeJoin(base, ...parts) {
  const resolved = path.resolve(base, ...parts);
  return resolved.startsWith(path.resolve(base)) ? resolved : null;
}
```