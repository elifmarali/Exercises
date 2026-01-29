"use strict";
const questions = [
  { slug: "next-performance-defaults", question: "Next’in varsayılan performans optimizasyonları neler?", answer: "Image optimize, font optimize, code split, prefetch. Build’de minify, tree-shake." },
  { slug: "bundle-analyzer", question: "Bundle analizi nasıl yapılır? @next/bundle-analyzer?", answer: "Plugin ile ANALYZE=true next build. Chunk boyutları, duplicate tespit." },
  { slug: "dynamic-import-next", question: "`next/dynamic` ne işe yarar? SSR’ı kapatma?", answer: "Lazy load component. ssr: false ile client-only. Modal, ağır bileşenler." },
  { slug: "script-strategy", question: "`next/script` strategy’leri (beforeInteractive, afterInteractive, lazyOnload)?", answer: "Yükleme sırası ve öncelik. beforeInteractive kritik script; lazyOnload en sona." },
  { slug: "security-headers", question: "Güvenlik header’ları (CSP, X-Frame-Options) nasıl eklenir?", answer: "next.config headers. Middleware’de de eklenebilir." },
  { slug: "xss-next", question: "Next’te XSS riskleri? dangerouslySetInnerHTML?", answer: "JSX escape by default. dangerouslySetInnerHTML kullanılıyorsa sanitize. Aynı React kuralları." },
  { slug: "csrf-next", question: "Next’te CSRF önleme?", answer: "SameSite cookie, token (API route + form). Server Action’lar Post + token ile korunabilir." },
  { slug: "sensitive-env", question: "Hassas env client’a nasıl sızmaz?", answer: "NEXT_PUBLIC_ olmayanlar server-only. API key backend’de; client’a geçmez." },
  { slug: "rate-limit", question: "API route’larda rate limiting?", answer: "Middleware veya route içinde ip/token say; limit aşınca 429. Upstash vb. ile." },
  { slug: "cors-next", question: "Next’te CORS nasıl yapılandırılır?", answer: "API route’da Response header’ları. next.config headers. Cors lib veya manuel Access-Control-*." },
];
module.exports = { questions };
