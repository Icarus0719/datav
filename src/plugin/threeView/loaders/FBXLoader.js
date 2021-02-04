import {
  FBXLoader
} from 'three/examples/jsm/loaders/FBXLoader.js'
import {
  Box3
} from "three"

export const Default_FBXLoader = (url) => {
  return new Promise(resolve => {
    const loader = new FBXLoader()
    loader.load(url, object => {
      resolve(object)
    })
  })
}

export const TextBufferGeometry_FBXLoader = (url) => {
  return new Promise(resolve => {
    const loader = new FBXLoader()
    loader.load(url, object => {
      const box = new Box3().setFromObject(object)
      const z_radius =
        Math.floor(((box.max.z - box.min.z) / 2) * 100) / 100
      object.userData.z_radius = z_radius
      resolve(object)
    })
  })
}