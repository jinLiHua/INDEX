Page({

  /**
   * 页面的初始数据
   */
  data: {
    filmList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let wxthis = this;
    let id = options.id;
    wx.request({
      url: 'http://192.168.43.245:3000/getfilms',
      data: {_id:id},
      success: function (res) {
        for (let j = 0; j < res.data.atlasImg.length;j++){
          let atlasImg = res.data.atlasImg[j].replace(/\\/g, '/');
          res.data.atlasImg[j] = `http://192.168.43.245:3000${atlasImg}`;
        }
        for (let i =0;i < res.data.actorsImg.length;i++){
          let newactorImg = res.data.actorsImg[i].actorImg.replace(/\\/g, '/');
          res.data.actorsImg[i].actorImg = `http://192.168.43.245:3000${newactorImg}`;
        }
        let str = res.data.film_covers[0].film_covers;
        let str1 = str.replace(/\\/g, '/');
        res.data.film_covers[0].film_covers = `http://192.168.43.245:3000${str1}`;
        wxthis.setData({ filmList: res.data });
      }
    });

  },
})