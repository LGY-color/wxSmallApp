import {Config} from '../utils/config.js';
class Token{
    constructor(){
        this.verifyUrl = Config.restUrl + 'token/verify';
        this.tokenUrl = Config.restUrl + 'token/user';
        this.username = '';
    }
    verify(){
        var token = wx.getStorageSync('token');
        if(!token){
            this.getTokenFromServer();
        }else{
            this._verifyFromServer(token);
        }
    }
    _verifyFromServer(token) {
        var that = this;
        wx.request({
            url: that.verifyUrl,
            method: 'POST',
            data: {
                token: token
            },
            success: function (res) {
                var valid = res.data.isValid;
                if(!valid){
                    that.getTokenFromServer();
                }
            }
        });
    }

    getTokenFromServer(callBack) {
        var that  = this;
        that.getUserName();
        wx.login({
            success: function (res) {
                wx.request({
                    header: {
                        'content-type':'application/json',
                    },
                    url: that.tokenUrl,
                    method:'POST',
                    data:{
                        "code":res.code,
                        "username":that.username
                    },
                    success:function(res){
                        wx.setStorageSync('token', res.data.token);
                        callBack&&callBack(res.data.token);
                    }
                })
            }
        })
    }
    getUserName(){
        var that  = this;
        wx.getUserInfo({
            success: function (res) {
            //   console.log(res.userInfo.nickName);
              that.username = res.userInfo.nickName;
            }
        })
    }
}

export {Token};