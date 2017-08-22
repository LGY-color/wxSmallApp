// user_fbsc.js
import { Fbsc } from 'user_fbsc-model.js';
var fbsc = new Fbsc();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon60: '../../images/demoimages.png',
    infoData:[],
    page:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },
  _loadData:function(page=0){
    var that = this;
    var data = this.data.infoData;
    fbsc.getInfoById(page,(res)=>{
      console.log(res);
      that.setData({
        'infoData':data.concat(res)
      });
    });
  },
  toDetailInfo:function(event){
    var id = fbsc.getDataSet(event,'id');
    wx.navigateTo({
      url: '../list/list?id=' + id,
    });
  },
  //提示
  moreToast:function(res){
    if(res == ''){
      wx.showToast({
        title: '没有更多了',
        icon: 'loading',
        duration: 1000
      });
    }else{
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      });
    }
  },
  //获取置顶
  getMoreInfo:function(event){
    var that = this;
    var page = this.data.page;
    var data = this.data.infoData;
    page = page + 5;
    this.setData({
      "page" :page
    });
    fbsc.getInfoById(page,(res)=>{
      that.moreToast(res);
      that.setData({
        'infoData':data.concat(res)
      });
    });
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

  },
  openConfirm: function () {
    var that = this;
    console.log("openConfirm");
    wx.showModal({
      title: '置顶提示',
      content: '是否花费18金币置顶',
      confirmText: "去支付",
      cancelText: "再考虑",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          that.wxPay(),
          console.log('用户点击去支付')
        } else {
          console.log('用户点击再考虑')
        }
      }
    });
  },
  // 用户单击弹出功能栏
  onToFunction: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['置顶', '刷新', '套红', '加粗', '删除'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
          if (res.tapIndex == 0) {
            // this.openConfirm();
            that.openConfirm();
          }
        }
      }
    });
  },
  // 微信支付
  wxPay: function () {
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  },
  

})