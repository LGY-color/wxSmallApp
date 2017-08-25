import { Base } from '../../utils/base.js';

class Plxx extends Base {
    constructor() {
        super();
    }
    getUserComment(page,callBack) {
        var params = {
            url: 'comment/getUserComment?page='+page,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
}

export { Plxx };