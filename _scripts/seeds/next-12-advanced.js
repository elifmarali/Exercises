"use strict";
const questions = [
  { slug: "instrumentation", question: "`instrumentation.ts` ne işe yarar?", answer: "Server ve edge startup’ta bir kez çalışır. Tracing, global setup. next config ile açılır." },
  { slug: "turbopack", question: "Turbopack nedir? `next dev --turbo`?", answer: "Yeni dev bundler (Rust). Daha hızlı HMR. next dev --turbo ile deneysel." },
  { slug: "middleware-edge", question: "Middleware neden Edge’de çalışır? Avantajları?", answer: "Hız, global dağıtım. Auth, redirect, A/B. Node API kısıtlı." },
  { slug: "server-actions-progressive", question: "Server Actions “progressive enhancement” nasıl?", answer: "JS yokken form submit çalışır. action + formBehavior. Fallback." },
  { slug: "parallel-data", question: "Paralel data fetching App Router’da nasıl yapılır?", answer: "Aynı component’te birden fazla await; Promise.all değil, doğrudan await. React otomatik parallelize eder." },
  { slug: "route-handlers-multiple", question: "Aynı route’ta GET ve POST birlikte nasıl kullanılır?", answer: "route.ts’te export GET, export POST. Method’a göre ayrılır." },
  { slug: "experimental-features", question: "Deneysel özellikler (PPR, etc.) nasıl açılır?", answer: "next.config experimental: { ppr: true, ... }. Sürüm ve stabilite kontrolü." },
  { slug: "monorepo-next", question: "Monorepo’da Next (Turborepo, etc.) nasıl yapılandırılır?", answer: "Apps/packages. Workspace, next root. Shared config, build order." },
  { slug: "i18n-routing", question: "Next’te i18n routing (locale) nasıl yapılır?", answer: "next-intl, middleware’de locale. App Router’da [locale] segment. Mesajlar, format." },
  { slug: "plugin-next", question: "Next.js plugin nasıl yazılır? Config wrap?", answer: "withX(nextConfig) => ({ ...nextConfig, ... }). Webpack, redirect, env ekleme." },
];
module.exports = { questions };
