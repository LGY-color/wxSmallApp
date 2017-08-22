import { Base } from '../../utils/base.js';

class Fbsc extends Base {
    constructor() {
        super();
    }
    getInfoById(page,callBack) {
        var params = {
            url: 'info/getPublish/'+page,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
}

export { Fbsc };