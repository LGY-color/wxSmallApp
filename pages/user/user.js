// user.js
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
  onReToPlxx:function(){
    wx.redirectTo({
      url: '../user_plxx/user_plxx',
    })
  },
  //跳转到发布收藏
  toReToFbsc: function () {
    wx.redirectTo({
      url: '../user_fbsc/user_fbsc',
    })
  }
})