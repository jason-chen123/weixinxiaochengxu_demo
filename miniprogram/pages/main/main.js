// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '',
    show: false,
    onshow:'1',
    item:[{
      title:'熊猫基地全价票',
      buyTips:'适用于成人,请携带绿色健康码',
      price:55,
      count:0
    },
    {
      title: '熊猫基地半价票',
      price:35,
      count:0,
      buyTips:'适用于儿童、学生,请携带绿色健康码'
    }],
    total:0,
    ifagree:true,
    session_key:'',
    openid:'',
    month:'',
    date:'',
    now:''
  },
  //点击跳转导航地图
  jumpToMap(){
    wx.navigateTo({
      url: '/pages/map/map',
    })
  },
  //点击换色
  changeColor(e){
    this.setData({
      onshow:e.target.dataset.onshow
    });
    console.log(this.data.onshow)
  },
  //点击触发日历器
  moreDate(){
    this.setData({
      show:true
    })
  },
  //使用Vant 日历器
   onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  formatDate(date) {
    date = new Date(date);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  },
  onConfirm(event) {
    this.setData({
      show: false,
      date: this.formatDate(event.detail),
    });
  },
  // 获取日期
  getdate:function(){
    let month =new Date().getMonth()+1;
    let date = new Date().getDate();
    let year = new Date().getFullYear()
    let now = new Date(year, month, 0).getDate();
    // let today=`${month}月${date}`
    this.setData({
      year,
      month,
      date,
      now
    });
//日期过滤器
    

  // let now = new Date(year,month,0).getDate()
  // console.log(now)
  },
  // toStringDay:function(m,d){
  //   return `${m}月${d}`
  // },
// 增加count
add:function(e){
  // 取得index 为id
  var id=e.target.dataset.id;
var c=this.data.item[id].count;
c=c+1;
var itemm=`item[${id}].count`;

// console.log(this.data.item[id].count)
this.setData({
  [itemm]:c
})
this.getTotal()
},
reduce:function(e){
  // 取得index 为id
  var id = e.target.dataset.id;
  var c = this.data.item[id].count;
  c = c - 1;
  if(c<0){
    return
  }
  var itemm = `item[${id}].count`;

  // console.log(this.data.item[id].count)
  this.setData({
    [itemm]: c
  })
  this.getTotal()
},
getTotal:function(){
  var items=this.data.item;
  var total=0;
  for(var i = 0; i<items.length;i++){
   total+=items[i].count*items[i].price;
  };
  this.setData({
    total:total
  })
},
// checkbox
  changeAgree:function(){
  var now=this.data.ifagree
  this.setData({
    ifagree:!now
  })
},
//登陆微信
login:function(){
  let _this = this;
  wx.login({
    success: (res) => {
      // console.log(res)
      let code = res.code;
      let data = JSON.stringify(code);
      wx.request({
        url: 'http://127.0.0.1:4002/wxxcx',
        data: { "code": data },
        method: 'get',
        header: { "Content-type": "application/json;charset=UTF-8" },
        success: (res) => {
          this.setData({
            session_key: res.data.session_key,
            openid: res.data.openid
          });
          console.log(_this.data)
        }
      })
    }
  })
},
//获取手机号的回调函数
  getPhoneNumber:function(e) {
    wx.showToast({
      title: '此APP未上线，不能使用该功能',
      icon:'none'
    })
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
//支付功能
pay:function(){
 if(!this.data.ifagree){
   wx.showToast({
     title: '请同意用户隐私协议',
     icon:'none'
   });
   return
 }
//  继续支付
this.payContinute()
},
payContinute:function(){

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.login();
    this.getdate();
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