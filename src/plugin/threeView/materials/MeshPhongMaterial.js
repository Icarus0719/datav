import {
  DoubleSide,
  MeshPhongMaterial,
} from "three"

export const TextBufferGeometry_material = (() => {
  const lianColor = '#E4CA40'
  const meshMaterial = new MeshPhongMaterial({
    color: lianColor,
    emissive: lianColor,
    side: DoubleSide,
    flatShading: true
  })
  return meshMaterial
})()