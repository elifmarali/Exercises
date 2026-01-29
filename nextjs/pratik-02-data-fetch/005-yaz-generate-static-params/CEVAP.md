```ts
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}
```
veya API’den çekip `{ id: string }[]` dön.