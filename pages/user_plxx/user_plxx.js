// user_plxx.js
import { Plxx } from 'user_plxx-model.js';
var plxx = new Plxx();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon60: '../../images/demoimages.png',
    commentData:[],
    page:0,
    commentRes:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },
  _loadData:function(page=0){
    var that = this;
    var commentRes = that.data.commentRes;
    console.log(commentRes);
    if(commentRes == ''){
      wx.showToast({
        title: '没有更多了',
        icon: 'loading',
        duration: 1000,
      });
    }else{
      plxx.getUserComment(page,(res)=>{
        that.setData({
          commentRes : res,
          commentData : that.data.commentData.concat(res)
        });
      });
    }
    
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
  //更多评论
  getMoreComment: function () {
    var page = this.data.page;
    page = page + 10;
    this.setData({
      'page': page
    });
    this._loadData(page);
  },
  //去查看信息详情
  toDetailInfo:function(event){
    var infoid = plxx.getDataSet(event,'infoid');
    wx.navigateTo({
      url: '../list/list?id=' + infoid,
    })
  },
  // 跳转到回复页面
  toTapReply:function(){
    wx.navigateTo({
      url: '../list/list',
    })
  },
  onReToMenu:function(){
    console.log("12312312");
    wx.switchTab({
      url: '../user/user',
    })
  }
})