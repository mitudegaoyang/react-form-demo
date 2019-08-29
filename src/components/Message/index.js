import React from 'react';
import './index.css'

class Message extends React.Component {
  render() {
    if (this.props['r-if']) {
      return (
        <div className="message">{this.props.message}</div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Message;