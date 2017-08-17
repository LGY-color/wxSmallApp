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
    scrollTop: 100
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
          // 'windowHeight' : 300
        });
      }
    });
    console.log('onLoad');
    var big_item_id = options.big_item_id;
    this.setData({
      'big_item_id': big_item_id
    });
    this._loadFilterData();
  },
  //滚动条位置
  // tapMove: function(e) {
  //   console.log('tapMove');
  //   this.setData({
  //     'scrollTop': this.data.windowHeight - 60
  //   })
  // },
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
  _loadData: function (page = 0, style = 0) {
    var that = this;
    var id = this.data.big_item_id;
    var infoData = this.data.infoData;
    var result = this.data.res;
    if (result != 0) {
      menuList.getInfoByItem(id, style, page, (res) => {
        wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 500
        });
        console.log('_loadData');
        console.log(res.length);
        that.setData({
          'res': res.length,
          'infoData': infoData.concat(res)
        });
      });
    } else {
      wx.showToast({
        title: '没有更多了',
        icon: 'loading',
        duration: 1000
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
    var page = this.data.page;
    page = page + 7;
    this.setData({
      'page': page
    });
    
    this._loadFilterData(page)
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
    console.log('onShow');
    // this._loadFilterData();
  },
  _loadFilterData: function (page = 0, style = 0) {
    // this.tapMove();
    var condition = this.data.condition;
    var id = this.data.big_item_id;
    var style = this.data.style;
    console.log('id:'+id);
    if (!style) {
      style = 0;
    }
    if (true) {
      console.log('_loadFilterData');
      condition['infoid'] = this.data.big_item_id;
      condition['style'] = style;
      condition['page'] = page;
      condition = JSON.stringify(condition);
      menuList.getInfoByCondition(condition, (res) => {
        res = JSON.parse(res);
        // console.log(res);
        this.setData({
          'infoData': infoData.concat(res)
        });
      });
    } else {
      this._loadData(page, style);
    }
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
    
    console.log(event.currentTarget.id);
    var style = event.currentTarget.id;
    if (style == 0 || style == 1) {
      this.setData({
        'style': style,
        'res': 1,
        'infoData':[]
      });
      this._loadFilterData();
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
})