import React from 'react';
import { Breadcrumb } from 'antd';

class BreadcrumbBar extends React.Component {

  render() {

    const { location } = this.props;
    // const selectedKeys = location.pathname.substr(1);
    console.log(location)

    return (
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default BreadcrumbBar;