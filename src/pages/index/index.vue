<template>
  <div class="container">

    <div class="button">
      <a @click="handleReviewClick(26)">
       phonics (26)
      </a>
    </div>
    <div class="button">
      <a @click="handleReviewClick(46)">
        phonics (46)
      </a>
    </div>
    <div class="button">
      <a @click="handleReviewClick(54)">
        phonics (54)
      </a>
    </div>
    <div class="button">
      <a @click="handleGameClick(1)">
        game
      </a>
    </div>
    <div class="button">
      <a @click="handleSightClick(1)">
        sight word
      </a>
    </div>

  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      motto: "base64.BUTTON_BG",
      userInfo: {}
    };
  },

  components: {
    card
  },

  methods: {
    bindViewTap() {
      const url = "../review/main";
      wx.navigateTo({ url });
    },
    handleReviewClick(num) {
      const url = `../review/main?id=${num}`;
      wx.navigateTo({ url });
    },
    handleGameClick(num) {
      const url = `../game/main?id=${num}`;
      wx.navigateTo({ url });
    },
    handleSightClick(num){
      const url = `../sight/main?id=${num}`;
      wx.navigateTo({ url });
    },
    clickHandle(msg, ev) {
      //console.log('clickHandle:', msg, ev);
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    //this.getUserInfo();
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: url("https://wellwell.wang/static/img/bg@2x.png") 0 -10rpx;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {

  margin-bottom: 50rpx;
  display: block;
  width: 445rpx;
  height: 120rpx;
  border: 7rpx solid #855931f0;
  border-radius: 30rpx;
   box-shadow: 10rpx 10rpx 0px #855a314d;
  background: #efd69c;
  &:active {
    transform: scale(0.9);
    background: #efd69c;
  }
  > a {
    color: #855931;
    text-align: center;
    margin: 30rpx 0;
    font-size: 42rpx;
    font-weight: bolder;
  }
}
</style>
