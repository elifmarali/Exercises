```tsx
const handleClick = useCallback(() => { /* ... */ }, []); // veya [dep1, dep2]
return <Child onClick={handleClick} />;
```
Child memo ise referans aynı kalınca re-render olmaz.