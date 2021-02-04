import {
  PointLight,
  AmbientLight
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

export const Diamond_lights = (() => {
  let lights = []
  const ambientLight = new AmbientLight(0x222222)
  lights.push(ambientLight)

  const pointLight1 = new PointLight(0xffffff)
  pointLight1.position.set(150, 10, 0)
  pointLight1.castShadow = false
  lights.push(pointLight1)

  const pointLight2 = new PointLight(0xffffff)
  pointLight2.position.set(- 150, 0, 0 )
  lights.push(pointLight2)

  const pointLight3 = new PointLight(0xffffff)
  pointLight3.position.set(0, - 10, - 150 )
  lights.push(pointLight3)

  const pointLight4 = new PointLight(0xffffff)
  pointLight4.position.set(0, 0, 150)
  lights.push(pointLight4)
  return lights
})()