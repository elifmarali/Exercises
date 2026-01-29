```tsx
const [user, setUser] = useState({ name: '', age: 0 });
return (
  <>
    <input value={user.name} onChange={e => setUser(u => ({ ...u, name: e.target.value }))} />
    <input type="number" value={user.age} onChange={e => setUser(u => ({ ...u, age: +e.target.value }))} />
  </>
);
```