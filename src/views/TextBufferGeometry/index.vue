<template>
  <div class="webgl" ref="sceneview"></div>
</template>
<script>
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three"
import InitThreeJS from '@/plugin/threeView.js'

export default {
  mounted () {
    this.threeView = new InitThreeJS(this.$refs.sceneview)
    this.addModel()

  },
  methods: {
    addModel () {
      var objBack = new Mesh(
        new BoxGeometry(10, 10, 10),
        new MeshBasicMaterial({
          color: "red",
          wireframe: false
        })
      );
      this.threeView.scene.add(objBack);
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
