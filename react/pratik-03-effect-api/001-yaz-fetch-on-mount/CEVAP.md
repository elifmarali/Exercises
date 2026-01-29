```tsx
const [loading, setLoading] = useState(true);
const [users, setUsers] = useState<User[]>([]);
const [error, setError] = useState<string | null>(null);
useEffect(() => {
  fetch('/api/users')
    .then(r => r.json())
    .then(data => { setUsers(data); setError(null); })
    .catch(e => setError(e.message))
    .finally(() => setLoading(false));
}, []);
if (loading) return <p>Yükleniyor...</p>;
if (error) return <p>Hata: {error}</p>;
return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
```