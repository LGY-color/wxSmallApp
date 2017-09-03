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
    //询问用户是否登录
    // this.userSureLogin();
    //默认登录
    this.getUserInfo();
    token.getTokenFromServer();
    
    this.addXcpd();
    this.addDmcb();
    this.addEssc();
    this.addZgqz();
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
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
  globalData: {
    userInfo: null,
  },
  toDetailInfo: function (event) {
    var id = base.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../list/list?id=' + id,
    })
  },
  userSureLogin: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '是否允许该小程序获取你的用户信息',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定');
          that.getUserInfo();
          token.getTokenFromServer();
        } else if (res.cancel) {
          wx.showToast({
            title: '部分功能受限',
            image: '/images/cry.png',
            duration: 2000
          })
        }
      }
    })
  },
  addXcpd: function () {
    wx.setStorage({
      key: "xcpd",
      data: {
        "classify": ["店铺转让", "求转店铺"],
        "province": ["北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"],
        "valid_period": ["长期有效", "一周", "一个月", "两个月", "一年"],
        "monthly_rent": ["2500元以下", "2500-5000元", "5000-7000元", "7000元-10000元", "10000元以上"],
        "day_turnover": ["500元以下", "500-800元", "800-1000元", "1000-1500元", "1500-2000元", "2000-2500元", "2500-3000元", "3000-5000元", "5000元以上"],
        "transfer_fee": ["面议", "一万以下", "1万-3万", "3万-6万", "6万-10万", "10万-15万", "15万以上"],
        "water_electricity": ["500元以下", "500-800元", "800-1000元", "1000-1500元", "1500元以上"],
        "takeaway_status": ["有", "没有"],
        "decoration": ["简单装修", "中等装修", "精装修"],
        "surroundings": ["工厂", "学校", "小区", "商场", "超市", "车站", "公园", "市场", "飞机场", "其他"],
        "shop_facilities": ["水电", "燃气", "有线电视", "空调", "电话", "宽带WiFi", "消毒柜", "其他", "齐全"],
        "hold_credentials": ["营业执照", "卫生许可证"]
      }
    });
  },
  addDmcb:function(){
    wx.setStorage({
      key: "dmcb",
      data: {
        "classify": ["对外承包", "需求承包"],
        "province": ["北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"],
        "valid_period": ["长期有效", "一周", "一个月", "两个月", "一年"],
        "monthly_rent": ["2500元以下", "2500-5000元", "5000-7000元", "7000元-10000元", "10000元以上"],
        "day_turnover": ["500元以下", "500-800元", "800-1000元", "1000-1500元", "1500-2000元", "2000-2500元", "2500-3000元", "3000-5000元", "5000元以上"],
        "water_electricity": ["500元以下", "500-800元", "800-1000元", "1000-1500元", "1500元以上"],
        "takeaway_status": ["有", "没有"],
        "decoration": ["简单装修", "中等装修", "精装修"],
        "surroundings": ["工厂", "学校", "小区", "商场", "超市", "车站", "公园", "市场", "飞机场", "其他"],
        "shop_facilities": ["水电", "燃气", "有线电视", "空调", "电话", "宽带WiFi", "消毒柜", "其他", "齐全"],
        "hold_credentials": ["营业执照", "卫生许可证"]
      }
    });
  },
  addEssc:function(){
    wx.setStorage({
      key: "essc",
      data: {
        "classify": ["餐具设备", "其他物品"],
        "province": ["北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"],
        "valid_period": ["长期有效", "一周", "一个月", "两个月", "一年"],
        "new_old":["全新","9成新","7成新","5成新"]
      }
    });
  },
  addZgqz:function(){
    wx.setStorage({
      key: "zgqz",
      data: {
        "classify": ["招工信息", "求职信息"],
        "province": ["北京市", "天津市", "上海市", "重庆市", "河北省", "山西省", "辽宁省", "吉林省", "黑龙江省", "江苏省", "浙江省", "安徽省", "福建省", "江西省", "山东省", "河南省", "湖北省", "湖南省", "广东省", "海南省", "四川省", "贵州省", "云南省", "陕西省", "甘肃省", "青海省", "台湾省", "内蒙古自治区", "广西壮族自治区", "西藏自治区", "宁夏回族自治区", "新疆维吾尔自治区", "香港特别行政区", "澳门特别行政区"],
        "valid_period": ["长期有效", "一周", "一个月", "两个月", "一年"],
        "monthly_salary":["面议","1000以下","1000-2000","2000-3000","3000-4000","4000-5000","5000-6000","6000-8000","8000以上"],
        "sex":["男","女","性别不限"],
        "work_experience":["新手","一年","两年","三年","三年以上"],
        "work_skill":["沙县小吃","套餐饭","黄焖鸡","炸酱面","炒菜","无所不会","肯学肯干","持有厨师证"],
        "work_hours":["8小时以内","8-10小时","10-12小时","12小时以上"],
        "age":["20岁以下","20-30岁","30-40岁","40岁以上"],
        "health_status":["肯干就行","身强体壮","状态良好","一般","药不停","残疾"],
        "cash_pledge":["需要","不需要"],
        "live_conditions":["单间","集体","阁楼","其他"],
        "takeaway_status":["有","没有"],
        "open_hours":["5:00之前","5:00-6:00","6:00-7:00","7:00-8:00","8:00-9:00","9:00以后","通宵营业","看情况"],
        "close_hours":["20:00之前","20:00-21:00","21:00-22:00","22:00-23:00","23:00-0:00","0:00-1:00","1:00以后","不打烊","看情况"]
      }
    });
  },
})