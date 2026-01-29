## Eksik parametre ve default

Eksik parametreler `undefined` olur. `f(1)` ile `b === undefined`. Default `b = 2` sadece `undefined` için devreye girer; `f(1, null)` ile `b` `null` kalır.

`f(1, undefined)` ile `b` default alır (`2`). Default değerler her çağrıda sola doğru değerlendirilir; sağdaki parametreler soldakilere referans verebilir.