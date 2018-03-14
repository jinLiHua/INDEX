Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let wxthis = this
    wx.request({
      url: 'http://192.168.43.245:3000/getfilms',
      data: {},
      success: function (res) {
        for (let item of res.data) {
          let str = item.film_covers[0].film_covers;
          let str1 = str.replace(/\\/g, '/');
          item.film_covers[0].film_covers = `http://192.168.43.245:3000${str1}`;
        }
        wxthis.setData({ filmList: res.data });
      }
    })
  },
  loadDataFunc: function (e) {
    let id = e.currentTarget.id;
    wx.navigateTo({
      url: `../details/details?id=${id}`,
    })
  },
  loadcinema: function (e) {
    let id = e.target.id;
    wx.navigateTo({
      url: `../cinema/cinema?id=${id}`,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})