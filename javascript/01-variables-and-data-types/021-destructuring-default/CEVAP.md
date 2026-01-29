## Default ve destructuring

Default, property `undefined` ise uygulanır; `null` veya `0` için uygulanmaz.

- `const { x = 1 } = {}` → `x === 1`.
- `const { x = 1 } = { x: null }` → `x === null`.
- `const { x = 1 } = { x: 0 }` → `x === 0`.

**Pratik:** “Eksik” ile “bilinçli null/0” ayrımı için `undefined` = default, `null` = kasıtlı yok kullan. Nullish coalescing (`??`) ile `null`/`undefined` ikisinde de default vermek istersen `const { x } = o; const val = x ?? 1;` gibi kullan.