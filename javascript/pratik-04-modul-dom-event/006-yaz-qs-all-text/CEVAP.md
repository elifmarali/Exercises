```js
function querySelectorAllText(selector) {
  return [...document.querySelectorAll(selector)].map(el => el.textContent);
}
```