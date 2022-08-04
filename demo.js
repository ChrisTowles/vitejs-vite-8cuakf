// Modify JSON without triggering hmr
import json from './tst.json';
// Modify JS can trigger
import js from './tst.js';

export function setupApp(element) {
  element.innerHTML = `json file:${JSON.stringify(json)}<br />
  js file:${JSON.stringify(js)}`;
}
