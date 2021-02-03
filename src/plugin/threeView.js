import {
  AxesHelper,
  Color,
  GridHelper,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer
} from "three"
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js'

class InitThreeJS {
  constructor(el) {
    this.webDom = el
    this.scene = new Scene()
    this.scene.background = new Color(0x444444)

    this.camera = null
    this._addCamera()
    this._addLights()
    this.webGLRenderer = null
    this._initRender()

    this._addHelper()
    this.composers = []

    this.orbitControls = null
    this._addOrbitControls()

    this.animationId = null
    this.animate()

    addEventListener("resize", this.onResize);
  }
  animate = () => {
    this.animationId = window.requestAnimationFrame(this.animate)
    this.webGLRenderer.autoClear = false;
    this.webGLRenderer.clear();

    this.camera.updateProjectionMatrix();
    this.webGLRenderer.render(this.scene, this.camera);

    if (this.transformControls) {
      this.transformControls.updateMatrixWorld();
    }
    if (this.orbitControls) {
      this.orbitControls.update();
    }
  }
  _addCamera() {
    this.camera = new PerspectiveCamera(
      75,
      this.webDom.clientWidth / this.webDom.clientHeight,
      0.1,
      1000
    )
    this.camera.position.y = 30
    this.camera.position.z = 30
    this.scene.add(this.camera)
  }
  _addLights() {
    const lights = []
    lights[0] = new PointLight(0xffffff, 0.2, 0)
    lights[1] = new PointLight(0xffffff, 0.2, 0)
    lights[2] = new PointLight(0xffffff, 0.2, 0)

    lights[0].position.set(0, 200, 0)
    lights[1].position.set(100, 200, 100)
    lights[2].position.set(-100, -200, -100)

    this.scene.add(lights[0])
    this.scene.add(lights[1])
    this.scene.add(lights[2])
  }
  _addOrbitControls() {
    const element = this.elementToControls();
    this.orbitControls = new OrbitControls(this.camera, element);
    this.orbitControls.maxPolarAngle = Math.PI * 0.5;
    this.orbitControls.rotateSpeed = 1;
    this.orbitControls.panSpeed = 0.5;
  }
  // 拖拽控件初始化时的选填参数
  elementToControls() {
    let element = this.webGLRenderer.domElement;
    if (this.CSS2DLabelRenderer) {
      element = this.CSS2DLabelRenderer.domElement;
    }
    if (this.CSS3DLabelRenderer) {
      element = this.CSS3DLabelRenderer.domElement;
    }
    return element;
  }
  _initRender() {
    this.webGLRenderer = new WebGLRenderer({
      antialias: true,
      alpha: true
    });
    this.webGLRenderer.physicallyCorrectLights = true;
    this.webGLRenderer.setPixelRatio(window.devicePixelRatio);
    this.webGLRenderer.setSize(this.webDom.clientWidth, this.webDom.clientHeight);
    this.webDom.appendChild(this.webGLRenderer.domElement);
  }
  onResize = () => {
    const {
      clientHeight,
      clientWidth
    } = this.webDom;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
    this.webGLRenderer.setSize(clientWidth, clientHeight);
    if (this.composers.length > 0) {
      this.composers.forEach(composer => {
        composer.setSize(clientWidth, clientHeight);
      });
    }
    if (this.FXAAShader) {
      this.FXAAShader.uniforms["resolution"].value.set(
        1 / clientWidth,
        1 / clientHeight
      );
    }

    if (this.CSS2DLabelRenderer) {
      this.CSS2DLabelRenderer.setSize(clientWidth, clientHeight);
    }
    if (this.CSS3DLabelRenderer) {
      this.CSS3DLabelRenderer.setSize(clientWidth, clientHeight);
    }
  }

  _addHelper() {
    const gridHelper = new GridHelper(100, 20);
    this.scene.add(gridHelper);
    this.scene.add(new AxesHelper(100));
  }
}
export default InitThreeJS