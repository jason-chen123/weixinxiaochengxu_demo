// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  ifGetSetting:function(){
    // console.log(89)
    var _this = this;
    wx.getSetting({
      success(res) {
        console.log(res)
        if (!res.authSetting['scope.userLocation']) {
          wx.showToast({
            title: '使用导航需授权地理位置定位',
            icon:'none'
          })
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              _this.onLoad()
            }
          })
        }else{
          wx.getLocation({
            type:'gcj02',
            success: function(res) {
              const latitude = res.latitude;
              const longitude = res.longitude;
              console.log(res)
              wx.openLocation({
                longitude: 104.14470,
                latitude: 30.73725,
                // latitude,
                // longitude,
                scale: 13,
                name:'熊猫基地',
                address:'成都大熊猫繁育研究基地'
              })
            },
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.ifGetSetting()
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