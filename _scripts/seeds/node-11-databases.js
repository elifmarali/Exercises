"use strict";
const questions = [
  { slug: "pg-basics", question: "`pg` (node-postgres) ile sorgu nasıl çalıştırılır?", answer: "Pool veya client. query(sql, params); parametreli sorgu. Sonuç rows, async/await." },
  { slug: "orm-vs-raw", question: "ORM vs raw SQL ne zaman tercih edilir?", answer: "ORM: hızlı CRUD, migration, ilişkiler. Raw: karmaşık sorgu, performans. Projeye göre karışık kullanılabilir." },
  { slug: "connection-pool-db", question: "DB connection pool boyutu nasıl seçilir?", answer: "Genelde CPU * 2 veya biraz fazla. DB max connection limiti. Yük testi ile ayarlanır." },
  { slug: "migration", question: "Migration nedir? Nasıl yönetilir?", answer: "Şema değişiklikleri versiyonlu. Up/down. Knex, Prisma migrate, node-pg-migrate. Takım ile sıralı uygulama." },
  { slug: "transaction", question: "Transaction nasıl kullanılır? Rollback ne zaman?", answer: "BEGIN; sorgular; COMMIT veya hata → ROLLBACK. client.query veya ORM transaction. Tutarlılık için." },
  { slug: "prisma-basics", question: "Prisma ne sağlar? Schema, client?", answer: "ORM + migration + type-safe client. schema.prisma; generate → client. PrismaClient ile CRUD." },
  { slug: "redis-cache", question: "Redis Node’da cache olarak nasıl kullanılır?", answer: "ioredis vb. get/set, TTL. API yanıtı, session. Serialize/deserialize (JSON)." },
  { slug: "mongodb-node", question: "MongoDB Node driver veya Mongoose ne zaman kullanılır?", answer: "Driver: hafif, esnek. Mongoose: şema, validation, middleware. Proje karmaşıklığına göre." },
  { slug: "n-plus-one", question: "N+1 sorgu sorunu nedir? Nasıl önlenir?", answer: "Liste için her öğe ayrı sorgu. Çözüm: join, batch load, IN query, DataLoader. ORM eager load." },
  { slug: "env-database-url", question: "DB bağlantı bilgisi nerede tutulur?", answer: "DATABASE_URL vb. env. .env, platform config. Şifre kod içinde olmaz." },
];
module.exports = { questions };
