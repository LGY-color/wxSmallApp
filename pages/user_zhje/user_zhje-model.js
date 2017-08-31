import { Base } from '../../utils/base.js';

class Zhje extends Base {
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
    toUnlock(callBack){
        var params = {
            url: 'user/toUnlock',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
    addMoney(data,callBack) {
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

export { Zhje };