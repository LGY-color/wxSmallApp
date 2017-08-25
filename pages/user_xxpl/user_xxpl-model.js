import { Base } from '../../utils/base.js';

class Xxpl extends Base {
    constructor() {
        super();
    }
    getUserNews(page,callBack) {
        var params = {
            url: 'news/getUserNews?page='+page,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
}

export { Xxpl };