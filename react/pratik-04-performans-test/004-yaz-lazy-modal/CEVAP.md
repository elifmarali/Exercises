```tsx
const Modal = React.lazy(() => import('./Modal'));
// ...
{show && (
  <Suspense fallback={<p>Yükleniyor...</p>}>
    <Modal onClose={() => setShow(false)} />
  </Suspense>
)}
```