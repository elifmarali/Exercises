# Aynı isimde dış ve iç değişken var (shadowing). İç fonksiyon dıştaki değişkeni değiştirmek isterse nasıl yapar?

`let x = 1; function f() { let x = 2; /* dış x'i 3 yap */ }` — dış `x`'e içeriden doğrudan erişilebilir mi?