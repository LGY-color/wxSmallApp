//app.js
import { Base } from './utils/base.js';
import { Token } from './utils/token.js'
var base = new Base();
var token = new Token();
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // var usertoken = token.getTokenFromServer(); 
    this.userSureLogin();
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              // console.log(that.globalData.userInfo);
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
  },
  toDetailInfo:function(event){
    var id = base.getDataSet(event,'id');
    wx.navigateTo({
      url: '../list/list?id=' + id,
    })
  },
  userSureLogin:function(){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否允许该小程序获取你的用户信息',
      success: function(res) {
        if (res.confirm) {
          // console.log('用户点击确定');
          that.getUserInfo();
          token.getTokenFromServer();
        } else if (res.cancel) {
          wx.showToast({
            title: '部分功能受限',
            image:'/images/cry.png',
            duration: 2000
          })
        }
      }
    })
  }

})