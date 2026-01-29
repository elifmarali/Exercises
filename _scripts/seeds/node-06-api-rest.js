"use strict";
const questions = [
  { slug: "rest-principles", question: "REST temel ilkeleri neler? Resource, HTTP method?", answer: "Kaynak URL; GET okuma, POST oluşturma, PUT/PATCH güncelleme, DELETE silme. Stateless, cache’lenebilir." },
  { slug: "status-codes", question: "200, 201, 400, 401, 404, 500 ne anlama gelir?", answer: "200 OK, 201 Created. 400 Bad Request, 401 Unauthorized, 404 Not Found. 500 Server Error." },
  { slug: "idempotent-safe", question: "Idempotent vs safe method farkı?", answer: "Safe: side effect yok (GET). Idempotent: aynı istek tekrarlanınca aynı sonuç (PUT, DELETE). POST idempotent değil." },
  { slug: "api-versioning", question: "API versiyonlama nasıl yapılır? URL vs header?", answer: "URL: /v1/users. Header: Accept-Version veya custom. URL yaygın ve net." },
  { slug: "pagination", question: "Liste API’lerinde pagination nasıl uygulanır?", answer: "query: page & limit veya offset & limit. Yanıtta total, page bilgisi. Cursor-based alternatif." },
  { slug: "cors-basics", question: "CORS nedir? Preflight ne zaman gider?", answer: "Cross-origin isteklerde tarayıcı kısıtı. Access-Control-* header’ları. PUT, custom header vb. preflight (OPTIONS) tetikler." },
  { slug: "rate-limiting", question: "Rate limiting neden ve nasıl uygulanır?", answer: "Kötüye kullanım, overload önleme. IP veya token başına istek sayısı. 429, Retry-After. Middleware veya reverse proxy." },
  { slug: "input-validation", question: "API’de girdi doğrulama neden önemli? Nasıl yapılır?", answer: "Güvenlik, tutarlılık. joi, zod, express-validator. Body, query, params validate; 400 + hata mesajı." },
  { slug: "api-docs", question: "REST API dokümantasyonu nasıl yönetilir? Swagger/OpenAPI?", answer: "OpenAPI (Swagger) spec. Doküman + mock + client gen. express-swagger-ui vb. ile sunulur." },
  { slug: "hateoas", question: "HATEOAS nedir? Pratikte ne kadar kullanılır?", answer: "Yanıtta ilgili link’ler; client link’leri takip eder. Teoride REST’in parçası; pratikte çoğu API sade REST, HATEOAS az." },
];
module.exports = { questions };
