```tsx
useEffect(() => {
  const t = setInterval(() => console.log('tick'), 1000);
  return () => clearInterval(t);
}, []);
```