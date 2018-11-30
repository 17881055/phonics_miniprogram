<template>
  <div class="container">

    <div class="button">
      <a @click="handleReviewClick(26)"
         class="">
        初级练习26张
      </a>
    </div>
     <div class="button">
      <a @click="handleReviewClick(46)"
         class="">
        中级练习46张
      </a>
    </div>
     <div class="button">
      <a @click="handleReviewClick(54)"
         class="">
        高级练习54张
      </a>
    </div>
    <div class="button">
      <a @click="handleReviewClick"
         class="">
        小游戏
      </a>
    </div>
    <div class="button">
      <a @click="handleReviewClick"
         class="">
        拓展词汇
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
    /*  getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    }, */
    handleReviewClick(num) {
      const url = `../review/main?id=${num}`;
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
