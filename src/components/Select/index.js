import React from 'react';

class Select extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange = e => {
    this.setState({value: e.target.value})
    if (this.props.handleChange) {
      this.props.handleChange(this.props.list ,e.target.value)
    }
  };

  render() {
    let list = this.props.list;
    return (
      <select
        value={this.state.value}
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