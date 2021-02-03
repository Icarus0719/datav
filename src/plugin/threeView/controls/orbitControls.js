import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls.js'

export const TextBufferGeometry_orbitControls = (camera, webGLRenderer) => {
  let orbitControls = new OrbitControls(camera, webGLRenderer.domElement);
  orbitControls.maxPolarAngle = Math.PI * 0.5;
  orbitControls.rotateSpeed = 1;
  orbitControls.panSpeed = 0.5;
  return orbitControls
}