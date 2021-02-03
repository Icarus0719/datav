import {
  PointLight
} from "three"



export const TextBufferGeometry_lights = (() => {
  var lights = []
  lights[0] = new PointLight(0xffffff, 0.2, 0)
  lights[1] = new PointLight(0xffffff, 0.2, 0)
  lights[2] = new PointLight(0xffffff, 0.2, 0)

  lights[0].position.set(0, 200, 0)
  lights[1].position.set(100, 200, 100)
  lights[2].position.set(-100, -200, -100)
  return lights
})()