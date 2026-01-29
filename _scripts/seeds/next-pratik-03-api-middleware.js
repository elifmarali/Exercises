"use strict";
const questions = [
  {
    slug: "yaz-route-handler-get",
    question: `\`app/api/hello/route.ts\` içinde \`GET\` isteğine \`{ "message": "hi" }\` JSON dönen handler yaz.`,
    answer: `\`\`\`ts
import { NextResponse } from 'next/server';
export async function GET() {
  return NextResponse.json({ message: 'hi' });
}
\`\`\``,
  },
  {
    slug: "yaz-route-handler-post",
    question: `\`app/api/users/route.ts\`: \`POST\` body \`{ name: string }\` alsın, \`name\`’i loglayıp \`201\` ve \`{ id: 1, name }\` dönsün.`,
    answer: `\`\`\`ts
export async function POST(req: Request) {
  const { name } = await req.json();
  console.log(name);
  return NextResponse.json({ id: 1, name }, { status: 201 });
}
\`\`\``,
  },
  {
    slug: "yaz-server-action",
    question: `"use server" ile \`createPost(formData: FormData)\` action yaz. \`title\` ve \`body\` alanlarını alıp loglasın; sonra \`revalidatePath('/posts')\` çağır.`,
    answer: `\`\`\`ts
'use server';
import { revalidatePath } from 'next/cache';
export async function createPost(formData: FormData) {
  const title = formData.get('title'); const body = formData.get('body');
  console.log({ title, body });
  revalidatePath('/posts');
}
\`\`\``,
  },
  {
    slug: "yaz-form-action",
    question: `Bir \`<form>\` Server Action ile submit edilsin. \`action={submitFn}\`, \`name\` ile input’lar. \`submitFn\` \`FormData\` alsın.`,
    answer: `\`<form action={submitFn}><input name="name" /><button type="submit">Gönder</button></form>\`. \`submitFn\` \`formData.get('name')\` ile okur.`,
  },
  {
    slug: "yaz-middleware-auth",
    question: `Middleware’de \`/dashboard\` için basit auth: \`request.cookies.get('session')\` yoksa \`/login\`’e redirect. \`NextResponse.redirect\` kullan.`,
    answer: `\`matcher\` \`/dashboard.*\`. İçerde \`const session = request.cookies.get('session'); if (!session) return NextResponse.redirect(new URL('/login', request.url)); return NextResponse.next();\`.`,
  },
  {
    slug: "yaz-edge-runtime",
    question: `Route Handler’ı Edge’de çalıştırmak için ne export edilir?`,
    answer: `\`export const runtime = 'edge';\`.`,
  },
  {
    slug: "yaz-handler-params",
    question: `\`app/api/users/[id]/route.ts\` içinde \`id\`’i alıp \`GET\` yanıtında \`{ id }\` döndür. \`params\` kullan.`,
    answer: `\`export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) { const { id } = await params; return NextResponse.json({ id }); }\`.`,
  },
  {
    slug: "yaz-middleware-matcher",
    question: `Middleware sadece \`/api/\` ve \`/dashboard/\` path’lerinde çalışsın. \`config.matcher\` nasıl yazılır?`,
    answer: `\`export const config = { matcher: ['/api/:path*', '/dashboard/:path*'] };\` veya \`['/api/(.*)', '/dashboard/(.*)']\`.`,
  },
  {
    slug: "yaz-action-error",
    question: `Server Action içinde hata olunca kullanıcıya "İşlem başarısız" döndürmek için ne yapılır? \`try/catch\` + nasıl geri iletirsin?`,
    answer: `\`try { ... } catch (e) { return { error: 'İşlem başarısız' }; }\`. Form’da \`useActionState\` vb. ile \`result.error\` gösterilir.`,
  },
  {
    slug: "yaz-post-validation",
    question: `Route Handler \`POST\`’ta body’de \`email\` bekliyor. Yoksa veya format yanlışsa \`400\` dönsün. Basit \`@\` kontrolü yeterli.`,
    answer: `\`const { email } = await req.json(); if (!email || !String(email).includes('@')) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });\` sonra devam et.`,
  },
];
module.exports = { questions };
