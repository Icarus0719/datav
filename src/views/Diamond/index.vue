<template>
  <div class="webgl" ref="sceneview"></div>
</template>
<script>
import { Scene, Color } from "three"
import InitThreeJS from '@/plugin/threeView'
import { Default_camera } from '@/plugin/threeView/cameras/PerspectiveCameras.js'
import { Default_lights } from '@/plugin/threeView/lights.js'
import { Default_renders } from '@/plugin/threeView/renders.js'
import { Default_orbitControls } from '@/plugin/threeView/controls/orbitControls.js'
import { Default_helpers } from '@/plugin/threeView/helpers.js'
import { Default_GLTFLoaders } from '@/plugin/threeView/loaders/GLTFLoaders.js'

export default {
  mounted () {
    this.init()
    this.loadModel()
  },
  methods: {
    init () {
      const webDom = this.$refs.sceneview
      const threeView = new InitThreeJS(webDom)
      const scene = new Scene()
      this.scene = scene
      this.scene.background = new Color(0x444444)
      const camera = Default_camera(webDom)
      this.scene.add(camera)
      const webglRender = Default_renders(webDom)
      Default_lights.forEach(e => {
        this.scene.add(e)
      })
      Default_helpers.forEach(i => {
        this.scene.add(i)
      })
      const orbitControls = Default_orbitControls(camera, webglRender)
      const stats = threeView.addStats()
      threeView.animate({ scene, camera, webglRender, orbitControls, stats })
      threeView.addEventResize({ camera, webglRender })
    },
    async loadModel () {
      const url =
        '/static/models/diamond.glb';
      const object = await Default_GLTFLoaders(url)
      this.scene.add(object)
    },
  },
}
</script>