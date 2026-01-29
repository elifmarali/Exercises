```tsx
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <div>{id}</div>;
}
```
(next sürümüne göre `params` bazen doğrudan obje; doc’a bak.)