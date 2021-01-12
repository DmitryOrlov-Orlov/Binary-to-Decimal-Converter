import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

import { rootReducer } from './store/reducers';
import App from './components/App';

export const CHANGE_BINARY_TO_DECIMAL = 'CHANGE_BINARY_TO_DECIMAL';

//1
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
