## Farklar

- **`undefined`:** Değişken tanımlı ama değer atanmamış; fonksiyon `return` etmezse dönen değer; eksik parametre.
- **`null`:** Bilinçli “değer yok” ifadesi.

`typeof null` → `"object"` (tarihsel bug). `typeof undefined` → `"undefined"`.

`null == undefined` → `true` (abstract equality). `null === undefined` → `false`.

**Pratik:** Kasıtlı “yok” için `null`, atanmamışlık için `undefined` kullan. API’lerde tutarlı ol; örn. hep `null` veya hep `undefined` dön. Optional chaining (`?. `) ve nullish coalescing (`??`) ile güvenli erişim ve varsayılan değer kullan.