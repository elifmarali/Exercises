```js
const errors = [];
if (!req.body.email || !String(req.body.email).includes('@')) errors.push('invalid email');
const a = Number(req.body.age);
if (Number.isNaN(a) || a < 0 || a > 120) errors.push('invalid age');
if (errors.length) return res.status(400).json({ errors });
```