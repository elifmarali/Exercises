"use strict";
const questions = [
  { slug: "next-ts-setup", question: "Next.js’te TypeScript nasıl etkinleştirilir?", answer: "tsconfig.json (next izin verir), .ts/.tsx dosyalar. next-env.d.ts. Gerekirse strict ayarları." },
  { slug: "params-searchparams-types", question: "`params` ve `searchParams` tipi nasıl verilir?", answer: "Promise<{ id: string }> (App Router). searchParams Promise<{ [k]: string }>. Doc’a göre güncel." },
  { slug: "metadata-type", question: "`metadata` / `generateMetadata` tipi?", answer: "Metadata objesi veya generateMetadata async fn. Tipler next’ten; title, description vb." },
  { slug: "server-component-types", question: "Server component’te async ve fetch tipleri?", answer: "async fn component. fetch Response generic veya zod vb. ile parse. Standart TS." },
  { slug: "route-handler-types", question: "Route Handler request/response tipleri?", answer: "NextRequest, NextResponse. Standart Web API Request/Response uyumlu." },
  { slug: "env-types", question: "Env değişkenleri TypeScript’te nasıl tiplenir?", answer: "process.env.NEXT_PUBLIC_* kullanımı. @types/node. Gerekirse env.d.ts ile genişletme." },
  { slug: "layout-props", question: "`layout` ve `page` prop tipleri? Children?", answer: "Layout: { children: React.ReactNode }. Page: params, searchParams (Promise)." },
  { slug: "dynamic-route-types", question: "`[slug]` gibi dynamic segment tipleri?", answer: "params.slug string (veya string[] catch-all). generateStaticParams ile uyumlu tipler." },
  { slug: "next-config-ts", question: "`next.config.ts` kullanımı? Tip güvenliği?", answer: "next.config.ts; NextConfig tipi. typecheck build’e dahil edilebilir." },
  { slug: "strict-mode-ts", question: "Next + TypeScript strict mode önerilir mi?", answer: "Evet. strict null check vb. erken hata yakalar. Proje büyüdükçe geçiş zor." },
];
module.exports = { questions };
