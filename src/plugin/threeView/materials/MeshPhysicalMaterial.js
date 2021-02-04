import {
  BackSide,
  FrontSide,
  MeshPhysicalMaterial,
} from "three"

export const Diamond_material = (() => {
  const gemBackMaterial = new MeshPhysicalMaterial({
    map: null,
    color: 0x0f0f0f,
    metalness: 1,
    roughness: 0,
    opacity: 0.5,
    side: BackSide,
    transparent: true,
    envMapIntensity: 5,
    premultipliedAlpha: true
  })
  const gemFrontMaterial = new MeshPhysicalMaterial({
    map: null,
    color: 0x0f0f0f,
    metalness: 0,
    roughness: 0,
    opacity: 0.25,
    side: FrontSide,
    transparent: true,
    envMapIntensity: 10,
    premultipliedAlpha: true
  });
  return {
    gemBackMaterial,
    gemFrontMaterial
  }
})()