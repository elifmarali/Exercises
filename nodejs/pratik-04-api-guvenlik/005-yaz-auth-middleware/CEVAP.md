```js
function authMiddleware(req, res, next) {
  const h = req.headers.authorization;
  const token = h && h.startsWith('Bearer ') ? h.slice(7) : '';
  if (token !== 'secret123') return res.status(401).json({ error: 'unauthorized' });
  req.user = { id: 1 };
  next();
}
```