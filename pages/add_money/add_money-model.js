import { Base } from '../../utils/base.js';

class addMoney extends Base {
    constructor() {
        super();
    }

    getOrderInfo(data,callBack){
        var params = {
            url: 'pay/PreOrder',
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

export { addMoney };