## Hoisting

Motor, çalıştırmadan önce bildirimleri (declaration) yukarı “taşır” gibi davranır; atamalar ve diğer ifadeler yerinde kalır.

- `console.log(a)` → `undefined` (var hoisting; atama henüz yapılmadı).
- `var a = 5;` atandıktan sonra `console.log(a)` → `5`.
- `function foo() { ... }` tamamen hoist edilir; `foo()` çağrısı çalışır.

**Declaration vs expression:**

- `function f() {}` → tamamen hoist edilir.
- `var f = function () {};` → `f` hoist edilir, `undefined`; atamadan önce `f()` çağrılırsa `TypeError`.

`let`/`const` da hoist edilir ancak TDZ’de oldukları için atamadan önce erişim `ReferenceError` verir.