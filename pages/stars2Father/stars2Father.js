// pages/comments/comments.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconCameraPath: "../../assets/icons/camera.png",
    iconVideoPath: "../../assets/icons/video.png"
  },

  /**
   * 用户点击添加图片
   */
  uploadImages: function () {
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            user: 'test'
          },
          success(res) {
            const data = res.data;
            console.log(data);
          }
        })
      }
    })
  },

  /**
   * 用户点击添加视频
   */
  uploadVideos: function () {
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
          /* filePath: tempFilePaths[0], */
          filePath: tempFilePaths,
          name: 'file',
          formData: {
            user: 'test'
          },
          success(res) {
            const data = res.data;
          }
        })
      }
    })
  }




})
