// pages/weather/weather.js
Page({
  /**
   * 页面的初始数据
   */ 
  data: {
   weather:'',
   value:'',
  //  云0,晴1,阴2,雨3,冰雹4,雷5,沙尘6,雾7,雪8
   img: ['/images/duoyun.jpg','/images/qing.jpg',
     '/images/ying.jpg', '/images/yu.jpg', '/images/bingbao.jpg',
     '/images/lei.jpg', '/images/shachen.jpg', '/images/wu.jpg', '/images/xue.jpg'],
   wea_img:'',
  //  通过数字来控制显示数组的第几张图片
   count:''
  },
  getValue(e){
    //绑定数据到value
    this.setData({
      value: e.detail.value
    })
  },
  search(){
    console.log(this.data.value)
    this.getWeather(this.data.value)
  }, 
  getWeather(name='珠海') {
    wx.cloud.callFunction({
      name: 'sum01',
      data:{
        name:name
      }
    }).then((res) => {
      // console.log(JSON.parse(res.result))
      // 把wea_img拿出来
      let obj=JSON.parse(res.result)
      this.setData({
        weather: JSON.parse(res.result)
      })
      console.log(this.data.weather);
      return obj.wea_img
    }).then((res)=>{
      // console.log(res)
      switch(res){
        case 'yun':this.setData({
          count:0
        });
        break;
        case 'qing': this.setData({
          count: 1
        });
        break;
        case 'ying': this.setData({
          count: 2
        });
          break;
        case 'yu': this.setData({
          count: 3
        });
          break;
        case 'bingbao': this.setData({
          count: 4
        });
          break;
        case 'lei': this.setData({
          count: 5
        });
          break;
        case 'shachen': this.setData({
          count: 6
        });
          break;
        case 'wu': this.setData({
          count: 7
        });
          break;
        case 'xue': this.setData({
          count: 8
        });
          break;
      }
    })
  },
  ceshi(){
   wx.cloud.callFunction({
     name:'sum01',
     data:{
       a:1,
       b:2
     }
   }).then((res)=>{
     console.log(res)
   })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather()
    // this.ceshi()
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