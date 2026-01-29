```js
// utils.js
export function capitalize(s) {
  return s && s[0].toUpperCase() + s.slice(1).toLowerCase();
}
export function reverse(s) {
  return [...s].reverse().join('');
}
```
```js
// main.js
import { capitalize, reverse } from './utils.js';
console.log(capitalize(reverse('hello'))); // "Ollah"
```