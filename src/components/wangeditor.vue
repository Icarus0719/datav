<template>
  <div id="wangeditor"></div>
</template>
<script>
import E from 'wangeditor'

export default {
  model: {
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  watch: {},
  mounted() {
    const editor = new E('#wangeditor')
    this.uploadImageToServer(editor)
    this.uploadVideoToServer(editor)
    editor.config.onchange = (newHtml) => {
      this.$emit('change', newHtml)
    }

    editor.create()
    // 设置初始内容
    editor.txt.html(this.value)

    this.$once('hook:beforeDestroy', () => {
      editor.destroy()
    })
  },
  methods: {
    uploadImageToServer(editor) {
      // 配置服务端接口
      editor.config.uploadImgServer =
        'https://aed.jstianyang.com/sys/oss/upload?token=9a1f461ffa1ba33160ba1a5942498712'
      // 限制图片大小和类型
      editor.config.uploadImgMaxSize = 1 * 1024 * 1024 // 5M
      editor.config.uploadImgAccept = [
        'jpg',
        'jpeg',
        'png',
        'gif',
        'bmp',
        'webp'
      ]
      // 自定义上传参数
      editor.config.uploadImgParams = {}
      // 自定义 header
      editor.config.uploadImgHeaders = {}
      // 自定义 fileName
      editor.config.uploadFileName = 'file'
      // 回调函数
      editor.config.uploadImgHooks = {
        // 图片上传并返回了结果，图片插入已成功
        success: (xhr) => {
          console.log('success', xhr)
        },
        // 图片上传并返回了结果，但图片插入时出错了
        fail: (xhr, editor, resData) => {
          console.log('fail', resData)
        },
        // 上传图片出错，一般为 http 请求的错误
        error: (xhr, editor, resData) => {
          console.log('error', xhr, resData)
        },
        // 上传图片超时
        timeout: () => {
          alert('上传图片超时')
        },
        // 图片上传并返回了结果，想要自己把图片插入到编辑器中
        // 例如服务器端返回的不是 { errno: 0, data: [...] } 这种格式，可使用 customInsert
        customInsert: (insertImgFn, result) => {
          // result 即服务端返回的接口
          console.log('customInsert', result)
          // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
          insertImgFn(result.url)
        }
      }
    },
    uploadVideoToServer(editor) {
      editor.config.uploadVideoServer = '/api/upload-video'
      // 默认限制视频大小是 1024m
      editor.config.uploadVideoMaxSize = 1 * 1024 * 1024 * 1024 // 1024m
      // 限制类型
      editor.config.uploadVideoAccept = ['mp4']
      // 自定义上传参数
      editor.config.uploadVideoParams = {}
      // 自定义 header
      editor.config.uploadVideoHeaders = {}
      // 自定义 fileName
      editor.config.uploadVideoName = 'file'
      // 回调函数
      editor.config.uploadVideoHooks = {
        // 视频上传并返回了结果，视频插入已成功
        success: (xhr) => {
          console.log('success', xhr)
        },
        // 视频上传并返回了结果，但视频插入时出错了
        fail: (xhr, editor, resData) => {
          console.log('fail', resData)
        },
        // 上传视频出错，一般为 http 请求的错误
        error: (xhr, editor, resData) => {
          console.log('error', xhr, resData)
        },
        // 上传视频超时
        timeout: () => {
          alert('上传视频超时')
        },
        // 视频上传并返回了结果，想要自己把视频插入到编辑器中
        // 例如服务器端返回的不是 { errno: 0, data: { url : '.....'} } 这种格式，可使用 customInsert
        customInsert: (insertVideoFn, result) => {
          // result 即服务端返回的接口
          console.log('customInsert', result)
          // insertVideoFn 可把视频插入到编辑器，传入视频 src ，执行函数即可
          insertVideoFn(result.data.url)
        }
      }
    }
  }
}
</script>