import './style.css';
import { setupApp } from './demo.js';

document.querySelector('#app').innerHTML = `
  <div>
    <div id="demo"></div>
  </div>
`;

setupApp(document.querySelector('#demo'));
