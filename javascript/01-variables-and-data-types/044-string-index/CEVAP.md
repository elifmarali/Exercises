## String indeks ve immutability

String’ler immutable’dır; `'abc'[0] = 'x'` etkisiz (strict’te hata da yok). `'abc'[1]` → `'b'`.

String’ler `length` ve indeks erişimi sunar; array-like sayılırlar. Ama `Array.isArray('abc')` → `false`; `Array.from` veya `[...'abc']` ile diziye çevrilebilir.