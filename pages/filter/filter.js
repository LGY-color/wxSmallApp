// filter.js
import { Filter } from 'filter-model.js';
var filter = new Filter();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    title: "",
    checkName: "",
    // radioItems: [
    //   // { s_name: '不限', s_id: '0', checked: true },
    //   // { s_name: '广东', s_id: '1'},
    //   // { s_name: '海南', s_id: '2'},
    //   // { s_name: '浙江', s_id: '3'},
    //   // { s_name: '广西', s_id: '4'},
    //   // { s_name: '北京', s_id: '5'}
    // ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      'title': options.list,
      'checkName': options.filter,
      'itemid': options.id
    });
    this._loadData();
  },
  _loadData: function () {
    var itemid = this.data.itemid;
    // console.log(itemid);
    filter.getItemData(itemid, (res) => {
      // console.log(res);
      radioItems: res
      this.setData({
        'radioItems': res,
      });
      this.setCheckStatus();
    });
  },
  //设置选中状态
  setCheckStatus:function(){
    var radioItems = this.data.radioItems;
    // console.log(radioItems);
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      // console.log(radioItems);
      radioItems[i].checked = radioItems[i].s_name == this.data.checkName;
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
    // console.log('radio发生change事件，携带value值为：', e.detail.value);
    var radioItems = this.data.radioItems;
    var checkName = this.data.checkName;
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].s_id == e.detail.value;
      if (radioItems[i].checked) {
        checkName = radioItems[i].s_name;
      }
    }
    this.setData({
      checkName: checkName,
      radioItems: radioItems
    });
  },
  // 确认返回
  onSureBack: function (event) {
    var filter = this.data.checkName;
    var list = this.data.title;

    var pages = getCurrentPages();
    // var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    prevPage.setData({
      'backList' : list,
      'backFilter' : filter
    });
    // 返回带条件
    // wx.redirectTo({
    //   url: '../filter_list/filter_list?list=' + list + '&filter=' + filter
    // })
    wx.navigateBack({});
    
  }
})