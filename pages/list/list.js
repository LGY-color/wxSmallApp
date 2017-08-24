// list.js
import { List } from 'list-model.js';
var list = new List();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    length: 6,
    icon60: '../../images/demoimages.png',
    textNum: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.setData({
      'info_id':id
    });
    this._loadData();
  },
  _loadData: function () {
    var that = this;
    var id = this.data.info_id;
    console.log('已经保存id：' + id);
    list.getInfoById(id,(res) => {
      console.log(res.comment);
      this.setData({
        'infoData': res.info[0],
        'commentData':res.comment
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 写评论字数
  writeNum:function(event){
    this.setData({
      'textNum':event.detail.cursor
    });
  },
  // 回复消息
  commentInfo:function(event){
    var data = event.detail.value;
    list.commentInfo(data,(res)=>{
      
    });
    console.log(event.detail.value);
  },
  // 评论长按回复
  longTapReply: function (event) {
    // console.log(event.currentTarget.dataset.username);
    var userid = list.getDataSet(event,'userid');
    var infoid = list.getDataSet(event,'infoid');
    wx.navigateTo({
      url: '../hfpl/hfpl?userid='+userid+'&infoid='+infoid,
    })
  },
  //返回
  onReToMenu:function(){
    wx.navigateBack();
  }
  // //点击弹窗回复
  // actionSheetTap: function () {
  //   wx.showActionSheet({
  //     itemList: ['回复评论'],
  //     success: function (e) {
  //       // console.log(e.tapIndex)
  //       if (e.tapIndex==0){
  //         wx.navigateTo({
  //           url: '../hfpl/hfpl',
  //         })
  //       }
  //     }
  //   })
  // },
})