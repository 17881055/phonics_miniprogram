<template>
  <div v-if="show"
       class="sight-container">
    <div class="sight-card"
         :animation="animationData"
         @transitionend="handleAnimation">
      <w-loading :show="loading" />
      <img v-if="url"
           :src="url"
           :style="{width:imgW,height:imgH}"
           @load="handleImgLoad" />

    </div>
    <div class="sight-foot"
         v-if="show">
      <div class="button">
        <a @click="handleClick">
          next
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import Word from "./word";
import wLoading from "@/components/wLoading";
import { setTimeout } from "timers";

const DELAY = 1000;

export default {
  components: {
    wLoading
  },
  props: {
    json: {
      type: Object,
      default: {}
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      loading: false,
      url: null,
      imgW: 0,
      imgH: 0,
      canClick: false,
      //
      animationData: {},
      animationType: null,
      //
      asyncWord: null
    };
  },
  computed: {},
  watch: {
    json() {
      if (!this.asyncWord && this.json) {
        let word = this.json.word;
        this.asyncWord = word;
      }
    },
    show() {
      if (this.show) {
        this.goAnima();
        this.loadWord();
      } else {
        this.destroy();
      }
    }
  },
  mounted: function() {},
  onUnload() {
    this.destroy();
  },
  methods: {
    destroy() {
      this.canClick = false;
      this.imgW = 0;
      this.imgH = 0;
      this.url = null;
      //
      this.animationData = {};
      this.animationType = null;
    },
    handleAnimation(e) {
      if (this.animationType === "back") {
        this.goAnima();
        this.loadWord();
      } else if (this.animationType === "go") {
      }
    },
    goAnima() {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: "ease-out",
        delay: 0,
        transformOrigin: "50% 50%"
      });
      animation
        .translate(0, 0)
        .opacity(1)
        .step();
      this.animationType = "go";
      this.animationData = animation.export();
    },
    backAnima() {
      var animation = wx.createAnimation({
        duration: 500,
        timingFunction: "ease",
        delay: 0,
        transformOrigin: "50% 50%"
      });
      animation
        .translate(-200, 0)
        .opacity(0)
        .step();
      this.animationType = "back";
      this.animationData = animation.export();
    },
    handleImgLoad(e) {
      let w = e.target.width;
      let h = e.target.height;
      this.imgW = `${w * 0.75}rpx`;
      this.imgH = `${h * 0.75}rpx`;
      this.canClick = true;
      this.loading = false;
    },
    loadWord() {
      let w = Word.getRandomWord(this.asyncWord);
      this.url = Word.PATH + w.url;
      this.loading = true;
    },
    next() {
      this.backAnima();
    },
    handleClick(answer) {
      if (!this.canClick) return;
      this.canClick = false;
      setTimeout(() => {
        this.url = null;
        this.next();
      }, 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.sight-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sight-card {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 0px #855a31a4;
  width: 640rpx;
  height: 900rpx;
  background: #fff;
  color: rgb(128, 73, 10);
  font-size: 222rpx;
  font-weight: bolder;
  transform: perspective(50%);
}

.sight-foot {
  margin: 50rpx 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.button {
  margin-top: 30rpx;
  display: block;
  width: 480rpx;
  height: 100rpx;
  border-radius: 18rpx;
  background: #ceeff7;
  &:active {
    transform: scale(0.9);
    background: #e6dfcf;
  }
  > a {
    color: rgba(0, 71, 104, 0.767);
    text-align: center;
    line-height: 100rpx;
    font-size: 52rpx;
    font-weight: bolder;
  }
}
</style>
