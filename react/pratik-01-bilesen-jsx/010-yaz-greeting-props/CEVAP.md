```tsx
function Greeting({ name }: { name?: string }) {
  return <p>Merhaba, {name ?? 'misafir'}!</p>;
}
```