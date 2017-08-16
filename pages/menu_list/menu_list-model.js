import { Base } from '../../utils/base.js';
class MenuList extends Base {
    constructor() {
        super();
    }
    //根据类型id获取当前类型下的信息
    getInfoByItem(id,style,page=0,callback) {
        var params = {
            url:'info/getInfoByItem/'+id+'?style='+style+'?page='+page,
            sCallBack:function (res) {
                callback && callback(res)
            }
        }
        this.request(params);
    }
    getInfoByCondition(condition,callback){
        var params = {
            url:'info/getInfoByItem',
            type:'POST',
            data:condition,
            dataType:'JSON',
            sCallBack:function (res) {
                callback && callback(res)
            }
        }
        this.request(params);
    }
}
export { MenuList };
