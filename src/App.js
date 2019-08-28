import React from 'react';
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="formItem">
        <div className="label">*公司性质</div>
        <div className="content">
          <select placeholder="请选择公司性质">
            <option value ="volvo">公司</option>
            <option value ="volvo">个人</option>
          </select>
        </div>
      </div>
      <div className="formItem">
        <div className="label">*所在城市</div>
        <div className="content">
          <select placeholder="不限省份">
            <option value ="volvo">北京</option>
            <option value ="volvo">天津</option>
            <option value ="volvo">河北</option>
          </select>
          <select placeholder="不限城市">
            <option value ="volvo">北京市</option>
            <option value ="volvo">个人</option>
          </select>
        </div>
      </div>
      <div className="formItem">
        <div className="label">公寓名称</div>
        <div className="content">
          <input type="text" placeholder="输入公寓名称"/>
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

export default App;
