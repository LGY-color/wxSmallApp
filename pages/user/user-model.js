import { Base } from '../../utils/base.js';

class User extends Base {
    constructor() {
        super();
    }
    getNoReadNum(callBack) {
        var params = {
            url: 'comment/getNoReadNum',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
    getUserInfo(callBack) {
        var params = {
          url: 'user/getUserInfo',
          sCallBack: function (res) {
            callBack && callBack(res);
          }
        }
        this.request(params);
    }
}

export { User };