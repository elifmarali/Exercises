```tsx
const [value, setValue] = useState('');
return (
  <>
    <input value={value} onChange={e => setValue(e.target.value)} />
    <p>{value}</p>
  </>
);
```