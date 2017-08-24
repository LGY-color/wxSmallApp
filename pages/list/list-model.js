import { Base } from '../../utils/base.js';
class List extends Base {
  constructor() {
    super();
  }
  getInfoById(id, callBack) {
    var params = {
      url: 'Info/getIdInfo/' + id,
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
  commentInfo(data, callBack) {
    var params = {
      url: 'comment/infoReply',
      data: data,
      type: 'POST',
      dataType: 'JSON',
      sCallBack: function (res) {
        callBack && callBack(res);
      }
    }
    this.request(params);
  }
}

export { List };