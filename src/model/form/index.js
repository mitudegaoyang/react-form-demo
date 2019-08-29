import React from 'react';
import _ from 'lodash';
import './index.css'
import Select from '../../components/Select/';
import Input from '../../components/Input';

class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      companyList: [
        {
          id: 0,
          name: '选择公司性质'
        },
        {
          id: 1,
          name: '公司'
        },
        {
          id: 2,
          name: '个人'
        }
      ],
      provincesList: [
        {
          id: '000',
          name: '不限省份',
          children: [
            {
              id: '001',
              name: '不限城市',
            }
          ]
        },
        {
          id: '100',
          name: '北京',
          children: [
            {
              id: '101',
              name: '北京市',
            }
          ]
        },
        {
          id: '200',
          name: '天津',
          children: [
            {
              id: '201',
              name: '天津市',
            }
          ]
        },
        {
          id: '300',
          name: '河北',
          children: [
            {
              id: '301',
              name: '石家庄市',
            },
            {
              id: '302',
              name: '唐山市',
            },
            {
              id: '303',
              name: '秦皇岛市',
            }
          ]
        },
      ],
      cityList: [
        {
          id: '001',
          name: '不限城市',
        }
      ]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  // 下拉框联动
  handleChange (list, item) {
    const cityList = _.filter(list, { 'id': item })[0].children
    this.setState({cityList})
  }

  render() {
    return (
      <div className="App">
        <div className="formItem">
          <div className="label">*公司性质</div>
          <div className="content">
            <Select list={this.state.companyList}></Select>
          </div>
        </div>
        <div className="formItem">
          <div className="label">*所在城市</div>
          <div className="content">
            <Select handleChange={this.handleChange} list={this.state.provincesList}></Select>
            <Select list={this.state.cityList}></Select>
          </div>
        </div>
        <div className="formItem">
          <div className="label">公寓名称</div>
          <div className="content">
            <Input></Input>
          </div>
        </div>
        <div className="formItem">
          <div className="label">公司全称</div>
          <div className="content">
            <input type="text" placeholder="输入公司全称"/>
          </div>
        </div>
        <div className="formItem">
          <div className="label">联系人姓名</div>
          <div className="content">
            <input type="text" placeholder="输入联系人姓名"/>
          </div>
        </div>
        <div className="formItem">
          <div className="label">*注册手机</div>
          <div className="content">
            <input type="text" placeholder="注册手机"/>
          </div>
        </div>
        <div className="formItem">
          <div className="label">运营房源量</div>
          <div className="content">
            <input type="text" placeholder="运营房源量"/>
          </div>
        </div>
      </div>
    );
  }

}

export default Form;
