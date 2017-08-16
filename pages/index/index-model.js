import { Base } from '../../utils/base.js';

class Index extends Base {
  constructor() {
    super();
  }
  //获取初始化信息
  getIndexData(callBack) {
    var params = {
      url: 'index',
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
  //获取更多置顶信息
  getMoreTop(page,callBack){
    var params = {
      url: 'info/getMoreTop/'+page,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
  //获取更多星级信息
  getMoreStar(page,callBack){
    var params = {
      url: 'info/getMoreStar/'+page,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
  //获取更多最新信息
  getMoreNew(page,callBack){
    var params = {
      url: 'info/getMoreNew/'+page,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
  //获取更多小吃盘店信息
  getMoreXcpd(page,callBack){
    var params = {
      url: 'info/getMoreXcpd/'+page,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
  //获取更多招工求职信息
  getMoreZgqz(page,callBack){
    var params = {
      url: 'info/getMoreZgqz/'+page,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
  //获取更多店面承包信息
  getMoreDmcb(page,callBack){
    var params = {
      url: 'info/getMoreDmcb/'+page,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
  //获取更多二手市场信息
  getMoreEssc(page,callBack){
    var params = {
      url: 'info/getMoreEssc/'+page,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { Index };