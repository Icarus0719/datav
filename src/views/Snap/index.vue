<template>
  <div>
    <h3>仿灭霸响指，灰飞烟灭效果</h3>
    <img
      @click="openSnapOpt"
      class="snap-button"
      src="../../assets/images/snap.jpg"
      alt
      title="响指灰飞烟灭，仅限谷歌"
    />
    <div class="snap-box">
      <img src="../../assets/images/bg.jpg" id="snap-target" alt />
    </div>
  </div>
</template>
<script>
import { watchMediaVoice } from "@/utils/util.device.js";
import * as ThanosSnap from "@/plugin/thanoSnap";

export default {
  data () {
    return {
      snaped: false
    }
  },
  mounted () {
    watchMediaVoice(() => {
      // 设备音频监控
      this.openSnapOpt();
    });
  },
  methods: {
    openSnapOpt () {
      // 操作响指动画
      const image = document.querySelector("#snap-target");
      ThanosSnap.createAnimation(image);
      // ThanosSnap.recovery();
    },
  },
}
</script>
<style lang="less">
@import '../../plugin/thanoSnap/index.css';
h3 {
  text-align: center;
  line-height: 60px;
}
.snap-box {
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
}
#snap-target {
  width: 100%;
  height: 100%;
  position: relative;
}
.snap-button {
  position: absolute;
  right: 20px;
  top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>