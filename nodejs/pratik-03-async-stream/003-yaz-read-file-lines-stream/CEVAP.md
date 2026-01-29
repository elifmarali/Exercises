```js
const fs = require('fs');
const readline = require('readline');
const rl = readline.createInterface({ input: fs.createReadStream(path) });
rl.on('line', (line) => { /* ... */ });
rl.on('close', () => { /* done */ });
```