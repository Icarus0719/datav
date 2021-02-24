<template >
  <div>
    <p>
      AE动画：一些复杂动画完全由设计师使用AE软件制作，
      开发只需要如同引入静态资源就可以实现，大大降低了开发成本。
      但需要设计师会使用AE，需要注意的是不支持表达式、特效、mask蒙版等功能，
      需要与设计师在设计初进行沟通。
    </p>
    <br />
    <p>需要用到lottie-web插件库</p>
    <a href="https://zhuanlan.zhihu.com/p/82799350" target="_blank"
      >相关资料:https://zhuanlan.zhihu.com/p/82799350</a
    >
    <div id="bm"></div>
  </div>
</template>
<script>
import lottie from "lottie-web";
import { AEAnimationData } from "@/assets/js/AEAnimationData.js";

export default {
  mounted () {
    this.playAnimation();
  },
  methods: {
    playAnimation () {
      const animation = lottie.loadAnimation({
        container: document.getElementById("bm"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: AEAnimationData
      });
      animation.play();
    }
  }

}
</script>
<style lang="less">
#bm {
  width: 400px;
  height: 400px;
  margin: 0 auto;
}
</style>