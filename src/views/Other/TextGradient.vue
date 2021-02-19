<template>
  <div>
    <h4>文本渐变：css自定义属性</h4>
    <p class="sg-text-gradient" data-text="这是一段测试文本">
      这是一段测试文本
    </p>
  </div>
</template>
<style lang="less">
.sg-text-gradient[data-text] {
  position: relative;
  &::after {
    content: attr(data-text);
    z-index: 10;
    color: red;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0)),
      color-stop(50%, rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
  }
}
</style>