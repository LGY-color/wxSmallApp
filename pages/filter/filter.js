// filter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    title: "",
    checkName:"",
    radioItems: [
      { name: '不限', value: '0', checked: true },
      { name: '广东', value: '1'},
      { name: '海南', value: '2'},
      { name: '浙江', value: '3'},
      { name: '广西', value: '4'},
      { name: '北京', value: '5'}
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.list,
      checkName: options.filter
    });
    var radioItems = this.data.radioItems;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].name == this.data.checkName;
    }
    this.setData({
      radioItems: radioItems
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
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var radioItems = this.data.radioItems;
    var checkName = this.data.checkName;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
      if (radioItems[i].checked){
        checkName = radioItems[i].name;
      }
    }

    this.setData({
      checkName: checkName,
      radioItems: radioItems
    });
  },
  // 确认返回
  onSureBack :function(event){
    var filter = this.data.checkName;
    var list = this.data.title;
    // 返回带条件
    wx.redirectTo({
      url: '../filter_list/filter_list?list=' + list + '&filter=' + filter
    })
  }
})