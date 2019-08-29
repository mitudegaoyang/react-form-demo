import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import Form from './model/form/';
import * as models from './models'

const store = init({
  models,
})

ReactDOM.render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('root')
);
