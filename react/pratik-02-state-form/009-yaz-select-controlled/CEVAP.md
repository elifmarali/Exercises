```tsx
const [city, setCity] = useState('');
return (
  <select value={city} onChange={e => setCity(e.target.value)}>
    <option value="">Seçin</option>
    {options.map(c => <option key={c} value={c}>{c}</option>)}
  </select>
);
```