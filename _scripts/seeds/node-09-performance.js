"use strict";
const questions = [
  { slug: "cluster-mode", question: "Node `cluster` modu ne işe yarar?", answer: "Çoklu process; CPU çekirdekleri kullanılır. Master worker’ları yönetir, load balance. Paylaşılan state yok." },
  { slug: "blocking-async", question: "Senkron (blocking) işler performansı nasıl etkiler?", answer: "Event loop bloklanır; tüm istekler bekler. fs sync, ağır CPU. Async veya worker’a taşı." },
  { slug: "connection-pool", question: "DB connection pool neden kullanılır?", answer: "Bağlantı maliyeti yüksek; pool tekrar kullanır. Limit ile kontrol. pg-pool, mysql2 pool vb." },
  { slug: "caching-strategy", question: "API response cache nerede yapılır? Redis?", answer: "Uygulama içi, Redis, CDN. Okuma ağırlıklı, sık değişmeyen veri. TTL, invalidation." },
  { slug: "compression", question: "Response compression (gzip) nasıl eklenir?", answer: "compression middleware. Accept-Encoding; gzip/deflate. Büyük JSON/HTML için faydalı." },
  { slug: "worker-threads", question: "`worker_threads` ne zaman kullanılır?", answer: "CPU-bound iş; ayrı thread. Event loop serbest. Data transfer postMessage ile." },
  { slug: "memory-leak-node", question: "Node’da bellek sızıntısı nasıl tespit edilir?", answer: "heapdump, Chrome DevTools, --inspect. Süreç büyümesi izlenir. Global, closure, timer kontrolü." },
  { slug: "profiling", question: "Node uygulaması nasıl profil edilir?", answer: "Node profiler (--prof), 0x, clinic. CPU ve heap. Yavaş fonksiyonlar, allocation hotspot." },
  { slug: "keep-alive", question: "HTTP keep-alive ve connection reuse ne sağlar?", answer: "TCP bağlantısı tekrarlı kullanılır; connection overhead azalır. Agent default keep-alive." },
  { slug: "horizontal-scale", question: "Horizontal scaling Node’da nasıl yapılır?", answer: "Birden fazla instance; load balancer. Stateless uygulama. Session shared store (Redis) veya JWT." },
];
module.exports = { questions };
