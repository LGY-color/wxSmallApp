// menu_list.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["置顶", "最热"],
    curNav: 0,
    icon60: '../../images/demoimages.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 筛选栏
  tabClick: function (event) {
    console.log(event.currentTarget.id);
    this.setData({
      curNav: event.currentTarget.id
    });
  },
  // 重定向到filter_list页面
  onReToFilterList: function () {
    wx.redirectTo({
      url: '../filter_list/filter_list',
    })
  },
  // 重定向到menu
  onReToMenu: function () {
    console.log('ok');
    wx.switchTab ({
      url: '../menu/menu',
    })
  }
})