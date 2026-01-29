## Boolean object

`new Boolean(false)` bir object’tir; object’ler truthy’dir. `Boolean(...)` argümanı “truthy mi?” diye coerced eder; object truthy olduğu için `Boolean(new Boolean(false))` → `true`.

`new Boolean` gereksiz ve kafa karıştırıcıdır. Boolean değeri için `Boolean(x)` veya `!!x` kullan; `new Boolean` kullanma.