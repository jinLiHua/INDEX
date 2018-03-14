Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: [],
    cinemaList:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let day = []
    //今天的时间
    var day2 = new Date();
    day2.setTime(day2.getTime());
    var s2 = day2.getFullYear() + "-" + (day2.getMonth() + 1) + "-" + day2.getDate();
    //明天的时间
    var day3 = new Date();
    day3.setTime(day3.getTime() + 24 * 60 * 60 * 1000);
    var s3 = day3.getFullYear() + "-" + (day3.getMonth() + 1) + "-" + day3.getDate();
    //后天时间
    //明天的时间
    var day4 = new Date();
    day4.setTime(day4.getTime() + 24 * 60 * 60 * 1000);
    var s4 = day4.getFullYear() + "-" + (day4.getMonth() + 1) + "-" + day4.getDate();
    day.push(`今天${s2}`);
    day.push(`明天${s3}`);
    day.push(`后天${s4}`);
    this.setData({ today: day });

    let wxthis = this
    wx.request({
      url: 'http://192.168.43.245:3000/findcinema',
      data: {},
      success: function (res) {
        console.log(res.data)
        // for (let item of res.data) {
        //   let str = item.film_covers[0].film_covers;
        //   let str1 = str.replace(/\\/g, '/');
        //   item.film_covers[0].film_covers = `http://192.168.43.245:3000${str1}`;
        // }
        wxthis.setData({ cinemaList: res.data });
      }
    })
  },
  loadDate: function () {
    let wxthis = this
    wx.request({
      url: 'http://192.168.43.245:3000/findcinema',
      data: {},
      success: function (res) {
        console.log(res.data)
        // for (let item of res.data) {
        //   let str = item.film_covers[0].film_covers;
        //   let str1 = str.replace(/\\/g, '/');
        //   item.film_covers[0].film_covers = `http://192.168.43.245:3000${str1}`;
        // }
        // wxthis.setData({ filmList: res.data });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})