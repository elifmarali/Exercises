"use strict";
const questions = [
  { slug: "middleware-next", question: "Express middleware’de `next()` ne işe yarar? Çağrılmazsa?", answer: "Sonraki middleware’e geçer. Çağrılmazsa istek asılı kalır; client timeout." },
  { slug: "next-error", question: "`next(err)` ne yapar? Error middleware’e nasıl düşer?", answer: "Hata sonraki error middleware’e (4 param’lı) gider. next(err) ile sync/async hatalar merkeze iletilir." },
  { slug: "async-handler", question: "Async route handler’da hata nasıl yakalanır? Wrapper?", answer: "try/catch + next(err) veya wrapper: fn => (req,res,next) => fn(req,res,next).catch(next)." },
  { slug: "global-error-handler", question: "Global error handler nereye konur? 404 nasıl handle edilir?", answer: "Tüm route’lardan sonra; 4 param’lı middleware. 404: hiçbir route eşleşmezse önce 404 handler, sonra genel error." },
  { slug: "error-logging", question: "Hata loglama nerede yapılır? Production’da stack trace?", answer: "Error middleware’de log. Production’da stack trace client’a gönderilmez; sadece log. Özel format (JSON) kullanılabilir." },
  { slug: "custom-error-class", question: "Özel hata sınıfları (ValidationError, NotFound) nasıl kullanılır?", answer: "extends Error; statusCode, code. Error handler’da instanceof ile ayır; uygun status ve mesaj." },
  { slug: "404-vs-500", question: "404 vs 500 ne zaman döner?", answer: "404: kaynak yok, route yok. 500: sunucu hatası, beklenmeyen exception. 4xx client, 5xx server." },
  { slug: "middleware-error-order", question: "Error middleware sırası neden önemli?", answer: "4 param’lı handler’lar hata yakalar. Birden fazla varsa sırayla denenecek. Önce spesifik, sonra genel." },
  { slug: "reject-unhandled", question: "Unhandled rejection Express’i nasıl etkiler?", answer: "Process crash veya uyarı. process.on('unhandledRejection') ile log + graceful. Async hatalar next ile iletilmeli." },
  { slug: "client-error-message", question: "Client’a hata mesajı ne kadar detay verilmeli?", answer: "Production’da genel mesaj; detay log’ta. Geliştirme için stack vb. açılabilir. Güvenlik (sızıntı) riski." },
];
module.exports = { questions };
