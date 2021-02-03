<template>
  <div class="webgl" ref="sceneview"></div>
</template>
<script>
import { Scene, Color, Mesh, BufferGeometry } from "three"
import InitThreeJS from '@/plugin/threeView'
import { TextBufferGeometry_camera } from '@/plugin/threeView/cameras/PerspectiveCameras.js'
import { TextBufferGeometry_lights } from '@/plugin/threeView/lights.js'
import { TextBufferGeometry_renders } from '@/plugin/threeView/renders.js'
import { TextBufferGeometry_orbitControls } from '@/plugin/threeView/controls/orbitControls.js'
import { TextBufferGeometry_helpers } from '@/plugin/threeView/helpers.js'
import { TextBufferGeometry_FBXLoaders } from '@/plugin/threeView/loaders/FBXLoaders.js'
import { TextBufferGeometry_neck } from '@/plugin/threeView/geometries/TextBufferGeometry.js'
import { TextBufferGeometry_material } from '@/plugin/threeView/materials/MeshPhongMaterial.js'
import { TextBufferGeometry_guis, gui } from '@/plugin/threeView/guis.js'

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
        this.leftObject = res[0]
        this.rightObject = res[1]
        changeObjectMaterial(this.leftObject)
        changeObjectMaterial(this.rightObject)
        this.scene.add(this.leftObject)
        this.scene.add(this.rightObject)
        this.addTexture()
      })
      // 修改项链材质
      function changeObjectMaterial (object) {
        const mesh = object.children[0]
        mesh.material.color = new Color(lianColor)
        mesh.material.emissive = new Color(lianColor)
        mesh.material.emissiveIntensity = 1
      }
    },
    addTexture () {
      let _self = this
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

      let geometry = new BufferGeometry()
      let textMesh = new Mesh(geometry, material)
      this.scene.add(textMesh)
      generateGeometry()

      TextBufferGeometry_guis(property, (value, prop) => {
        property[prop] = value
        generateGeometry()
      })

      async function generateGeometry () {
        const geometry = await TextBufferGeometry_neck(property)
        textMesh.geometry.dispose()
        textMesh.geometry = geometry
        _self.changeObjectPos([_self.leftObject, _self.rightObject], geometry, textMesh)
      }
      this.$once('hook:beforeDestroy', () => {
        gui.destroy()
      })
    },
    // 修改项链位置
    changeObjectPos (objects, TextGeometry, mesh) {
      if (!TextGeometry.parameters.shapes.length) return

      let leftObj = objects[0]
      let rightObj = objects[1]
      setLeftObjectPos(leftObj, TextGeometry)
      setRightObjectPos(rightObj, TextGeometry)

      // 将项链与字母合并，并居中显示
      const TextCenter_x =
        (TextGeometry.boundingBox.max.x +
          TextGeometry.boundingBox.min.x) /
        2
      const TextCenter_y =
        (TextGeometry.boundingBox.max.y +
          TextGeometry.boundingBox.min.y) /
        2
      mesh.add(leftObj)
      mesh.add(rightObj)

      mesh.position.x = -TextCenter_x
      mesh.position.y = -TextCenter_y
      mesh.position.z = -1
      // 设置左项链位置
      function setLeftObjectPos (object, TextGeometry) {
        // 位移修正系数
        const _x = 0.4
        const _y = 0.5
        const _h = 0
        // 获取第一个字母
        const firstWord = TextGeometry.parameters.shapes[0]
        const points = JSON.parse(JSON.stringify(firstWord.getPoints()))
        points.sort((a, b) => {
          return b.y - a.y
        })
        // 字母最高点
        const topPoint = points[0]
        // 连接点
        const linkPoint = points.find(e => {
          return e.y <= topPoint.y - _h
        })
        const { x: Top_x, y: Top_y } = linkPoint
        // 设置位置坐标：计算方式综合考虑建模时项链的中心点和字母是否居中，此处字母设置不居中的
        object.position.x = Top_x - _x
        object.position.y = Top_y + object.userData.z_radius - _y
        // z轴为字母厚度/2,因为字母是不居中设置的
        object.position.z = 1
      }

      // 设置右项链位置
      function setRightObjectPos (object, TextGeometry) {
        // 位移修正系数
        const _x = 0
        const _h = 0
        // 获取最后一个字母
        const lastWord =
          TextGeometry.parameters.shapes[
          TextGeometry.parameters.shapes.length - 1
          ]
        const points = JSON.parse(JSON.stringify(lastWord.getPoints()))
        points.sort((a, b) => {
          return b.y - a.y
        })
        // 字母最高点
        const topPoint = points[0]
        // 连接点
        const linkPoint = points.find(e => {
          return e.y <= topPoint.y - _h
        })
        const { x: Top_x, y: Top_y } = linkPoint
        object.position.x = Top_x - _x
        object.position.y = Top_y
        object.position.z = 1
      }
    }
  },
}
</script>