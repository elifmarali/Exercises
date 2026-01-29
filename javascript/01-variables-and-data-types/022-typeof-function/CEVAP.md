## typeof ve function

Fonksiyonlar aslında `Callable` objedir. Tarihsel olarak `typeof` için ayrı `"function"` çıktısı tanımlanmış; böylece “çağrılabilir mi?” sorusu kolayca cevaplanır.

**First-class:** Fonksiyonlar değişkene atanabilir, argüman olarak geçirilebilir, döndürülebilir; yani object’tir, ek olarak `[[Call]]` içerir.

**Tartışma:** `typeof fn === "function"` pratik ve yaygın. Tip sisteminde `Function` ayrı bir tip olarak ele alınabilir; `typeof` bu ayrımı yüzeysel olarak yansıtır.