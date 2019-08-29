import React from 'react';
import _ from 'lodash';
import './index.css'
import { connect } from 'react-redux'
import Select from '../../components/Select/';
import Input from '../../components/Input';

class Form extends React.Component {

  constructor(props){
    super(props);

    this.changeCompanyType = this.changeCompanyType.bind(this);
    this.changeProvinces = this.changeProvinces.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeApartment = this.changeApartment.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
  }

  // change公司性质
  changeCompanyType (list, item) {
    this.props.selectCompany(item)
    this.props.changeCompany('')
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
  // change公寓名称
  changeApartment (item) {
    this.props.changeApartment(item)
  }
  // change公司全称
  changeCompany (item) {
    this.props.changeCompany(item)
  }
  // change联系人姓名
  changeUserName (item) {
    this.props.changeUserName(item)
  }
  // change注册手机
  changePhone (item) {
    this.props.changePhone(item)
  }
  // change运营房源量
  changeNumber (item) {
    this.props.changeNumber(item)
  }

  render() {
    return (
      <div className="form">
        <div className="formItem">
          <div className="label">*公司性质{this.props.count.companyType}</div>
          <div className="content">
            <Select
              value={this.props.count.companyType}
              handleChange={this.changeCompanyType}
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
          <div className="label">公寓名称{this.props.count.apartment}</div>
          <div className="content">
            <Input
              value={this.props.count.apartment}
              type={'text'}
              placeholder={'输入公寓名称'}
              handleChange={this.changeApartment}>
            </Input>
          </div>
        </div>
        <div className="formItem" style={{display: (this.props.count.companyType === '1') ? 'block' : 'none'}}>
          <div className="label">公司全称{this.props.count.company}</div>
          <div className="content">
            <Input
              value={this.props.count.company}
              type={'text'}
              placeholder={'输入公司全称'}
              handleChange={this.changeCompany}>
            </Input>
          </div>
        </div>
        <div className="formItem">
          <div className="label">联系人姓名{this.props.count.userName}</div>
          <div className="content">
            <Input
              value={this.props.count.userName}
              type={'text'}
              placeholder={'输入联系人姓名'}
              handleChange={this.changeUserName}>
            </Input>
          </div>
        </div>
        <div className="formItem">
          <div className="label">*注册手机{this.props.count.phone}</div>
          <div className="content">
            <Input
              value={this.props.count.phone}
              type={'text'}
              placeholder={'输入注册手机'}
              handleChange={this.changePhone}>
            </Input>
          </div>
        </div>
        <div className="formItem">
          <div className="label">运营房源量{this.props.count.number}</div>
          <div className="content">
            <Input
              value={this.props.count.number}
              type={'text'}
              placeholder={'输入运营房源量'}
              handleChange={this.changeNumber}>
            </Input>
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
  changeApartment: dispatch.count.changeApartment,
  changeCompany: dispatch.count.changeCompany,
  changeUserName: dispatch.count.changeUserName,
  changePhone: dispatch.count.changePhone,
  changeNumber: dispatch.count.changeNumber,
  submit: dispatch.count.submit,
})

export default connect(
  mapState,
  mapDispatch
)(Form)
