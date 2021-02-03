import {
  PerspectiveCamera,
} from "three"

export const TextBufferGeometry_camera = (webDom) => {
  const camera = new PerspectiveCamera(
    75,
    webDom.clientWidth / webDom.clientHeight,
    0.1,
    1000
  )
  camera.position.y = 10
  camera.position.z = 60
  return camera
}