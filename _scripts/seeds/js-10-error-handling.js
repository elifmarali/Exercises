"use strict";
const questions = [
  { slug: "try-catch-finally", question: "`try` / `catch` / `finally` sırası ve rolleri neler? `finally` ne zaman çalışır?", answer: "`try` dene; hata olursa `catch`. `finally` her durumda (return/throw olsa bile) çalışır. `catch` olmadan `try`+`finally` de geçerli." },
  { slug: "throw-type", question: "`throw` ile ne atılabilir? `throw 'err'` vs `throw new Error('err')` farkı?", answer: "Herhangi bir değer atılabilir. `Error` instance’ı stack trace ve tutarlı yapı sağlar; string yerine `new Error` tercih edilir." },
  { slug: "catch-binding", question: "`catch (e)` olmadan `catch` kullanılabilir mi? Optional catch binding nedir?", answer: "ES2019’da `catch { }` geçerli; binding zorunlu değil. Hata nesnesine ihtiyaç yoksa kullanılır." },
  { slug: "rethrow", question: "`catch` içinde hatayı yeniden fırlatmak nasıl yapılır? Neden önemli?", answer: "`throw e;` ile rethrow. Loglayıp tekrar fırlatarak üst seviyeye iletebilirsin; aksi halde hata “yutulmuş” olur." },
  { slug: "promise-catch", question: "Promise rejection nasıl yakalanır? Unhandled rejection nedir?", answer: "`.catch()` veya `try/catch` içinde `await`. Reject edilip yakalanmazsa “unhandled rejection”; process/uygulama çökebilir veya uyarı verir." },
  { slug: "custom-error", question: "Özel `Error` alt sınıfı nasıl oluşturulur? `name` ve `message` neden set edilir?", answer: "`class MyError extends Error {}`; `constructor`’da `super(message)`, `this.name = 'MyError'`. Doğru stack ve `instanceof` kontrolü için." },
  { slug: "window-onerror", question: "Tarayıcıda global hata yakalama nasıl yapılır? `window.onerror` ne sağlar?", answer: "`window.onerror` yakalanmamış hataları yakalar; loglama veya raporlama için. Promise rejection’lar için `unhandledrejection` ayrı dinlenmeli." },
  { slug: "assertions", question: "Node’da `assert` modülü ne işe yarar? `assert.strictEqual` vs `assert.ok` farkı?", answer: "Koşul sağlanmazsa hata fırlatır. `assert.ok(x)` truthy kontrolü; `strictEqual` `===` ile karşılaştırır. Test ve invariant kontrolü için." },
  { slug: "error-vs-exception", question: "“Error” ile “exception” terimleri pratikte nasıl kullanılır? Fark var mı?", answer: "Çoğu bağlamda aynı anlamda; exception throw edilen şey, Error tipi. Dil spesifikasyonunda ayrım olabilir; günlük kullanımda karışık geçer." },
  { slug: "async-errors", question: "`async` fonksiyonda hata nasıl yayılır? `await` reject ederse ne olur?", answer: "Rejection exception’a dönüşür; `try/catch` ile yakalanır. Yakalanmazsa async fonksiyon reject eden Promise döner." },
];
module.exports = { questions };
