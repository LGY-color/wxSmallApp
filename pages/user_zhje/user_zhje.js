// user_je.js
import { Zhje } from 'user_zhje-model.js';
import { Config } from '../../utils/config.js';
var zhje = new Zhje();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    top_day: Config.top_day,
    top_money: Config.top_money,
    red_money: Config.red_money,
    bold_money: Config.bold_money,
    refresh_money: Config.refresh_money,
    unlock_money: Config.unlock_money
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },
  _loadData: function () {
    var that = this;
    zhje.getUserInfo((res) => {
      // console.log(res[0]);
      res = res[0];
      that.setData({
        'userInfo': res
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
  onUnlock: function () {
    var money = this.data.unlock_money;
    wx.showModal({
      title: '操作提示',
      content: '是否花费' + money + '金币解锁',
      confirmText: "去支付",
      cancelText: "再考虑",
      success: function (res) {
        if (res.confirm) {
          // that.wxPay(),

          zhje.toUnlock((res) => {
            if (res.code == 200) {
              wx.showToast({
                title: res.msg,
                icon: 'success',
                duration: 1000,
                success: function () {
                  setTimeout(function () {
                    wx.redirectTo({
                      url: '../user_zhje/user_zhje'
                    });
                  }, 1000);
                }
              });
            } else {
              wx.showToast({
                title: res.msg,
                image: '../../images/cry.png',
                duration: 1000,
                success: function () {
                  setTimeout(function () {
                    wx.navigateTo({
                      url: '../add_money/add_money?money=' + money
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
  //用户充值
  addMoney: function () {
    wx.navigateTo({
      url: '../add_money/add_money'
    });
  },
  onReToMenu: function () {
    wx.switchTab({
      url: '../user/user',
    })
  }

})