```tsx
function Button({ label, variant = 'primary' }: { label: string; variant?: 'primary' | 'secondary' }) {
  const cls = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  return <button className={cls}>{label}</button>;
}
```