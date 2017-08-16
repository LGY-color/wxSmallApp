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
    icon60: '../../images/demoimages.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad');
    var big_item_id = options.big_item_id;
    this.setData({
      'big_item_id': big_item_id
    });
    this._loadData();
  },
  _loadData: function (style=0,page=0) {
    var that = this;
    var id = this.data.big_item_id;
    menuList.getInfoByItem(id,style, (res) => {
      console.log(res);
      that.setData({
        'infoData' : res
      });
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
    this._loadFilterData();
  },
  _loadFilterData:function(){
    var condition = this.data.condition;
    var id = this.data.big_item_id;
    var style = this.data.style;
    if(!style){
      style=0;
    }
    if(condition){
      condition['id'] = id;
      condition['style'] = style;
      condition = JSON.stringify(condition);
      menuList.getInfoByCondition(condition,(res)=>{
        res = JSON.parse(res);
        console.log(res);
        this.setData({
          'infoData' : res
        });
      });
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
  toDetailInfo:function(event){
    var id = menuList.getDataSet(event,'id');
    wx.navigateTo({
      url: '../list/list?id=' + id,
    })
  },
  // 筛选栏
  tabClick: function (event) {
    // console.log(this.data.infoData);
    console.log(event.currentTarget.id);
    var style = event.currentTarget.id;
    if(style == 0 || style == 1){
      this._loadData(style);
      this.setData({
        style:style
      });
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