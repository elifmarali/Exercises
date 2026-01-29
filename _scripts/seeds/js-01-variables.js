"use strict";

const questions = [
  {
    slug: "let-var-const-fark",
    question: `# let, var ve const arasındaki temel farklar nelerdir?

Kod tabanında \`var\` ile tanımlanmış eski bir değişkeni \`let\` veya \`const\` ile değiştirmeyi düşünüyorsun. Bu değişikliğin scope, tekrar atama (reassignment) ve yeniden bildirim (redeclaration) açısından ne gibi etkileri olur? Hangi durumlarda hangisini seçmek daha doğrudur ve neden?`,
    answer: `## Temel farklar

| Özellik | var | let | const |
|--------|-----|-----|-------|
| Scope | function | block | block |
| Tekrar atama | Evet | Evet | Hayır |
| Yeniden bildirim | Evet (aynı scope) | Hayır | Hayır |
| Hoisting | Evet (undefined) | Evet (TDZ) | Evet (TDZ) |

\`var\` function scope’a sahiptir; \`if\`, \`for\` gibi bloklar scope oluşturmaz. \`let\` ve \`const\` block scope’a sahiptir.

\`const\` ile tanımlanan değişkenlere yeniden atama yapılamaz. Ancak referans tiplerde (objeler, diziler) içerik değiştirilebilir; \`const\` sadece referansın kendisini sabitler.

**Best practice:** Varsayılan olarak \`const\` kullan; değer değişecekse \`let\`. \`var\` kullanma.`
  },
  {
    slug: "temporal-dead-zone-tdz",
    question: `# Temporal Dead Zone (TDZ) nedir?

Aşağıdaki kod çalıştırıldığında ne olur ve neden?

\`\`\`js
console.log(x);
let x = 10;
\`\`\`

\`var x;\` kullanılsaydı davranış nasıl farklı olurdu? TDZ’in pratikte karşılaşılabilecek senaryolarını ve nasıl kaçınılacağını açıkla.`,
    answer: `## TDZ nedir?

\`let\` ve \`const\` ile tanımlanan değişkenler, bildirim satırına kadar “temporal dead zone”da sayılır. Bu aralıkta değişkene erişmek \`ReferenceError\` fırlatır.

\`\`\`js
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 10;
\`\`\`

\`var\` kullanılsaydı hoisting nedeniyle \`undefined\` basılır; hata olmaz.

**Neden var?** Erken erişimi engelleyerek mantık hatalarını azaltmak ve \`const\`/\`let\` davranışını öngörülebilir kılmak.

**Pratik:** Değişkenleri kullanıldıkları yere yakın, mümkünse blokun üst kısmında tanımla; fonksiyonları çağırmadan önce tanımlanmış olduklarından emin ol.`
  },
  {
    slug: "hoisting-nedir",
    question: `# JavaScript’te hoisting nedir?

Aşağıdaki kodun çıktısı ne olur? Adım adım açıkla.

\`\`\`js
console.log(a);
var a = 5;
console.log(a);
function foo() { console.log('foo'); }
foo();
\`\`\`

Fonksiyon bildirimleri (declaration) ile fonksiyon ifadeleri (expression) hoisting açısından nasıl farklı davranır?`,
    answer: `## Hoisting

Motor, çalıştırmadan önce bildirimleri (declaration) yukarı “taşır” gibi davranır; atamalar ve diğer ifadeler yerinde kalır.

- \`console.log(a)\` → \`undefined\` (var hoisting; atama henüz yapılmadı).
- \`var a = 5;\` atandıktan sonra \`console.log(a)\` → \`5\`.
- \`function foo() { ... }\` tamamen hoist edilir; \`foo()\` çağrısı çalışır.

**Declaration vs expression:**

- \`function f() {}\` → tamamen hoist edilir.
- \`var f = function () {};\` → \`f\` hoist edilir, \`undefined\`; atamadan önce \`f()\` çağrılırsa \`TypeError\`.

\`let\`/\`const\` da hoist edilir ancak TDZ’de oldukları için atamadan önce erişim \`ReferenceError\` verir.`
  },
  {
    slug: "null-undefined-fark",
    question: `# \`null\` ile \`undefined\` arasındaki farklar nelerdir?

\`typeof null\` ve \`typeof undefined\` ne döner? \`null == undefined\` ve \`null === undefined\` sonuçları nelerdir? Gerçek projelerde hangisini ne zaman kullanmak daha uygundur?`,
    answer: `## Farklar

- **\`undefined\`:** Değişken tanımlı ama değer atanmamış; fonksiyon \`return\` etmezse dönen değer; eksik parametre.
- **\`null\`:** Bilinçli “değer yok” ifadesi.

\`typeof null\` → \`"object"\` (tarihsel bug). \`typeof undefined\` → \`"undefined"\`.

\`null == undefined\` → \`true\` (abstract equality). \`null === undefined\` → \`false\`.

**Pratik:** Kasıtlı “yok” için \`null\`, atanmamışlık için \`undefined\` kullan. API’lerde tutarlı ol; örn. hep \`null\` veya hep \`undefined\` dön. Optional chaining (\`?. \`) ve nullish coalescing (\`??\`) ile güvenli erişim ve varsayılan değer kullan.`
  },
  {
    slug: "nan-tip-kontrolu",
    question: `# \`NaN\` nedir ve güvenli bir şekilde nasıl kontrol edilir?

\`NaN === NaN\` neden \`false\` döner? \`isNaN(\\"hello")\` ve \`Number.isNaN(\\"hello")\` sonuçları nelerdir? Sayı olmayan kullanıcı girdisi veya API yanıtını doğrularken hangi yöntem tercih edilmeli ve neden?`,
    answer: `## NaN ve kontrol

\`NaN\` (Not a Number), geçersiz sayısal işlem sonucudur. IEEE 754’e göre \`NaN !== NaN\`; bu yüzden \`NaN === NaN\` → \`false\`.

- \`isNaN("hello")\` → \`true\` (önce coercion: \`Number("hello")\` → \`NaN\`, sonra \`isNaN(NaN)\`).
- \`Number.isNaN("hello")\` → \`false\` (sadece gerçek \`NaN\` için \`true\`).

**Güvenli kontrol:** \`Number.isNaN(x)\` kullan. Coercion istemiyorsan \`isNaN\` kullanma.

**Alternatif:** \`x !== x\` yalnızca \`NaN\` için \`true\` olur ama \`Number.isNaN\` daha okunabilir.`
  },
  {
    slug: "primitive-vs-object",
    question: `# JavaScript’te primitive ve object (reference) tipler nasıl farklı davranır?

\`let a = 1; let b = a; b = 2;\` ile \`let a = {}; let b = a; b.x = 1;\` örneklerinde \`a\` ve \`b\` değerleri nasıl değişir? Kopyalama (shallow vs deep) ve karşılaştırma (\`==\`, \`===\`) bu ayrımdan nasıl etkilenir?`,
    answer: `## Primitive vs reference

**Primitive’ler** (number, string, boolean, null, undefined, symbol, bigint) değerle kopyalanır. \`b = a\` ile \`b\` \`a\`’nın kopyasını alır; \`b\`’yi değiştirmek \`a\`’yı etkilemez.

**Object’ler** referansla kopyalanır. \`b = a\` ile \`b\` aynı objeyi gösterir; \`b.x = 1\` \`a.x\`’i de değiştirir.

**Karşılaştırma:** Primitive’ler değerle, objeler referansla karşılaştırılır. \`{} === {}\` → \`false\`.

**Kopyalama:** Shallow copy (\`Object.assign\`, spread) sadece üst seviyeyi kopyalar; iç referanslar paylaşılır. Deep copy için \`structuredClone\`, kütüphane (örn. lodash) veya dikkatli recursive kopya kullan.`
  },
  {
    slug: "const-obj-mutasyon",
    question: `# \`const\` ile tanımlanan bir objenin property’leri neden değiştirilebiliyor?

\`const o = { x: 1 }; o.x = 2; o.y = 3;\` geçerli ama \`o = {}\` ataması neden hata verir? \`const\` tam olarak neyi “sabitliyor”? Bu davranış best practice açısından nasıl yorumlanmalı?`,
    answer: `## const neyi sabitler?

\`const\` **referansı** sabitler; objenin içeriğini değil. Bu yüzden \`o.x = 2\`, \`o.y = 3\` geçerli, \`o = {}\` ataması \`TypeError\` verir.

**Best practice:** \`const\` kullanımı, “bu referansı yeniden atayacağım” dememek için iyidir. Objenin mutasyonunu engellemek istiyorsan \`Object.freeze\` (shallow) veya immutable veri yapıları / derin freeze kullan.`
  },
  {
    slug: "typeof-detay",
    question: `# \`typeof\` operatörü hangi değerler için ne döner?

\`typeof null\`, \`typeof []\`, \`typeof function f(){}\`, \`typeof 42n\` sonuçları nelerdir? \`typeof\`ın sınırları nerede; objenin “array” veya “null” olup olmadığını ayırt etmek için ne kullanılmalı?`,
    answer: `## typeof sonuçları

- \`typeof null\` → \`"object"\` (bilinen bug).
- \`typeof []\` → \`"object"\`.
- \`typeof function f(){}\` → \`"function"\`.
- \`typeof 42n\` → \`"bigint"\`.

**Sınırlar:** \`typeof\` array vs object, null vs object ayrımını yapamaz.

**Ayırt etmek için:** \`Array.isArray(x)\` ile array; \`x === null\` ile null kontrolü. Obje alt tipleri için \`instanceof\` veya \`Object.prototype.toString.call(x)\` kullanılabilir.`
  },
  {
    slug: "symbol-kullanim",
    question: `# \`Symbol\` ne işe yarar ve ne zaman kullanılmalı?

\`Symbol() === Symbol()\` neden \`false\` döner? \`Symbol.for\` ile \`Symbol()\` arasındaki fark nedir? Obje property’leri, enum benzeri sabitler veya kütüphane geliştirmede pratik kullanım senaryoları nelerdir?`,
    answer: `## Symbol

\`Symbol()\` her çağrıda benzersiz bir değer üretir; bu yüzden \`Symbol() === Symbol()\` → \`false\`.

**\`Symbol.for(key)\`:** Global registry’den aynı \`key\` için aynı symbol’i döner; paylaşım için.

**Kullanım:** Gizli / çakışmayan property key’leri (örn. meta veri), well-known symbol’ler (\`Symbol.iterator\`, \`Symbol.toStringTag\`), kütüphanede internal alanlar. Enum benzeri sabitler için de kullanılabilir.`
  },
  {
    slug: "bigint-kullanim",
    question: `# \`BigInt\` nedir, ne zaman kullanılır?

\`Number.MAX_SAFE_INTEGER\` nedir ve aşıldığında ne olur? \`BigInt\` ile \`Number\` karışık aritmetikte (\`1n + 2\`) neden hata alınır? Büyük sayılarla çalışan kodda dikkat edilmesi gerekenler nelerdir?`,
    answer: `## BigInt

\`Number\` ile güvenli tam sayı aralığı \`±(2^53 - 1)\` (\`Number.MAX_SAFE_INTEGER\`). Bunun ötesinde precision kaybı olur.

\`BigInt\` ile sınırsız tam sayı (bellek izin verdiği ölçüde) temsil edilir. Literal: \`42n\`.

**Karışık tip:** \`1n + 2\` \`TypeError\`; önce \`Number(1n)\` veya \`BigInt(2)\` ile aynı tipe çevir. \`BigInt\` \`Math\` ile kullanılamaz; \`/\` truncate eder.

**Dikkat:** JSON serileştirme desteklemez; string’e çevirip öyle sakla/ilet.`
  },
  {
    slug: "strict-mode-degisken",
    question: `# Strict mode (\`'use strict'\`) değişken bildirimi ve hoisting açısından ne değiştirir?

Atanmamış değişkene yazma (\`x = 1\`), silinemez property silme (\`delete\`), duplicate parametre gibi durumlarda strict vs non-strict farkı nedir? Modern projelerde strict mode kullanımı neden önerilir?`,
    answer: `## Strict mode etkileri

- Atanmamış değişkene yazma (\`x = 1\`) \`ReferenceError\`; non-strict’te global leak.
- Duplicate parametre \`SyntaxError\`.
- \`delete\` ile silinemez şeyleri silmek \`TypeError\`.
- \`with\` yasak.

Hoisting davranışı aynı kalır; \`var\` hâlâ hoist edilir. Fark, bazı hataların erken ve net şekilde ortaya çıkmasıdır.

**Öneri:** Modül ve \`class\` içi kod zaten strict; projede tamamen strict kullan.`
  },
  {
    slug: "undefined-atama",
    question: `# \`undefined\`’a bilinçli atama yapmak (\`let x = undefined\`) neden genelde önerilmez?

\`undefined\`’ın “değer atanmamış” anlamı ile “kasıtlı olarak yok” ataması nasıl ayırt edilebilir? \`null\` vs \`undefined\` seçiminde okunabilirlik ve API tasarımı açısından neye dikkat etmek gerekir?`,
    answer: `## undefined atama

\`let x = undefined\` yazınca “atanmamış” ile “bilinçli undefined” ayırt edilemez. Bu da debug ve API sözleşmesi için belirsizlik yaratır.

**Pratik:** “Değer yok” için kasıtlı kullanımda \`null\` tercih et; \`undefined\`’ı sadece gerçekten atanmamışlık için bırak. Optional chaining ve nullish coalescing (\`??\`) ile \`null\`/\`undefined\` ikisini de güvenle ele al.`
  },
  {
    slug: "global-object-degisken",
    question: `# Global object (\`window\`, \`globalThis\`) üzerinde değişken tanımlamanın riskleri nelerdir?

\`var x = 1\` (script scope, non-module) ile \`function f() { y = 1 }\` (atama, bildirim yok) global object’e nasıl yansır? Çakışma, güvenlik ve test edilebilirlik açısından neden kaçınılmalıdır?`,
    answer: `## Global kirlilik

- Script seviyesinde \`var x = 1\` global’e eklenir (non-strict, non-module).
- \`y = 1\` (bildirimsiz atama) global’de \`y\` oluşturur; strict’te \`ReferenceError\`.

**Riskler:** İsim çakışmaları, third-party script’lerle etkileşim, test izolasyonu zorluğu, güvenlik (global’e hassas veri sızmaması).

**Öneri:** Modül kullan; \`let\`/\`const\` tercih et; global’e bilerek yazma. Gerekirse \`globalThis\` ile env’e göre (\`window\` vs \`global\`) eriş.`
  },
  {
    slug: "immutability-primitives",
    question: `# Primitive değerler neden “immutable” sayılır? \`let s = 'abc'; s[0] = 'x'\` neden \`s\`’i değiştirmez?

String’ler üzerinde “değişiyormuş” gibi görünen (\`toUpperCase\`, \`replace\`, \`trim\`) metotlar ne yapar? Bu immutability performans ve güvenli paylaşım açısından nasıl değerlendirilir?`,
    answer: `## Primitive immutability

Primitive’ler değer olarak saklanır; “içleri” değiştirilemez. \`s[0] = 'x'\` sessizce yok sayılır (strict’te hata yok ama değişim de olmaz).

\`toUpperCase\`, \`replace\`, \`trim\` vs. yeni string döndürür; orijinali değiştirmez.

**Fayda:** Güvenli paylaşım, yan etki azaltma, cache’leme kolaylığı. Performans için engine’ler interning ve optimizasyon yapar.`
  },
  {
    slug: "wrapper-objects",
    question: `# “Wrapper objects” (\`Number\`, \`String\`, \`Boolean\`) nedir?

\`typeof new Number(1)\` ne döner? \`'a'.toUpperCase()\` gibi primitive üzerinde metot çağrısı nasıl çalışır? \`new Number(1)\` kullanmak neden genelde önerilmez?`,
    answer: `## Wrapper objects

\`Number\`, \`String\`, \`Boolean\` hem constructor hem primitif’lere metot sağlar. \`'a'.toUpperCase()\` çağrıldığında geçici \`String\` wrapper oluşturulur, metot çalışır, wrapper atılır.

\`typeof new Number(1)\` → \`"object"\`. \`new Number(1) === 1\` → \`false\` (object vs primitive).

**Öneri:** Primitive kullan (\`1\`, \`'a'\`, \`true\`); \`new Number\` / \`new String\` kullanma. Gerekiyorsa \`Number(...)\`, \`String(...)\` ile conversion yap.`
  },
  {
    slug: "type-coercion-explicit",
    question: `# Explicit type conversion (\`Number()\`, \`String()\`, \`Boolean()\`) ile \`parseInt\` / \`parseFloat\` ne zaman kullanılmalı?

\`Number('12px')\`, \`parseInt('12px')\`, \`parseInt('12px', 10)\` sonuçları nelerdir? Kullanıcı girdisi veya API’den gelen string sayıları sayıya çevirirken hangi yöntem daha güvenli ve öngörülebilir?`,
    answer: `## Conversion seçimi

- \`Number('12px')\` → \`NaN\` (tüm string sayı olmalı).
- \`parseInt('12px', 10)\` → \`12\` (baştan sayıyı alır, durur).
- \`parseFloat\` ondalık için benzer.

**Kullanım:** Tam string sayıysa \`Number()\`; “başında sayı var” (örn. \`'12px'\`) ise \`parseInt\`/\`parseFloat\`. Her zaman \`parseInt(..., 10)\` ile radix belirt. Validation + conversion birlikte yap; \`NaN\` kontrolü unutma.`
  },
  {
    slug: "object-reference-kopyalama",
    question: `# Shallow copy ile deep copy arasındaki fark nedir? \`Object.assign\` ve spread (\`{...obj}\`) hangisini yapar?

İç içe obje ve dizi kopyalarken referans paylaşımı nasıl problem yaratır? \`structuredClone\` ne zaman kullanılabilir, sınırları nelerdir?`,
    answer: `## Shallow vs deep

**Shallow:** Sadece üst seviye kopyalanır; iç objeler/diziler referansla paylaşılır. \`Object.assign\`, \`{...obj}\`, \`[...arr]\` shallow.

**Deep:** İç içe tüm yapı kopyalanır. \`structuredClone\` (Node 17+, modern tarayıcı) çoğu built-in için uygun; function, Symbol, bazı object türleri clone edilmez.

**Dikkat:** Circular reference’lar \`structuredClone\` ile hata verebilir. Özel türler için lodash \`cloneDeep\` veya manuel recursive copy gerekebilir.`
  },
  {
    slug: "freeze-seal-preventExtensions",
    question: `# \`Object.freeze\`, \`Object.seal\`, \`Object.preventExtensions\` arasındaki farklar nelerdir?

Her biri property ekleme, silme ve mevcut property’leri değiştirmeyi nasıl etkiler? Shallow vs deep freeze açısından neye dikkat etmek gerekir?`,
    answer: `## Farklar

| | preventExtensions | seal | freeze |
|-|-------------------|------|--------|
| Yeni property | ❌ | ❌ | ❌ |
| Silme | ✅ | ❌ | ❌ |
| Mevcut property değişiklik | ✅ | ✅ | ❌ |

\`freeze\` en katı; mevcut property’lerin value’ları da değiştirilemez (ama iç nested objeler mutasyona açık kalır — shallow).

**Deep freeze:** Recursive \`Object.freeze\` gerekir. Performans ve prototype zinciri ile oynanmamasına dikkat et.`
  },
  {
    slug: "var-loop-scope",
    question: `# Aşağıdaki kodun çıktısı ne olur? \`var\` kullanıldığı için neden beklenmedik sonuç çıkar?

\`\`\`js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
\`\`\`

\`let\` ile değiştirince neden doğru çalışır? Closure ve loop scope ilişkisini açıkla.`,
    answer: `## var ile loop

\`var\` function (veya global) scope’a aittir; döngü biteceği için \`i\` son değer 3 olur. \`setTimeout\` callback’leri çalıştığında hep aynı \`i\`’ye (3) bakılır → \`3, 3, 3\`.

\`let\` block scope’a aittir; her iterasyonda yeni \`i\` oluşur. Callback’ler kendi \`i\`’lerini “görür” → \`0, 1, 2\`.

**Özet:** Loop + async callback kullanırken \`let\` (veya \`const\`) kullan; \`var\` closure tuzaklarına yol açar.`
  },
  {
    slug: "degisken-isimlendirme",
    question: `# JavaScript’te değişken isimlendirme için geçerli kurallar ve yaygın convention’lar nelerdir?

\`let 1a;\`, \`let my-name;\`, \`let const;\` neden geçersiz veya problemlidir? camelCase, UPPER_SNAKE, \`_private\` gibi kullanımlar hangi bağlamlarda tercih edilir?`,
    answer: `## Kurallar ve convention

**Kurallar:** Rakam ile başlayamaz; \`$, _, a–z, A–Z\` ve rakam kullanılabilir. \`const\`, \`let\` gibi reserved word’ler isim olamaz.

**Convention:** camelCase (değişken, fonksiyon); UPPER_SNAKE (sabitler); \`_leading\` bazı ekiplerde “private” hissi için. Türkçe/Unicode karakterler dil olarak geçerli ama İngilizce tercih edilir.

**Öneri:** Anlamlı, tutarlı isimler; kısaltmadan kaçın; boolean’da \`is/has/can\` öneki kullan.`
  },
  {
    slug: "destructuring-default",
    question: `# Destructuring ile default değer nasıl verilir? \`const { x = 1 } = {}\` ile \`const { x = 1 } = { x: null }\` sonuçları neden farklıdır?

\`undefined\` vs \`null\` (ve diğer falsy değerler) default değer tetiklemesi açısından nasıl davranır?`,
    answer: `## Default ve destructuring

Default, property \`undefined\` ise uygulanır; \`null\` veya \`0\` için uygulanmaz.

- \`const { x = 1 } = {}\` → \`x === 1\`.
- \`const { x = 1 } = { x: null }\` → \`x === null\`.
- \`const { x = 1 } = { x: 0 }\` → \`x === 0\`.

**Pratik:** “Eksik” ile “bilinçli null/0” ayrımı için \`undefined\` = default, \`null\` = kasıtlı yok kullan. Nullish coalescing (\`??\`) ile \`null\`/\`undefined\` ikisinde de default vermek istersen \`const { x } = o; const val = x ?? 1;\` gibi kullan.`
  },
  {
    slug: "typeof-function",
    question: `# \`typeof\` neden fonksiyonlar için \`"function"\` döner; diğer objeler \`"object"\` iken?

JavaScript’te fonksiyonlar “first-class object” olarak nasıl davranır? \`typeof\`’ın \`"function"\` üretmesi tip sistemi açısından tartışmalı mıdır?`,
    answer: `## typeof ve function

Fonksiyonlar aslında \`Callable\` objedir. Tarihsel olarak \`typeof\` için ayrı \`"function"\` çıktısı tanımlanmış; böylece “çağrılabilir mi?” sorusu kolayca cevaplanır.

**First-class:** Fonksiyonlar değişkene atanabilir, argüman olarak geçirilebilir, döndürülebilir; yani object’tir, ek olarak \`[[Call]]\` içerir.

**Tartışma:** \`typeof fn === "function"\` pratik ve yaygın. Tip sisteminde \`Function\` ayrı bir tip olarak ele alınabilir; \`typeof\` bu ayrımı yüzeysel olarak yansıtır.`
  },
  { slug: "void-operator", question: `# \`void\` operatörü ne yapar? \`void 0\` neden bazen \`undefined\` yerine kullanılır?

\`void\`'ın return değeri nedir? Eski kodlarda \`undefined\`'ın override edilebilmesi nasıl bir problem yaratırdı? Modern JS'te hâlâ kullanım alanı var mı?`, answer: `## void operatörü

\`void <expr>\` ifadeyi değerlendirir ve her zaman \`undefined\` döner. Eski ortamlarda \`undefined\` globalde yeniden atanabiliyordu; \`void 0\` güvenli \`undefined\` kaynağı olarak kullanılırdı.

Günümüzde strict mode ve modül ortamında \`undefined\` güvenle kullanılabilir. \`void\` hâlâ "değeri yok say, \`undefined\` dön" için (örn. \`href="javascript:void(0)"\`) kullanılır; ancak bu pattern’ler de modern alternatiflerle değiştirilebilir.` },
  { slug: "delete-operator", question: `# \`delete\` operatörü neyi siler, neyi silemez? \`delete obj.x\` ile \`delete arr[1]\` davranışı nasıldır?

\`var\` / \`let\` / \`const\` ile tanımlanan değişkenler, fonksiyon parametreleri ve \`configurable: false\` property'ler \`delete\` ile neden silinemez?`, answer: `## delete

\`delete\` object property'lerini kaldırır. \`var\`/\`let\`/\`const\` ile tanımlı değişkenler ve fonksiyon bildirimleri silinemez; \`delete\` non-strict’te \`false\` döner, strict’te \`SyntaxError\` olabilir.

\`configurable: false\` property’ler silinemez. \`delete arr[i]\` dizide \`i\` indeksini “boş” yapar (\`empty\`); \`length\` değişmez. Sık \`delete\` kullanımı performans ve tahmin edilebilirlik açısından genelde önerilmez; gerekiyorsa Map/Set veya yeni obje üretmek tercih edilir.` },
  { slug: "in-operator", question: `# \`in\` operatörü ne yapar? \`'x' in obj\` ile \`obj.hasOwnProperty('x')\` arasındaki fark nedir?

Prototip zincirindeki property'ler \`in\` ile nasıl görünür? \`Object.create(null)\` ile oluşturulan objelerde \`hasOwnProperty\` kullanırken neden dikkat etmek gerekir?`, answer: `## in vs hasOwnProperty

\`'x' in obj\` \`obj\` veya prototype zincirinde \`x\` var mı diye bakar. \`obj.hasOwnProperty('x')\` sadece kendi property’lerine bakar, prototype’a bakmaz.

\`Object.create(null)\` ile \`hasOwnProperty\` yoktur; \`obj.hasOwnProperty('x')\` \`TypeError\` verir. Güvenli kullanım: \`Object.prototype.hasOwnProperty.call(obj, 'x')\` veya \`Object.hasOwn(obj, 'x')\` (ES2022+).` },
  { slug: "instanceof-vs-typeof", question: `# \`instanceof\` ile \`typeof\` ne zaman hangisi kullanılmalı? \`[] instanceof Object\` ve \`typeof []\` sonuçları nelerdir?

\`instanceof\` prototip zincirine baktığı için farklı realm (iframe, Worker) veya birden fazla global \`Array\` olduğunda nasıl yanıltıcı olabilir?`, answer: `## instanceof vs typeof

\`typeof\` primitive ve \`"function"\` / \`"object"\` ayrımı için; \`instanceof\` “bu constructor’ın instance’ı mı?” için kullanılır. \`[] instanceof Object\` → \`true\`, \`typeof []\` → \`"object"\`.

Farklı realm’lerde aynı “tip” farklı constructor’larla temsil edilebilir; \`instanceof\` \`false\` dönebilir. \`Array.isArray\`, \`Object.prototype.toString.call\` veya \`Symbol.toStringTag\` gibi yöntemler daha güvenilir olabilir.` },
  { slug: "truthy-falsy-list", question: `# JavaScript’te “falsy” ve “truthy” değerler nelerdir? Hepsinin listesini ver.

\`if (x)\` gibi kontrollerde \`0\`, \`''\`, \`NaN\`, \`null\`, \`undefined\` nasıl davranır? “Falsy ama geçerli değer” (örn. \`0\`, \`''\`) kullanıldığında ne tür hatalar oluşabilir ve nasıl önlenir?`, answer: `## Falsy ve truthy

**Falsy:** \`false\`, \`0\`, \`-0\`, \`0n\`, \`''\`, \`null\`, \`undefined\`, \`NaN\`. Bunlar dışındakiler truthy.

\`if (x)\` ile \`0\` veya \`''\` elenir; bazen kasıtlı geçerli değerler yok sayılır. Bu tür hataları azaltmak için \`if (x != null)\`, \`if (x !== undefined && x !== null)\` veya \`??\` ile default kullan; sayı için \`typeof x === 'number' && !Number.isNaN(x)\` gibi açık kontroller tercih edilebilir.` },
  { slug: "optional-chaining-nullish", question: `# Optional chaining (\`?.\`) ve nullish coalescing (\`??\`) ne işe yarar? \`obj?.a?.b\` ile \`obj && obj.a && obj.a.b\` farkı nedir?

\`??\` ile \`||\` farkı nerede? \`0\`, \`''\` gibi falsy geçerli değerler için hangisi daha güvenli?`, answer: `## ?. ve ??

\`?.\` erişim zincirinde \`null\`/\`undefined\` ile karşılaşınca hemen \`undefined\` döner; devam etmez. \`obj?.a?.b\` \`obj\` veya \`a\` yoksa \`undefined\`; \`obj && obj.a && obj.a.b\` ile aynı sonucu verir ama daha kısa ve okunabilir.

\`??\` sadece \`null\` ve \`undefined\` için sağ tarafı kullanır; \`||\` tüm falsy için. \`0 ?? 1\` → \`0\`, \`0 || 1\` → \`1\`. Varsayılan değer verirken \`0\`/\`''\` geçerliyse \`??\` kullan.` },
  { slug: "number-precision", question: `# \`0.1 + 0.2 === 0.3\` neden \`false\`? Floating-point precision nasıl çalışır?

Para veya hassas hesaplarda \`Number\` kullanırken ne tür hatalar oluşur? Çözüm olarak ne yapılabilir (ondalık kütüphanesi, integer cent vb.)?`, answer: `## Float precision

IEEE 754 binary float’ta \`0.1\`, \`0.2\` tam temsil edilemez; toplam \`0.30000000000000004\` gibi bir değere denk gelir, bu yüzden \`=== 0.3\` \`false\` olur.

**Pratik:** Para birimi için ondalık kütüphanesi (decimal.js, big.js) veya cent/sent gibi integer birim kullan. Karşılaştırmada tolerans (\`epsilon\`) veya rounded compare kullan; doğrudan \`===\` kullanma.` },
  { slug: "undefined-delete", question: `# \`delete\` ile \`undefined\` atama (\`obj.x = undefined\`) arasındaki fark nedir? \`'x' in obj\` ve \`obj.x\` açısından nasıl farklılık gösterir?

Property’nin “yok” olması ile “var ama undefined” olması \`for..in\`, \`Object.keys\`, \`JSON.stringify\` gibi işlemlerde nasıl yansır?`, answer: `## delete vs undefined atama

\`delete obj.x\` property’yi tamamen kaldırır; \`'x' in obj\` → \`false\`. \`obj.x = undefined\` property’yi tutar, değeri \`undefined\` yapar; \`'x' in obj\` → \`true\`.

\`for..in\` ve \`Object.keys\` her iki durumda da \`x\`’i listeler (undefined olsa bile). \`JSON.stringify\` \`undefined\` value’ları atar; property yokmuş gibi davranır. “Gerçekten yok” istiyorsan \`delete\`, “var ama boş” istiyorsan \`undefined\` atama kullan.` },
  { slug: "globalThis", question: `# \`globalThis\` nedir? \`window\`, \`self\`, \`global\` ile farkı ne zaman ortaya çıkar?

Cross-platform (tarayıcı, Node, Worker, edge runtime) kodda global object’e güvenli erişim nasıl sağlanır?`, answer: `## globalThis

\`globalThis\` (ES2020) ortama bağımsız global object referansıdır. Tarayıcıda \`window\`, Node’da \`global\`, Worker’da \`self\` karşılık gelir; \`globalThis\` hepsinde aynı kavramı verir.

Cross-platform kodda global’e erişmek için \`globalThis\` kullan; \`window\` sadece tarayıcıda, \`global\` sadece Node’da vardır. Edge runtime, deno vb. için de \`globalThis\` tutarlıdır.` },
  { slug: "regex-typeof", question: `# \`typeof /abc/\` ne döner? Regex’ler primitive mi, object mi? \`RegExp\` constructor ile literal \`/.../\` arasında pratik fark var mı?`, answer: `## Regex ve typeof

\`typeof /abc/\` → \`"object"\`. Regex’ler object’tir; primitive değil.

Literal \`/.../\` ve \`new RegExp('...')\` aynı tipi üretir. Literal statik pattern’ler için daha okunaklı; dinamik pattern’de \`RegExp\` constructor gerekir. \`RegExp\` instance’ları \`exec\`, \`test\`, \`source\`, \`flags\` gibi property’lere sahiptir.` },
  { slug: "array-typeof", question: `# \`typeof []\` neden \`"object"\`? Dizileri objelerden ayırmak için hangi yöntemler kullanılır ve neden \`Array.isArray\` tercih edilir?`, answer: `## Array ve typeof

Diziler object’tir; \`typeof []\` → \`"object"\`. Ayrım için \`Array.isArray(x)\` kullan; \`instanceof Array\` farklı realm’lerde yanıltıcı olabilir. \`Object.prototype.toString.call([])\` → \`"[object Array]"\` de kullanılabilir ancak \`Array.isArray\` daha sade ve standart.` },
  { slug: "date-typeof", question: `# \`typeof new Date()\` ne döner? \`Date\` objeleri \`==\` / \`===\` ile karşılaştırılınca neden beklenmedik sonuçlar çıkabilir? Tarih karşılaştırması nasıl yapılmalı?`, answer: `## Date ve typeof

\`typeof new Date()\` → \`"object"\`. \`Date\` instance’ları referans tip olduğu için \`d1 === d2\` sadece aynı referans ise \`true\` olur; “aynı an” için değil.

Tarih karşılaştırması için \`d1.getTime() === d2.getTime()\` veya \`+d1 === +d2\` kullan. \`<\` / \`>\` doğrudan \`Date\` üzerinde çalışır.` },
  { slug: "error-objects", question: `# \`Error\` objeleri normal objelerden farklı mıdır? \`typeof new Error()\`, \`instanceof Error\` ne döner?

\`throw\` ile atılan değerler neden genelde \`Error\` instance’ı olmalı? \`Error.prototype.message\`, \`stack\` nasıl kullanılır?`, answer: `## Error objeleri

\`typeof new Error()\` → \`"object"\`. \`instanceof Error\` → \`true\`. \`message\` ve \`stack\` (ortam desteği varsa) standart property’lerdir.

\`throw\` ile \`Error\` (veya alt sınıf) kullanmak stack trace, tutarlı yapı ve hata yakalama için faydalıdır. \`throw "string"\` gibi kullanımlardan kaçın; \`new Error("...")\` veya custom \`Error\` alt sınıfları tercih et.` },
  { slug: "symbol-keys-iteration", question: `# Symbol key’li property’ler \`for..in\`, \`Object.keys\`, \`Object.getOwnPropertySymbols\` ile nasıl görünür?

Neden Symbol’ler “gizli” property için kullanılabilir ve bu ne zaman işe yarar?`, answer: `## Symbol keys ve iterasyon

\`for..in\` ve \`Object.keys\` Symbol key’leri göstermez. \`Object.getOwnPropertySymbols(obj)\` sadece Symbol key’leri döner. \`Reflect.ownKeys(obj)\` hem string hem Symbol key’leri verir.

Symbol’ler çakışmayan, normal enumerable iterasyonda görünmeyen key’ler sağlar; meta veri, internal state veya kütüphane alanları için uygundur.` },
  { slug: "undefined-param", question: `# Fonksiyon çağrısında eksik parametreler nasıl ele alınır? \`function f(a, b) {}\` için \`f(1)\` çağrıldığında \`b\` nedir?

Default parametre \`function f(a, b = 2) {}\` \`f(1)\` ve \`f(1, undefined)\` için nasıl davranır?`, answer: `## Eksik parametre ve default

Eksik parametreler \`undefined\` olur. \`f(1)\` ile \`b === undefined\`. Default \`b = 2\` sadece \`undefined\` için devreye girer; \`f(1, null)\` ile \`b\` \`null\` kalır.

\`f(1, undefined)\` ile \`b\` default alır (\`2\`). Default değerler her çağrıda sola doğru değerlendirilir; sağdaki parametreler soldakilere referans verebilir.` },
  { slug: "const-loop", question: `# \`for (const i = 0; i < 3; i++) {}\` neden hata verir? \`for (const x of arr)\` neden sorunsuz çalışır?

\`const\` loop’larda ne zaman kullanılabilir, ne zaman kullanılamaz?`, answer: `## const ve loop

\`for ( ; ; )\` içinde \`i++\` yeniden atama gerektirir; \`const\` izin vermez. \`for (const i = 0; i < 3; i++)\` → \`TypeError\`.

\`for (const x of arr)\` her iterasyonda yeni \`x\` binding’i oluşturur; atama yok, sadece yeni değer atanır. \`for...of\` ve \`for...in\` ile \`const\` güvenle kullanılır.` },
  { slug: "block-scope-if", question: `# \`if (true) { let x = 1; } console.log(x);\` neden hata verir? \`var\` kullanılsaydı ne olurdu?

Block scope’un \`if\`, \`switch\`, \`try/catch\` içindeki kullanımı nasıl davranır?`, answer: `## Block scope

\`let\`/\`const\` block scope’a aittir; \`if\` bloğu bittikten sonra \`x\` tanımsızdır, \`console.log(x)\` → \`ReferenceError\`.

\`var\` kullanılsaydı \`x\` function/global scope’ta olurdu; \`console.log(x)\` \`1\` basardı. \`switch\` içinde \`case\` blokları tek scope paylaşır; \`let\`/\`const\` için \`case\` bloklarını \`{ }\` ile sarmak iyi fikirdir. \`catch (e)\` parametresi de block scope’a aittir.` },
  { slug: "redeclare-block", question: `# Aynı block içinde \`let x = 1; let x = 2;\` neden \`SyntaxError\` verir? \`var x = 1; var x = 2;\` neden vermez?

Farklı block’larda \`let x\` tekrar tanımlanabilir mi? Shadowing nedir?`, answer: `## Redeclaration ve shadowing

\`let\`/\`const\` aynı scope’ta yeniden bildirilemez; \`let x; let x;\` → \`SyntaxError\`. \`var\` ile aynı scope’ta tekrar \`var x\` geçerlidir; son atama geçerli olur.

Farklı block’larda \`let x\` tanımlanabilir (shadowing). İç block dıştaki \`x\`’i gizler; dıştaki \`x\`’e içeriden erişilemez. Okunabilirlik için shadowing abartılı kullanılmamalıdır.` },
  { slug: "module-scope", question: `# ES modül dosyasında üst seviyede \`var x = 1\` yazılsa \`x\` global object’e eklenir mi? \`let\`/\`const\` ile farkı nedir?

Modül scope’un script scope’tan farkı nasıl özetlenir?`, answer: `## Modül scope

ES modüllerinde üst seviye scope modül scope’tur; global değil. \`var\` bile global’e eklenmez. \`let\`/\`const\` de modül scope’a aittir.

Modül dosyaları otomatik strict kabul edilir, \`this\` \`undefined\` olur. Export edilenler dışarı açılır; diğer her şey modüle özel kalır.` },
  { slug: "iife-modern-alternatif", question: `# IIFE (Immediately Invoked Function Expression) geleneksel olarak ne işe yarıyordu? Günümüzde hangi alternatifler kullanılır?

\`(function () { var x = 1; })();\` ile \`{ let x = 1; }\` block’u arasında scope açısından fark var mı?`, answer: `## IIFE ve alternatifler

IIFE, fonksiyon scope oluşturup “private” değişken saklamak ve global kirliliği azaltmak için kullanılıyordu. \`var\` block scope’a sahip olmadığı için \`{ var x = 1 }\` yeterli değildi.

\`let\`/\`const\` ile block scope yeterli: \`{ let x = 1; }\`. Modüller zaten izole scope sağlar. Günümüzde IIFE çoğunlukla modül + block + \`let\`/\`const\` ile gereksiz hale gelmiştir.` },
  { slug: "label-block", question: `# \`label: { let x = 1; }\` geçerli mi? Label’lar scope oluşturur mu? \`break label\` ile block’tan çıkış nasıl kullanılır?`, answer: `## Label ve block

\`label: { ... }\` geçerlidir. Label scope oluşturmaz; sadece \`break\`/\`continue\` için hedef sağlar. Block kendi scope’unu oluşturur; \`let x\` block’a aittir.

\`break label\` ile label’lı block’tan (veya loop’tan) çıkılır. Karmaşık iç içe loop’larda nadiren kullanılır; mümkünse \`break\`/\`continue\` ile daha sade yapılar tercih edilir.` },
  { slug: "string-index", question: `# \`'abc'[0] = 'x'\` neden \`'abc\`'i değiştirmez? Okuma \`'abc'[1]\` ne döner? String’ler “array-like” mıdır?`, answer: `## String indeks ve immutability

String’ler immutable’dır; \`'abc'[0] = 'x'\` etkisiz (strict’te hata da yok). \`'abc'[1]\` → \`'b'\`.

String’ler \`length\` ve indeks erişimi sunar; array-like sayılırlar. Ama \`Array.isArray('abc')\` → \`false\`; \`Array.from\` veya \`[...'abc']\` ile diziye çevrilebilir.` },
  { slug: "number-tostring", question: `# \`(42).toString()\` ile \`String(42)\` arasında fark var mı? \`null\` ve \`undefined\` için \`String(...)\` ne döner?`, answer: `## number to string

\`(42).toString()\` ve \`String(42)\` sonuç olarak \`"42"\` verir. \`String\` her tip için çalışır; \`null\` → \`"null"\`, \`undefined\` → \`"undefined"\`. \`x.toString()\` \`null\`/\`undefined\` için hata verir.

\`String(x)\` güvenli genel dönüşüm; \`x?.toString()\` veya \`'' + x\` da kullanılır ama \`String(x)\` daha açık ve öngörülebilirdir.` },
  { slug: "boolean-object", question: `# \`Boolean(new Boolean(false))\` ne döner? Neden? \`new Boolean(...)\` kullanımı neden önerilmez?`, answer: `## Boolean object

\`new Boolean(false)\` bir object’tir; object’ler truthy’dir. \`Boolean(...)\` argümanı “truthy mi?” diye coerced eder; object truthy olduğu için \`Boolean(new Boolean(false))\` → \`true\`.

\`new Boolean\` gereksiz ve kafa karıştırıcıdır. Boolean değeri için \`Boolean(x)\` veya \`!!x\` kullan; \`new Boolean\` kullanma.` },
  { slug: "coercion-plus", question: `\`1 + '2'\`, \`1 - '2'\`, \`+'3'\` sonuçları nelerdir? \`+\` operatörü string vs number birleşiminde neden farklı davranır?`, answer: `\`1 + '2'\` → \`"12"\` (string concatenation; biri string olunca diğeri string'e çevrilir). \`1 - '2'\` → \`-1\` (sayı çıkarma; \`'2'\` number'a çevrilir). \`+'3'\` → \`3\` (unary \`+\` numeric coercion). \`+\` hem toplama hem concatenation olduğu için tip önceliği string'e kayar; \`-\` sadece sayısal.` },
  { slug: "obj-plus-str", question: `\`{} + []\` ve \`[] + {}\` ifadelerinin sonuçları nelerdir? Obje ve dizi \`toString\` / \`valueOf\` coercion'da nasıl kullanılır?`, answer: `\`[] + {}\` → \`"[object Object]"\` (önce \`[].toString()\` → \`""\`, \`{}.toString()\` → \`"[object Object]"\`, concatenation). \`{} + []\` ortama göre değişir: block + unary \`+\` olarak parse edilirse \`+[]\` → \`0\`. Obje/dizi coercion'da \`valueOf\` sonra \`toString\` denenir; string bağlamda \`toString\` kullanılır.` },
  { slug: "undefined-null-math", question: `\`undefined + 1\`, \`null + 1\`, \`undefined + 'x'\` sonuçları nelerdir?`, answer: `\`undefined + 1\` → \`NaN\` (\`Number(undefined)\` → \`NaN\`). \`null + 1\` → \`1\` (\`Number(null)\` → \`0\`). \`undefined + 'x'\` → \`"undefinedx"\` (string concatenation). Sayısal bağlamda \`undefined\` \`NaN\`, \`null\` \`0\`'a çevrilir.` },
  { slug: "object-assign-spread", question: `\`Object.assign\` ile spread \`{...a, ...b}\` shallow copy açısından farklı mı? \`Object.assign({}, a)\` ile \`{...a}\` aynı mı?`, answer: `İkisi de shallow copy yapar. \`{...a}\` esasen \`Object.assign({}, a)\` ile aynı sonucu üretir. \`Object.assign\` hedefi mutate eder; spread hedefi yok, yeni obje oluşturur. Nested referanslar her ikisinde de paylaşılır.` },
  { slug: "getter-setter-copy", question: `Shallow copy (\`{...obj}\`, \`Object.assign\`) getter/setter'ları nasıl kopyalar? Accessor'lar taşınır mı?`, answer: `\`Object.assign\` hedefe property'leri “assign” eder; getter/setter’lar kopyalanmaz, sadece o anki value (getter’ın dönüşü) kopyalanır. Spread \`{...obj}\` de özellik tanımlarını değil, property descriptor’ları tam taşımaz; accessor’lar genelde data property’ye dönüşür. Accessor’ları korumak için \`Object.getOwnPropertyDescriptor\` / \`defineProperty\` ile manuel kopya gerekir.` },
  { slug: "obj-create-null", question: `\`Object.create(null)\` ile \`{}\` arasındaki fark nedir? \`Object.create(null)\` ne zaman tercih edilir?`, answer: `\`{}\` \`Object.prototype\`'tan türer; \`toString\`, \`hasOwnProperty\` vb. vardır. \`Object.create(null)\` prototipsiz “saf” obje; prototype zinciri yok. \`in\`, \`hasOwnProperty\` gibi \`Object.prototype\`’a dayanan kullanımlar \`Object.create(null)\`’da kullanılamaz. Map benzeri key-value depolarda, \`"__proto__"\` vb. ile çakışma istemediğinde tercih edilir.` },
  { slug: "key-order", question: `Obje key'lerinin sırası garanti mi? String key, Symbol, number-like key sıralaması nasıldır?`, answer: `ES2020’de insertion order (eklenme sırası) garanti. Önce integer-like key’ler (küçükten büyüğe), sonra string key’ler (eklenme sırası), sonra Symbol’ler. \`for..in\`, \`Object.keys\`, \`Object.getOwnPropertyNames\` bu sırayı yansıtır; \`Object.getOwnPropertySymbols\` ayrı.` },
  { slug: "negative-zero", question: `\`-0\` nedir? \`0 === -0\`, \`Object.is(0, -0)\` sonuçları nelerdir? \`1 / 0\` ve \`1 / -0\` ne döner?`, answer: `IEEE 754’te \`+0\` ve \`-0\` ayrı değerler. \`0 === -0\` → \`true\`. \`Object.is(0, -0)\` → \`false\`. \`1/0\` → \`Infinity\`, \`1/-0\` → \`-Infinity\`. İşaretli sıfır bazen hesaplarda önemli; \`Object.is\` ile ayırt edilebilir.` },
  { slug: "infinity-nan", question: `\`Infinity\`, \`-Infinity\` tipi nedir? \`typeof Infinity\`, \`isFinite(NaN)\`, \`Number.isFinite(NaN)\` ne döner?`, answer: `\`typeof Infinity\` → \`"number"\`. \`isFinite(NaN)\` → \`false\` (NaN finite değil). \`Number.isFinite(NaN)\` → \`false\`. \`isFinite('1')\` → \`true\` (coercion); \`Number.isFinite('1')\` → \`false\`. Sadece gerçek sayı kontrolü için \`Number.isFinite\` tercih edilir.` },
  { slug: "max-safe-integer", question: `\`Number.MAX_SAFE_INTEGER\` nedir? Bu sınır aşıldığında ne olur? \`Number.isSafeInteger\` ne işe yarar?`, answer: `\`2^53 - 1\` (\`9007199254740991\`). Bu aralık dışında tam sayılar float’ta tek bir değerle temsil edilemez; precision kaybı olur. \`Number.isSafeInteger(x)\` \`x\` bu aralıkta mı ve tam sayı mı diye bakar. Büyük tam sayılar için \`BigInt\` kullanılmalı.` },
  { slug: "undefined-readonly", question: `Strict mode’da \`undefined\`’a atama yapılabilir mi? \`undefined\` globalde override edilebilir mi (eski ortamlarda)?`, answer: `Strict mode’da \`undefined\`’a atama \`TypeError\` verir. Eski (non-strict, non-module) ortamlarda \`undefined = 1\` mümkündü; bu yüzden \`void 0\` kullanılırdı. Modül ve strict ortamda \`undefined\` güvenle kullanılır.` },
  { slug: "NaN-equality", question: `\`NaN === NaN\` neden \`false\`? \`NaN\` ile eşitlik kontrolü nasıl yapılır? \`Object.is(NaN, NaN)\` ne döner?`, answer: `IEEE 754 standardı \`NaN !== NaN\` der. Kontrol: \`Number.isNaN(x)\` veya \`x !== x\` (sadece NaN için \`true\`). \`Object.is(NaN, NaN)\` → \`true\`; \`Object.is\` “SameValue” karşılaştırması yapar.` },
  { slug: "obj-is-vs-eq", question: `\`Object.is\` ile \`===\` farkı nedir? \`Object.is(NaN, NaN)\`, \`Object.is(0, -0)\` ne döner?`, answer: `\`===\` \`NaN !== NaN\` ve \`0 === -0\` kabul eder. \`Object.is\` “SameValue”: \`Object.is(NaN, NaN)\` → \`true\`, \`Object.is(0, -0)\` → \`false\`. Diğer değerlerde \`===\` ile aynı. \`Object.is\` NaN ve ±0 ayrımı için kullanılır.` },
  { slug: "rest-default-order", question: `\`function f(a, b = 1, ...r) {}\` geçerli mi? Rest parametre ile default parametre sıralaması nasıl olmalı?`, answer: `Geçerlidir. Rest (\`...r\`) her zaman son parametre olmalı; default parametreler ondan önce gelebilir. \`f(1)\` → \`a=1\`, \`b=1\`, \`r=[]\`; \`f(1,2,3,4)\` → \`a=1\`, \`b=2\`, \`r=[3,4]\`.` },
  { slug: "duplicate-param-strict", question: `\`function f(a, a) {}\` strict ve non-strict’te nasıl davranır?`, answer: `Strict’te \`SyntaxError\` (duplicate parametre yasak). Non-strict’te geçerli; ikinci \`a\` öncelikli, hoisting ile son atama kullanılır. Modern kodda strict kullan; duplicate parametre yazma.` },
  { slug: "arguments-es6", question: `\`function f(a, b) { arguments[0] = 9; return a; }\` \`f(1,2)\` ne döner? Strict’te \`arguments\` nasıl değişir?`, answer: `Non-strict’te \`arguments\` ile parametre senkron; \`arguments[0]=9\` \`a\`’yı da değiştirir, \`9\` döner. Strict’te \`arguments\` parametrelerden ayrılır; \`arguments[0]=9\` \`a\`’yı etkilemez, \`1\` döner. Rest \`...args\` kullanımı \`arguments\`’tan kaçınmayı sağlar.` },
  { slug: "const-reassign-error", question: `\`const x = 1; x = 2;\` hangi hata türünü verir? \`const\` ile atama \`TypeError\` mı \`SyntaxError\` mı?`, answer: `Çalışma zamanında \`TypeError\` (strict’te “Assignment to constant variable”). \`const\` bildirimi geçerlidir; hata atama satırında oluşur. \`const\` ile yeniden bildirim \`SyntaxError\` verir.` },
  { slug: "let-redeclare-sibling", question: `\`let x = 1; { let x = 2; }\` geçerli mi? Aynı \`let\` block’ta \`let x\` tekrar yazılabilir mi?`, answer: `Geçerlidir; farklı block’larda shadowing. Aynı block’ta \`let x; let x;\` \`SyntaxError\`. İç block’taki \`x\` dıştakini gizler; dıştaki \`x\` içeride görünmez.` },
  { slug: "var-redeclare", question: `\`var x = 1; var x = 2; console.log(x);\` ne basar? \`var\` ile aynı scope’ta tekrar bildirim neden hataya yol açmaz?`, answer: `\`2\` basar. Aynı scope’ta \`var\` yeniden bildirimi geçerlidir; tek binding vardır, son atama geçerli olur. Bu davranış hata riski ve okunabilirlik sorunları yaratabildiği için \`let\`/\`const\` tercih edilir.` },
  { slug: "uninitialized-let", question: `\`let x; console.log(x);\` ne basar? \`let x;\` ile \`var x;\` farkı (hoisting / TDZ dışında)?`, answer: `\`undefined\` basar. \`let x;\` bildirimde atama yoksa \`undefined\`; TDZ sadece okuma ile ilgili, tanımsız değişken okumada \`ReferenceError\`. \`var x;\` de \`undefined\`; fark, \`var\`’ın okunabilir olması (hoisting), \`let\`’in TDZ’de okunamaması.` },
  { slug: "arrow-no-arguments", question: `Ok fonksiyonunda \`arguments\` kullanılabilir mi? Alternatif ne olmalı?`, answer: `Ok fonksiyonunun kendi \`arguments\`’ı yoktur; \`arguments\` kullanılırsa dış scope’tan çözülür (varsa). Rest parametre kullan: \`(...args) => { }\`.` },
  { slug: "typeof-undefined", question: `\`typeof undefined\` ne döner? Tanımlanmamış değişken için \`typeof x\` (x hiç yok) ne döner?`, answer: `\`typeof undefined\` → \`"undefined"\`. Tanımlanmamış \`x\` için \`typeof x\` → \`"undefined"\` (ReferenceError vermez). \`typeof\` güvenli kontrol için kullanılır; ama \`let x;\` (uninitialized) için de \`"undefined"\` döner.` },
  { slug: "symbol-unique", question: `\`Symbol('id') === Symbol('id')\` ne döner? \`Symbol.for('id') === Symbol.for('id')\` ne döner?`, answer: `\`Symbol('id') === Symbol('id')\` → \`false\` (her \`Symbol()\` benzersiz). \`Symbol.for('id')\` global registry’den aynı key için aynı symbol’i döner; \`Symbol.for('id') === Symbol.for('id')\` → \`true\`.` },
  { slug: "bigint-json", question: `\`JSON.stringify(1n)\` ne yapar? BigInt neden JSON’da doğrudan kullanılamaz, nasıl serialize edilir?`, answer: `\`JSON.stringify(1n)\` \`TypeError\` (BigInt JSON’da yok). Çözüm: \`String(1n)\` veya \`1n.toString()\` ile string’e çevirip JSON’a yaz; parse’ta \`BigInt(...)\` ile geri al. Özel \`toJSON\` veya replacer da kullanılabilir.` },
  { slug: "number-tostring-radix", question: `\`(10).toString(2)\`, \`(255).toString(16)\` ne döner? \`parseInt\` radix parametresi neden önemli?`, answer: `\`(10).toString(2)\` → \`"1010"\`, \`(255).toString(16)\` → \`"ff"\`. \`parseInt\` radix verilmezse \`"0x..."\` hex kabul eder, \`"0"\` ile başlayanlar octal yorumlanabilir (deprecated). Her zaman \`parseInt(s, 10)\` gibi radix belirt.` },
  { slug: "empty-string-number", question: `\`Number('')\`, \`Number('   ')\`, \`parseInt('')\` ne döner?`, answer: `\`Number('')\` → \`0\`. \`Number('   ')\` → \`0\` (boşluk trim edilir). \`parseInt('')\` → \`NaN\`. String’den sayıya çevirirken \`''\` ile \`0\` ayrımı gerekebilir; \`parseInt\` boş string’de \`NaN\` verir.` },
  { slug: "boolean-str-num", question: `\`Boolean('false')\`, \`Boolean('')\`, \`Number(true)\` ne döner?`, answer: `\`Boolean('false')\` → \`true\` (non-empty string truthy). \`Boolean('')\` → \`false\`. \`Number(true)\` → \`1\`, \`Number(false)\` → \`0\`. String \`"false"\` boolean’a çevrilmez; içerik değil, tip ve “falsy” kuralları geçerli.` },
  { slug: "obj-coercion-valueOf", question: `\`+{ }\` ne üretir? \`valueOf\` ve \`toString\` coercion sırası nasıldır?`, answer: `\`+{}\` → \`NaN\`. Önce \`valueOf\` denenir; \`Object\` için obje döner. Sonra \`toString\` → \`"[object Object]"\`; bu sayıya çevrilince \`NaN\`. \`+[]\` → \`0\` (\`[].toString()\` → \`""\`, \`Number("")\` → \`0\`).` },
  { slug: "undefined-property-vs-missing", question: `\`const o = { a: undefined }; 'a' in o\` ve \`o.b\` (yok) nasıl farklıdır? \`in\` vs \`obj.prop === undefined\` ne zaman ayrışır?`, answer: `\`'a' in o\` → \`true\`, \`'b' in o\` → \`false\`. \`o.a\` ve \`o.b\` ikisi de \`undefined\` dönebilir. “Property var mı?” için \`in\`; “değer undefined mı?” için \`obj.p === undefined\`. Kasıtlı \`undefined\` atanmış property ile hiç olmayan property’yi ayırmak için \`in\` kullanılır.` },
  { slug: "falsy-object", question: `Obje referansları neden hep truthy? \`Boolean({})\`, \`Boolean([])\` ne döner? \`!!{}\` ne döner?`, answer: `Object’ler (dizi dahil) heap’te referansla tutulur; hiçbir obje “boş” sayılmaz. \`Boolean({})\` → \`true\`, \`Boolean([])\` → \`true\`. \`!!{}\` → \`true\`. “Boş” kontrolü \`Array.isArray(x) && x.length === 0\` veya \`Object.keys(x).length === 0\` gibi yapılır.` },
  { slug: "null-typeof-historical", question: `\`typeof null === 'object'\` neden “tarihsel hata” sayılır? Düzeltilmemesinin gerekçesi ne olabilir?`, answer: `İlk implementasyonda tip tag’lerden biri “object” için kullanılmış, \`null\` aynı tag’i almış; bu yüzden \`typeof null === 'object'\` kalmış. Düzeltme mevcut kodları kıracağı için yapılmıyor. Kontrol için \`x === null\` veya \`x == null\` (null/undefined birlikte) kullan.` },
  { slug: "assign-chain", question: `\`let a = b = 0;\` \`b\` nereye yazılır (strict / non-strict)? Bu pattern neden riskli?`, answer: `\`b = 0\` önce değerlendirilir; \`b\` hiç bildirilmemişse non-strict’te global’e yazılır, \`a = b\` atanır. Strict’te \`b\` tanımsızsa \`ReferenceError\`. Zincir atama yerine \`let a = 0; let b = 0;\` veya \`let a = 0, b = 0;\` kullan.` },
  { slug: "comma-operator", question: `\`let x = (1, 2, 3);\` \`x\` ne olur? Virgül operatörü ne yapar, pratikte nerede görülür?`, answer: `Virgül operatörü soldan sağa değerlendirir, en sağdaki değeri döner. \`x\` → \`3\`. Pratikte \`for\` içinde \`for (i=0, j=0; ...)\` veya bazen \`return (a, b)\` gibi kullanımlar görülür; okunabilirlik için fazla kullanılmamalı.` },
  { slug: "decr-incr-type", question: `\`let x = '5'; x++; console.log(x);\` ne basar? \`++\` / \`--\` operatörü tipi nasıl etkiler?`, answer: `\`x++\` \`x\`’i number’a çevirir, artırır, sonucu atar. \`x\` → \`6\` (number). \`console.log(x)\` → \`6\`. \`'5' + 1\` string birleştirme yapar, \`'5'++\` sayısal artırma.` },
  { slug: "spread-obj-array", question: `\`{...[]}\` ve \`{...null}\` ne üretir? Obje spread’de \`null\`/ \`undefined\` nasıl davranır?`, answer: `\`{...[]}\` → \`{}\` (dizi enumerable own property’lere sahip değil; indices \`0,1,...\` own değil genelde). \`{...null}\` ve \`{...undefined}\` → \`{}\` (yayılacak obje yok, boş obje). Spread’de \`null\`/\`undefined\` atlanır; hata vermez.` },
  { slug: "proto-object-create", question: `\`Object.create(Object.prototype)\` ile \`{}\` farkı var mı? \`Object.create\` ikinci parametre ne işe yarar?`, answer: `Pratikte \`Object.create(Object.prototype)\` ile \`{}\` aynı prototipe sahip obje üretir. \`Object.create(proto, descriptors)\` ikinci argümanla property descriptor’lar tanımlanabilir; \`Object.defineProperties\` gibi.` },
  { slug: "from-entries", question: `\`Object.fromEntries([['a',1],['b',2]])\` ne döner? \`Object.entries\` ile ters dönüşüm nasıl yapılır?`, answer: `\`Object.fromEntries([['a',1],['b',2]])\` → \`{ a: 1, b: 2 }\`. \`Object.entries(obj)\` → \`[['a',1],['b',2]]\`. \`Map\` → obje: \`Object.fromEntries(map)\`. Obje → \`Map\`: \`new Map(Object.entries(obj))\`.` },
  { slug: "assign-vs-spread-mutate", question: `\`Object.assign(target, src)\` \`target\`’ı değiştirir mi? Spread \`{...a, ...b}\` hedefi mutate eder mi?`, answer: `\`Object.assign(target, src)\` \`target\`’ı mutate eder ve \`target\`’ı döner. \`{...a, ...b}\` yeni obje oluşturur; \`a\` ve \`b\` değişmez. Immutable güncellemeler için spread tercih edilir.` },
  { slug: "seal-freeze-extensions", question: `\`Object.seal\` altında mevcut property’nin \`value\`’su değiştirilebilir mi? \`Object.freeze\` altında?`, answer: `\`seal\`: evet, mevcut property’lerin değeri değiştirilebilir; ekleme/silme yapılamaz. \`freeze\`: hayır, hem ekleme/silme hem mevcut property değerleri değiştirilemez. İkisi de shallow; iç içe objeler mutate edilebilir.` },
  { slug: "number-constructor-call", question: `\`Number('42')\` ile \`new Number('42')\` farkı nedir? \`Number\` constructor \`new\` olmadan nasıl davranır?`, answer: `\`Number('42')\` primitive \`42\` döner (conversion). \`new Number('42')\` \`Number\` instance (object) döner. \`new\` olmadan \`Number\`, \`String\`, \`Boolean\` conversion yapar; \`new\` ile wrapper object oluşturur. Wrapper kullanma.` },
  { slug: "string-raw", question: `\`String.raw\`\`\\n\`\` ne döner? Normal template \`\`\n\`\` ile farkı nedir?`, answer: `\`String.raw\`\`\\n\`\` → \`"\\\\n"\` (backslash + n, escape işlenmez). Normal \`\`\n\`\` → newline. \`String.raw\` regex, path, escape gerektiren string’lerde kullanılır.` },
  { slug: "well-known-symbols", question: `\`Symbol.iterator\`, \`Symbol.toStringTag\` ne işe yarar? “Well-known” Symbol’ler neden önemli?`, answer: `\`Symbol.iterator\` \`for..of\` ve spread’in kullandığı metodu tanımlar. \`Symbol.toStringTag\` \`Object.prototype.toString\` çıktısını özelleştirir. Well-known symbol’ler dil davranışını genişletmek için kullanılır; override edilmez, dokümente edilmiş semantik vardır.` },
  { slug: "parseFloat-vs-Number", question: `\`parseFloat('3.14px')\` ve \`Number('3.14px')\` ne döner? Hangi durumda hangisi kullanılmalı?`, answer: `\`parseFloat('3.14px')\` → \`3.14\` (baştan sayıyı alır). \`Number('3.14px')\` → \`NaN\` (tüm string sayı olmalı). CSS değeri, \`"10px"\` gibi string’lerde \`parseFloat\`; tam sayı string’de \`Number\` veya \`parseInt(_, 10)\`.` },
  { slug: "isInteger-safeInteger", question: `\`Number.isInteger(1.0)\`, \`Number.isInteger(1.1)\`, \`Number.isSafeInteger(2**53)\` ne döner?`, answer: `\`Number.isInteger(1.0)\` → \`true\` (1.0 === 1). \`Number.isInteger(1.1)\` → \`false\`. \`Number.isSafeInteger(2**53)\` → \`false\` (\`2**53\` safe aralık dışında). \`isInteger\` tam sayı kontrolü, \`isSafeInteger\` güvenli tam sayı aralığı kontrolü.` },
  { slug: "undefined-null-loose", question: `\`undefined == null\` ne döner? \`==\` ile \`null\`/\`undefined\` karşılaştırması neden özeldir?`, answer: `\`undefined == null\` → \`true\` (spec’te özel kural). Diğer hiçbir değer \`== null\` ile ikisini birden yakalamaz. \`x == null\` hem \`null\` hem \`undefined\` kontrolü için kullanılır; \`x === null || x === undefined\` ile aynı sonuç.` },
  { slug: "const-iteration", question: `\`for (const k of Object.keys(o)) { }\` geçerli mi? \`const\` \`for...of\` / \`for...in\` ile neden sorun çıkarmaz?`, answer: `Geçerlidir. \`for...of\`/\`for...in\` her iterasyonda yeni binding oluşturur; atama yok, sadece yeni değer atanır. \`const k\` bu yüzden uyumludur. \`for (;;)\` içinde \`i++\` gibi yeniden atama olduğu için \`const\` kullanılamaz.` },
  { slug: "regex-literal-vs-constructor", question: `\`/\\s/\` ile \`new RegExp('\\\\s')\` neden farklı backslash gerektirir?`, answer: `Literal’da \`\\s\` string’de tek \`\\\`; regex motoru \`\\s\` görür. Constructor’a string geçiyorsun; string’de \`\\\\\` iki karakter olarak tek \`\\\` üretir, regex \`\\s\` olur. Dinamik pattern’de \`RegExp\` kullanırken escape katmanı (string vs regex) akılda tutulmalı.` },
  { slug: "obj-to-primitive", question: `\`+{}\` vs \`''+{}\` — obje primitive’e nasıl çevrilir? \`valueOf\` / \`toString\` önceliği ne zaman değişir?`, answer: `\`+{}\` numeric: \`valueOf\` → obje; \`toString\` → \`"[object Object]"\` → \`NaN\`. \`''+{}\` string context: \`toString\` kullanılır → \`"[object Object]"\`. \`valueOf\` primitive dönerse o kullanılır; obje dönerse \`toString\` denenir. \`Symbol.toPrimitive\` varsa o önceliklidir.` },
  { slug: "getter-enumerable", question: `Getter property \`Object.keys\` / \`for..in\` ile listelenir mi? \`enumerable: false\` getter nasıl etkiler?`, answer: `Getter da normal property gibi \`enumerable\` olabilir. \`enumerable: true\` ise \`Object.keys\`, \`for..in\`’de görünür; \`enumerable: false\` ise görünmez. \`Object.getOwnPropertyNames\` enumerable’a bakmadan tüm own property’leri listeler.` },
  { slug: "undefined-vs-not-defined", question: `“\`x\` is not defined” ile “\`x\` is undefined” ayrımı nedir? Hangisi \`ReferenceError\`, hangisi sadece değer?`, answer: `“not defined”: \`ReferenceError\`; \`x\` hiç bildirilmemiş, scope’ta yok. “undefined”: \`x\` bildirilmiş ama değeri \`undefined\`. \`let x;\` tanımlı, \`undefined\`; \`y\` hiç yoksa \`y\` okumak \`ReferenceError\`. \`typeof x\` tanımsız \`x\` için \`ReferenceError\` vermez, \`"undefined"\` döner.` },
  { slug: "symbol-description", question: `\`Symbol('id')\` içindeki \`'id'\` ne işe yarar? \`sym.description\` ile nasıl okunur?`, answer: `Açıklama (description) sadece debug/log için; eşitlik veya erişimde kullanılmaz. \`Symbol('id').description\` → \`'id'\`. \`Symbol.for\` key’i description değildir; global registry key’idir.` },
  { slug: "obj-prop-number-key", question: `\`const o = { 1: 'a', 2: 'b' }; o[1] === o['1']\` ne döner? Number-like key’ler obje için nasıl saklanır?`, answer: `\`true\`. Obje key’leri string veya Symbol’dır; number-like key’ler string’e çevrilir. \`o[1]\` ve \`o['1']\` aynı property’ye erişir. \`Object.keys\` string key’leri döner.` },
  { slug: "nullish-assign", question: `\`??=\` operatörü ne yapar? \`x ??= 1\` ile \`x = x ?? 1\` farkı var mı?`, answer: `\`x ??= 1\` sadece \`x\` \`null\` veya \`undefined\` ise \`x = 1\` atar. \`x = x ?? 1\` ile aynı sonucu verir ama daha kısa. \`||=\` tüm falsy’de atar; \`??=\` sadece nullish’te.` },
  { slug: "optional-chain-call", question: `\`fn?.()\` ne yapar? \`obj.method?.()\` \`obj\` veya \`method\` yoksa ne döner?`, answer: `\`fn?.()\` \`fn\` \`null\`/\`undefined\` ise çağrı yapılmaz, \`undefined\` döner. \`obj.method?.()\` \`obj\` veya \`method\` yoksa \`undefined\`; hata vermez. Callback veya opsiyonel metot çağrılarında güvenli kullanım sağlar.` },
];

module.exports = { questions };
