# Primitive değerler neden “immutable” sayılır? `let s = 'abc'; s[0] = 'x'` neden `s`’i değiştirmez?

String’ler üzerinde “değişiyormuş” gibi görünen (`toUpperCase`, `replace`, `trim`) metotlar ne yapar? Bu immutability performans ve güvenli paylaşım açısından nasıl değerlendirilir?