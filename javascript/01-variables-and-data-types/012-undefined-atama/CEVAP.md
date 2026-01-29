## undefined atama

`let x = undefined` yazınca “atanmamış” ile “bilinçli undefined” ayırt edilemez. Bu da debug ve API sözleşmesi için belirsizlik yaratır.

**Pratik:** “Değer yok” için kasıtlı kullanımda `null` tercih et; `undefined`’ı sadece gerçekten atanmamışlık için bırak. Optional chaining ve nullish coalescing (`??`) ile `null`/`undefined` ikisini de güvenle ele al.