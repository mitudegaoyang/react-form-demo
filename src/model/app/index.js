import React from 'react';
import './index.css'
import {Route} from "react-router";
import Hello from "../hello";
import Form from "../form";
import List from "../list";
import {BrowserRouter as Router} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Route path="/" component={Hello}/>
        <Route path="/from" component={Form}/>
        <Route path="/list" component={List}/>
      </Router>
    );
  }

}


export default App
