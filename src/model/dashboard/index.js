import React from 'react';
import './index.css'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {

  render() {
    return (
      <div className="form">
        <Link to="/app">App</Link>{' '}
        <Link to="/from">From</Link>{' '}
        <Link to="/list">List</Link>{' '}
        hello dashboard
      </div>
    );
  }

}


export default Dashboard