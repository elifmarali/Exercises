Aşağıdaki HTML ile `div` ve `button`’a click listener ekleniyor (capture false). Butona tıklanınca sırayla ne log’lanır? `stopPropagation` yok.

```html
<div id="d"><button id="b">OK</button></div>
```
```js
d.addEventListener('click', () => console.log('div'));
b.addEventListener('click', () => console.log('btn'));
```