```js
const { pipeline } = require('stream');
const zlib = require('zlib');
const fs = require('fs');
const split = require('split2'); // veya benzeri
pipeline(
  fs.createReadStream('file.gz'),
  zlib.createGunzip(),
  split(),
  (err) => { if (err) console.error(err); }
);
```
`pipeline` callback son stream’in `finish` + hata birleşik.