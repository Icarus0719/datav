import {
  FontLoader,
  TextBufferGeometry
} from "three"

export const TextBufferGeometry_neck = (data) => {
  return new Promise(resolve => {
    const loader = new FontLoader()
    loader.load(
      '/static/fonts/' +
      data.font +
      '_' +
      data.weight +
      '.typeface.json',
      (font) => {
        const geometry = new TextBufferGeometry(data.text, {
          font: font,
          size: data.size,
          height: data.height,
          curveSegments: data.curveSegments,
          bevelEnabled: data.bevelEnabled,
          bevelThickness: data.bevelThickness,
          bevelSize: data.bevelSize,
          bevelOffset: data.bevelOffset,
          bevelSegments: data.bevelSegments
        })
        // geometry.center();
        geometry.computeBoundingBox()
        resolve(geometry)
      }
    )
  })

}