import React from 'react';
import { withRouter } from "react-router-dom";
import Mock from "mockjs";

class List extends React.Component {

  render() {

    const { history } = this.props;
    const data = Mock.mock({
      "data|10-20": [
        {
          "key|10": '@string', // 随机10位字符串
          "id": /\s\S{5,10}/,
          "name": '@name(1,2)', // 随机英文名
          "uname": '@cname()', // 随机中文名
          "age|18-50": 30, // 随机数字
          "phone": /1[3-9]\d{9}/, // 正则手机号
          "email": '@email', // 随机邮箱
          "province": '@province', // 随机省份
          "city": '@city', // 随机城市
          "type|1": ['线上', '线下', '三方支付'], // 随机选取 1 个元素
          'price': '@integer(100,2000)', //随机价格
          "created_at": '@datetime', //随机时间
        }]
    })
    console.log(data)

    const content = (item, index) => {
      return (
        <tr key={item.key}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.uname}</td>
          <td>{item.age}</td>
          <td>{item.phone}</td>
          <td>{item.email}</td>
          <td>{item.province}</td>
          <td>{item.city}</td>
          <td>{item.type}</td>
          <td>¥{item.price}</td>
          <td>{item.created_at}</td>
          <td>
            <a onClick={() => { history.push(`/mock/info/${index}`) }}>查看详情</a>
          </td>
        </tr>
      )
    }

    return (
      <div className="form" >
        <button onClick={() => history.push("/")}>返回首页</button>
        <h2>hello ListChild</h2>
        <table>
          <thead>
            <tr>
              <td>合同编号</td>
              <td>创建人</td>
              <td>客户名称</td>
              <td>年龄</td>
              <td>联系方式</td>
              <td>邮箱地址</td>
              <td>省份</td>
              <td>城市</td>
              <td>结算方式</td>
              <td>金额</td>
              <td>创建日期</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            {data.data.map((item, index) => { return content(item, index) })}
          </tbody>
        </table>
      </div>
    );
  }

}


export default withRouter(List)