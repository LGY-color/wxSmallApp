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
    setLevelStatus(data,callBack){
        var params = {
            url: 'level/setLevelStatus',
            data: data,
            type: 'POST',
            dataType:'JSON',
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
    setRefresh(infoid,callBack){
        var params = {
            url: 'info/setRefresh/'+infoid,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
    setWeixin(infoid,callBack){
        var params = {
            url: 'info/setWeixin/'+infoid,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
    setDeal(infoid,callBack){
        var params = {
            url: 'info/setDeal/'+infoid,
            sCallBack: function (res) {
                callBack && callBack(res);
            }
        }
        this.request(params);
    }
}

export { Fbsc };