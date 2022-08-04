// Modify JSON to triggering hmr
import json_raw from './tst_raw.json?raw'; // makes it hot reloadable but not json.

import json_other from './tst_other.json?init'; // makes it hot reloadable but still json.

// Modify JS can trigger
import js from './tst.js';

export function setupApp(element) {
  element.innerHTML = `
    json json_raw:${JSON.stringify(json_raw)}<br />
    <br />
    json json_other:${JSON.stringify(json_other)}<br />
    <br />
    js file:${JSON.stringify(js)}
  `;

}
