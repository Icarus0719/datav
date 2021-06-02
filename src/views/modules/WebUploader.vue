<template>
  <div>
    <h4>WebUploader大文件上传</h4>
    <a href="http://fex.baidu.com/webuploader/" target="_blank"
      >http://fex.baidu.com/webuploader/</a
    >
    <div>
      <el-button id="picker" size="small" type="primary">选择大文件</el-button>
      <el-input placeholder="请输入FileNo" v-model="fileNo"></el-input>
      <el-button size="small" type="primary" @click="uploadOpt"
        >开始上传</el-button
      >
    </div>

    <div class="result"></div>

    <ul>
      <li class="progress">
        <div id="progress_md5" class="progress-bar">0%</div>
      </li>
      <li class="progress">
        <div id="progress_res" class="progress-bar">0%</div>
      </li>
    </ul>
  </div>
</template>
<script>
var WebUploader = window.WebUploader;
import sgLoader from '@/plugin/sgLoader';
import * as API from '@/api/api.webuploader.js';
export default {
  data() {
    return {
      fileNo: '',
    };
  },
  mounted() {
    // HOOK 这个必须要再uploader实例化前面
    WebUploader.Uploader.register(
      {
        'before-send-file': 'beforeSendFile',
        'before-send': 'beforeSend',
      },
      {
        beforeSendFile: (file) => {
          var deferred = WebUploader.Deferred();
          uploader
            .md5File(file)
            .progress((percentage) => {
              this.getProgressBar('progress_md5', percentage);
            })
            .then(async (md5Val) => {
              file.fileNo = this.fileNo;
              file.md5 = md5Val;
              file.uid = WebUploader.Base.guid();
              // MD5判断
              const response = await API.checkMD5({
                uid: file.uid,
                md5: file.md5,
                fileName: file.name,
                fileNo: file.fileNo,
              });
              var resultCode = response.resultCode;
              if (resultCode == 13008) {
                // 文件不存在，那就正常流程
              } else if (resultCode == 200) {
                // 忽略上传过程，直接标识上传成功；
                uploader.skipFile(file);
                file.pass = true;
              } else if (resultCode == 13009) {
                // 部分已经上传到服务器了，但是差几个模块。
                file.missChunks = resultCode.data;
              }
              deferred.resolve();
            });
          return deferred.promise();
        },
        beforeSend: (block) => {
          var deferred = WebUploader.Deferred();
          var file = block.file;
          var missChunks = file.missChunks;
          var blockChunk = block.chunk;
          console.log('当前分块：' + blockChunk);
          console.log('missChunks:' + missChunks);
          if (
            missChunks !== null &&
            missChunks !== undefined &&
            missChunks !== ''
          ) {
            var flag = true;
            for (var i = 0; i < missChunks.length; i++) {
              if (blockChunk == missChunks[i]) {
                console.log(
                  file.name + ':' + blockChunk + ':还没上传，现在上传去吧。'
                );
                flag = false;
                break;
              }
            }
            if (flag) {
              deferred.reject();
            } else {
              deferred.resolve();
            }
          } else {
            deferred.resolve();
          }
          return deferred.promise();
        },
      }
    );
    // 实例化
    var uploader = new sgLoader('#picker').create(this.fileNo);
    this.uploader = uploader;
    this.addListenerOnUpload();
  },
  methods: {
    addListenerOnUpload() {
      // 文件添加到队列时
      this.uploader.on('fileQueued', (file) => {
        const innerText = `${file.name} 等待上传`;
        setResultText(innerText);
      });
      //当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
      this.uploader.on('uploadBeforeSend', (obj, data) => {
        var file = obj.file;
        data.md5 = file.md5 || '';
        data.uid = file.uid;
        data.fileNo = this.fileNo;
      });
      // 上传中
      this.uploader.on('uploadProgress', (file, percentage) => {
        this.getProgressBar('progress_res', percentage);
      });
      //上传返回结果
      this.uploader.on('uploadSuccess', (file) => {
        var text = '已上传';
        if (file.pass) {
          text = '文件秒传功能，文件已上传。';
        }
        setResultText(text);
      });
      this.uploader.on('uploadError', () => {
        setResultText('上传出错');
      });

      function setResultText(text) {
        const dom = document.getElementsByClassName('result')[0];
        dom.innerText = text;
      }
    },
    uploadOpt() {
      this.uploader.upload();
    },
    getProgressBar(titleId, percentage) {
      var progressDom = document.getElementById(titleId);
      let text = titleId === 'progress_md5' ? 'MD5:' : '上传中：';
      var progressPercentage = (percentage * 100).toFixed(2) + '%';
      progressDom.innerText = text + progressPercentage;
      progressDom.style.width = progressPercentage;
    },
  },
};
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
  margin: 20px 0;
  .progress-bar {
    width: 0%;
    height: 100%;
    background: green;
    text-align: center;
    color: #fff;
  }
}
</style>