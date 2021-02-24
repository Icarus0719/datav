<template>
  <div>
    <h3>其他技术</h3>
    <div class="content-part">
      <TextAlign></TextAlign>
      <TextShadow></TextShadow>
      <TextGradient></TextGradient>
      <TextLink></TextLink>
    </div>
  </div>
</template>
<script>
import TextAlign from "./TextAlign"
import TextShadow from "./TextShadow"
import TextGradient from "./TextGradient"
import TextLink from "./TextLink"
export default {
  components: { TextAlign, TextShadow, TextGradient, TextLink }

}
</script>
<style lang="less">
.content-part {
  > div {
    margin: 20px 0;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 2px 2px #fff;
  }
}
</style>