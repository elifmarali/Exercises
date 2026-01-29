"use strict";
const questions = [
  { slug: "fetch-cache", question: "Next App Router’da `fetch` varsayılan olarak nasıl cache’lenir?", answer: "fetch otomatik cache’lenir (GET). cache: 'force-cache' (default), 'no-store' ile kapatılır. React cache + fetch beraber kullanılır." },
  { slug: "revalidate", question: "`revalidate` ve `revalidatePath` / `revalidateTag` ne yapar?", answer: "ISR: belirli süre sonra yeniden validate. revalidatePath/tag ile on-demand invalidation. Cache’i hedefli yenilemek için." },
  { slug: "server-vs-client-fetch", question: "Server vs client component’te fetch farkı?", answer: "Server: component render’da fetch; gizli bilgi, SEO. Client: useEffect, SWR vb.; interactivity sonrası." },
  { slug: "async-server-component", question: "Server component async olabilir mi? `async function Page()`?", answer: "Evet. await fetch vb. doğrudan component’te. Client component async olamaz." },
  { slug: "dynamic-render", question: "`dynamic = 'force-dynamic'` ne işe yarar?", answer: "Segment’i dynamic yapar; cache’leme yapılmaz, her istekte yeniden render. Cookie, searchParams kullanıyorsan gerekebilir." },
  { slug: "streaming-suspense", question: "Streaming ve Suspense App Router’da nasıl kullanılır?", answer: "Yavaş parça Suspense ile sarılır; önce hızlı kısım, sonra yavaş stream’lenir. loading.tsx de benzer mantık." },
  { slug: "cache-lifecycle", question: "Request memoization, Data Cache, Full Route Cache farkı?", answer: "Request memo: aynı request’te tek fetch. Data Cache: fetch sonuçları. Full Route: render çıktısı. Hepsi farklı katman." },
  { slug: "getstaticprops-equivalent", question: "Pages’taki getStaticProps App Router’da karşılığı nedir?", answer: "Server component’te fetch; default cache. getStaticPaths → generateStaticParams." },
  { slug: "getserversideprops-equivalent", question: "getServerSideProps karşılığı App Router’da?", answer: "Dynamic segment + fetch cache: 'no-store' veya cookies/headers kullanımı. Her istekte server render." },
  { slug: "mutate-cache", question: "Server Action veya Route Handler’dan cache nasıl invalidate edilir?", answer: "revalidatePath veya revalidateTag. Mutation sonrası ilgili path/tag ile cache yenilenir." },
];
module.exports = { questions };
