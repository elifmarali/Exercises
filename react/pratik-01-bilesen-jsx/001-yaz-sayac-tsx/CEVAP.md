```tsx
function Counter() {
  const [n, setN] = useState<number>(0);
  return (
    <div>
      <span>{n}</span>
      <button onClick={() => setN(c => c + 1)}>Artır</button>
      <button onClick={() => setN(c => c - 1)}>Azalt</button>
    </div>
  );
}
```