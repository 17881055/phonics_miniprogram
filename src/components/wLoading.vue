<template>
  <div class="mask"
       v-if="show">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.mask {
  width: 100%;
  height: 100%;
  z-index: 8;
  position: absolute;
  background: #dbd6d238;
}
.loader {
  z-index: 9;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 350rpx;
  height: 200rpx;
}
.loader span {
  display: block;
  background: #e68c4a;
  width: 14rpx;
  height: 10%;
  border-radius: 28rpx;
  margin-right: 10rpx;
  float: left;
  margin-top: 25%;
}
.loader span:last-child {
  margin-right: 0px;
}
.loader span:nth-child(1) {
  animation: load 1.5s 1.4s infinite linear;
}
.loader span:nth-child(2) {
  animation: load 1.5s 1.2s infinite linear;
}
.loader span:nth-child(3) {
  animation: load 1.5s 1s infinite linear;
}
.loader span:nth-child(4) {
  animation: load 1.5s 0.8s infinite linear;
}
.loader span:nth-child(5) {
  animation: load 1.5s 0.6s infinite linear;
}
.loader span:nth-child(6) {
  animation: load 1.5s 0.4s infinite linear;
}
.loader span:nth-child(7) {
  animation: load 1.5s 0.2s infinite linear;
}
.loader span:nth-child(8) {
  animation: load 1.5s 0s infinite linear;
}
.loader span:nth-child(9) {
  animation: load 1.5s 0.2s infinite linear;
}
.loader span:nth-child(10) {
  animation: load 1.5s 0.4s infinite linear;
}
.loader span:nth-child(11) {
  animation: load 1.5s 0.6s infinite linear;
}
.loader span:nth-child(12) {
  animation: load 1.5s 0.8s infinite linear;
}
.loader span:nth-child(13) {
  animation: load 1.5s 1s infinite linear;
}
.loader span:nth-child(14) {
  animation: load 1.5s 1.2s infinite linear;
}
.loader span:nth-child(15) {
  animation: load 1.5s 1.4s infinite linear;
}

@keyframes load {
  0% {
    background: #e68b4a46;
    margin-top: 25%;
    height: 5%;
  }

  50% {
    background: #e68c4a;
    height: 100%;
    margin-top: 0%;
  }

  100% {
    background: #e68b4a46;
    height: 5%;
    margin-top: 25%;
  }
}
</style>