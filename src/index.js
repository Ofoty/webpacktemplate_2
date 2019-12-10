import './css/main.css';
import './js/common';

function importAll (r) {
  r.keys().forEach(r);
}

importAll(require.context('./assets/img/', true, /\.svg$/));
