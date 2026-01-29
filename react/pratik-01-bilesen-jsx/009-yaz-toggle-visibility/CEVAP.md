```tsx
const [visible, setVisible] = useState(true);
return (
  <>
    <button onClick={() => setVisible(v => !v)}>Toggle</button>
    {visible && <p>Görünür</p>}
  </>
);
```