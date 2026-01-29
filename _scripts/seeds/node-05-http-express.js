"use strict";
const questions = [
  { slug: "http-createServer", question: "`http.createServer` ile basit sunucu nasıl yazılır?", answer: "createServer((req, res) => { ... }). req url, method, headers; res writeHead, write, end. Listen(port)." },
  { slug: "req-url-method", question: "`req.url` ve `req.method` ne içerir? Query string nasıl parse edilir?", answer: "url path + query. method GET, POST vb. URL parse: url.parse veya new URL. Query parse: querystring veya URLSearchParams." },
  { slug: "res-status-headers", question: "Response status ve header nasıl gönderilir?", answer: "res.writeHead(status, headers) veya res.setHeader + res.statusCode. Sonra res.end(body)." },
  { slug: "express-basics", question: "Express’te route ve middleware nasıl tanımlanır?", answer: "app.get('/path', handler). app.use(middleware). Router ile gruplama. next() sonraki middleware’e geçer." },
  { slug: "express-middleware-order", question: "Middleware sırası neden önemli?", answer: "Tanım sırasıyla çalışır. Auth, body parse, route’lar. Yanlış sıra davranışı bozar." },
  { slug: "express-body-parser", question: "POST body JSON nasıl okunur?", answer: "express.json() middleware. req.body obje olur. Raw için express.raw, form için express.urlencoded." },
  { slug: "express-error-handler", question: "Express’te merkezi hata yakalama nasıl yapılır?", answer: "4 parametreli middleware (err, req, res, next). En sonda use. Async hatalar next(err) veya wrapper ile iletilmeli." },
  { slug: "express-router", question: "Express Router ne işe yarar? Nasıl kullanılır?", answer: "Route gruplama. const r = express.Router(); r.get(...); app.use('/api', r). Modüler yapı." },
  { slug: "req-params-query", question: "`req.params` ve `req.query` farkı?", answer: "params route’tan (/user/:id). query ?key=value. İkisi de req üzerinde." },
  { slug: "express-static", question: "`express.static` ne yapar?", answer: "Dosya sunar. app.use(express.static('public')). /file → public/file. Öncelik sırası dikkat." },
];
module.exports = { questions };
