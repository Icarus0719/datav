import {
  RGBELoader
} from 'three/examples/jsm/loaders/RGBELoader.js'
import {
  UnsignedByteType
} from "three"

export const Diamond_RGBELoader = () => {
  return new Promise(resolve => {
    new RGBELoader()
      .setDataType(UnsignedByteType)
      .setPath('/static/textures/equirectangular/')
      .load('venice_sunset_1k.hdr', hdrEquirect => {
        resolve(hdrEquirect)
      })
  })
}