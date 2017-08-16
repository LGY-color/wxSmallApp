//index.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
// var base64 = require("../images/base64");
//获取应用实例
import {Index} from 'index-model.js';
var app = getApp();
var index = new Index();
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
    tabs: ["置顶", "星级", "最新"],//选项卡名称
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    icon60: '../../images/demoimages.png',
    page:{
      'topPage':0,
      'starPage':0,
      'newPage':0,
      'xcpdPage':0,
      'zgqzPage':0,
      'dmcbPage':0,
      'esscPage':0
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this._loadData();
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
  _loadData:function(){
    var that = this;
    index.getIndexData((res)=>{
      that.setData({
        'topData': res.top_info,
        'starData': res.star_info,
        'newData': res.new_info,
        'xcpdData': res.xcpd_info,
        'zgqzData': res.zgqz_info,
        'dmcbData': res.dmcb_info,
        'esscData': res.essc_info
      });
    });
  },
  // //回调函数
  // callBack:function(res){
  //   console.log(res);
  // },
  toDetailInfo:function(event){
    var id = index.getDataSet(event,'id');
    wx.navigateTo({
      url: '../list/list?id=' + id,
    })
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
  },
  //提示
  moreToast:function(res){
    if(res == ''){
      wx.showToast({
        title: '没有更多了',
        icon: 'loading',
        duration: 1000
      });
    }else{
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 500
      });
    }
  },
  //获取置顶
  getMoreTop:function(event){
    var page = this.data.page.topPage;
    var data = this.data.topData;
    page = page + 5;
    this.setData({
      "page.topPage" :page
    });
    
    index.getMoreTop(page,(res)=>{
      this.moreToast(res);
      this.setData({
        'topData': data.concat(res)
      });
    });
  },
  //获取星级
  getMoreStar:function(event){
    var page = this.data.page.starPage;
    var data = this.data.starData;
    page = page + 5;
    this.setData({
      "page.starPage" :page
    });
    index.getMoreStar(page,(res)=>{
      this.moreToast(res);
      this.setData({
        'starData': data.concat(res)
      });
    });
  },
  //获取最新
  getMoreNew:function(event){
    var page = this.data.page.newPage;
    var data = this.data.newData;
    page = page + 5;
    this.setData({
      "page.newPage" :page
    });
    index.getMoreNew(page,(res)=>{
      this.moreToast(res);
      this.setData({
        'newData': data.concat(res)
      });
    });
    
  },
  //获取小吃盘店
  getMoreXcpd:function(event){
    var page = this.data.page.xcpdPage;
    var data = this.data.xcpdData;
    page = page + 5;
    this.setData({
      "page.xcpdPage" :page
    });
    index.getMoreXcpd(page,(res)=>{
      this.moreToast(res);
      this.setData({
        'xcpdData': data.concat(res)
      });
    });
  },
  //获取招工求职
  getMoreZgqz:function(event){
    var page = this.data.page.zgqzPage;
    var data = this.data.zgqzData;
    page = page + 5;
    this.setData({
      "page.zgqzPage" :page
    });
    index.getMoreZgqz(page,(res)=>{
      this.moreToast(res);
      this.setData({
        'zgqzData': data.concat(res)
      });
    });
  },
  //获取店面承包
  getMoreDmcb:function(event){
    var page = this.data.page.dmcbPage;
    var data = this.data.dmcbData;
    page = page + 5;
    this.setData({
      "page.dmcbPage" :page
    });
    index.getMoreDmcb(page,(res)=>{
      this.moreToast(res);
      this.setData({
        'dmcbData': data.concat(res)
      });
    });
  },
  //获取二手市场
  getMoreEssc:function(event){
    var page = this.data.page.esscPage;
    var data = this.data.esscData;
    page = page + 5;
    this.setData({
      "page.esscPage" :page
    });
    index.getMoreEssc(page,(res)=>{
      this.moreToast(res);
      this.setData({
        'esscData': data.concat(res)
      });
    });
  },

})
