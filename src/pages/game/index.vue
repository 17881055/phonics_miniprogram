<template>

  <div class="container">
    <w-game :show="start" :json="gameJson"/>
    <w-loading :show="loading" />

    <div class="foot"
         v-if="!start">
      <div class="button">
        <a @click="handleClick">
          Start
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import wGame from "@/components/wGame";
import wLoading from "@/components/wLoading";
import { setTimeout } from "timers";

export default {
  components: {
    wGame,
    wLoading
  },
  data() {
    return {
      gameJson: null,
      start: false,
      loading: false
    };
  },
  computed: {},
  mounted: function() {
    wx.showShareMenu();
    if(!this.gameJson){
      this.loadGameConf();
    }
  },
  onUnload() {
    this.start = false;
  },
  methods: {
    loadGameConf() {
      this.loading = true;
      this.$httpWX
        .get({
          url: "/static/json/wgame.json"
        })
        .then(res => {
          setTimeout(() => {
            this.loading = false;
          }, 300);
          this.gameJson = res;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    handleClick() {
      this.start = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: url("https://wellwell.wang/static/img/bg@2x.png") 700rpx -10rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.foot {
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .total {
    color: #855931;
    font-size: 32rpx;
    font-weight: bolder;
  }
}

.button {
  margin-bottom: 80rpx;
  display: block;
  width: 165rpx;
  height: 165rpx;
  border: 7rpx solid #855931f0;
  border-radius: 165rpx;
  background: #efd69c;
  &:active {
    transform: scale(0.9);
    background: #efd69c;
  }
  > a {
    color: #855931;
    text-align: center;
    line-height: 150rpx;
    font-size: 52rpx;
    font-weight: bolder;
  }
}
</style>
