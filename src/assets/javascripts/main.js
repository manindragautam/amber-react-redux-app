import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'clientConfig/store';
import Routes from 'clientConfig/routes';

import 'clientConfig/icons'; // FontAwesome Icons Library

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'),
);
