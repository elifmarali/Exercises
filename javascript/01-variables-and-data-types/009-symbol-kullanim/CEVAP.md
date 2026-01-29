## Symbol

`Symbol()` her çağrıda benzersiz bir değer üretir; bu yüzden `Symbol() === Symbol()` → `false`.

**`Symbol.for(key)`:** Global registry’den aynı `key` için aynı symbol’i döner; paylaşım için.

**Kullanım:** Gizli / çakışmayan property key’leri (örn. meta veri), well-known symbol’ler (`Symbol.iterator`, `Symbol.toStringTag`), kütüphanede internal alanlar. Enum benzeri sabitler için de kullanılabilir.