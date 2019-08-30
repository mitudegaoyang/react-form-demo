import React from 'react';
import './index.css'
import { withRouter } from "react-router-dom";

class App extends React.Component {

  render() {

    const { history } = this.props;

    return (
      <div className="form">
        <button onClick={() => history.push("/")}>返回首页</button>
        hello app
      </div>
    );
  }

}


export default withRouter(App)
