// edit.js
import { Essc } from 'edit_sb-model.js';
import { Config } from '../../utils/config.js';
const qiniuUploader = require("../../utils/qiniuUploader");
var essc = new Essc();
var app = getApp();
//七牛云初始参数
function initQiniu() {
  var options = {
    region: Config.region, // 华北区
    uptokenURL: Config.restUrl + Config.uptokenURL,
    // uptoken: 'xxxx',
    domain: Config.domain,
    shouldUseQiniuFileName: false
  };
  qiniuUploader.init(options);
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    essc: null,
    files: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
  },
  _loadData: function () {
    var that = this;
    wx.getStorage({
      key: 'essc',
      success: function (res) {
        console.log(res.data)
        that.setData({
          "essc": res.data
        });
      }
    })
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
  // checkbox
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);
  },
  // uploadImg
  chooseImage: function (e) {
    var filesLength = this.data.files.length;
    var that = this;
    if (filesLength < 3) {
      initQiniu();
      wx.chooseImage({
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          that.upImg(res);
          // that.setData({
          //   files: that.data.files.concat(res.tempFilePaths)
          // });
        }
      });
    }else{
      wx.showToast({
        title: '最多上传3张图片',
        image: '../../images/cry.png',
        duration: 2000
      });
    }
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    });
  },
  backLast: function () {
    wx.navigateBack({
      delta: 1 // 回退前 delta(默认为1) 页面
    })
  },
  // pick选择器
  bindPickerChange: function (e) {
    var name = essc.getDataSet(e, 'name');
    switch (name) {
      case 'classify':
        this.setData({
          classify: e.detail.value
        });
        break;
      case 'province':
        this.setData({
          province: e.detail.value
        });
        break;
      case 'valid_period':
        this.setData({
          valid_period: e.detail.value
        });
        break;
      case 'new_old':
        this.setData({
          new_old: e.detail.value
        });
        break;
      // default:
      //   n 与 case 1 和 case 2 不同时执行的代码
    }
    console.log('picker发送选择改变，携带值为', e.detail.value);
    // this.setData({
    //   index: e.detail.value
    // })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var data = e.detail.value;
    data.img_url = this.data.files;
    console.log(data);
    essc.addInfo(e.detail.value, (res) => {
      if(res == 1){
        wx.showToast({
          title: '发布成功',
          icon: 'success',
          duration: 1000
        });
        setTimeout(function(){
          wx.navigateBack();
        },1000);
        
      }else{
        wx.showToast({
          title: '发布异常,请重试',
          image: '../../images/cry.png',
          duration: 2000
        });
      }
    });
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  //上传图片
  upImg: function (data) {
    var that = this;
    var filePath = data.tempFilePaths[0];
    // 交给七牛上传
    qiniuUploader.upload(filePath, (res) => {
      console.log(res);
      that.setData({
        'files': that.data.files.concat(res.imageURL)
      });
      wx.showToast({
        title: '上传成功',
        icon: 'success',
        duration: 1000
      });
    }, (error) => {
      console.error('error: ' + JSON.stringify(error));
      // var files = that.data.files.pop();
      wx.showToast({
        title: '上传失败，请重试',
        image: '../../images/cry.png',
        duration: 2000
      });
    });
  }

})