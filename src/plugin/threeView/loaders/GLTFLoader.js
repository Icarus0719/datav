import {
  GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js'

export const Default_GLTFLoader = (url) => {
  return new Promise(resolve => {
    const loader = new GLTFLoader()
    loader.load(url, gltf => {
      let model = gltf.scene || gltf.scenes[0]
      resolve(model)
    })
  })
}