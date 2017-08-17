// filter_list.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: {
      title: ["省份", "月租", "日营", "转让", "装修", "周边", "店内", "所持"],
      id: [1, 3, 4, 7, 24, 23, 8, 9],
      content: ["不限", "不限", "不限", "不限", "不限", "不限", "不限", "不限"],
      en_name: ['province', 'monthly_rent', 'day_turnover', 'transfer_fee', 'decoration', 'surroundings', 'shop_facilities', 'hold_credentials']
    }
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
  onShow: function (options) {
    //返回的选中状态
    this.returnSelect();
  },
  //返回的选中状态
  returnSelect: function () {
    var backList = this.data.backList;
    var backFilter = this.data.backFilter;
    var listData = this.data.listData;
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
    var id = event.currentTarget.dataset.postId;
    // console.log(id);
    wx.navigateTo({
      url: '../filter/filter?id=' + id + '&list=' + list + '&filter=' + filter
    })
  },
  // 返回
  onNullBack: function () {
    // wx.redirectTo({
    //   url: '../menu_list/menu_list',
    // })
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onSureBack: function () {
    var arrKey = this.data.listData.en_name;
    var arrValue = this.data.listData.content;
    var obj = this.arrToObj(arrKey,arrValue);

    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2];  //上一个页面
    // console.log(obj);
    prevPage.setData({
      'condition':obj,
      'infoData':[]
    });
    wx.navigateBack();
  },
  //合并数组 数组arrKey为key arrValue为value
  arrToObj:function(arrKey,arrValue){
    var obj = {};
    for(var i=0;i<arrKey.length;i++){
      if(arrValue[i] == '不限'){
        arrValue[i] = '';
      }
      console.log(arrValue[i]);
      obj[arrKey[i]] = arrValue[i];
    }
    // return 'ok';
    return obj;
  }
})