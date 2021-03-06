// pages/bookDetail/bookDetail.js
const db = wx.cloud.database()
const books = db.collection('mybooks')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    db.collection('mybooks').doc(options.id).get().then(res => {
      this.setData({
        bookDetail:res.data,
        bookDetail_id: options.id
      })
    })
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
  updates: (event) => {
    db.collection('mybooks').doc(event.currentTarget.dataset.id).update({
      // data 传入需要局部更新的数据
      data: {
        title: "更新测试3"
      },
      success: function (res) {
        console.log(res)
      },
      fail: (err)=>{
        console.log(err)
      }
    })
  },
  deletes : (event) => {
    db.collection('mybooks').doc(event.currentTarget.dataset.id).remove({
      success: function (res) {
        console.log(res)
      }
    })
  }
})