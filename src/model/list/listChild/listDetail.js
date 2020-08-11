import React from 'react';
import { withRouter } from "react-router-dom";

class List extends React.Component {

  render() {

    const { history } = this.props;

    return (
      <div className="form">
        <button onClick={() => history.push("/mock")}>返回列表</button>
        hello ListInfo
      </div>
    );
  }

}


export default withRouter(List)