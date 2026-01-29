"use strict";
const questions = [
  { slug: "fs-sync-vs-async", question: "`fs.readFileSync` vs `fs.readFile`? Sync kullanımı ne zaman riskli?", answer: "Async non-blocking; sync event loop’u bloklar. Genelde async tercih. Sync script, başlangıç vb. sınırlı kullanım." },
  { slug: "fs-promises", question: "`fs.promises` API ne sağlar?", answer: "Promise tabanlı fs; async/await ile kullanım. fs.promises.readFile vb. Callback’e gerek kalmaz." },
  { slug: "path-join-resolve", question: "`path.join` vs `path.resolve` farkı?", answer: "join segment’leri birleştirir. resolve mutlak path üretir; cwd’den. .. işlenir. Cross-platform için ikisi de kullanılır." },
  { slug: "__dirname-path", question: "`path.join(__dirname, 'public')` neden kullanılır?", answer: "Çalışan script’in dizinine göre public path. Göreli path’ler güvenli birleştirilir." },
  { slug: "fs-exists", question: "Dosya var mı kontrolü nasıl yapılır? `fs.exists` neden kullanılmaz?", answer: "fs.exists deprecated; race condition. fs.access veya open; ENOENT ile yokluk. Stat da kullanılabilir." },
  { slug: "readdir-recursive", question: "Dizinleri recursive okumak nasıl yapılır? `fs.readdir` ile?", answer: "readdir ile giriş; alt dizinlerde recursion veya fs.readdir sync recursive { recursive: true } (Node 10+)." },
  { slug: "write-file-append", question: "Dosyaya ekleme (append) nasıl yapılır?", answer: "fs.appendFile veya createWriteStream { flags: 'a' }. Mevcut içerik korunur." },
  { slug: "mkdir-recursive", question: "İç içe `mkdir` (recursive) nasıl yapılır?", answer: "fs.mkdir(path, { recursive: true }). Üst dizinler yoksa oluşturulur." },
  { slug: "path-normalize", question: "`path.normalize` ve `path.sep` ne işe yarar?", answer: "normalize .., ., çift slash düzenler. sep platform ayırıcı (/ veya \\). Cross-platform path için." },
  { slug: "fs-watch", question: "Dosya/dizin değişikliği nasıl izlenir?", answer: "fs.watch (ve fs.watchFile). Event’ler change, rename. Bazen duplicate; debounce veya lib kullanılabilir." },
];
module.exports = { questions };
