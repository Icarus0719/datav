<template>
  <div>
    <div class="sg-box-mb10">
      <a href="https://juejin.cn/post/6844903682010513415" target="_blank"
        >利用CSS改变图片颜色</a
      >
    </div>
    <div class="sg-layer-box">
      <div
        class="sg-layer-row-5 image-card"
        v-for="(item, index) in boxData"
        :key="index"
      >
        <img :class="item.class" src="../../assets/images/bg.jpg" alt="" />
        <p>{{ item.text }}</p>
      </div>
      <div class="sg-layer-row-5"></div>
      <div class="sg-layer-row-5"></div>
      <div class="sg-layer-row-5"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      boxData: []
    }
  },
  mounted () {
    const texts = {
      0: "原始素材",
      1: "黑白图像"
    }
    this.boxData = new Array(2).fill(0).map((e, i) => {
      return {
        text: texts[i],
        class: `image-type-${i}`
      }
    })
  },
}
</script>
<style lang="less">
.image-card {
  height: 150px;
  background: #fff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  > img {
    width: 100%;
    flex: 1;
  }
  > p {
    line-height: 24px;
  }
}
.image-type-1 {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
}
</style>