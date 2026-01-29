```tsx
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log({ name, email });
};
return (
  <form onSubmit={handleSubmit}>
    <input value={name} onChange={e => setName(e.target.value)} />
    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
    <button type="submit">Gönder</button>
  </form>
);
```