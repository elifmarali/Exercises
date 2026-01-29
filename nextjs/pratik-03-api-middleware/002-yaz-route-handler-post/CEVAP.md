```ts
export async function POST(req: Request) {
  const { name } = await req.json();
  console.log(name);
  return NextResponse.json({ id: 1, name }, { status: 201 });
}
```