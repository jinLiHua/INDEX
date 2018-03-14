Page({

  data: {
    acc: '',
    pwd: '',
    inputTxt:''
  },
  getAccFunc: function (e) {
    this.setData({ acc: e.detail.value });
  },
  getPwdFunc: function (e) {
    this.setData({ pwd: e.detail.value });
  },
  loginBtnFunc: function () {
    wx.request({
      url: 'http://192.168.43.245:9000/users/find', //仅为示例，并非真实的接口地址
      data: {
        acc: this.data.acc,
        pwd: this.data.pwd
      },
      // header: {
      //   'content-type': 'application/json' // 默认值
      // },
      success: function (res) {
        if (res.data.length >= 1) {
          wx.navigateTo({
            url: '../main/main'
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '用户名或密码错误',
            success: function (res) {
              if (res.confirm) {
              } else {
                console.log('用户点击取消')
              }

            }
          })
        }
      }
    })
  }
})