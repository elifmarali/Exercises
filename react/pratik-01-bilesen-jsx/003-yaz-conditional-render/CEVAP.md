```tsx
function Status({ status }: { status: 'idle' | 'loading' | 'error' }) {
  if (status === 'idle') return <span>Hazır</span>;
  if (status === 'loading') return <span>Yükleniyor...</span>;
  return <span>Hata</span>;
}
```
Veya `status === 'loading' ? 'Yükleniyor...' : status === 'error' ? 'Hata' : 'Hazır'` ile tek JSX.