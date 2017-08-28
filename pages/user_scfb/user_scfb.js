// user_scfb.js
import { Scfb } from 'user_scfb-model.js';
import { Config } from '../../utils/config.js';
var scfb = new Scfb();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon60: '../../images/demoimages.png',
    infoData: [],
    page: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },
  _loadData: function (page = 0) {
    var that = this;
    var data = this.data.infoData;
    scfb.getInfoById(page, (res) => {
      console.log(res);
      that.setData({
        'infoData': data.concat(res)
      });
    });
  },
  toDetailInfo: function (event) {
    var id = scfb.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../list/list?id=' + id,
    });
  },
  //提示
  moreToast: function (res) {
    if (res == '') {
      wx.showToast({
        title: '没有更多了',
        icon: 'loading',
        duration: 1000
      });
    } else {
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      });
    }
  },
  //获取置顶
  getMoreInfo: function (event) {
    var that = this;
    var page = this.data.page;
    var data = this.data.infoData;
    page = page + 5;
    this.setData({
      "page": page
    });
    scfb.getInfoById(page, (res) => {
      that.moreToast(res);
      that.setData({
        'infoData': data.concat(res)
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
  //跳转到个人中心
  onReToMenu: function () {
    console.log('onReToMenu');
    wx.switchTab({
      url: '../user/user'
    });
  },

})