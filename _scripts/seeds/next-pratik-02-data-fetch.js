"use strict";
const questions = [
  {
    slug: "yaz-server-fetch",
    question: `App Router’da \`/products\` sayfası (server component). \`/api/products\`’tan fetch et, listeyi render et. \`async\` page.`,
    answer: `\`\`\`tsx
export default async function Page() {
  const res = await fetch('/api/products');
  const products = await res.json();
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
\`\`\`
 fetch \`cache\` varsayılan; istenirse \`no-store\` vb.`,
  },
  {
    slug: "yaz-revalidate-path",
    question: `Bir Server Action içinde veritabanı güncellemesi yaptıktan sonra \`/products\` sayfasının cache’ini invalidate etmek için ne yazılır?`,
    answer: `\`import { revalidatePath } from 'next/cache';\` → \`revalidatePath('/products');\`. Action sonunda çağır.`,
  },
  {
    slug: "yaz-dynamic-fetch",
    question: `\`cookies()\` veya \`headers()\` kullandığında fetch cache’i etkilenir. Bu route’u tam dynamic yapmak için sayfa dosyasında ne export edilir?`,
    answer: `\`export const dynamic = 'force-dynamic';\` veya \`fetch(..., { cache: 'no-store' })\` kullan.`,
  },
  {
    slug: "yaz-loading-suspense",
    question: `Yavaş bir \`<SlowList>\` server component’i var. Onu \`Suspense\` ile sar, fallback "Liste yükleniyor...".`,
    answer: `\`<Suspense fallback={<p>Liste yükleniyor...</p>}><SlowList /></Suspense>\`.`,
  },
  {
    slug: "yaz-generate-static-params",
    question: `\`/posts/[id]\` için build’de \`id: 1,2,3\` üretmek istiyorsun. \`generateStaticParams\` nasıl yazılır?`,
    answer: `\`\`\`ts
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
\`\`\`
veya API’den çekip \`{ id: string }[]\` dön.`,
  },
  {
    slug: "yaz-revalidate-time",
    question: `\`fetch\` ile 60 saniye revalidate (ISR) nasıl yapılır?`,
    answer: `\`fetch(url, { next: { revalidate: 60 } })\` veya \`export const revalidate = 60;\` (segment).`,
  },
  {
    slug: "yaz-mutate-then-revalidate",
    question: `Server Action’da \`POST /api/products\` ile ürün ekledikten sonra \`/products\` listesini güncellemek için ne yaparsın?`,
    answer: `\`revalidatePath('/products')\` veya ilgili tag kullanıyorsan \`revalidateTag('products')\`. Action içinde mutation sonrası çağır.`,
  },
  {
    slug: "yaz-streaming-delay",
    question: `İki parça veri var: biri hemen, biri \`await new Promise(r=>setTimeout(r,2000))\` ile gecikmeli. İkisini aynı sayfada kullan; yavaş kısmı \`Suspense\` ile sar. Kodu kısaca yaz.`,
    answer: `Hızlı veriyi doğrudan render et. Yavaş kısmı ayrı async component yap, \`Suspense\` ile sar; fallback göster, 2 sn sonra asıl içerik gelir.`,
  },
  {
    slug: "yaz-fetch-cache-no-store",
    question: `Her istekte taze veri çekmek için \`fetch\` seçenekleri ne olmalı?`,
    answer: `\`fetch(url, { cache: 'no-store' })\` veya \`export const dynamic = 'force-dynamic';\` ile segment’i dynamic yap.`,
  },
  {
    slug: "yaz-tag-revalidate",
    question: `\`fetch(..., { next: { tags: ['products'] } })\` kullanıyorsun. Bu tag’e bağlı cache’i invalidate etmek için ne çağrılır?`,
    answer: `\`revalidateTag('products')\`. Server Action veya Route Handler’da.`,
  },
];
module.exports = { questions };
