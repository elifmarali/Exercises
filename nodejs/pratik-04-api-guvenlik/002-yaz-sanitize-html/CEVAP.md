```js
function simpleSanitize(html) {
  return html
    .replace(/<script[^>]*>[sS]*?<\/script>/gi, '')
    .replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
}
```
Üretimde DOMPurify vb. kullan.