```tsx
const [selected, setSelected] = useState<string[]>([]);
const toggle = (id: string) => {
  setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
};
return (
  <>
    {options.map(o => (
      <label key={o.id}>
        <input type="checkbox" checked={selected.includes(o.id)} onChange={() => toggle(o.id)} />
        {o.label}
      </label>
    ))}
  </>
);
```