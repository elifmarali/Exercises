# `const` ile tanımlanan bir objenin property’leri neden değiştirilebiliyor?

`const o = { x: 1 }; o.x = 2; o.y = 3;` geçerli ama `o = {}` ataması neden hata verir? `const` tam olarak neyi “sabitliyor”? Bu davranış best practice açısından nasıl yorumlanmalı?