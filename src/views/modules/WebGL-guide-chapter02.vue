<template>
  <div>
    <div>
      <canvas id="webgl" width="400" height="400"></canvas>
    </div>
  </div>
</template>
<script>
import { initShaders } from '@/webgl-libs/webgl.utils.js'
export default {
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const canvas = document.getElementById('webgl')
      const gl = canvas.getContext('webgl')
      this.initShader(gl)
    },
    initShader(gl) {
      const vertexShader = `
      void main(){
        gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
        gl_PointSize = 10.0;
      }
      `
      const fragmentShader = `
      void main(){
        gl_FragColor=vec4(0.5,0.2,0.5,1.0);
      }
      `
      initShaders(gl, vertexShader, fragmentShader)
      gl.clearColor(0.0, 0.0, 0.0, 1.0)
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.drawArrays(gl.POINTS, 0, 1)
    }
  }
}
</script>
<style lang="less">
#webgl {
  border: 1px solid red;
}
</style>