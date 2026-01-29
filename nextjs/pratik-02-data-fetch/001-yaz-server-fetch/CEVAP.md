```tsx
export default async function Page() {
  const res = await fetch('/api/products');
  const products = await res.json();
  return <ul>{products.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
```
 fetch `cache` varsayılan; istenirse `no-store` vb.