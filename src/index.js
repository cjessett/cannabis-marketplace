import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

function ConnectedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
