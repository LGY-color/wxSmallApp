import {Config} from '../utils/config.js';
import {Token} from '../utils/token.js';
class Base{
  constructor(){
    this.baseRequestUrl = Config.restUrl;
  }
  //封装请求
  request(params){
    var that = this;
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
        var code = res.statusCode.toString();
        var startChar = code.charAt(0);
        if(startChar == '2'){
          params.sCallBack && params.sCallBack(res.data);
        }else{
          if(code == '401'){
            //token.getTokenFromServer
            //base.request
            that._refetch(params);
          }
          params.eCallBack && params.eCallBack(res.data);
        }

        
      },
      fail: function(res) {
        console.log(res);
      },
      complete: function(res) {},
    })
  }

  _refetch(params){
    var token =  new Token();
    token.getTokenFromServer((token)=>{
      this.request(params);
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