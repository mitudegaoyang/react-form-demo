import React from 'react';
import ReactDOM from 'react-dom';
// import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import Form from "./model/form";
import List from "./model/list";
import List1 from "./model/list";
import List2 from "./model/list";
import Dashboard from './model/dashboard'
import App from './model/app'
import * as models from './models'

const store = init({
  models,
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path='/app' component={App} />
        <Route path='/from' component={Form} />
        <Route path='/list' component={List} />
        <Route path='/list/list1' component={List1} />
        <Route path='/list/list2' component={List2} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
