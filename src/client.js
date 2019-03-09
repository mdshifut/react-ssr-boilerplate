import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store';
import { Provider } from 'react-redux';
import App from './App';
const store = createStore(window.REDUX_DATA, window);

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.querySelector('#root')
);
