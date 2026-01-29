# Global object (`window`, `globalThis`) üzerinde değişken tanımlamanın riskleri nelerdir?

`var x = 1` (script scope, non-module) ile `function f() { y = 1 }` (atama, bildirim yok) global object’e nasıl yansır? Çakışma, güvenlik ve test edilebilirlik açısından neden kaçınılmalıdır?