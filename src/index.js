import React from 'react';
import ReactDOM from 'react-dom';
// import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { init } from '@rematch/core';
import Form from "./model/form";
import List from "./model/list";
import App from './model/app'
// import Home from './model/home/';
import * as models from './models'

const store = init({
  models,
})

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Route exact path='/from' component={Form} />
        <Route path='/list' component={List} />
        <Route path="/" component={App}/>
        {/*<IndexRoute component={Home} />*/}
    </Router>
  </Provider>,
  document.getElementById('root')
);
