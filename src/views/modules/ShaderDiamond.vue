<template>
  <div class="webgl" ref="sceneview"></div>
</template>
<script>
import { Scene, Color } from "three"
import InitThreeJS from '@/plugin/threeView'
import { Default_camera } from '@/plugin/threeView/cameras/PerspectiveCameras.js'
import { Diamond_lights } from '@/plugin/threeView/lights.js'
import { Default_renders } from '@/plugin/threeView/renders.js'
import { Default_orbitControls } from '@/plugin/threeView/controls/orbitControls.js'
import { Default_GLTFLoader } from '@/plugin/threeView/loaders/GLTFLoader.js'
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
      camera.position.set(0, 0, 4)
      this.scene.add(camera)
      const webglRender = Default_renders(webDom)
      Diamond_lights.forEach(e => {
        this.scene.add(e)
      })
      const orbitControls = Default_orbitControls(camera, webglRender)
      const stats = threeView.addStats()
      threeView.animate({ scene, camera, webglRender, orbitControls, stats })
      threeView.addEventResize({ camera, webglRender })
    },
    async loadModel () {
      const url =
        '/static/models/diamond.glb';
      const gltf = await Default_GLTFLoader(url)
      this.scene.add(gltf)
    },

  },
}
</script>