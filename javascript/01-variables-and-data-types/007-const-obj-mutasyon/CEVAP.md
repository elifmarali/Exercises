## const neyi sabitler?

`const` **referansı** sabitler; objenin içeriğini değil. Bu yüzden `o.x = 2`, `o.y = 3` geçerli, `o = {}` ataması `TypeError` verir.

**Best practice:** `const` kullanımı, “bu referansı yeniden atayacağım” dememek için iyidir. Objenin mutasyonunu engellemek istiyorsan `Object.freeze` (shallow) veya immutable veri yapıları / derin freeze kullan.