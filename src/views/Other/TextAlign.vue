<template>
  <div>
    <h4>文本两端对齐：text-align:justify</h4>
    <br />
    <div class="sg-clear">
      <span class="text-label sg-text-justify">手机号</span>：
      <span>苏打粉</span>
    </div>
    <div class="sg-clear">
      <span class="text-label sg-text-justify">电子邮箱</span>：
      <span>123456789@qq.com</span>
    </div>
  </div>
</template>
<style lang="less">
.text-label {
  width: 100px;
  display: inline-block;
  margin-right: 10px;
}

// 当行文字两端对齐
.sg-clear {
  clear: both;
}

.sg-text-justify {
  text-align: justify;
  float: left;

  &::after {
    content: '';
    width: 100%;
    display: inline-block;
    overflow: hidden;
    height: 0;
  }
}
</style>