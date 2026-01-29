"use strict";
const questions = [
  { slug: "middleware-basics", question: "Next.js middleware nedir? Hangi dosyada, nerede çalışır?", answer: "middleware.ts (root). Her request’ten önce; Edge. Redirect, rewrite, header, auth check." },
  { slug: "matcher-config", question: "`config.matcher` ne işe yapar? Hangi path’lerde middleware çalışır?", answer: "Hangi path’lerde çalışacağını filtreler. exclude edilebilir (static, _next, api)." },
  { slug: "middleware-redirect", question: "Middleware’den redirect nasıl yapılır? NextResponse.redirect?", answer: "NextResponse.redirect(url) döndür. return ile response’u gönder." },
  { slug: "auth-middleware", question: "Middleware ile basit auth (koruma) nasıl uygulanır?", answer: "Cookie/token kontrolü; yoksa redirect login. Matcher ile korunan path’leri sınırla." },
  { slug: "edge-limitations", question: "Middleware Edge’de çalıştığı için ne kullanılamaz?", answer: "Node API’ler (fs, bazı crypto), büyük dependency’ler. Süre ve bellek sınırı var." },
  { slug: "nextauth-middleware", question: "NextAuth ile middleware nasıl kullanılır?", answer: "withAuth(middleware) veya getToken; korunan route’lar matcher ile. NextAuth doc’a göre kurulur." },
  { slug: "rewrite-vs-redirect", question: "Rewrite ile redirect farkı?", answer: "Redirect URL değişir (3xx). Rewrite URL aynı kalır, farklı sayfa sunulur. A/B, proxy gibi." },
  { slug: "middleware-headers", question: "Middleware’de request/response header nasıl okunur ve eklenir?", answer: "request.headers.get. Yeni response’ta requestHeaders veya next() sonrası NextResponse’ta header set." },
  { slug: "middleware-async", question: "Middleware async olabilir mi? await fetch?", answer: "Evet. Async fn. Edge’de fetch kullanılabilir; süre/memory limitine dikkat." },
  { slug: "chain-middleware", question: "Birden fazla middleware mantığı nasıl birleştirilir?", answer: "Tek middleware içinde sıralı check’ler veya fn compose (Örn. auth + logging). Next’te tek middleware dosyası." },
];
module.exports = { questions };
