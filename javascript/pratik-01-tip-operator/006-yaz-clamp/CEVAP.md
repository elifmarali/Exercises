```js
function clamp(n, min, max) {
  if (typeof n !== 'number' || Number.isNaN(n)) return NaN;
  if (min > max) return NaN; // veya min
  if (n < min) return min;
  if (n > max) return max;
  return n;
}
```

Kısa: `Math.min(max, Math.max(min, n))` (NaN / min>max kontrolü yok).