// user_fbsc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon60: '../../images/demoimages.png',
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