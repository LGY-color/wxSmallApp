// user.js
import { User } from 'user-model.js';
var user = new User();
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon60: '../../images/demoimages.png',
    icon201: '../../images/je_user.png',
    icon202: '../../images/fb_user.png',
    icon203: '../../images/sc_user.png',
    icon204: '../../images/pl_user.png',
    icon205: '../../images/xx_user.png',
    icon206: '../../images/sz_user.png',
    userInfo: null,
    noReadNum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData({
      "userInfo": app.globalData.userInfo
    });
    // console.log(this.data.userInfo);
    if (!app.globalData.userInfo) {
      app.userSureLogin((res) => {
        console.log(res);
        this.setData({
          "userInfo": app.globalData.userInfo
        });
        that._loadData();
      });
    }
    that._loadData();
  },
  _loadData: function () {
    var that = this;
    user.getNoReadNum((res) => {
      that.setData({
        'noReadNum': res.noReadNum
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
  //跳转到个人评论
  onReToPlxx: function () {
    wx.redirectTo({
      url: '../user_plxx/user_plxx',
    })
  },
  //跳转到已发布信息
  toReToFbsc: function () {
    wx.redirectTo({
      url: '../user_fbsc/user_fbsc',
    })
  },
  //跳转到收藏信息
  toReToScfb: function () {
    wx.redirectTo({
      url: '../user_scfb/user_scfb',
    })
  },
  //跳转到账户金额
  toReZhje:function(){
    wx.redirectTo({
      url: '../user_zhje/user_zhje',
    })
  },
  //跳转到用户信息
  toUserInfo:function(){
    wx.redirectTo({
      url: '../user_info/user_info',
    })
  },
  //跳转到获得消息
  onReToXxpl: function () {
    var num = this.data.noReadNum;
    wx.redirectTo({
      url: '../user_xxpl/user_xxpl?num=' + num,
    })
  },
  onPullDownRefresh: function () {
    this._loadData();
    wx.stopPullDownRefresh();
    console.log('下拉刷新');
  }
})