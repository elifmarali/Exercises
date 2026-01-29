```tsx
function ItemList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
```
Gerçek projede `key` için id kullan; burada sadece `item` yeterli.