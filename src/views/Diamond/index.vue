<template>
  <div class="webgl" ref="sceneview"></div>
</template>
<script>
import { Scene, Color, Mesh, Group, PMREMGenerator } from "three"
import InitThreeJS from '@/plugin/threeView'
import { Default_camera } from '@/plugin/threeView/cameras/PerspectiveCameras.js'
import { Diamond_lights } from '@/plugin/threeView/lights.js'
import { Default_renders } from '@/plugin/threeView/renders.js'
import { Default_orbitControls } from '@/plugin/threeView/controls/orbitControls.js'
import { Default_GLTFLoader } from '@/plugin/threeView/loaders/GLTFLoader.js'
import { Diamond_RGBELoader } from '@/plugin/threeView/loaders/RGBELoader.js'
import { Diamond_material } from '@/plugin/threeView/materials/MeshPhysicalMaterial.js'
import { Diamond_guis, gui } from '@/plugin/threeView/guis.js'
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
      this.pmremGenerator = new PMREMGenerator(webglRender);
      this.pmremGenerator.compileEquirectangularShader();

      threeView.animate({ scene, camera, webglRender, orbitControls, stats })
      threeView.addEventResize({ camera, webglRender })
    },
    async loadModel () {
      const { gemBackMaterial, gemFrontMaterial } = Diamond_material
      const hdrEquirect = await Diamond_RGBELoader()
      const hdrCubeRenderTarget = this.pmremGenerator.fromEquirectangular(hdrEquirect);
      this.pmremGenerator.dispose();
      gemFrontMaterial.envMap = gemBackMaterial.envMap = hdrCubeRenderTarget.texture;
      gemFrontMaterial.needsUpdate = gemBackMaterial.needsUpdate = true;
      hdrEquirect.dispose();

      const url =
        '/static/models/diamond.glb';
      const gltf = await Default_GLTFLoader(url)
      gltf.traverse(child => {
        if (child instanceof Mesh) {
          child.material = gemBackMaterial
          const second = child.clone();
          second.material = gemFrontMaterial;
          const parent = new Group();
          parent.add(second);
          parent.add(child);
          this.scene.add(parent)
        }
      })
      this.addGUiControl()
    },
    addGUiControl () {
      const { gemBackMaterial, gemFrontMaterial } = Diamond_material
      let property = {
        reflectivity: 0.5,
        gemColor: 'Black',
      }
      Diamond_guis(property, (value, prop) => {
        property[prop] = value
        updateDiamond()
      })
      function updateDiamond () {
        gemFrontMaterial.reflectivity = gemBackMaterial.reflectivity = property.reflectivity;
        let newColor = gemBackMaterial.color;
        switch (property.gemColor) {
          case 'Blue': newColor = new Color(0x000088);
            break;
          case 'Red': newColor = new Color(0x880000);
            break;
          case 'Green': newColor = new Color(0x008800);
            break;
          case 'White': newColor = new Color(0x888888);
            break;
          case 'Black': newColor = new Color(0x0f0f0f);
            break;
        }
        gemBackMaterial.color = gemFrontMaterial.color = newColor;
      }
      this.$once('hook:beforeDestroy', () => {
        gui.destroy()
      })
    }
  },
}
</script>