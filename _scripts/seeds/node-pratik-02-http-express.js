"use strict";
const questions = [
  {
    slug: "yaz-express-get",
    question: `Express’te \`GET /api/users\` için handler yaz. Yanıt \`[{ id: 1, name: 'Ali' }]\` JSON.`,
    answer: `\`\`\`js
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Ali' }]);
});
\`\`\``,
  },
  {
    slug: "yaz-express-post-body",
    question: `\`POST /api/users\` body \`{ name: string }\` alsın. \`express.json()\` kullanılıyor. \`name\`’i loglayıp \`201\` ve \`{ id: 1, name }\` dönsün.`,
    answer: `\`\`\`js
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  console.log(name);
  res.status(201).json({ id: 1, name });
});
\`\`\``,
  },
  {
    slug: "yaz-express-param",
    question: `\`GET /api/users/:id\` yaz. \`id\`’i alıp \`{ id }\` JSON dönsün.`,
    answer: `\`app.get('/api/users/:id', (req, res) => res.json({ id: req.params.id }));\``,
  },
  {
    slug: "yaz-express-middleware-log",
    question: `Her istekte \`method\` ve \`url\` loglayan middleware yaz. \`app.use\` ile ekle.`,
    answer: `\`\`\`js
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});
\`\`\``,
  },
  {
    slug: "yaz-express-404",
    question: `Hiçbir route eşleşmezse \`404\` ve \`{ error: 'Not found' }\` dönen middleware nasıl yazılır? (\`app.use\` ile, tüm route’lardan sonra)`,
    answer: `\`app.use((req, res) => res.status(404).json({ error: 'Not found' }));\``,
  },
  {
    slug: "yaz-express-error-handler",
    question: `4 parametreli global error handler yaz. \`err.message\`’ı \`500\` ve \`{ error: err.message }\` olarak dönsün.`,
    answer: `\`app.use((err, req, res, next) => res.status(500).json({ error: err.message }));\``,
  },
  {
    slug: "yaz-express-router",
    question: `\`/api/users\` altında \`GET /\` ve \`GET /:id\` tanımlı bir Router yaz. \`app.use('/api/users', router)\` ile bağla.`,
    answer: `\`\`\`js
const r = require('express').Router();
r.get('/', (req, res) => res.json([]));
r.get('/:id', (req, res) => res.json({ id: req.params.id }));
app.use('/api/users', r);
\`\`\``,
  },
  {
    slug: "yaz-express-query",
    question: `\`GET /api/search?q=foo\` handler’ı. \`q\` yoksa \`400\` \`{ error: 'q required' }\`; varsa \`{ q }\` dönsün.`,
    answer: `\`\`\`js
app.get('/api/search', (req, res) => {
  const q = req.query.q;
  if (!q) return res.status(400).json({ error: 'q required' });
  res.json({ q });
});
\`\`\``,
  },
  {
    slug: "yaz-async-handler",
    question: `Async route handler’da hata yakalayıp \`next(err)\` ile ileten bir wrapper \`asyncHandler(fn)\` yaz. Kullanım: \`app.get('/x', asyncHandler(async (req,res)=>{ ... }))\`.`,
    answer: `\`\`\`js
function asyncHandler(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}
\`\`\``,
  },
  {
    slug: "yaz-express-static",
    question: `\`public\` klasörünü \`/static\` path’inden serve et. \`express.static\` kullan.`,
    answer: `\`app.use('/static', express.static('public'));\` → \`/static/foo.js\` → \`public/foo.js\`.`,
  },
];
module.exports = { questions };
