## Falsy ve truthy

**Falsy:** `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined`, `NaN`. Bunlar dışındakiler truthy.

`if (x)` ile `0` veya `''` elenir; bazen kasıtlı geçerli değerler yok sayılır. Bu tür hataları azaltmak için `if (x != null)`, `if (x !== undefined && x !== null)` veya `??` ile default kullan; sayı için `typeof x === 'number' && !Number.isNaN(x)` gibi açık kontroller tercih edilebilir.