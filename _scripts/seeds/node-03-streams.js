"use strict";
const questions = [
  { slug: "stream-types", question: "Readable, Writable, Duplex, Transform stream farkları?", answer: "Readable: okuma. Writable: yazma. Duplex: ikisi. Transform: okur, işler, yazar. Örn. gzip." },
  { slug: "pipe-chain", question: "`readable.pipe(writable)` ne yapar? Zincir kurulabilir mi?", answer: "Okunanı yazılana aktarır. pipe(A).pipe(B) zincir. Hata ve sonlanma yayılır." },
  { slug: "backpressure", question: "Backpressure nedir? Stream’de neden önemli?", answer: "Yazma yavaşsa okuma yavaşlar; bellek taşması önlenir. pipe otomatik backpressure iletir." },
  { slug: "buffer-vs-stream", question: "Buffer ile stream ne zaman kullanılır?", answer: "Küçük veri bellekte; buffer. Büyük dosya, ağ: stream ile parça parça. Bellek ve latency." },
  { slug: "fs-createReadStream", question: "`fs.createReadStream` ne zaman `fs.readFile`’a tercih edilir?", answer: "Büyük dosyalarda. Stream parça parça; belleği aşmaz. readFile tümü bellek." },
  { slug: "readable-on-data", question: "`readable.on('data', chunk => ...)` ne zaman kullanılır?", answer: "Flowing mode; chunk’lar sırayla gelir. pipe yerine manuel işlem. drain, backpressure elle yönetilmeli." },
  { slug: "transform-stream", question: "Transform stream nasıl yazılır? Örnek kullanım?", answer: "Transform extend et; _transform(chunk, enc, cb). Gzip, parse, map benzeri işlemler." },
  { slug: "stream-error", question: "Stream’de hata nasıl yönetilir? `on('error')` nereye?", answer: "Her stream’de on('error'). Pipe’ta hata yayılır; son hedefe veya ortada handle et." },
  { slug: "pipeline", question: "`stream.pipeline` vs `pipe` farkı?", answer: "pipeline çoklu stream + callback; hata ve cleanup daha net. pipe’tan güvenli." },
  { slug: "async-iterable-stream", question: "Node stream’ler async iterable mı? `for await`?", answer: "Readable (async iterable) for await (const chunk of stream) ile kullanılabilir. Modern API." },
];
module.exports = { questions };
