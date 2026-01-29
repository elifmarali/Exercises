`Object.is(NaN, NaN)` → true, `NaN === NaN` → false.
`Object.is(0, -0)` → false, `0 === -0` → true.
`Object.is({}, {})` → false (farklı referans).