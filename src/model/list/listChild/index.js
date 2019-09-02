import React from 'react';
import { withRouter } from "react-router-dom";

class List extends React.Component {

  render() {

    const { history } = this.props;

    return (
      <div className="form">
        <button onClick={() => history.push("/")}>返回首页</button>
        hello ListChild
      </div>
    );
  }

}


export default withRouter(List)