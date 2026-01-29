## BigInt

`Number` ile güvenli tam sayı aralığı `±(2^53 - 1)` (`Number.MAX_SAFE_INTEGER`). Bunun ötesinde precision kaybı olur.

`BigInt` ile sınırsız tam sayı (bellek izin verdiği ölçüde) temsil edilir. Literal: `42n`.

**Karışık tip:** `1n + 2` `TypeError`; önce `Number(1n)` veya `BigInt(2)` ile aynı tipe çevir. `BigInt` `Math` ile kullanılamaz; `/` truncate eder.

**Dikkat:** JSON serileştirme desteklemez; string’e çevirip öyle sakla/ilet.