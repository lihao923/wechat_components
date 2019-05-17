Page({
  data: {
    shopGrade: 0,
    shopGrade1: 4.6,
  },

  /* 评分处理事件 */
  computeGrade(e) {
    let score = e.detail.score;
    this.setData({
      shopGrade: score
    })
  }
})
