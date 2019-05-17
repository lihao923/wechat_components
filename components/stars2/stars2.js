Component({
  properties: {
    /* 显示有色星星的个数 */
    propArray: {
      type: Number,
      value: 0,

      /* 监听value值的变化，评分 */
      observer: function (newVal, oldVal, changedPath) {
        this.init()
      },
    },

    /* 是否可点击，type为null表示值可以是任意类型 */
    isClick: {
      type: null,
      value: false
    }
  },

  attached() {
    /* 组件生命周期函数，在组件实例进入页面节点树时执行 */
    this.init();
  },

  data: {
    stars: [0, 0, 0, 0, 0],
    value: 0
  },

  methods: {

    init() {
      var star = this.properties.propArray;
      var stars = [0, 0, 0, 0, 0];

      for (let i = 0; i < Math.floor(star); i++) {
        stars[i] = 'star-good';
      }

      if (star > Math.floor(star)) {
        stars[Math.floor(star)] = 'star-half';
      }

      for (let i = 0; i < stars.length; i++) {
        if (stars[i] == 0) {
          stars[i] = 'star-bad';
        }
      }
      this.setData({
        stars
      })
    },

    // 点击左半边星星
    selectLeft: function (e) {
      var index = e.currentTarget.dataset.index;
      this.setData({
        propArray: index,
        value: index
      })
    },

    /* 可点击时，用于计算分数 */
    computeScore(e) {
      var index = e.currentTarget.dataset.index;
      this.setData({
        propArray: index + 1,
        value: index + 1
      })

      // 评分逻辑被删除
      // var isClick = this.properties.isClick;
      // if (isClick) {
      //   var score = index + 1;
      //   this.triggerEvent('compute', {
      //     score,
      //   });
      // }
    }
  }
})
