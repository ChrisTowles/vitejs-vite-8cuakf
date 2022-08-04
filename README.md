# vitejs-vite-8cuakf

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-8cuakf)

Issue <https://github.com/vitejs/vite/issues/9521>

Confirmed JSON hot-reloads with 'vite@2.9.14` worked

## Workaround

In `vite@^3.0.0` you can specify a `importing-asset` parameter.

```js
import json from './tst.json?init'; // makes it hot reloadable
```

```js
import json from './tst.json?inline'; // makes it hot reloadable

```

Reproduction: [on StackBlitz ⚡️](https://stackblitz.com/edit/vitejs-vite-8cuakf)

Not sure which is better but both work.

Best documentation I could find was <https://vitejs.dev/guide/assets.html#importing-asset-as-url> but that wasn't clear nor did it list `inline` or `init`.
