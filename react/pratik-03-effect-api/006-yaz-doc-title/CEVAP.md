```tsx
useEffect(() => {
  const prev = document.title;
  document.title = title;
  return () => { document.title = prev; };
}, [title]);
```