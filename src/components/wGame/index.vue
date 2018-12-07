<template>
  <div v-if="show"
       class="game-container"
       :animation="animationData"
       @transitionend="handleAnimation">
    <div class="game-card">
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
      this.url = null;
      this.question = [];
      this.chooseAnswer = "";
      this.answer = null;
      this.afterRule = "";
      this.frontRule = "";
      this.result = null;
      this.canClick = false;
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
      this.imgW = `${w * 2.2}rpx`;
      this.imgH = `${h * 2.2}rpx`;
      this.canClick = true;
    },
    loadWord() {
      let w = Word.getRandomWord(this.asyncWord);
      this.answer = w.answer;
      this.question = shuffle(w.question);
      this.url = Word.PATH + w.url;
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
</style>
