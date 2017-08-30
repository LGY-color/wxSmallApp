import { Base } from '../../utils/base.js';

class Dmcb extends Base {
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
    editInfo(data,callBack) {
        var params = {
            url: 'info/UpdateInfo',
            data: data,
            type: 'POST',
            dataType:'JSON',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }

        this.request(params);
    }
    getInfoById(id,callBack) {
        var params = {
          url: 'Info/getInfoById/' + id,
          sCallBack: function (res) {
            callBack && callBack(res);
          }
        }
        this.request(params);
    }
}

export { Dmcb };