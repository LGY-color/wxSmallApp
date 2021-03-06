// edit.js
import { Zgqz } from 'edit_zg-model.js';
import { Config } from '../../utils/config.js';
const qiniuUploader = require("../../utils/qiniuUploader");
var zgqz = new Zgqz();
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
    zgqz: null,
    files: [],
    edit:false,
    btnLock:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._loadData();
    var infoid = options.infoid;
    if(infoid){
      this._loadInfo(infoid);
      this.setData({
        'infoid':infoid,
        'edit' : true
      })
    }
  },
  _loadInfo:function(infoid){
    var that = this;
    zgqz.getInfoById(infoid,(res)=>{
      res = res[0];
      console.log(res);
      that.setData({
        iclassify: res.big_item_name,
        iprovince: res.province,
        ititle: res.title,
        ivalid_period: res.valid_period,
        imonthly_salary: res.monthly_salary,
        isex : res.sex,
        iwork_experience: res.work_experience,
        iwork_skill : res.work_skill,
        iwork_hours : res.work_hours,
        iage : res.age,
        ihealth_status: res.health_status,
        icash_pledge : res.cash_pledge,
        ilive_conditions : res.live_conditions,
        itakeaway_status :res.takeaway_status,
        iopen_hours:res.open_hours,
        iclose_hours:res.close_hours,
        icontact_name:res.contact_name,
        icontact_phone: res.contact_phone,
        icontact_wx: res.contact_wx,
        icontent:res.content,
        files:res.img_url,
        id_url: res.id_url
      });
    });
  },
  _loadData: function () {
    var that = this;
    wx.getStorage({
      key: 'zgqz',
      success: function (res) {
        // console.log(res.data)
        that.setData({
          "zgqz": res.data
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
    // console.log('checkbox发生change事件，携带value值为：', e.detail.value);
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
    } else {
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
    var name = zgqz.getDataSet(e, 'name');
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
      case 'monthly_salary':
        this.setData({
          monthly_salary: e.detail.value
        });
        break;
      case 'sex':
        this.setData({
          sex: e.detail.value
        });
        break;
      case 'work_experience':
        this.setData({
          work_experience: e.detail.value
        });
        break;
      case 'work_skill':
        this.setData({
          work_skill: e.detail.value
        });
        break;
      case 'work_hours':
        this.setData({
          work_hours: e.detail.value
        });
        break;
      case 'age':
        this.setData({
          age: e.detail.value
        });
        break;
      case 'health_status':
        this.setData({
          health_status: e.detail.value
        });
        break;
      case 'cash_pledge':
        this.setData({
          cash_pledge: e.detail.value
        });
        break;
      case 'live_conditions':
        this.setData({
          live_conditions: e.detail.value
        });
        break;
      case 'takeaway_status':
        this.setData({
          takeaway_status: e.detail.value
        });
        break;
      case 'open_hours':
        this.setData({
          open_hours: e.detail.value
        });
        break;
      case 'close_hours':
        this.setData({
          close_hours: e.detail.value
        });
        break;
      // default:
      //   n 与 case 1 和 case 2 不同时执行的代码
    }
    // console.log('picker发送选择改变，携带值为', e.detail.value);
    // this.setData({
    //   index: e.detail.value
    // })
  },
  formSubmit: function (e) {
    this.setData({
      'btnLock':true
    });
    var data = e.detail.value;
    var edit = this.data.edit;
    data.img_url = this.data.files;
    data.infoid = this.data.infoid;

    if(edit){
      zgqz.editInfo(data, (res) => {
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
    }else{
      zgqz.addInfo(data, (res) => {
        if (res == 1) {
          wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 1000
          });
          setTimeout(function () {
            wx.navigateBack();
          }, 1000);
  
        } else {
          wx.showToast({
            title: '发布异常,请重试',
            image: '../../images/cry.png',
            duration: 2000
          });
        }
      });
    }
    
  },
  formReset: function () {
    // console.log('form发生了reset事件')
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
      // console.error('error: ' + JSON.stringify(error));
      // var files = that.data.files.pop();
      wx.showToast({
        title: '上传失败，请重试',
        image: '../../images/cry.png',
        duration: 2000
      });
    });
  }

})