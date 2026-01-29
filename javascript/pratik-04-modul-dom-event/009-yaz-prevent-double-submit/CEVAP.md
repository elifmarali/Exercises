```js
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  if (btn.disabled) return;
  btn.disabled = true;
  try {
    await fetch(form.action, { method: 'POST', body: new FormData(form) });
    // ...
  } finally {
    btn.disabled = false;
  }
});
```

Form native submit kullanıyorsa `submit` içinde `btn.disabled = true` yeterli; sayfa yenilenirse form tekrar gönderilmez.