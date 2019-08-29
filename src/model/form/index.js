import React from 'react';
import _ from 'lodash';
import './index.css'
import { connect } from 'react-redux'
import Select from '../../components/Select/';
import Input from '../../components/Input';

class Form extends React.Component {

  constructor(props){
    super(props);

    this.changeCompany = this.changeCompany.bind(this);
    this.changeProvinces = this.changeProvinces.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }

  // change公司性质
  changeCompany (list, item) {
    this.props.selectCompany(item)
  }
  // change省份
  changeProvinces (list, item) {
    const cityList = _.filter(list, { 'id': item })[0].children
    this.props.selectProvinces(item)
    this.changeCity(list, cityList[0].id)
    this.props.changeProvinces(cityList)
  }
  // change城市
  changeCity (list, item) {
    this.props.selectCity(item)
  }

  render() {
    return (
      <div className="App">
        <div className="formItem">
          <div className="label">*公司性质{this.props.count.companyType}</div>
          <div className="content">
            <Select
              value={this.props.count.companyType}
              handleChange={this.changeCompany}
              list={this.props.count.companyList}>
            </Select>
          </div>
        </div>
        <div className="formItem">
          <div className="label">*所在城市{this.props.count.provincesType}{this.props.count.cityType}</div>
          <div className="content">
            <Select
              value={this.props.count.provincesType}
              handleChange={this.changeProvinces}
              list={this.props.count.provincesList}>
            </Select>
            <Select
              value={this.props.count.cityType}
              handleChange={this.changeCity}
              list={this.props.count.cityList}>
            </Select>
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

const mapState = state => ({
  count: state.count,
})

// 多个命名空间需要在引入时说明引入的是哪个命名空间的方法和数据
// const mapState2Props = ({ alarm: { board, workerLists } }) => ({ board, workerLists });

const mapDispatch = dispatch => ({
  selectCompany: dispatch.count.selectCompany,
  selectProvinces: dispatch.count.selectProvinces,
  selectCity: dispatch.count.selectCity,
  changeProvinces: dispatch.count.changeProvinces,
  submit: dispatch.count.submit,
})

export default connect(
  mapState,
  mapDispatch
)(Form)
