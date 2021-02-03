<template>
  <div class="webgl" ref="sceneview"></div>
</template>
<script>
import { Scene, Color, Mesh } from "three"
import InitThreeJS from '@/plugin/threeView'
import { TextBufferGeometry_camera } from '@/plugin/threeView/cameras/PerspectiveCameras.js'
import { TextBufferGeometry_lights } from '@/plugin/threeView/lights.js'
import { TextBufferGeometry_renders } from '@/plugin/threeView/renders.js'
import { TextBufferGeometry_orbitControls } from '@/plugin/threeView/controls/orbitControls.js'
import { TextBufferGeometry_helpers } from '@/plugin/threeView/helpers.js'
import { TextBufferGeometry_FBXLoaders } from '@/plugin/threeView/loaders/FBXLoaders.js'
import { TextBufferGeometry_neck } from '@/plugin/threeView/geometries/TextBufferGeometry.js'
import { TextBufferGeometry_material } from '@/plugin/threeView/materials/MeshPhongMaterial.js'
import { TextBufferGeometry_guis } from '@/plugin/threeView/guis.js'

export default {
  mounted () {
    this.init()
    this.addText()
    this.loadModel()
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
      const stats = threeView.addStats()
      threeView.animate({ scene, camera, webglRender, orbitControls, stats })
      threeView.addEventResize({ camera, webglRender })
    },
    addText () {
      let property = {
        text: 'abcD',
        size: 5,
        height: 2,
        curveSegments: 12,
        font: 'molle',
        weight: 'regular',
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 0.5,
        bevelOffset: 0.0,
        bevelSegments: 3
      }
      const material = TextBufferGeometry_material
      let textMesh = null
      TextBufferGeometry_neck(property).then(geometry => {
        textMesh = new Mesh(geometry, material)
        this.scene.add(textMesh)
      })
      TextBufferGeometry_guis(property, (value, prop) => {
        property[prop] = value
        updateGroupGeometry()
      })
      function updateGroupGeometry () {
        TextBufferGeometry_neck(property).then(geometry => {
          textMesh.geometry.dispose()
          textMesh.geometry = geometry
        })
      }
    },
    loadModel () {
      let lianColor = '#E4CA40'
      const urls = [
        '/static/models/lianzi_left.fbx',
        '/static/models/lianzi_right.fbx'
      ]
      Promise.all(
        urls.map(e => {
          return TextBufferGeometry_FBXLoaders(e)
        })
      ).then(res => {
        let leftObject = res[0]
        let rightObject = res[1]
        changeObjectMaterial(leftObject)
        changeObjectMaterial(rightObject)
        this.scene.add(leftObject)
        this.scene.add(rightObject)
      })
      // 修改项链材质
      function changeObjectMaterial (object) {
        const mesh = object.children[0]
        mesh.material.color = new Color(lianColor)
        mesh.material.emissive = new Color(lianColor)
        mesh.material.emissiveIntensity = 1
      }
    }
  },
}
</script>