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
          <Link to="/list">List</Link>{' '}
          <Link to="/list/list1">List1</Link>{' '}
          <Link to="/list/list2">List2</Link>{' '}
          hello dashboard
        </div>
      </React.Fragment>
    );
  }

}


export default Dashboard