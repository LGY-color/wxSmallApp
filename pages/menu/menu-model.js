import { Base } from '../../utils/base.js';

class Menu extends Base {
    constructor() {
        super();
    }
    getItem(callBack) {
        var params = {
            url: 'bitem',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
}

export { Menu };