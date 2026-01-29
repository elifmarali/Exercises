```js
function toggleClass(el, className) {
  if (el.classList.contains(className)) el.classList.remove(className);
  else el.classList.add(className);
}
```