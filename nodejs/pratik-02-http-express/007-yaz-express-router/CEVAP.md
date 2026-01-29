```js
const r = require('express').Router();
r.get('/', (req, res) => res.json([]));
r.get('/:id', (req, res) => res.json({ id: req.params.id }));
app.use('/api/users', r);
```