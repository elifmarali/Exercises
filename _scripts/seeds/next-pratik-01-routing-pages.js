"use strict";
const questions = [
  {
    slug: "yaz-link-dinamik",
    question: `App Router’da \`/users/[id]\` sayfasına giden \`<Link>\` nasıl yazılır? \`id\` değişkenden geliyor.`,
    answer: `\`<Link href={\`/users/\${id}\`}>...</Link>\` veya \`<Link href={\`/users/\${user.id}\`}>...</Link>\`.`,
  },
  {
    slug: "yaz-dynamic-params",
    question: `\`app/users/[id]/page.tsx\` içinde \`id\`’i nasıl alırsın? (App Router, async sayfa.)`,
    answer: `\`\`\`tsx
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>{id}</div>;
}
\`\`\`
(next sürümüne göre \`params\` bazen doğrudan obje; doc’a bak.)`,
  },
  {
    slug: "yaz-layout-nested",
    question: `\`app/dashboard/layout.tsx\` ve \`app/dashboard/page.tsx\` olsun. Layout’ta ortak \`<nav>\`, sayfada \`<h1>Dashboard</h1>\`. Yapıyı kısaca yaz.`,
    answer: `Layout: \`<nav>...</nav><main>{children}</main>\`. Page: \`<h1>Dashboard</h1>\`. \`/dashboard\` açılınca layout sarar, \`children\` yerine page render olur.`,
  },
  {
    slug: "yaz-loading-route",
    question: `\`/products\` yüklenirken "Yükleniyor..." göstermek için hangi dosyayı ekleyip ne yazarsın?`,
    answer: `\`app/products/loading.tsx\` oluştur: \`export default function Loading() { return <p>Yükleniyor...</p>; }\`.`,
  },
  {
    slug: "yaz-not-found",
    question: `\`/users/[id]\` sayfasında kullanıcı yoksa 404 göstermek için ne yaparsın? \`notFound()\` kullan.`,
    answer: `\`import { notFound } from 'next/navigation';\` + fetch sonrası \`if (!user) notFound();\`. \`app/not-found.tsx\` varsa onu kullanır.`,
  },
  {
    slug: "yaz-searchparams",
    question: `\`/search?q=foo\` sayfasında \`q\` parametresini okuyup ekranda göster. App Router \`page.tsx\`; \`searchParams\` kullan.`,
    answer: `\`const sp = await searchParams;\` (\`searchParams\` Promise). \`const q = sp.get('q') ?? '';\` → \`<div>Aranan: {q}</div>\`.`,
  },
  {
    slug: "yaz-middleware-redirect",
    question: `Middleware ile \`/admin\` isteğini \`/login\`’e yönlendir. \`next.config\` kullanmadan; \`middleware.ts\` ile.`,
    answer: `\`matcher\` \`/admin.*\`, içerde cookie vs. yoksa \`NextResponse.redirect(new URL('/login', req.url))\` dön.`,
  },
  {
    slug: "yaz-image-external",
    question: `\`next/image\` ile \`https://example.com/logo.png\` göstermek için \`next.config\`’te ne eklenmeli?`,
    answer: `\`images: { remotePatterns: [{ protocol: 'https', hostname: 'example.com', pathname: '/**' }] }\` veya \`domains: ['example.com']\` (eski).`,
  },
  {
    slug: "yaz-metadata-export",
    question: `Sayfa için \`<title>\` ve \`<meta name="description">\` vermek üzere \`metadata\` export’unu yaz.`,
    answer: `\`\`\`ts
export const metadata = { title: 'Sayfa Başlığı', description: 'Açıklama metni' };
\`\`\``,
  },
  {
    slug: "yaz-client-nav-link",
    question: `Client component’te \`useRouter\` ile programatik yönlendirme nasıl yapılır? \`/dashboard\`’a git.`,
    answer: `\`const router = useRouter();\` → \`router.push('/dashboard');\`. \`'use client'\` gerekli.`,
  },
];
module.exports = { questions };
