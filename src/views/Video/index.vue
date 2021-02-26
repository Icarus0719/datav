<template>
  <div>
    <h4>video播放器</h4>
    <M3U8></M3U8>
  </div>
</template>
<script>
import M3U8 from "./M3U8"

export default {
  components: { M3U8 }

}
</script>
<style lang="less">
  video{
    width: 800px;
    height: 400px;
  }
</style>