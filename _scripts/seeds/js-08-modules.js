"use strict";
const questions = [
  { slug: "import-export-types", question: "`import` ve `export` türleri neler? Named vs default export farkı nedir?", answer: "Named: `export { a }; import { a }`. Default: `export default x; import x`. Bir modülde tek default; named birden fazla olabilir." },
  { slug: "import-binding", question: "`import { x } from 'm'` ile alınan `x` yeniden atanabilir mi? Modül neden “read-only” sayılır?", answer: "Binding read-only; `x = 1` hatadır. Modül aktarımı “canlı” bağlantıdır; kaynak değişirse import eden de görür." },
  { slug: "default-rename", question: "Default export nasıl import edilir? İsim vermek zorunlu mu?", answer: "`import foo from 'm'` — isim serbest. `import { default as foo } from 'm'` da kullanılabilir." },
  { slug: "namespace-import", question: "`import * as ns from 'm'` ne yapar? `ns.default` ne zaman anlamlı?", answer: "Modülü tek obje gibi alır; named’ler `ns.x` olarak erişilir. Default export `ns.default` ile kullanılır." },
  { slug: "module-scope", question: "ES modül dosyasında üst seviye scope neden “global” değil? `var` bile global’e yazılmaz mı?", answer: "Modül kendi scope’una sahiptir; üst seviye global değil. `var` da bu scope’ta kalır, global’e eklenmez." },
  { slug: "module-strict", question: "ES modülleri otomatik strict mode’da mı çalışır? `this` ne olur?", answer: "Evet, modüller otomatik strict. Üst seviye `this` `undefined`." },
  { slug: "dynamic-import", question: "`import()` dinamik import ne döner? Ne zaman kullanılır?", answer: "Promise döner; modül yüklendikten sonra resolve olur. Code-splitting, koşullu yükleme, lazy load için kullanılır." },
  { slug: "export-from", question: "`export { x } from './a'` ne yapar? Re-export ile farkı var mı?", answer: "`a` modülündeki `x`’i bu modülden export eder; bu modülde `x` binding’i oluşturmaz. Re-export." },
  { slug: "circular-dependency", question: "Circular dependency (A → B → A) tehlikeli mi? Ne zaman sorun çıkar?", answer: "Çalışabilir ama başlatma sırasına bağlı. Eksik veya undefined erişimine yol açabilir; mümkünse yapıyı düzeltmek gerekir." },
  { slug: "cjs-vs-esm", question: "CommonJS `require` ile ES `import` farkı nedir? Ne zaman hangisi kullanılır?", answer: "`require` senkron, runtime’da; `import` statik, hoisting’e benzer. Node’da ESM tercih edilir; `type: 'module'` veya `.mjs` ile." },
];
module.exports = { questions };
