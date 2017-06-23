// filter_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: {
      title: ["省份", "月租", "日营", "转让", "装修", "周边", "店内", "所持"],
      content: ["广东", "北京", "不限3", "不限4", "不限5", "不限6", "不限7", "不限8"]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var backList = options.list;
    var backFilter = options.filter;
    var listData = this.data.listData;
    console.log(backList);
    console.log(listData.title[1]);
    for (var i = 0, len = listData.title.length; i < len; ++i) {
      if (listData.title[i] == backList) {
        listData.content[i] = backFilter
      };
    }
    this.setData({
      listData: listData
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
  onShow: function (options) {
    
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
  onNavTo: function (event) {
    
    var list = event.currentTarget.dataset.postList;
    var filter = event.currentTarget.dataset.postFilter;
    console.log(list);
    wx.redirectTo({
      url: '../filter/filter?list=' + list + '&filter=' + filter
    })
  },
  // 返回
  onNullBack:function(){
    wx.redirectTo({
      url: '../menu_list/menu_list',
    })
  }
})