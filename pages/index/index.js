//index.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
// var base64 = require("../images/base64");
//获取应用实例
var app = getApp()
Page({
  data: {
    // -----搜索-----
    inputShowed: false,
    inputVal: "",
    motto: 'Hello World',
    userInfo: {},
    // -----轮播广告-----
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],//图片来源
    indicatorDots: true,//是否有点
    autoplay: true,//自动播放
    interval: 5000,//播放间隔时间
    duration: 1000,//滑动动画时长
    circular: true,//是否采用衔接滑动
    // -----轮播弹幕-----
    textValue: [
      '3天推广价48元',
      '10天成交价148元',
      '30天会员价348元'
    ],//图片来源
    indicatorDots2: false,//是否有点
    autoplay2: true,//自动播放
    interval2: 3000,//播放间隔时间
    duration2: 1000,//滑动动画时长
    circular2: true,//是否采用衔接滑动
    vertical2:false,//是否为横向滑动
    // ------栏目切换-----
    tabs: ["盘店", "招工", "求职"],//选项卡名称
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    icon60: '../../images/demoimages.png'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    //tab类相关
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  //tab
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  //搜索框事件
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})
