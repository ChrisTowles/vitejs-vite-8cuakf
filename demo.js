// Modify JSON to triggering hmr
import json_none from './tst_none.json'; // makes it hot reloadable.

import json_inline from './tst_inline.json?inline'; // makes it hot reloadable.

import json_init from './tst_init.json?init'; // makes it hot reloadable.

// Modify JS can trigger
import js from './tst.js';

export function setupApp(element) {
  element.innerHTML = `
    json json_none:${JSON.stringify(json_none)}<br />
    <br />
    json json_inline:${JSON.stringify(json_inline)}<br />
    <br />
    json json_init:${JSON.stringify(json_init)}<br />
    <br />
    js file:${JSON.stringify(js)}
  `;

}
