<template>
  <div class="container">

    <div class="phonics-card"
         :class="{ go: start ,back :back , op:first}">
      {{letter}}
    </div>
    <div class="foot">
      <div class="button">
        <a @click="handleClick">
          {{first?"Start":"GO"}}
        </a>
      </div>
      <div class="total">{{total}}</div>
    </div>

  </div>
</template>

<script>
const DELAY = 1000;
const LETTER_54 = [
  "-ck",
  "-ff",
  "-ft",
  "-ld",
  "-lf",
  "-lk",
  "-ll",
  "-lp",
  "-lt",
  "-mp",
  "-nd",
  "-nk",
  "-ng",
  "-nt",
  "-sk",
  "-ss",
  "-st",
  "-zz",
  "-ch",
  "-ph",
  "-sh",
  "-th",
  "-dge",
  "-tch",
  "ar",
  "er",
  "ir",
  "or",
  "ur",
  "a_e",
  "i_e",
  "o_e",
  "u_e",
  "ai",
  "ay",
  "ee",
  "ea",
  "igh",
  "ie",
  "oa",
  "oe",
  "ow",
  "ui",
  "oo",
  "ue",
  "ew",
  "ou",
  "ow",
  "oy",
  "oi",
  "oo",
  "al",
  "au",
  "aw"
];
const LETTER_46 = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "bl",
  "cl",
  "fl",
  "gl",
  "pl",
  "sl",
  "br",
  "cr",
  "dr",
  "fr",
  "gr",
  "pr",
  "sc",
  "sk",
  "sm",
  "sn",
  "sp",
  "st",
  "sw",
  "c",
  "g",
  "x",
  "y",
  "y",
  "tw",
  "qu",
  "ch",
  "sh",
  "th",
  "wh",
  "ph",
  "kn",
  "wr",
  "tr",
  "scr",
  "shr",
  "spl",
  "spr",
  "squ",
  "str",
  "thr"
];
const LETTER_26 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "g",
  "k",
  "l",
  "n",
  "m",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

export default {
  data() {
    return {
      id: 26,
      letters: [],
      first: true,
      letter: "",
      overLetter: [],
      start: false,
      back: false
    };
  },
  computed: {
    total() {
      return ` ${this.overLetter.length}/${this.letters.length}  `;
    }
  },
  mounted: function() {
    if (this.$root.$mp.query) {
      this.id = this.$root.$mp.query.id || 26;
    }
    switch (this.id.toString()) {
      case "46":
        this.letters = LETTER_46.concat();
        break;
      case "54":
        this.letters = LETTER_54.concat();
        break;
      case "26":
      default:
        this.letters = LETTER_26.concat();
        break;
    }
  },
  onUnload() {
    this.id = 26;
    this.letters = [];
    this.first = true;
    this.letter = "";
    this.overLetter = [];
    this.start = false;
    this.back = false;
  },
  methods: {
    handleClick() {
      let backDelay = 0;
      if (this.back) return;
      if (this.start) return;
      if (!this.first) {
        this.back = true;
        backDelay = DELAY - 300;
      }
      if (this.overLetter.length >= this.letters.length) {
        this.overLetter = [];
      }
      setTimeout(() => {
        this.first = false;
        this.start = true;
        this.back = false;
        var old = this.overLetter.length;
        while (this.overLetter.length === old) {
          var num = Math.floor(Math.random() * this.letters.length);
          if (!~this.overLetter.indexOf(num)) {
            this.overLetter.push(num);
            this.letter = this.letters[num];
          }
        }
        setTimeout(() => {
          this.start = false;
        }, DELAY);
      }, backDelay);
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: url("https://wellwell.wang/static/img/bg@1x.png") 0 -10rpx;
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
.op {
  opacity: 0;
}
.phonics-card {
  font-family: PingFangSC-Regular, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 10px 10px 0px #2020204d;
  width: 500rpx;
  height: 600rpx;
  background: #fdfdfd;
  border: 14rpx solid #ceeff7;
  border-radius: 50rpx;
  color: #065164;
  font-size: 210rpx;
  transform: perspective(50%);
}

.back {
  animation: swashOut 800ms ease-in 100ms both;
}

@keyframes swashOut {
  0% {
    transform: translateX(0%) rotateZ(0deg);
  }
  20% {
    transform: translateX(15px) rotateZ(20deg);
  }
  100% {
    transform: translateX(-500%) rotateZ(-1080deg);
  }
}
.go {
  animation: fanfare 1000ms ease-in 100ms both;
}

@keyframes fanfare {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  30% {
    opacity: 0.8;
    transform: scale(0.8) rotateZ(5deg);
  }
  40%,
  60%,
  80% {
    opacity: 1;
    transform: scale(1.1) rotateZ(-5deg);
  }
  50%,
  70%,
  90% {
    opacity: 1;
    transform: scale(1.1) rotateZ(5deg);
  }
  100% {
    opacity: 1;
    transform: scale(1);
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
