import { Base } from '../../utils/base.js';

class User extends Base {
    constructor() {
        super();
    }
    getNoReadNum(callBack) {
        var params = {
            url: 'news/getNoReadNum',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
}

export { User };