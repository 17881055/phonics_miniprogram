<template>
  <div class="container"
       :style="{backgroundPositionX: transformX + 'px',backgroundPositionY: transformY + 'px'}">
    <div class="float">
      <div class="car"
           :style="{left: (transformX*0.8+10)  + 'rpx'}"></div>
      <div class="house"
           :style="{right: (-transformX*0.9-240)  + 'rpx'}"></div>
      <div class="pl"
           :style="{right:( -transformX*3.7 +10)  + 'rpx'}"></div>
      <div class="pl2"
           :style="{left: (transformX*2.2-80)  + 'rpx'}"></div>
      <div class="bug"
           :style="{right: (-transformX*2-80)  + 'rpx'}"></div>
    </div>
    <div class="menu">
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
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      distance: 0,
      transformZ: 0,
      transformY: -5,
      transformX: -30,
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
    handleSightClick(num) {
      const url = `../sight/main?id=${num}`;
      wx.navigateTo({ url });
    },
    clickHandle(msg, ev) {
      //console.log('clickHandle:', msg, ev);
    },
    onAccelerometerChange() {
      var transformX = this.transformX;
      var transformY = this.transformY;

      // var transformZ = this.transformZ;
      const Num = 1000;
      wx.onAccelerometerChange(
        function(res) {
          let angle = -(res.x * 90).toFixed(0);
          let distance = angle + transformX;
          // console.log(angle);
          if (Math.abs(distance - this.transformX) <= 0.5) {
            return;
          }
          this.transformX = distance;
        }.bind(this)
      );
    }
  },
  onShow() {
    wx.startAccelerometer({
      interval: "ui" //game //ui
    });
  },
  onUnload() {
    // console.log("onUnload", this);
  },
  onHide() {
    wx.stopAccelerometer();
  },
  created() {
    // 调用应用实例的方法获取全局数据
    //this.getUserInfo();
    this.onAccelerometerChange();
  }
};
</script>

<style lang="scss" scoped>
.container {
  z-index: 0;
  position: relative;
  width: 100%;
  height: 100%;
  background: url("https://wellwell.wang/static/img/bg@2x.png") -20rpx -10rpx;
  background-size: 120% 120%;
}

.float {
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
}

.car {
  left: 10rpx;
  bottom: 10rpx;
  position: absolute;
  width: 185px;
  height: 181px;
  background: url("https://wellwell.wang/static/img/car.png") no-repeat;
  background-size: 100% 100%;
}
.bug {
  position: absolute;
  right: -80rpx;
  bottom: 325rpx;
  width: 131px;
  height: 60px;
  background: url("https://wellwell.wang/static/img/bug.png") no-repeat;
  background-size: 100% 100%;
}
.house {
  position: absolute;
  right: -240rpx;
  bottom: 425rpx;
  width: 186px;
  height: 227px;
  background: url("https://wellwell.wang/static/img/house.png") no-repeat;
  background-size: 100% 100%;
}
.pl {
  position: absolute;
  right: 10rpx;
  top: 10rpx;
  width: 170px;
  height: 98px;
  background: url("https://wellwell.wang/static/img/pl.png") no-repeat;
  background-size: 100% 100%;
}
.pl2 {
  position: absolute;
  left: -150rpx;
  top: 250rpx;
  width: 170px;
  height: 98px;
  background: url("https://wellwell.wang/static/img/pl2.png") no-repeat;
  background-size: 100% 100%;
}

.menu {
  z-index: 9;
  width: 100%;
  height: 100%;
  background-size: 120% 120%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {
  margin-bottom: 40rpx;
  display: block;
  width: 445rpx;
  height: 98rpx;
  border-radius: 60rpx;
  box-shadow: 10rpx 15rpx 0px #855a3196;
  background: #efd69c;
  &:active {
    transform: scale(0.9);
    background: #efd69c;
  }
  > a {
    color: #662424;
    text-align: center;
    margin: 20rpx 0;
    font-size: 38rpx;
    font-weight: bolder;
  }
}
</style>
