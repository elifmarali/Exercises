## void operatörü

`void <expr>` ifadeyi değerlendirir ve her zaman `undefined` döner. Eski ortamlarda `undefined` globalde yeniden atanabiliyordu; `void 0` güvenli `undefined` kaynağı olarak kullanılırdı.

Günümüzde strict mode ve modül ortamında `undefined` güvenle kullanılabilir. `void` hâlâ "değeri yok say, `undefined` dön" için (örn. `href="javascript:void(0)"`) kullanılır; ancak bu pattern’ler de modern alternatiflerle değiştirilebilir.