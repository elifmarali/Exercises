"use strict";
const questions = [
  { slug: "jest-node", question: "Node API’leri Jest ile nasıl test edilir?", answer: "supertest ile HTTP isteği; app export edilir. Unit’te modül mock. describe, it, expect." },
  { slug: "supertest", question: "Supertest ne işe yarar? Nasıl kullanılır?", answer: "Express/app’e request gönderir. .get('/').expect(200). Body, header assert. Integration test." },
  { slug: "mock-require", question: "`jest.mock` ile modül nasıl mock’lanır?", answer: "jest.mock('modül'); factory ile implementasyon. __mocks__ veya inline. require kullanıyorsa mock çalışır." },
  { slug: "mock-fs", question: "Dosya sistemi (fs) nasıl mock’lanır?", answer: "jest.mock('fs') veya mock-fs. Gerçek fs’e yazma yok; izole test." },
  { slug: "mock-db", question: "Veritabanı testte nasıl mock’lanır veya izole edilir?", answer: "In-memory DB (sqlite), test DB, veya mock repository. Transaction rollback ile izolasyon." },
  { slug: "env-test", question: "Test ortamında env nasıl ayarlanır?", answer: "jest.setup; process.env.NODE_ENV=test. .env.test. Dotenv vs. Her test öncesi gerekirse override." },
  { slug: "async-test", question: "Async test Jest’te nasıl yazılır?", answer: "async/await veya return promise. expect assert’ları await sonrası. Supertest return request." },
  { slug: "coverage-node", question: "Node projesinde coverage nasıl alınır?", answer: "jest --coverage. Istanbul. Lcov, html report. CI’da koşulur." },
  { slug: "integration-e2e", question: "Integration vs E2E test Node API’de nasıl ayrılır?", answer: "Integration: app + DB mock gerçek DB. E2E: gerçek HTTP, tam stack. Her ikisi de Supertest veya gerçek client." },
  { slug: "tap-mocha", question: "Jest dışında hangi test çatıları kullanılır?", answer: "Mocha + Chai, Node tap. Jest yaygın; Mocha esnek. Assertion lib ayrı seçilebilir." },
];
module.exports = { questions };
