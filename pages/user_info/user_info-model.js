import { Base } from '../../utils/base.js';

class Info extends Base {
    constructor() {
        super();
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
    editInfo(data,callBack) {
        var params = {
            url: 'user/updateUser',
            data: data,
            type: 'POST',
            dataType:'JSON',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }

        this.request(params);
    }
    
}

export { Info };