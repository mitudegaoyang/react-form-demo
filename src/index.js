import React from 'react';
import ReactDOM from 'react-dom';
// import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import Form from "./model/form";
import Mock from "./model/list";
import Dashboard from './model/dashboard';
import Login from './model/login';
import * as models from './models';
import './styles/index.css'

const store = init({
  models,
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/from' component={Form} />
        <Route path='/mock' component={Mock} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
