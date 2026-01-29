"use strict";
const questions = [
  { slug: "css-modules", question: "CSS Modules Next’te nasıl kullanılır? Dosya adı?", answer: "*.module.css import; class’lar unique. Component-scoped. Import alanı otomatik." },
  { slug: "global-css", question: "Global CSS nereye import edilir? App Router’da?", answer: "app/layout.tsx veya _app (Pages). Bir kez, root layout. Global stiller burada." },
  { slug: "tailwind-next", question: "Next.js’te Tailwind nasıl kurulur? Özel config?", answer: "tailwind.config, postcss. content: app, components path’leri. Theme extend vb. config’te." },
  { slug: "sass-support", question: "Sass/SCSS kullanımı? `.module.scss`?", answer: "sass yüklü; .scss import. .module.scss CSS Modules gibi. Global veya module." },
  { slug: "css-in-js", question: "styled-components / Emotion Next’te nasıl kullanılır? SSR?", answer: "Registry (styled-components) veya emotion cache; _document / layout’ta. SSR uyumlu kurulum gerekir." },
  { slug: "next-font", question: "`next/font` ne sağlar? Google font optimization?", answer: "Font’ları self-host eder; layout shift azalır. next/font/google vb. className ile uygulanır." },
  { slug: "image-src", question: "`next/image` için external `src` nasıl izin verilir?", answer: "next.config images.domains veya remotePatterns. Güvenlik için sadece gerekli domain’ler." },
  { slug: "static-assets", question: "Static dosyalar (img, font) nereye konur? `public`?", answer: "public/ kökünden serve edilir. /file.png → public/file.png. Referans / ile başlar." },
  { slug: "layout-shift", question: "Font ve image ile layout shift nasıl önlenir?", answer: "next/font, next/image size/fill. Placeholder, skeleton. Önceden boyut belirleme." },
  { slug: "dark-mode", question: "Dark mode Next’te nasıl uygulanır? Class vs media?", answer: "Class: html class toggle, CSS .dark. Media: prefers-color-scheme. next-themes gibi lib ile persist + toggle." },
];
module.exports = { questions };
