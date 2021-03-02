import * as dat from 'dat.gui'

export const TextBufferGeometry_guis = (data, callback) => {
  const gui = new dat.GUI()
  const fonts = [
    'helvetiker',
    'optimer',
    'gentilis',
    'droid/droid_serif',
    'molle',
    'damion'
  ]
  const weights = ['regular', 'bold']

  const folder = gui.addFolder('属性')
  folder.closed = false
  folder.add(data, 'text').onChange((value) => callback(value, 'text'))
  folder.add(data, 'size', 1, 30).onChange((value) => callback(value, 'size'))
  folder.add(data, 'height', 1, 20).onChange((value) => callback(value, 'height'))
  folder
    .add(data, 'curveSegments', 1, 20)
    .step(1)
    .onChange((value) => callback(value, 'curveSegments'))
  folder.add(data, 'font', fonts).onChange((value) => callback(value, 'font'))
  folder.add(data, 'weight', weights).onChange((value) => callback(value, 'weight'))
  folder.add(data, 'bevelEnabled').onChange((value) => callback(value, 'bevelEnabled'))
  folder.add(data, 'bevelThickness', 0.1, 3).onChange((value) => callback(value, 'bevelThickness'))
  folder.add(data, 'bevelSize', 0, 3).onChange((value) => callback(value, 'bevelSize'))
  folder.add(data, 'bevelOffset', -0.5, 1.5).onChange((value) => callback(value, 'bevelOffset'))
  folder
    .add(data, 'bevelSegments', 0, 8)
    .step(1)
    .onChange((value) => callback(value, 'bevelSegments'))

  return {
    gui,
    folder
  }
}

export const Diamond_guis = (data, callback) => {
  const gui = new dat.GUI()
  const folder = gui.addFolder('Diamond')
  folder.add(data, 'reflectivity', 0, 1).onChange((value) => callback(value, 'reflectivity'))
  folder.add(data, 'gemColor', ['Blue', 'Green', 'Red', 'White', 'Black']).onChange((value) => callback(value, 'gemColor'))

  return {
    gui,
    folder
  }
}