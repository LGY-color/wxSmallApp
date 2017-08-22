import { Base } from '../../utils/base.js';

class Zgqz extends Base {
    constructor() {
        super();
    }
    addInfo(data,callBack) {
        var params = {
            url: 'info/InsertInfo',
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

export { Zgqz };