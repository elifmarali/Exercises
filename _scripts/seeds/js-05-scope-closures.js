"use strict";

const questions = [
  { slug: "lexical-scope", question: `# Lexical (statik) scope nedir? JavaScript'te scope nasıl belirlenir—tanım yeri mi çalışma yeri mi?

\`function outer() { const x = 1; function inner() { console.log(x); } return inner; }\` \`outer()()\` ne basar? "Closure" ile ilişkisi nedir?`, answer: `Scope, **tanım yerine** göre (lexical) belirlenir; çalıştığı yer değil. \`inner\` \`outer\` içinde tanımlı, bu yüzden \`outer\`'ın scope'una erişir. \`outer()()\` → \`1\`. \`inner\`, \`outer\`'ın lexical ortamına "kapatılmış" kalır; buna closure denir.` },
  { slug: "closure-counter", question: `# Aşağıdaki "sayaç" closure'ı nasıl çalışıyor? \`increment\` her çağrıda aynı \`count\`'a mı erişiyor?

\`\`\`js
function makeCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}
const c = makeCounter();
console.log(c(), c(), c());
\`\`\`

Çıktı ne olur? \`count\` neden silinmiyor?`, answer: `\`c()\`, \`c()\`, \`c()\` → \`1, 2, 3\`. \`increment\` \`makeCounter\`'ın lexical ortamına referans tutar; \`count\` bu ortamda yaşar. \`c\` referansı durduğu sürece GC bu ortamı toplamaz. Her \`makeCounter()\` kendi \`count\`'unu oluşturur.` },
  { slug: "closure-loop-var", question: `# \`var\` ile döngü + closure tuzakı: Aşağıdaki kod ne basar? Neden?

\`\`\`js
for (var i = 0; i < 3; i++) {
  setTimeout(function() { console.log(i); }, 100);
}
\`\`\`

\`let\` kullanınca neden düzelir? IIFE ile (eski yöntem) nasıl çözülürdü?`, answer: `\`var\` function/global scope'ta; döngü bittikten sonra \`i === 3\`. Tüm callback'ler aynı \`i\`'ye bakar → \`3, 3, 3\`. \`let\` block scope; her iterasyonda yeni \`i\` binding → \`0, 1, 2\`. IIFE: \`(function(j){ setTimeout(function(){ console.log(j); }, 100); })(i);\` — \`j\` her iterasyonda kopyalanır.` },
  { slug: "module-pattern", question: `# Module pattern (closure ile private state) nasıl çalışır? Aşağıdaki yapıda \`count\` dışarıdan neden erişilemez?

\`\`\`js
const counter = (function() {
  let count = 0;
  return {
    inc() { count++; return count; },
    get() { return count; }
  };
})();
\`\`\`

ES modülleri ile farkı nedir?`, answer: `IIFE bir kez çalışır; içindeki \`count\` sadece dönen obje'nin metotlarıyla erişilebilir (closure). Dışarıdan \`counter.count\` yok. ES modülleri \`import\`/\`export\` ile dosya bazlı encapsulation sağlar; yine closure benzeri “gizli” state ama syntax farklı.` },
  { slug: "scope-chain", question: `# "Scope chain" nedir? \`console.log\` çağrısında engine değişkeni nasıl bulur?

İç içe fonksiyonlarda \`outer\` → \`inner\` zinciri nasıl oluşur? Shadowing bu zinciri nasıl etkiler?`, answer: `Engine, önce mevcut scope'ta arar; yoksa bir üst lexical scope'a çıkar; global'e kadar devam eder. Bu zincir scope chain. Shadowing: iç scope'taki isim dıştakini gizler; içeride dıştaki isme erişilemez.` },
  { slug: "block-scope-closure", question: `# \`if (true) { const x = 1; }\` — \`x\` blok dışında neden yok? Block scope closure'ı nasıl etkiler?

\`for (let i ...)\` içinde tanımlı fonksiyon \`i\`'yi closure'da nasıl "görür"?`, answer: `\`const\`/\`let\` block scope'a aittir; blok bitince \`x\` yok. Closure, tanımın lexical ortamına referans tutar; blok da lexical ortam oluşturur. \`for (let i...)\` her iterasyonda yeni \`i\` binding'i oluşturur; closure o \`i\`'ye bağlanır.` },
  { slug: "global-pollution", question: `# "Global scope kirliliği" ne demek? \`var x = 1;\` (script scope, non-module) neden riskli?

Modül (\`type="module"\`) kullanınca üst seviye \`var\` global'e yazılır mı?`, answer: `Global'e gereksiz değişken yazmak isim çakışması, test zorluğu ve güvenlik riski yaratır. Non-module script'te üst seviye \`var\` global object'e eklenir. Modülde üst seviye scope modül scope'tur; \`var\` bile global'e eklenmez.` },
  { slug: "closure-memory", question: `# Closure'lar bellek sızıntısına nasıl yol açabilir? Büyük veriyi closure'da tutmak neden tehlikeli?

\`addEventListener\` + closure kullanırken cleanup (\`removeEventListener\`) neden önemli?`, answer: `Closure, lexical ortamı canlı tutar; ortamdaki büyük veri GC ile toplanmaz. Listener closure'ı da element ve ortamı referanslar; remove edilmezse element GC'lenemez. Cleanup yap, gereksiz closure'da büyük veri tutma.` },
  { slug: "eval-scope", question: `# \`eval\` ve \`new Function\` scope açısından nasıl farklıdır? \`eval('var x = 1')\` \`x\`'i nereye yazar?

\`new Function('return x')\` neden farklı scope'ta çalışır?`, answer: `\`eval\` çağrıldığı yerdeki lexical scope'u kullanır; \`eval('var x=1')\` o scope'ta \`x\` oluşturur. \`new Function(...)\` global scope'ta (veya verilen ortamda) çalışan fonksiyon üretir; \`x\` local değilse global'den aranır. \`eval\` optimizasyonu zorlaştırır; mümkünse kullanma.` },
  { slug: "with-deprecated", question: `# \`with\` neden deprecated? \`with (obj) { x = 1; }\` \`x\`'i nereye yazar?

Strict mode'da \`with\` kullanılabilir mi?`, answer: `\`with\` obje özelliklerini blok scope'una sokar; ama \`x\` \`obj\`'de yoksa global'e yazılabilir — tahmin edilmesi zor. Performans ve semantic sorunları var. Strict mode'da \`with\` \`SyntaxError\`; kullanılmamalı.` },
  { slug: "closure-stale", question: `# "Stale closure" nedir? React'ta \`useEffect\` veya event handler içinde eski state/prop nasıl "takılı" kalır?

Örnek: \`setInterval\` callback'i ilk \`count\`'u kullanıyor, güncel değil. Nasıl çözülür?`, answer: `Closure, o anki değeri "görür"; state güncellenince eski fonksiyon hâlâ eski değeri referans alabilir — stale closure. Çözüm: dependency array ile effect'i güncelle, ref kullan, veya functional update \`setCount(c => c + 1)\` ile güncel değere ulaş.` },
  { slug: "scope-vs-context", question: `# Scope ile "context" (\`this\`) aynı şey mi? Lexical scope \`this\`'i belirler mi?

Arrow fonksiyon \`this\`'i nereden alır?`, answer: `Scope: değişken erişimi, lexical tanıma göre. Context: \`this\`, çağrıya göre (call site). Lexical scope \`this\`'i belirlemez. Ok fonksiyonu \`this\`'i kendi oluşturmaz; lexical \`this\`'i (tanım yerindeki \`this\`) kullanır.` },
  { slug: "function-scope-var", question: `# \`var\` neden "function scope"a sahip? \`if\` bloğu \`var\` için scope oluşturur mu?

\`function f() { if (true) { var x = 1; } console.log(x); }\` — \`x\` erişilebilir mi?`, answer: `\`var\` sadece function scope oluşturur; \`if\`, \`for\` blok scope değil. \`x\` \`f\`'in tamamında tanımlı; \`console.log(x)\` → \`1\`. Block scope için \`let\`/\`const\` kullan.` },
  { slug: "nested-closure", question: `# İç içe closure'lar: \`outer\` → \`middle\` → \`inner\`. \`inner\` hem \`middle\` hem \`outer\` değişkenlerine erişebilir mi?

Scope chain uzadıkça performans etkisi var mı?`, answer: `Evet; \`inner\` lexical olarak \`middle\` ve \`outer\` içinde tanımlıysa ikisinin scope'una da erişir. Chain uzadıkça erişim maliyeti teorik olarak artar ama modern engine'ler optimize eder; makul derinlikte sorun olmaz.` },
  { slug: "closure-cache", question: `# Closure ile basit bir "cache" (memoization) nasıl yazılır? Cache nerede tutulur?

Aynı closure'ı paylaşan birden fazla fonksiyon (örn. \`get\` / \`set\`) aynı cache'e mi erişir?`, answer: `\`function makeCache() { const cache = new Map(); return { get(k) { return cache.get(k); }, set(k,v) { cache.set(k,v); } }; }\` — \`get\`/\`set\` aynı \`cache\` closure'ını paylaşır. Cache, makeCache'in lexical ortamında kalır.` },
  { slug: "dead-zone-loop", question: `# \`for (let i = 0; i < 3; i++) { const fn = () => i; }\` — her \`fn\` farklı \`i\`'ye mi bağlı? \`let i\` TDZ burada nasıl davranır?`, answer: `Her iterasyonda yeni \`i\` binding oluşur; \`fn\` o iterasyondaki \`i\`'ye closure ile bağlanır. TDZ, her \`i\` için sadece o iterasyonun başında geçerlidir; \`fn\` sonra çağrıldığında \`i\` zaten initialize edilmiştir.` },
  { slug: "script-vs-module-scope", question: `# Klasik script (\`<script>\`) ile ES modül (\`<script type="module">\`) üst seviye scope açısından farkı nedir?

\`var x = 1;\` her iki durumda da global'e yazılır mı?`, answer: `Klasik script: üst seviye global (veya script scope); \`var\` global object'e eklenir. Modül: üst seviye modül scope; \`var\` bile global'e eklenmez. Modül otomatik strict, \`this\` undefined.` },
  { slug: "closure-overwrite", question: `# Aynı isimde dış ve iç değişken var (shadowing). İç fonksiyon dıştaki değişkeni değiştirmek isterse nasıl yapar?

\`let x = 1; function f() { let x = 2; /* dış x'i 3 yap */ }\` — dış \`x\`'e içeriden doğrudan erişilebilir mi?`, answer: `Hayır. İç \`x\` dıştakini gizgiler; aynı isimle dıştaki \`x\`'e erişemezsin. Çözüm: farklı isim kullan veya dış \`x\`'i obje property'si yap (\`obj.x\`) ve obje referansını closure'da tut.` },
  { slug: "instantiation-scope", question: `# \`class\` içinde \`const x = 1;\` (field) hangi scope'a aittir? Static vs instance field scope farkı var mı?`, answer: `Instance field her instance'a aittir; static field sınıfa aittir. Her ikisi de "class scope" içinde; dışarıdan doğrudan \`x\` ile erişilmez. Method'lar bu alanlara \`this.x\` veya \`ClassName.x\` ile erişir; closure'dan ziyade \`this\`/sınıf bağlamı kullanılır.` },
  { slug: "async-closure", question: `# \`async\` fonksiyon içinde \`await\` öncesi tanımlı değişken, \`await\` sonrası closure'da hâlâ aynı mı?

\`async function f() { const x = 1; await g(); console.log(x); }\` — \`x\` garanti \`1\` mi?`, answer: `Evet. \`await\` execution'ı duraklatır ama lexical ortam korunur; \`f\` devam ettiğinde aynı \`x\` erişilir. Closure semantics \`async\` ile değişmez.` },
  { slug: "worker-scope", question: `# Web Worker veya Node.js \`worker_threads\` içinde \`globalThis\` / \`self\` / \`window\` ne olur? Scope paylaşımı var mı?`, answer: `Worker ayrı global scope'a sahiptir; \`window\` yok (DOM yok). \`self\` veya \`globalThis\` worker'ın global'i. Ana thread ile scope paylaşılmaz; iletişim \`postMessage\` / \`onmessage\` ile.` },
];

module.exports = { questions };
