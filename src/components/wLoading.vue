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
   <!--    <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.mask {
  width: 100%;
  height: 100%;
  z-index: 8;
  position: absolute;
  background: #ffffff00;
}
.loader {
  z-index: 9;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 168rpx;
  height: 95rpx;
  padding: 50rpx 0 40rpx 50rpx;
  border-radius: 18rpx;
  background: #ffffffab;
}
.loader span {
  display: block;
  background: #ad5516c5;
  width: 8rpx;
  margin-right: 6rpx;
  float: left;
  margin-top: 25%;
}
.loader span:last-child {
  margin-right: 0px;
}
.loader span:nth-child(1) {
  animation: load 1.1s 0.4s infinite linear;
}
.loader span:nth-child(2) {
  animation: load 1.1s 0.3s infinite linear;
}
.loader span:nth-child(3) {
  animation: load 1.1s 0.2s infinite linear;
}
.loader span:nth-child(4) {
  animation: load 1.1s 0.1s infinite linear;
}
.loader span:nth-child(5) {
  animation: load 1.1s 0s infinite linear;
}
.loader span:nth-child(6) {
  animation: load 1.1s 0.1s infinite linear;
}
.loader span:nth-child(7) {
  animation: load 1.1s 0.2s infinite linear;
}
.loader span:nth-child(8) {
  animation: load 1.1s 0.3s infinite linear;
}
.loader span:nth-child(9) {
  animation: load 1.1s 0.4s infinite linear;
}



.loader span:nth-child(10) {
  animation: load 1.1s 0.2s infinite linear;
}
.loader span:nth-child(11) {
  animation: load 1.1s 0.3s infinite linear;
}
.loader span:nth-child(12) {
  animation: load 1.1s 0.4s infinite linear;
}
.loader span:nth-child(13) {
  animation: load 1.1s 0.5s infinite linear;
}
 .loader span:nth-child(14) {
  animation: load 1.1s 0.7s infinite linear;
}
.loader span:nth-child(15) {
  animation: load 1.1s 0.8s infinite linear;
} 

@keyframes load {
  0% {
    background: #fd6a00;
    margin-top: 25%;
    height: 5%;
  }

  50% {
    background: #fd6a00;
    height: 100%;
    margin-top: 0%;
  }

  100% {
    background: #fd6a00;
    height: 5%;
    margin-top: 25%;
  }
}
</style>