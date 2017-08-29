// user_fbsc.js
import { Fbsc } from 'user_fbsc-model.js';
import { Config } from '../../utils/config.js';
var fbsc = new Fbsc();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon60: '../../images/demoimages.png',
    infoData: [],
    page: 0,
    top_level: Config.top_level,
    red_level: Config.red_level,
    bold_level: Config.bold_level,
    top_day: Config.top_day,
    top_time: Config.top_time,
    top_money: Config.top_money,
    red_money: Config.red_money,
    bold_money: Config.bold_money,
    refresh_money:Config.refresh_money,
    unlock_money:Config.unlock_money
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },
  _loadData: function (page = 0) {
    var that = this;
    var data = this.data.infoData;
    fbsc.getInfoById(page, (res) => {
      console.log(res);
      that.setData({
        'infoData': data.concat(res)
      });
    });
  },
  toDetailInfo: function (event) {
    var id = fbsc.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../list/list?id=' + id,
    });
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
  //获取置顶
  getMoreInfo: function (event) {
    var that = this;
    var page = this.data.page;
    var data = this.data.infoData;
    page = page + 5;
    this.setData({
      "page": page
    });
    fbsc.getInfoById(page, (res) => {
      that.moreToast(res);
      that.setData({
        'infoData': data.concat(res)
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
  // 设置置顶 套红 加粗
  setLevel: function (event) {
    var level = fbsc.getDataSet(event, 'level');
    var infoid = fbsc.getDataSet(event, 'infoid');
    this.setData({
      'level': level,
      'infoid': infoid
    });
    if (level == this.data.top_level) {
      this.onTopDay();
    } else {
      this.openConfirm();
    }
  },
  // 用户单击弹出功能栏
  onTopDay: function () {
    var that = this;
    wx.showActionSheet({
      itemList: that.data.top_day,
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
          // if (res.tapIndex == 0) {
          // this.openConfirm();
          that.openConfirm(res.tapIndex);
          // }
        }
      }
    });
  },
  openConfirm: function (index) {
    var that = this;
    var level = that.data.level;
    if (level == that.data.top_level) {
      var money = that.data.top_money[index];
      var top_time = that.data.top_time[index];
      var data = {
        'top_time': top_time,
        'level': that.data.level,
        'infoid': that.data.infoid
      };
    }
    if (level == that.data.red_level) {
      var money = that.data.red_money;
      var data = {
        'level': that.data.level,
        'infoid': that.data.infoid
      }
    }
    if (level == that.data.bold_level) {
      var money = that.data.bold_money;
      var data = {
        'level': that.data.level,
        'infoid': that.data.infoid
      }
    }

    console.log("openConfirm");
    wx.showModal({
      title: '操作提示',
      content: '是否花费' + money + '金币置顶',
      confirmText: "去支付",
      cancelText: "再考虑",
      success: function (res) {
        if (res.confirm) {
          // that.wxPay(),
          fbsc.setLevelStatus(data, (result) => {
            console.log(result)
            result = JSON.parse(result);
            if (result.error_code == '7788') {
              console.log('微信支付');
            } else {
              wx.showToast({
                title: result.msg,
                icon: 'success',
                duration: 1000,
                success: function () {
                  setTimeout(function () {
                    wx.redirectTo({
                      url: '../user_fbsc/user_fbsc'
                    });
                  }, 1000);
                }
              });
            }

          });
          console.log('用户点击去支付')
        } else {
          console.log('用户点击再考虑')
        }
      }
    });
  },
  //去刷新
  setRefresh: function (event) {
    var money = this.data.refresh_money;
    var infoid = fbsc.getDataSet(event, 'infoid');
    wx.showModal({
      title: '操作提示',
      content: '是否花费' + money + '金币置顶',
      confirmText: "去支付",
      cancelText: "再考虑",
      success: function (res) {
        if (res.confirm) {
          // that.wxPay(),
          fbsc.setRefresh(infoid, (result) => {
            // res = JSON.parse(res); get 返回无需 对象化
            console.log(result)
            if (result.error_code == '7788') {
              console.log('微信支付');
            } else {
              wx.showToast({
                title: result.msg,
                icon: 'success',
                duration: 1000,
                success: function () {
                  setTimeout(function () {
                    wx.redirectTo({
                      url: '../user_fbsc/user_fbsc'
                    });
                  }, 1000);
                }
              });
            }
          });
          console.log('用户点击去支付')
        } else {
          console.log('用户点击再考虑')
        }
      }
    });
  },
  //设置已成交
  setDeal:function(event){
    var infoid = fbsc.getDataSet(event, 'infoid');
    wx.showModal({
      title: '操作提示',
      content: '是否把信息设置为已成交',
      confirmText: "确定了",
      cancelText: "再考虑",
      success: function (res) {
        if (res.confirm) {
          // that.wxPay(),
          fbsc.setDeal(infoid, (result) => {
            // res = JSON.parse(res); get 返回无需 对象化
            console.log(result)
            if (result.error_code == '7788') {
              console.log('微信支付');
            } else {
              wx.showToast({
                title: result.msg,
                icon: 'success',
                duration: 1000,
                success: function () {
                  setTimeout(function () {
                    wx.redirectTo({
                      url: '../user_fbsc/user_fbsc'
                    });
                  }, 1000);
                }
              });
            }
          });
          console.log('用户点击去支付')
        } else {
          console.log('用户点击再考虑')
        }
      }
    });
  },
  toEdit:function(event){
    console.log('edit');
    var infoid = fbsc.getDataSet(event,'id');
    var bid = fbsc.getDataSet(event,'bid');
    wx.showModal({
      title: '提示',
      content: '是否去修改信息',
      success: function(res) {
        if (res.confirm) {
          if(bid==5 || bid==6){
              //xcpd
              wx.navigateTo({
                url: '../edit_pd/edit_pd?infoid='+infoid
              });
          }else if(bid==7 || bid==8){
              //zgqz
              wx.navigateTo({
                url: '../edit_zg/edit_zg?infoid='+infoid
              });
          }else if(bid==9 || bid==10){
              //dmcb
          }else if(bid==11 || bid==12){
              //essc 
          }
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //跳转到个人中心
  onReToMenu: function () {
    console.log('onReToMenu');
    wx.switchTab({
      url: '../user/user'
    });
  },
  // 微信支付
  wxPay: function () {
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  },


})