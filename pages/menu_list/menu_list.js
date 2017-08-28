// menu_list.js
import { MenuList } from 'menu_list-model.js';
var menuList = new MenuList();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["最新", "置顶"],
    curNav: 0,
    icon60: '../../images/demoimages.png',
    page: 0,
    infoData: [],
    scrollTop: 100,
    scrollStatus:true
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          'windowHeight': res.windowHeight
        });
      }
    });
    console.log('onLoad');
    var big_item_id = options.big_item_id;
    this.setData({
      'big_item_id': big_item_id
    });
  },
  // 滚动条位置
  tapMove: function(e) {
    console.log('tapMove');
    this.setData({
      'scrollTop': this.data.scrollTop + 50 
    })
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
  // upper: function(e) {
  //   wx.showToast({
  //     title: '正在刷新中...',
  //     icon: 'loading',
  //     duration: 500
  //   });
  //   console.log('upper');
  //   // console.log(e)
  // },
  lower: function (e) {
    console.log('lower');
    this.tapMove();
    var status = this.data.scrollStatus;
    if(status){
      var page = this.data.page;
      page = page + 7;
      this.setData({
        'page': page,
        'scrollStatus': false
      });
      this._loadData();
    }
    // console.log('lower');
    // console.log(e)
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
    this._loadData();
  },
  _loadData: function (page = 0, lv = 0) {
    var condition = {};
    var infoData = this.data.infoData;
    var id = this.data.big_item_id;
    if(this.data.condition){
      condition = this.data.condition;
    }
    if(this.data.lv){
      lv = this.data.lv;
    }
    if(this.data.page){
      page = this.data.page;
    }
    console.log('id:' + id);
    condition['infoid'] = id;
    condition['lv'] = lv;
    condition['page'] = page;
    condition = JSON.stringify(condition);
    menuList.getInfoByCondition(condition, (res) => {
      res = JSON.parse(res);
      console.log(res);
      this.setData({
        'infoData': infoData.concat(res),
        'scrollStatus':true
      });
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
  //点击去详情
  toDetailInfo: function (event) {
    var id = menuList.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../list/list?id=' + id,
    })
  },
  // 筛选栏
  tabClick: function (event) {
    // console.log(this.data.infoData);
    // console.log(event.currentTarget.id);
    var lv = event.currentTarget.id;
    if (lv == 0 || lv == 1) {
      this.setData({
        'lv': lv,
        'infoData': [],
        'page':0
      });
      this._loadData();
    }
    this.setData({
      curNav: event.currentTarget.id
    });
  },
  // 重定向到filter_list页面
  onReToFilterList: function () {
    wx.navigateTo({
      url: '../filter_list/filter_list',
    })
  },
  // 重定向到menu
  onReToMenu: function () {
    // console.log('ok');
    wx.switchTab({
      url: '../menu/menu',
    })
  },
  //下拉刷新
  onPullDownRefresh:function(){
    this._loadData();
    wx.stopPullDownRefresh();
    console.log('下拉刷新');
  }
})