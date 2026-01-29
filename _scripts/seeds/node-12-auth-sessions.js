"use strict";
const questions = [
  { slug: "session-vs-jwt", question: "Session vs JWT farkı? Ne zaman hangisi?", answer: "Session: server store, cookie. JWT: stateless, token taşınır. Scale, mobile API vb. JWT; geleneksel web session." },
  { slug: "jwt-structure", question: "JWT yapısı nedir? Payload’a neler konur?", answer: "header.payload.signature. Payload: sub, exp, iat, özel claim’ler. Hassas veri konmaz; imza doğrulanır." },
  { slug: "cookie-httponly", question: "HttpOnly, Secure, SameSite cookie ne işe yarar?", answer: "HttpOnly: JS erişemez, XSS’te token alınamaz. Secure: HTTPS. SameSite: CSRF azaltır." },
  { slug: "bcrypt", question: "Şifre nasıl hash’lenir? bcrypt neden kullanılır?", answer: "bcrypt veya argon2. Salt + cost. Plain text saklanmaz. Doğrulama: compare." },
  { slug: "passport", question: "Passport.js ne sağlar?", answer: "Auth stratejileri (local, JWT, OAuth). Middleware ile protect route. Genişleyebilir yapı." },
  { slug: "oauth-flow", question: "OAuth (Google, GitHub login) akışı kısaca nasıldır?", answer: "Redirect provider → kullanıcı giriş → callback + code → token exchange. Session/JWT oluşturulur." },
  { slug: "middleware-auth", question: "Auth middleware nasıl yazar? 401 ne zaman döner?", answer: "Token/session kontrolü. Yok veya geçersiz → 401. req.user set edilir. Sonraki middleware’de kullanılır." },
  { slug: "refresh-token", question: "Refresh token ne işe yarar? Nasıl saklanır?", answer: "Access token kısa ömürlü; yenilemek için refresh. HttpOnly cookie veya güvenli storage. Rotate, revoke." },
  { slug: "logout", question: "Logout nasıl uygulanır? JWT’te sorun var mı?", answer: "Session: destroy. JWT: client token atar; server blacklist veya kısa TTL. Stateless’te “hemen geçersiz” zor." },
  { slug: "rate-limit-auth", question: "Login endpoint’inde rate limiting neden önemli?", answer: "Brute force önleme. IP veya identity başına deneme sınırı. Lockout veya CAPTCHA eklenebilir." },
];
module.exports = { questions };
