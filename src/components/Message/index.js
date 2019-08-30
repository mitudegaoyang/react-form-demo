import React from 'react';
import './index.css'

class Message extends React.Component {
  render() {
    return (
      <React.Fragment>
      { (this.props['r-if']) ?
        <div className="message">{this.props.message}</div> :
        null
      }
      </React.Fragment>
    )
  }
}

export default Message;