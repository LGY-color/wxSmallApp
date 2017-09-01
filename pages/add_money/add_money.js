// pages/add_money/add_money.js
import { addMoney } from 'add_money-model.js';
var add_money = new addMoney();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      money:options.money
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
  //回到上一层
  backLast: function () {
    wx.navigateBack();
  },
  //确实支付
  formSubmit:function(event){
    var data = event.detail.value;
    add_money.getOrderInfo(data,(res)=>{
      console.log(res);
      var preData = res.data;
      wx.requestPayment({
        timeStamp: preData.timeStamp.toString(),
        nonceStr: preData.nonceStr,
        package: preData.package,
        signType: preData.signType,
        paySign: preData.paySign,
        success:function(){

        },
        fail:function(){
          
        }
      })
    });
  }
})