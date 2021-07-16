<template>
  <div>
    <h3>鼠标点击绘制点</h3>
    <div>
      <canvas id="webgl" width="400" height="400" @click="clickOpt"></canvas>
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
      this.gl = gl
    },
    initShader(gl) {
      const vertexSahder = `
      attribute vec4 a_Position;
      void main() {
        gl_Position = a_Position;
        gl_PointSize = 10.0;
      }
      `
      const fragmentShader = `
      precision mediump float;
      uniform vec4 u_FragColor;
      void main() {
        gl_FragColor = u_FragColor;
      }
      `
      initShaders(gl, vertexSahder, fragmentShader)

      this.a_Position = gl.getAttribLocation(gl.program, 'a_Position')
      this.u_FragColor = gl.getUniformLocation(gl.program, 'u_FragColor')

      gl.clearColor(0.0, 0.0, 0.0, 1.0)
      gl.clear(gl.COLOR_BUFFER_BIT)
    },
    clickOpt(event) {
      const gl = this.gl
      let target = event.target
      let x = event.clientX - target.offsetLeft
      let y = event.clientY - target.offsetTop
      x = (x - target.width / 2) / (target.width / 2)
      y = (target.height / 2 - y) / (target.height / 2)
      const colors = new Array(4)
        .fill(0)
        .map(() => Number(Math.random().toFixed(2)))
      gl.vertexAttrib3f(this.a_Position, x, y, 0.0)
      gl.uniform4f(this.u_FragColor, colors[0], colors[1], colors[2], colors[3])
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