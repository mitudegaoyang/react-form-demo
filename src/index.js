import React from 'react';
import ReactDOM from 'react-dom';
// import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import Form from "./model/form";
import List from "./model/list";
import List1 from "./model/list/listChild";
import List2 from "./model/list/listChild";
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
        <Route exact path="/" component={Dashboard}/>
        <Route path='/login' component={Login} />
        <Route path='/from' component={Form} />
        <Route exact path='/list' component={List} />
        <Route path='/list/list1' component={List1} />
        <Route path='/list/list2' component={List2} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
