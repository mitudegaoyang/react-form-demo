export const count = {
  state: {
    companyType: '0',
    provincesType: '000',
    cityType: '001',
    apartment: '',
    company: '',
    userName: '',
    phone: '',
    number: '',
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
    ],
    message: ''
  },
  reducers: {
    selectCompany: (state, payload) => {
      return {
        ...state,
        companyType: payload
      }
    },
    selectProvinces: (state, payload) => {
      return {
        ...state,
        provincesType: payload
      }
    },
    selectCity: (state, payload) => {
      return {
        ...state,
        cityType: payload
      }
    },
    changeProvinces: (state, payload) => {
      return {
        ...state,
        cityList: payload
      }
    },
    changeApartment: (state, payload) => {
      return {
        ...state,
        apartment: payload
      }
    },
    changeCompany: (state, payload) => {
      return {
        ...state,
        company: payload
      }
    },
    changeUserName: (state, payload) => {
      return {
        ...state,
        userName: payload
      }
    },
    changePhone: (state, payload) => {
      return {
        ...state,
        phone: payload
      }
    },
    changeNumber: (state, payload) => {
      return {
        ...state,
        number: payload
      }
    },
    message: (state, payload) => {
      return {
        ...state,
        message: payload
      }
    },
  },
  effects: (dispatch) => ({
    async submit(s) {
      // 需要处理数据可在这里进行处理
      const data = {}
      data.companyType = s.companyType
      data.provincesType = s.provincesType
      data.cityType = s.cityType
      data.apartment = s.apartment
      if (s.company) {
        data.company = s.company
      }
      data.userName = s.userName
      data.phone = s.phone
      data.number = s.number
      console.log('提交中')
      await new Promise(resolve => {
        setTimeout(resolve, 1000)
      })
      dispatch.count.message('保存成功')
      setTimeout(function () {
        dispatch.count.message('')
      }, 2000)
    },
  })
}