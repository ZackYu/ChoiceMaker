// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columnId: 0,
    rows: [{
      id: 0,
      title: "我要发起",
      img: "../../static/images/more/TITLE.png"
    }, {
      id: 1,
      title: "我要加入",
      img: ""
    }, {
      id: 2,
      title: "返回主页",
      img: ""
    }]
  },
  onLoad: function (options) {
    this.setData({
      columnId: options.columnId
    })
  },
  selectRole: function(e) {
    var that =this
    var a = e.currentTarget.id
    var b = that.data.columnId
    if (a == 2)
      wx.navigateTo({
        url: '../index/index',
      })
    else if (a == 0) {
      if (b == 2) {
        wx.navigateTo({
          url: '../makeGroup/makeGroup'
        })
      }
      else if (b == 0) {
        wx.navigateTo({
          url: '../drawLots/index'
        })
      }
      else if (b == 4||b==3) {
        wx.navigateTo({
          url: '../compareSpeed/compareSpeed?b='+b
        })
      }
    } else if (a == 1) {
      if (b == 2||b==0||b==3||b==4)
      {
        console.log("b="+b)
      wx.navigateTo({
        url: '../addGroup/addGroup?addId='+b
      })
      }}
    
  }


})