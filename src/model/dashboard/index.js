import React from 'react'
import { Link } from 'react-router-dom'
import BreadcrumbBar from "../../components/BreadcrumbBar";

class Dashboard extends React.Component {

  render() {
    return (

      <React.Fragment>
        <BreadcrumbBar></BreadcrumbBar>
        <div className="form">
          <Link to="/login">Login</Link>{' '}
          <Link to="/from">From</Link>{' '}
          <Link to="/mock">Mock</Link>{' '}
          hello dashboard
        </div>
      </React.Fragment>
    );
  }

}


export default Dashboard