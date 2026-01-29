## ?. ve ??

`?.` erişim zincirinde `null`/`undefined` ile karşılaşınca hemen `undefined` döner; devam etmez. `obj?.a?.b` `obj` veya `a` yoksa `undefined`; `obj && obj.a && obj.a.b` ile aynı sonucu verir ama daha kısa ve okunabilir.

`??` sadece `null` ve `undefined` için sağ tarafı kullanır; `||` tüm falsy için. `0 ?? 1` → `0`, `0 || 1` → `1`. Varsayılan değer verirken `0`/`''` geçerliyse `??` kullan.