<template>
  <div>
    <h4>WebUploader大文件上传</h4>
    <a href="http://fex.baidu.com/webuploader/"
      >http://fex.baidu.com/webuploader/</a
    >
    <div>
      <el-button id="picker" size="small" type="primary">选择大文件</el-button>
      <el-button size="small" type="primary" @click="uploadOpt"
        >开始上传</el-button
      >
    </div>

    <div class="result"></div>

    <div class="progress">
      <div id="progress" class="progress-bar">0%</div>
    </div>
  </div>
</template>
<script>
var WebUploader = window.WebUploader
import sgLoader from "@/plugin/sgLoader";
export default {
  mounted () {
    // HOOK 这个必须要再uploader实例化前面
    WebUploader.Uploader.register({
      'before-send-file': 'beforeSendFile',
      'before-send': 'beforeSend'
    }, {
      beforeSendFile: async (file) => {
        const md5Val = await uploader.md5File(file).progress(percentage => {
          this.getProgressBar(percentage)
        })
        console.log(md5Val)
        file.md5 = md5Val;
        file.uid = WebUploader.Base.guid();
        // 上传服务器
      },
      beforeSend (block) {
        var file = block.file;
        var missChunks = file.missChunks;
        var blockChunk = block.chunk;
        console.log("当前分块：" + blockChunk);
        console.log("missChunks:" + missChunks);
      }
    })
    // 实例化
    var uploader = new sgLoader("#picker").create()
    this.uploader = uploader
    this.addListenerOnUpload()
  },
  methods: {
    addListenerOnUpload () {
      // 文件添加到队列时
      this.uploader.on('fileQueued', file => {
        const innerText = `${file.name} 等待上传`
        setResultText(innerText)
      })
      //当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
      this.uploader.on("uploadBeforeSend", (obj, data) => {
        var file = obj.file;
        data.md5 = file.md5 || '';
        data.uid = file.uid;
      })
      // 上传中
      this.uploader.on("uploadProgress", (file, percentage) => {
        this.getProgressBar(percentage)
      })
      //上传返回结果
      this.uploader.on("uploadSuccess", (file) => {
        var text = '已上传';
        if (file.pass) {
          text = "文件秒传功能，文件已上传。"
        }
        setResultText(text)
      })
      this.uploader.on("uploadError", () => {
        setResultText('上传出错')
      })

      function setResultText (text) {
        const dom = document.getElementsByClassName("result")[0]
        dom.innerText = text
      }

    },
    uploadOpt () {
      this.uploader.upload();
    },
    getProgressBar (percentage) {
      var progressDom = document.getElementById("progress")
      var progressPercentage = (percentage * 100).toFixed(2) + '%';
      progressDom.innerText = progressPercentage
      progressDom.style.width = progressPercentage
    }
  },
}
</script>
<style lang="less">
.webuploader-container {
  position: relative;
}
.webuploader-element-invisible {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}

.el-button {
  width: 100px;
  margin: 20px 0;
}
.result {
  color: red;
  line-height: 24px;
}
.progress {
  width: 400px;
  height: 20px;
  border: 1px solid green;
  .progress-bar {
    width: 0%;
    height: 100%;
    background: green;
    text-align: center;
    color: #fff;
  }
}
</style>