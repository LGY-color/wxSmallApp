import { Base } from '../../utils/base.js';
class Hfpl extends Base {
  constructor() {
    super();
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

export { Hfpl };