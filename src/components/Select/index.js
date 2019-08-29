import React from 'react';

class Select extends React.Component {

  handleChange = e => {
    if (this.props.handleChange) {
      this.props.handleChange(this.props.list ,e.target.value)
    }
  };

  render() {
    let list = this.props.list;
    return (
      <select
        value={this.props.value}
        onChange={this.handleChange}>
        {list.length > 0 &&
        list.map((item, i) => {
          return (
            <option key={i} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    )
  }
}

export default Select;