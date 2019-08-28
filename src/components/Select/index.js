import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <select placeholder="请选择公司性质">
        <option value ="volvo">公司</option>
        <option value ="volvo">个人</option>
      </select>
    )
  }
}

export default Select;