import {Config} from '../utils/config.js';

class Base{
  constructor(){
    this.baseRequestUrl = Config.restUrl;
  }
  //封装请求
  request(params){
    var url = this.baseRequestUrl + params.url;
    if(!params.dataType){
      params.dataType = '';
    }
    if (!params.type){
      params.type = 'GET';
    }
    wx.request({
      url: url,
      data: params.data,
      header: {
        'content-type':'application/json',
        'token':wx.getStorageSync('token'),
      },
      method: params.type,
      dataType: params.dataType,
      success: function(res) {
        // if (params.sCallBack){
        //   params.sCallBack(res);
        // }
        params.sCallBack && params.sCallBack(res.data);
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {},
    })
  }

  //获取元素绑定值
  getDataSet(event,key){
    return event.currentTarget.dataset[key];
  }
  //获取更多
  getMoreData(callBack) {
    var params = {
      url: 'index',
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export {Base};