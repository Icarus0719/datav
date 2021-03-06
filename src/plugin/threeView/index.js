import * as Stats from "stats.js";

class InitThreeJS {
  constructor(el) {
    this.webDom = el
  }
  animate = (options) => {
    const {
      scene,
      camera,
      webglRender,
      orbitControls,
      transformControls,
      stats
    } = options
    if (!scene || !camera || !webglRender) return
    render()

    function render() {
      window.requestAnimationFrame(render)
      webglRender.autoClear = false;
      webglRender.clear();
      camera.updateProjectionMatrix();
      webglRender.render(scene, camera);
      transformControls && transformControls.updateMatrixWorld();
      orbitControls && orbitControls.update();
      stats && stats.update();
    }
  }
  addEventResize = (options) => {
    const {
      webglRender,
      camera,
      composer,
      FXAAShader,
      CSS2DLabelRenderer,
      CSS3DLabelRenderer
    } = options
    if (!webglRender || !camera) return
    addEventListener("resize", onResize);
    const self = this

    function onResize() {
      const {
        clientHeight,
        clientWidth
      } = self.webDom
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      webglRender.setSize(clientWidth, clientHeight);
      composer && composer.setSize(clientWidth, clientHeight);
      FXAAShader && FXAAShader.uniforms["resolution"].value.set(
        1 / clientWidth,
        1 / clientHeight
      );
      CSS2DLabelRenderer && CSS2DLabelRenderer.setSize(clientWidth, clientHeight);
      CSS3DLabelRenderer && CSS3DLabelRenderer.setSize(clientWidth, clientHeight);
    }
  }
  addStats() {
    const stats = new Stats();
    stats.showPanel(0);
    stats.dom.style.position = "absolute"
    this.webDom.appendChild(stats.dom);
    return stats
  }
}
export default InitThreeJS