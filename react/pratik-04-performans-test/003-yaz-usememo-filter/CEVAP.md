```tsx
const filtered = useMemo(
  () => items.filter(i => i.includes(query)),
  [items, query]
);
```