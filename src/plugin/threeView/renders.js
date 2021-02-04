import {
  WebGLRenderer
} from "three"

export const Default_renders = (webDom) => {
  let webGLRenderer = new WebGLRenderer({
    antialias: true,
    alpha: true
  });
  webGLRenderer.physicallyCorrectLights = true;
  webGLRenderer.setPixelRatio(window.devicePixelRatio);
  webGLRenderer.setSize(webDom.clientWidth, webDom.clientHeight);
  webDom.appendChild(webGLRenderer.domElement);
  return webGLRenderer
}