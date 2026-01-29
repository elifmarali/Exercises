"use strict";
const questions = [
  { slug: "pm2-basics", question: "PM2 ne işe yarar? Nasıl kullanılır?", answer: "Process manager. start, restart, log, cluster. node app.js’i sürekli çalıştırır; crash’te yeniden başlatır." },
  { slug: "env-production", question: "Production’da NODE_ENV ve diğer env nasıl ayarlanır?", answer: "NODE_ENV=production. Platform (Heroku, AWS) veya .env, systemd, PM2 env. Secret’lar güvenli config’ten." },
  { slug: "reverse-proxy", question: "Nginx reverse proxy Node önünde neden kullanılır?", answer: "Static dosya, SSL, load balance, buffer. Node tek port; Nginx 80/443. Proxy_pass." },
  { slug: "docker-node", question: "Node uygulaması Docker’da nasıl çalıştırılır?", answer: "Node image, COPY, npm ci --production. Multi-stage ile build küçültülür. CMD node.", },
  { slug: "graceful-shutdown", question: "Graceful shutdown nasıl yapılır?", answer: "SIGTERM dinle; yeni istek almayı kes, mevcutları bitir, DB pool kapat, process.exit. PM2, K8s uyumlu." },
  { slug: "log-management", question: "Production log’ları nasıl yönetilir?", answer: "stdout/stderr; PM2, Docker, platform toplar. Yapısal log (JSON). Rotation, merkezi aggregation (ELK vb.)." },
  { slug: "health-check", question: "Health check endpoint ne döndürmeli?", answer: "200 + basit body. DB, cache bağlantısı optional. Load balancer / K8s probe. /health, /ready." },
  { slug: "zero-downtime", question: "Zero-downtime deploy nasıl yapılır?", answer: "PM2 reload, rolling update. Load balancer ile yeni instance’lar devreye girer. Eski işler biter, sonra kapatılır." },
  { slug: "env-vault", question: "Secret’lar Vault vb. ile nasıl yönetilir?", answer: "Uygulama başlarken Vault’tan çeker; env veya config. Rotation, audit. .env yerine merkezi secret store." },
  { slug: "monitoring", question: "Node uygulaması nasıl izlenir?", answer: "APM (New Relic, Datadog), metrics (Prometheus), log. CPU, memory, request rate, error. Alerting." },
];
module.exports = { questions };
