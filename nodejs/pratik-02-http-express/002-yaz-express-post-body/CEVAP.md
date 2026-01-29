```js
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  console.log(name);
  res.status(201).json({ id: 1, name });
});
```