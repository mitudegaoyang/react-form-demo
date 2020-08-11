import React from 'react';
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import List from "./listChild";
import ListDetail from "./listChild/listDetail";

class ListContainer extends React.Component {

  render() {

    return (
      <div className="form">
        <h1>hello List</h1>
        <Switch>
          <Redirect
            exact={true}
            from={'/mock'}
            to={'/mock/list'}
          />
          <Route path='/mock/list' component={List} />
          <Route path='/mock/info/:id' component={ListDetail} />
        </Switch>
      </div>
    );
  }

}


export default withRouter(ListContainer)