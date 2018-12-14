<template>
  <div v-if="show"
       class="game-container"
       :animation="animationData"
       @transitionend="handleAnimation">
    <div class="game-card">
      <div class="sound"
           @click="handleSoundClick">
      </div>
      <div>
        <img v-if="url"
             :src="url"
             :style="{width:imgW,height:imgH}"
             @load="handleImgLoad" />
        <div class="question">
          <span v-if="frontRule">{{frontRule}}</span>
          <span v-if="frontRule||afterRule"
                class="text-decoration">
            <span v-if="chooseAnswer"
                  class="color">{{ chooseAnswer }}</span>
            <template v-else>&nbsp;&nbsp;</template>
          </span><span v-if="afterRule">{{afterRule}}</span>

          <div v-if="result"
               class="result"
               :class="{ wrony:result===-1 ,right:result===1 }"></div>
        </div>
      </div>
    </div>
    <div class="game-foot">
      <div v-for="(item,index) in question"
           class="game-choose-card"
           :key="index"
           @click="handleClick(item)">
        {{item}}
      </div>
    </div>
  </div>
</template>
<script>
import Word from "./word";
import { setTimeout } from "timers";

const DELAY = 1000;

export default {
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
      mp3: null,
      url: null,
      imgW: 0,
      imgH: 0,
      question: [],
      chooseAnswer: "",
      answer: null,
      afterRule: "",
      frontRule: "",
      result: "",
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
        let word = [];
        for (let i in this.json.word) {
          this.json.word[i].map(item => {
            word.push(item);
          });
        }
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
      this.mp3 = null;
      this.url = null;
      this.question = [];
      this.chooseAnswer = "";
      this.answer = null;
      this.afterRule = "";
      this.frontRule = "";
      this.result = null;
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
        duration: 800,
        timingFunction: "ease",
        delay: 0,
        transformOrigin: "50% 50%"
      });
      animation.translate(0, 0).step();
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
      animation.translate(400, 0).step();
      this.animationType = "back";
      this.animationData = animation.export();
    },
    handleImgLoad(e) {
      let w = e.target.width;
      let h = e.target.height;
      this.imgW = `${w * 1.5}rpx`;
      this.imgH = `${h * 1.5}rpx`;
      this.canClick = true;
    },
    loadWord() {
      let w = Word.getRandomWord(this.asyncWord);
      this.answer = w.answer;
      this.question = shuffle(w.question);
      this.url = Word.PATH + w.url;
      this.mp3 = Word.PATH + w.map3;
      let after = false;
      for (let item of w.rule) {
        if (item === "_") {
          after = true;
          continue;
        }
        if (!after) {
          this.frontRule += item;
        } else {
          this.afterRule += item;
        }
      }
      function shuffle(arr) {
        return arr.sort(function() {
          return Math.random() - 0.5;
        });
      }
    },
    next() {
      this.backAnima();
    },
    handleSoundClick() {
      const backgroundAudioManager = wx.getBackgroundAudioManager();
      console.log( this.mp3);
      backgroundAudioManager.src = this.mp3;
      backgroundAudioManager.title = ".";
    },
    handleClick(answer) {
      if (!this.canClick) return;
      let right = false;
      this.canClick = false;
      this.chooseAnswer = answer;
      if (answer === this.answer) {
        this.result = 1;
        right = true;
      } else {
        this.result = -1;
      }
      setTimeout(() => {
        if (right) {
          this.answer = null;
          this.afterRule = this.frontRule = "";
          this.result = null;
          this.url = null;
          this.mp3 = null;
          this.chooseAnswer = null;
          this.next();
          return;
        }
        this.chooseAnswer = null;
        this.result = null;
        this.canClick = true;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.result {
  position: absolute;
  bottom: 30rpx;
  right: -15rpx;
  width: 100%;
  height: 100%;
  &.wrony {
    &:after {
      font-size: 400rpx;
      content: "✘";
    }
    color: rgba(212, 17, 17, 0.842);
  }

  &.right {
    &:after {
      font-size: 500rpx;
      content: "✓";
    }
    color: rgba(11, 182, 5, 0.924);
  }
}
.game-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.op {
  opacity: 0;
}
.game-card {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 0px #855a314d;
  width: 600rpx;
  height: 600rpx;
  background: #fff;
  border: 10rpx solid #d0eff7;
  border-radius: 50rpx;
  color: rgb(128, 73, 10);
  font-size: 222rpx;
  font-weight: bolder;
  transform: perspective(50%);
}
.text-decoration {
  text-decoration: underline;
}
.game-foot {
  height: 450rpx;
  margin: 50rpx 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .game-choose-card {
    margin: 0rpx 40rpx;
    text-align: center;
    color: #e68c4a;
    font-size: 80rpx;
    font-weight: bolder;
    width: 230rpx;
    height: 130rpx;
    background: #ffffff;
    border: 8rpx solid #90cfdf75;
    border-radius: 30rpx;
    box-shadow: 5px 5px 0px #855a314d;
    &:active {
      transform: scale(0.9);
      background: #efd69c;
    }
  }
}

.question {
  text-align: center;
  font-size: 80rpx;
  .color {
    color: #e68c4a;
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
.sound {
  position: absolute;
  top: 35rpx;
  left: 38rpx;

  z-index: 9;
  width: 100rpx;
  height: 100rpx;
  background: url("data:image/png;base64,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")
    no-repeat;
  background-size: 80%;
}
</style>
