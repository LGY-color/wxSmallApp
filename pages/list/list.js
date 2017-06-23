// list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    length: 6,
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
  // 评论长按回复
  longTapReply:function(event){
    console.log(event.currentTarget.dataset.username); 
  },
  //点击弹窗回复
  actionSheetTap: function () {
    wx.showActionSheet({
      itemList: ['回复评论'],
      success: function (e) {
        console.log(e.tapIndex)
      }
    })
  }
})