"use strict";
const questions = [
  { slug: "jest-next", question: "Next.js’te Jest nasıl kurulur? jest.config?", answer: "jest, jest-environment-jsdom. next/jest config. TypeScript, path alias." },
  { slug: "rtl-next", question: "React Testing Library Next ile nasıl kullanılır?", answer: "Standart RTL. Custom render ile Router, Theme wrapper. App Router’da server component mocking." },
  { slug: "mock-next-router", question: "`useRouter`, `usePathname` nasıl mock’lanır?", answer: "jest.mock('next/navigation', () => ({ useRouter: () => ({...}), usePathname: () => '/' }))." },
  { slug: "mock-next-image", question: "`next/image` testte nasıl mock’lanır?", answer: "jest.mock('next/image', () => ({ __esModule: true, default: (props) => <img {...props} /> }))." },
  { slug: "server-component-test", question: "Server component nasıl test edilir?", answer: "Async render, fetch mock. Node ortamında; RTL ile render async component." },
  { slug: "e2e-playwright", question: "E2E için Playwright Next ile nasıl kullanılır?", answer: "Playwright config, baseURL next dev. Sayfa objeleri, auth fixture. next dev ile koşulur." },
  { slug: "api-route-test", question: "API route / Route Handler nasıl test edilir?", answer: "Request simüle et; fetch veya node fetch. Status, body assert. Mock DB/service." },
  { slug: "mock-env", question: "Testte env değişkenleri nasıl override edilir?", answer: "jest.setup’ta process.env. .env.test. Her test öncesi gerekirse assign." },
  { slug: "snapshot-next", question: "Snapshot test Next’te önerilir mi?", answer: "Dikkatli kullan; UI sık değişince gürültü. Kritik layout için. Genelde RTL ile davranış testi tercih edilir." },
  { slug: "ci-next-test", question: "CI’da Next testleri nasıl koşulur?", answer: "next build && jest. Env (NEXT_PUBLIC_ test değerleri). Cache jest, next." },
];
module.exports = { questions };
