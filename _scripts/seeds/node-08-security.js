"use strict";
const questions = [
  { slug: "helmet", question: "Helmet middleware ne yapar?", answer: "Güvenlik header’ları: XSS, clickjacking, MIME sniffing vb. Hsts, Content-Security-Policy vb. ekler." },
  { slug: "sql-injection", question: "SQL injection nasıl önlenir?", answer: "Parametreli sorgu / prepared statement. Raw string concatenation yapılmaz. ORM de parametre kullanır." },
  { slug: "xss-server", question: "Server-side XSS riski nereden gelir? Nasıl önlenir?", answer: "Kullanıcı girdisini HTML’e koyma; escape. Template engine default escape. JSON, CSP." },
  { slug: "env-secrets", question: "Secret’lar (DB şifre, API key) nerede tutulur?", answer: "Ortam değişkeni; .env (git’e eklenmez). Vault, platform secret. Kod içinde asla." },
  { slug: "https-redirect", question: "HTTP → HTTPS yönlendirme neden önemli?", answer: "Trafiği şifreli kanala alır. Middleware veya reverse proxy ile 301/302. HSTS ile zorunlu." },
  { slug: "rate-limit-ddos", question: "Rate limiting DDoS’a karşı yeterli mi?", answer: "Hafif saldırıda yardımcı. Tam DDoS için CDN, filtering, scale gerekir. Rate limit temel katman." },
  { slug: "dependency-audit", question: "Bağımlılık güvenlik taraması nasıl yapılır?", answer: "npm audit, yarn audit. Known CVE; update veya override. CI’da koşulur." },
  { slug: "input-sanitize", question: "Kullanıcı girdisi nasıl sanitize edilir?", answer: "Validate + whitelist. Trim, length, format. DB için parametreli sorgu. HTML için escape/sanitize lib." },
  { slug: "auth-token-storage", question: "JWT/session token nasıl saklanır ve iletilir?", answer: "Cookie (HttpOnly, Secure) veya Authorization header. XSS/CSRF’e göre seçim. Süre ve logout stratejisi." },
  { slug: "csrf-token", question: "CSRF token nasıl uygulanır?", answer: "Form’a token; server doğrular. SameSite cookie ek önlem. State-changing isteklerde kullan." },
];
module.exports = { questions };
