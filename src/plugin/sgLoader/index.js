var WebUploader = window.WebUploader

class sgUploader {
  constructor(domName, chunkSize = 5 * 1024 * 1024) {
    this.domName = domName
    this.chunkSize = chunkSize
  }
  create(fileNo) {
    return WebUploader.create({
      pick: {
        id: this.domName,
      },
      formData: {
        uid: 0,
        md5: '',
        chunkSize: this.chunkSize,
        fileNo: fileNo
      },
      swf: "./Uploader.swf",
      chunked: true,
      chunkSize: this.chunkSize,
      threads: 1,
      server: "ip37/file/uploadFile",
      auto: false,
      // 禁掉全局的拖拽功能。这样不会出现图片拖进页面的时候，把图片打开。
      disableGlobalDnd: true,
      fileNumLimit: 1024,
      fileSizeLimit: 100 * 1024 * 1024 * 1024, // 200 M
      fileSingleSizeLimit: 20 * 1024 * 1024 * 1024 // 50 M
    })
  }
}
export default sgUploader