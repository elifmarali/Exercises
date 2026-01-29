## Symbol keys ve iterasyon

`for..in` ve `Object.keys` Symbol key’leri göstermez. `Object.getOwnPropertySymbols(obj)` sadece Symbol key’leri döner. `Reflect.ownKeys(obj)` hem string hem Symbol key’leri verir.

Symbol’ler çakışmayan, normal enumerable iterasyonda görünmeyen key’ler sağlar; meta veri, internal state veya kütüphane alanları için uygundur.