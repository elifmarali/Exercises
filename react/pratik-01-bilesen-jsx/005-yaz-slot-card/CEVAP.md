```tsx
function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <strong>{title}</strong>
      <div>{children}</div>
    </div>
  );
}
```