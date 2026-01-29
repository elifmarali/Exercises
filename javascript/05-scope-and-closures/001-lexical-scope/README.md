# Lexical (statik) scope nedir? JavaScript'te scope nasıl belirlenir—tanım yeri mi çalışma yeri mi?

`function outer() { const x = 1; function inner() { console.log(x); } return inner; }` `outer()()` ne basar? "Closure" ile ilişkisi nedir?