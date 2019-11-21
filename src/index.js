import printMe from './print.js';
import './css/main.css';


+ async function getComponent() {
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    element.appendChild(btn);
  const btn = document.createElement('button');
    
   const element = document.createElement('div');
   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');

   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
}
    
  getComponent().then(component => {
      document.body.appendChild(component);
    })
