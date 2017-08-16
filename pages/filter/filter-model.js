import { Base } from '../../utils/base.js';

class Filter extends Base {
    constructor() {
        super();
    }
    getItemData(id,callBack) {
        var params = {
            url: 'item/getItemByName/'+id,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
}

export { Filter };