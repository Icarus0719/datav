<template>
  <div class="webgl" ref="sceneview"></div>
</template>
<script>
import { Scene, Color, BoxGeometry, Mesh, MeshBasicMaterial } from "three"
import InitThreeJS from '@/plugin/threeView'
import { TextBufferGeometry_camera } from '@/plugin/threeView/cameras.js'
import { TextBufferGeometry_lights } from '@/plugin/threeView/lights.js'
import { TextBufferGeometry_renders } from '@/plugin/threeView/renders.js'
import { TextBufferGeometry_orbitControls } from '@/plugin/threeView/orbitControls.js'
import { TextBufferGeometry_helpers } from '@/plugin/threeView/helpers.js'

export default {
  mounted () {
    this.init()
    this.addModel()
  },
  methods: {
    init () {
      const webDom = this.$refs.sceneview
      const threeView = new InitThreeJS(webDom)
      const scene = new Scene()
      this.scene = scene
      this.scene.background = new Color(0x444444)
      const camera = TextBufferGeometry_camera(webDom)
      this.scene.add(camera)
      const webglRender = TextBufferGeometry_renders(webDom)
      TextBufferGeometry_lights.forEach(e => {
        this.scene.add(e)
      })
      TextBufferGeometry_helpers.forEach(i => {
        this.scene.add(i)
      })
      const orbitControls = TextBufferGeometry_orbitControls(camera, webglRender)
      threeView.animate({ scene, camera, webglRender, orbitControls })
      threeView.addEventResize({ camera, webglRender })
    },
    addModel () {
      var objBack = new Mesh(
        new BoxGeometry(10, 10, 10),
        new MeshBasicMaterial({
          color: "red",
          wireframe: false
        })
      );
      this.scene.add(objBack);
    },
  },
}
</script>

<style lang='less'>
.webgl {
  width: 100%;
  height: 100%;
}
</style>
