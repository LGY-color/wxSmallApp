// hfpl.js
import { Hfpl } from 'hfpl-model.js';
var hfpl = new Hfpl();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textNum:0,
    userid:null,
    infoid:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var userid = options.userid;
    var infoid = options.infoid;
    this.setData({
      'userid':userid,
      'infoid':infoid
    });
    console.log(userid);
    console.log(infoid);
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
  // 写评论字数
  writeNum:function(event){
    this.setData({
      'textNum':event.detail.cursor
    });
  },
  // 回复消息
  commentInfo:function(event){
    var that = this;
    console.log(event.detail.value);
    var data = event.detail.value;
    hfpl.commentInfo(data,(res)=>{
      res = JSON.parse(res);
      wx.showToast({
        title: res.msg,
        icon: 'success',
        duration: 1000,
        success: function () {
          setTimeout(function () {
            wx.redirectTo({
              url: '../list/list?id='+that.data.infoid
            })
          }, 1000);
        }
      });
    });
    
  },
  replyCancel:function(){
    wx.navigateBack({
      
    })
  }
})