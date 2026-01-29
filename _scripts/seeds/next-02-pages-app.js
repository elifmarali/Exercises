"use strict";
const questions = [
  { slug: "app-layout", question: "App Router’da `layout.tsx` ne işe yapar? `page` ile farkı?", answer: "Layout ortak UI (nav, footer); child route’ları wrap’ler. Page route’a özel içerik. Layout remount olmaz, state korunur." },
  { slug: "loading-ui", question: "`loading.tsx` ne zaman gösterilir? Streaming ile ilişkisi?", answer: "Route segment yüklenirken otomatik Suspense boundary. Streaming: yavaş kısım gelene kadar loading gösterilir." },
  { slug: "error-boundary-app", question: "App Router’da hata yakalama nasıl yapılır? `error.tsx`?", answer: "error.tsx route segment’te hata yakalar; try/catch gibi. Client component olmalı. Reset ile tekrar dene." },
  { slug: "not-found", question: "`not-found` nasıl tetiklenir? `notFound()` nerede kullanılır?", answer: "notFound() import’u ile 404 UI gösterilir. Örn. get** ile veri yoksa notFound() çağrılır." },
  { slug: "route-groups", question: "Route groups `(folder)` ne işe yarar? URL’i etkiler mi?", answer: "URL’e dahil olmaz. Organizasyon için; (marketing), (dashboard) gibi. Aynı layout’u paylaşan gruplar." },
  { slug: "parallel-routes", question: "Parallel routes (@slot) nedir? Nasıl kullanılır?", answer: "Aynı layout’ta aynı anda birden fazla sayfa slot’u. @slot klasörleri. Modal + liste gibi senaryolar." },
  { slug: "intercepting", question: "Intercepting routes `(.)` `(..)` ne yapar?", answer: "Soft nav’da farklı UI (örn. modal); hard nav’da normal sayfa. Segmente göre relative path." },
  { slug: "default-tsx", question: "`default.tsx` parallel route’ta ne işe yarar?", answer: "Slot için eşleşme yoksa (örn. ilk yükleme) fallback UI. 404 yerine default gösterilir." },
  { slug: "template-vs-layout", question: "`template` vs `layout` farkı?", answer: "Layout state korur, remount olmaz. Template her nav’da remount. Animasyon veya her seferinde çalışacak mantık için template." },
  { slug: "page-types", question: "`page.tsx` ve `route.ts` aynı segment’te olabilir mi?", answer: "page UI, route API (GET/POST vb.). Farklı dosyalar; birlikte kullanılabilir." },
];
module.exports = { questions };
