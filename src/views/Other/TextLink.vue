<template>
  <div>
    <h4>使用属性选择器显示a标签空链接</h4>
    <a class="sg-empty-link" href="https:www.baidu.com"></a>
  </div>
</template>
<style lang="less">
.sg-empty-link[href^='http']:empty::before {
  content: attr(href);
}
</style>