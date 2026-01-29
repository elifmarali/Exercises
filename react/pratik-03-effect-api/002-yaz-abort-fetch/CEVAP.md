```tsx
useEffect(() => {
  const c = new AbortController();
  fetch(`/api/user/${id}`, { signal: c.signal })
    .then(r => r.json())
    .then(setUser)
    .catch(e => { if (e.name !== 'AbortError') setError(e); })
    .finally(() => setLoading(false));
  return () => c.abort();
}, [id]);
```