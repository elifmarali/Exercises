"use strict";
const questions = [
  { slug: "ssr-vs-ssg", question: "SSR vs SSG farkı? Ne zaman hangisi?", answer: "SSR: her istekte server render. SSG: build’de üretilir, statik. Güncel + kişisel → SSR. Hız + cache → SSG." },
  { slug: "isr-basics", question: "ISR (Incremental Static Regeneration) nedir?", answer: "SSG + periyodik revalidate. revalidate süresi sonra arka planda yeniden üretim. Eski sayfa sunulur, sonra güncel." },
  { slug: "dynamic-render-force", question: "Force dynamic ne zaman gerekir?", answer: "Cookie, headers, searchParams kullanıyorsan. Bu segment dynamic; cache’lenmez." },
  { slug: "generate-static-params", question: "`generateStaticParams` ne işe yarar? Dynamic route’ta?", answer: "Build’de üretilecek path’leri verir. [id] için id listesi. SSG’de hangi sayfaların static olacağı." },
  { slug: "streaming-benefit", question: "Streaming (Suspense) ne kazandırır?", answer: "Yavaş kısım beklenmez; önce hızlı UI, sonra stream. TTI, LCP iyileşir." },
  { slug: "prerender-vs-dynamic", question: "Prerender vs dynamic segment nasıl seçilir?", answer: "Veri sabit veya revalidate yeterli → prerender. Her istek farklı, real-time → dynamic." },
  { slug: "partial-prerender", question: "Partial Prerendering (PPR) nedir?", answer: "Static shell + dynamic hole’lar. Bazı kısımlar static, bazıları stream. Deneysel." },
  { slug: "cache-no-store", question: "`fetch` cache: 'no-store' ne yapar?", answer: "Cache’leme yok; her seferinde fresh fetch. Dynamic data için." },
  { slug: "revalidate-time", question: "`revalidate = 60` tam olarak ne yapar?", answer: "60 saniye sonra revalidate; önce stale sunulur, arka planda yeniden fetch + render." },
  { slug: "on-demand-revalidate", question: "On-demand revalidation nasıl tetiklenir?", answer: "revalidatePath veya revalidateTag. Webhook, Server Action sonrası. İlgili cache hedeflenir." },
];
module.exports = { questions };
