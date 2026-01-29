"use strict";
const questions = [
  { slug: "require-vs-import", question: "CommonJS `require` ile ES `import` farkı? Node’da ikisi birlikte kullanılır mı?", answer: "require senkron, runtime. import statik, modül yükleme. type:module ile ES; .cjs ile CJS. Karışık projede dikkat." },
  { slug: "module-exports", question: "`module.exports` vs `exports` farkı? Neden `exports = ...` kullanılmaz?", answer: "exports, module.exports’a referans. exports = {...} referansı değiştirir, modül çıktısı değişmez. module.exports kullan." },
  { slug: "__dirname-esm", question: "ES modülde `__dirname` yok. Nasıl elde edilir?", answer: "import { fileURLToPath } from 'url'; import { dirname } from 'path'; const __dirname = dirname(fileURLToPath(import.meta.url));" },
  { slug: "npm-init", question: "`npm init` ve `package.json` script’leri ne işe yarar?", answer: "Proje tanımı, bağımlılıklar. scripts: start, test, vb. npm run X ile çalışır." },
  { slug: "node-modules", question: "`node_modules` ve lock file (package-lock.json) neden önemli?", answer: "Bağımlılıklar burada. Lock file sürümleri sabitler; tutarlı kurulum. Genelde commit edilir." },
  { slug: "process-argv", question: "`process.argv` ne içerir? CLI argümanları nasıl parse edilir?", answer: " [node, scriptPath, ...args]. Kendi parse veya minimist, yargs vb. kütüphane." },
  { slug: "process-env", question: "`process.env` ne işe yarar? NODE_ENV?", answer: "Ortam değişkenleri. NODE_ENV development/production/test. Config, API URL vb. için kullanılır." },
  { slug: "core-modules", question: "Node built-in (core) modüller neler? Örnek ver.", answer: "fs, path, http, events, stream, crypto, os, util vb. require('fs') ile; npm’e gerek yok." },
  { slug: "require-cache", question: "`require` cache’i nasıl çalışır? Aynı modül iki kez require edilirse?", answer: "İlk require yükler, cache’e koyar. Sonrakiler cache’ten döner. require.cache’i değiştirerek yeniden yükleme mümkün ama dikkatli kullan." },
  { slug: "debugger-inspect", question: "`node --inspect` ve debugger ne işe yarar?", answer: "Chrome DevTools veya VS Code ile debug. Breakpoint, step, inspect. Geliştirme ve hata ayıklama için." },
];
module.exports = { questions };
