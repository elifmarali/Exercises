"use strict";
const questions = [
  { slug: "module-pattern", question: "Module pattern nedir? Closure ile private state nasıl sağlanır?", answer: "IIFE veya modül ile dışa kapalı state; sadece export edilenler erişilebilir. Closure sayesinde “private” değişkenler korunur." },
  { slug: "singleton", question: "Singleton pattern nedir? JS’te basit singleton nasıl uygulanır?", answer: "Tek instance. Modül zaten tek yüklenir; export edilen obje singleton gibi kullanılabilir. Class ile instance kontrolü de yapılabilir." },
  { slug: "factory", question: "Factory pattern ne işe yarar? Constructor yerine factory fonksiyon ne zaman tercih edilir?", answer: "Nesne oluşturmayı sarmalayan fonksiyon; tip, config’e göre farklı obje dönebilir. `new`’den kaçınmak veya karmaşık kurulum için kullanılır." },
  { slug: "observer-pubsub", question: "Observer / pub-sub pattern nedir? Event emitter nasıl örnek olur?", answer: "Yayıncı olay yayınlar; aboneler dinler. `EventEmitter` benzeri subscribe/emit yapısı; loosely coupled iletişim sağlar." },
  { slug: "callback-vs-promise", question: "Callback tabanlı API ile Promise tabanlı API farkı? Pattern açısından ne değişir?", answer: "Callback: sonuç veya hata fonksiyona verilir. Promise: then/catch veya async/await; zincirleme ve hata yönetimi daha düzenli." },
  { slug: "memoization", question: "Memoization nedir? Pahalı fonksiyon sonuçları nasıl cache’lenir?", answer: "Aynı girdi için önceki sonucu saklama. Closure + Map/Object ile cache; girdi anahtar, çıktı saklanır. Pure fonksiyonlarda güvenle kullanılır." },
  { slug: "decorator-mixin", question: "Decorator veya mixin pattern nedir? Davranışı nesneye “ekleme” nasıl yapılır?", answer: "Mixin: birden fazla kaynaktan özellik kopyalama veya birleştirme. Decorator: mevcut nesneyi sarmalayıp davranış ekleme. Object.assign, composition." },
  { slug: "revealing-module", question: "Revealing module pattern nedir? “Reveal” edilenler ne anlama gelir?", answer: "Private fonksiyonlar closure’da; sadece seçilenler döndürülür (reveal). Public API minimal ve net kalır." },
  { slug: "strategy-pattern", question: "Strategy pattern nedir? Algoritma seçimini runtime’da değiştirmek nasıl yapılır?", answer: "Farklı stratejiler (fonksiyon/obje) aynı arayüzle kullanılır; çağıran hangisini kullanacağını seçer. Polymorphism benzeri esneklik." },
  { slug: "constructor-vs-factory", question: "`new` ile constructor vs factory kullanımı: artı ve eksileri neler?", answer: "Constructor: `instanceof`, `new` zorunluluğu. Factory: `new` yok, farklı tipler dönebilir, encapsulation kolay. Tercih projeye ve takım convention’ına göre." },
];
module.exports = { questions };
