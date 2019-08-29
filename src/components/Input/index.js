import React from 'react';

class Input extends React.Component {

  handleChange = e => {
    this.props.handleChange(e.target.value)
  };

  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.handleChange}
        type={this.props.type}
        placeholder={this.props.placeholder}/>
    )
  }
}

export default Input;