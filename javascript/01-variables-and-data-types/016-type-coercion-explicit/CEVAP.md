## Conversion seçimi

- `Number('12px')` → `NaN` (tüm string sayı olmalı).
- `parseInt('12px', 10)` → `12` (baştan sayıyı alır, durur).
- `parseFloat` ondalık için benzer.

**Kullanım:** Tam string sayıysa `Number()`; “başında sayı var” (örn. `'12px'`) ise `parseInt`/`parseFloat`. Her zaman `parseInt(..., 10)` ile radix belirt. Validation + conversion birlikte yap; `NaN` kontrolü unutma.