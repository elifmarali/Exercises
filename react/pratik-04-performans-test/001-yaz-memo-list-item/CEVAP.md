```tsx
const ListItem = React.memo(function ListItem({ name }: { name: string }) {
  // ağır iş
  return <li>{name}</li>;
});
```
Parent’ta `name` değişmeyen item’lar yeniden render edilmez.