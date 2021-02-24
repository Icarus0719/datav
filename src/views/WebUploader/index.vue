<template>
  <div>
    <h4>WebUploader大文件上传</h4>
    <a href="http://fex.baidu.com/webuploader/"
      >http://fex.baidu.com/webuploader/</a
    >
  </div>
</template>
<script>
import { sgLoader } from "@/plugin/sgLoader";
export default {
  mounted () {
    console.log(sgLoader)
  },
}
</script>