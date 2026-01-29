## Label ve block

`label: { ... }` geçerlidir. Label scope oluşturmaz; sadece `break`/`continue` için hedef sağlar. Block kendi scope’unu oluşturur; `let x` block’a aittir.

`break label` ile label’lı block’tan (veya loop’tan) çıkılır. Karmaşık iç içe loop’larda nadiren kullanılır; mümkünse `break`/`continue` ile daha sade yapılar tercih edilir.