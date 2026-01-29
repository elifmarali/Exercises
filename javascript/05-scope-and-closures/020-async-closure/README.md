# `async` fonksiyon içinde `await` öncesi tanımlı değişken, `await` sonrası closure'da hâlâ aynı mı?

`async function f() { const x = 1; await g(); console.log(x); }` — `x` garanti `1` mi?