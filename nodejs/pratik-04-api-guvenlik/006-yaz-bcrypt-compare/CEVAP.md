```js
const bcrypt = require('bcrypt');
async function compare(plain, hashed) {
  return bcrypt.compare(plain, hashed);
}
```