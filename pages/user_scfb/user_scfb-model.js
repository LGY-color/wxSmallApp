import { Base } from '../../utils/base.js';

class Scfb extends Base {
    constructor() {
        super();
    }
    getInfoById(page,callBack) {
        var params = {
            url: 'collection/getUserCollection?page='+page,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
}

export { Scfb };