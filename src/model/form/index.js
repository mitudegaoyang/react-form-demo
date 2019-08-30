import React from 'react';
import _ from 'lodash';
import './index.css'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import Select from '../../components/Select/';
import Input from '../../components/Input';
import Message from '../../components/Message';

class Form extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      companyRequired: false,
      provincesRequired: false,
      phoneRequired: false
    }

    this.changeCompanyType = this.changeCompanyType.bind(this);
    this.changeProvinces = this.changeProvinces.bind(this);
    this.changeCity = this.changeCity.bind(this);
    this.changeApartment = this.changeApartment.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changeNumber = this.changeNumber.bind(this);
  }

  /**
   * change公司性质
   */
  changeCompanyType (list, item) {
    this.props.selectCompany(item)
    this.props.changeCompany('')
  }
  /**
   * change省份
   */
  changeProvinces (list, item) {
    const cityList = _.filter(list, { 'id': item })[0].children
    this.props.selectProvinces(item)
    this.changeCity(list, cityList[0].id)
    this.props.changeProvinces(cityList)
  }
  /**
   * change城市
   */
  changeCity (list, item) {
    this.props.selectCity(item)
  }
  /**
   * change公寓名称
   */
  changeApartment (item) {
    this.props.changeApartment(item)
  }
  /**
   * change公司全称
   */
  changeCompany (item) {
    this.props.changeCompany(item)
  }
  /**
   * change联系人姓名
   */
  changeUserName (item) {
    this.props.changeUserName(item)
  }
  /**
   * change注册手机
   */
  changePhone (item) {
    this.props.changePhone(item)
  }
  /**
   * change运营房源量
   */
  changeNumber (item) {
    this.props.changeNumber(item)
  }
  /**
   * 提交表单
   */
  submit () {
    this.setState({
      companyRequired: false,
      provincesRequired: false,
      phoneRequired: false,
    })
    if (this.props.count.companyType === '0') {
      console.log('公司性质必选')
      this.setState({
        companyRequired: true
      })
      return
    } else if (this.props.count.provincesType === '000' || this.props.count.cityType === '001') {
      console.log('所在城市必选')
      this.setState({
        provincesRequired: true
      })
      return
    } else if (this.props.count.phone === '') {
      this.setState({
        phoneRequired: true
      })
      console.log('注册手机必填')
      return
    }
    this.props.submit(this.props.count)
  }
  /**
   * 清空表单
   */
  clear () {
    this.props.selectCompany('0')
    this.props.selectProvinces('000')
    const list = this.props.count.provincesList
    const cityList = list[0].children
    this.changeCity(list, cityList[0].id)
    this.props.changeProvinces(cityList)
    this.props.changeApartment('')
    this.props.changeCompany('')
    this.props.changeUserName('')
    this.props.changePhone('')
    this.props.changeNumber('')
  }
  /**
   * 返回首页
   */
  goBack () {
    console.log('返回首页')
    this.props.history.push("/")
  }

  render() {
    const { history } = this.props;
    let isShow = this.props.count.message !== ''
    return (
      <div className="form">
        <Message r-if={isShow} message={this.props.count.message}></Message>
        <div className="formItem">
          <div
            className="label"
            style={{color: this.state.companyRequired ? 'red' : 'black'}}>
            *公司性质{this.props.count.companyType}
          </div>
          <div className="content">
            <Select
              value={this.props.count.companyType}
              handleChange={this.changeCompanyType}
              list={this.props.count.companyList}>
            </Select>
          </div>
        </div>
        <div className="formItem">
          <div
            className="label"
            style={{color: this.state.provincesRequired ? 'red' : 'black'}}>
            *所在城市{this.props.count.provincesType}{this.props.count.cityType}
          </div>
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
        {(this.props.count.companyType === '1') ?
          <div className="formItem">
            <div className="label">公司全称{this.props.count.company}</div>
            <div className="content">
              <Input
                value={this.props.count.company}
                type={'text'}
                placeholder={'输入公司全称'}
                handleChange={this.changeCompany}>
              </Input>
            </div>
          </div> : null}
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
          <div
            className="label"
            style={{color: this.state.phoneRequired ? 'red' : 'black'}}>
            *注册手机{this.props.count.phone}
          </div>
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
        <div className="formItem">
          <button onClick={this.submit.bind(this)}>提交</button>
          <button onClick={this.clear.bind(this)}>重置</button>
          <button onClick={this.goBack.bind(this)}>取消</button>
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

export default withRouter(connect(
  mapState,
  mapDispatch
)(Form))
