// list.js
import { List } from 'list-model.js';
var list = new List();
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    length: 6,
    icon60: '../../images/demoimages.png',
    textNum: 0,
    infoData: [],
    commentData: [],
    page: 0,
    resComment: 1,
    collection: '',
    collectionId:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    
    this.setData({
      'info_id': id
    });
    this._loadData();
  },
  _loadData: function (page = 0) {
    var that = this;
    var id = this.data.info_id;
    var resComment = this.data.resComment;
    // console.log('已经保存id：' + id);
    if (resComment != '') {
      list.getInfoById(id, page, (res) => {
        this.setData({
          'resComment':res.comment,
          'infoData': res.info[0],
          'commentData': that.data.commentData.concat(res.comment)
        });
      });
    } else {
      wx.showToast({
        title: '没有更多了',
        icon: 'loading',
        duration: 1000
      });
    }
    list.getCollection(id,(res)=>{
      console.log(res);
      if(res){
        that.setData({
          'collection':res.status,
          'collectionId':res.id
        });
      }
      
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
    // this._loadData();
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
  writeNum: function (event) {
    this.setData({
      'textNum': event.detail.cursor
    });
  },
  // 回复消息
  commentInfo: function (event) {
    var that = this;
    var data = event.detail.value;
    list.commentInfo(data, (res) => {
      res = JSON.parse(res);
      wx.showToast({
        title: res.msg,
        icon: 'success',
        duration: 1000,
        success: function () {
          setTimeout(function () {
            wx.redirectTo({
              url: '../list/list?id='+that.data.info_id
            });
          }, 1000);
        }
      });
    });
    console.log(event.detail.value);
  },
  // 评论长按回复
  longTapReply: function (event) {
    // console.log(event.currentTarget.dataset.username);
    var userid = list.getDataSet(event, 'userid');
    var infoid = list.getDataSet(event, 'infoid');
    wx.navigateTo({
      url: '../hfpl/hfpl?userid=' + userid + '&infoid=' + infoid,
    })
  },
  //更多评论
  getMoreComment: function () {
    var page = this.data.page;
    page = page + 10;
    this.setData({
      'page': page
    });
    this._loadData(page);
  },
  //设置收藏
  setCollection:function(event){
    var that = this;
    var infoid = this.data.info_id;
    var status = this.data.collection;
    var id = this.data.collectionId;
    var data = {
      'infoid':infoid,
      'status':status,
      'id':id
    };
    list.setCollection(data,(res)=>{
      console.log(res);
      res = JSON.parse(res);
      if(res.code == 200){
        wx.showToast({
          title: '操作成功',
          icon: 'success',
          duration: 1000,
          success: function () {
            if(status == 1){
              that.setData({
                'collection' : 2
              });
            }else{
              that.setData({
                'collection' : 1
              });
            }
          }
        });
      }
    });
  },
  //返回
  onReToMenu: function () {
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