// 灭霸响指效果
import html2canvas from "html2canvas";
import Chance from "chance";
export const createAnimation = (target) => {
  target.classList.remove("quickFade");
  target.classList.remove("recoverFade");
  snap(target)
}
export const recovery = (target) => {
  target.classList.add("recoverFade");
}
// 响指动画
const snap = (target) => {
  var chance = new Chance();
  html2canvas(target, {
    backgroundColor: "transparent",
    allowTaint: 0,
    useCORS: true
  }).then(canvas => {
    // 处理canvas代码
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixelArr = imageData.data;
    // 创建和图像信息数组长度相同的透明数组
    const data = pixelArr.slice(0).fill(0);
    // 创建透明图像数组的个数，不能太大或太小
    const canvasCount = 20;
    // 将透明图像数组复制多个
    const imageDataArray = Array.from({
        length: canvasCount
      }, () =>
      data.slice(0)
    );
    // 将原图像上的像素信息随机分配进不同透明图像上，位置不变
    for (let i = 0; i < pixelArr.length; i += 4) {
      const p = Math.floor((i / pixelArr.length) * canvasCount);
      // a为随机数选出要放入像素信息的数组
      const a = imageDataArray[weightedRandomDistrib(p, canvasCount)];
      // 将像素信息放入随机到随机的透明图像数组中覆盖
      a[i] = pixelArr[i];
      a[i + 1] = pixelArr[i + 1];
      a[i + 2] = pixelArr[i + 2];
      a[i + 3] = pixelArr[i + 3];
    }
    //隐藏原始图像，添加飘散动画
    for (let i = 0; i < canvasCount; i++) {
      const c = newCanvasFromImageData(
        imageDataArray[i],
        canvas.width,
        canvas.height
      );
      c.classList.add("dust");
      setTimeout(() => {
        animateTransform(
          c,
          200,
          -100,
          chance.integer({
            min: -25,
            max: 25
          }),
          2000
        );
        c.classList.add("blur");
        setTimeout(() => {
          c.remove();
        }, 2050);
      }, 70 * i);

      target.parentNode.appendChild(c);
    }
    target.classList.add("quickFade");

  });

  function newCanvasFromImageData(imageDataArray, w, h) {
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const tempCtx = canvas.getContext("2d");
    tempCtx.putImageData(new ImageData(imageDataArray, w, h), 0, 0);

    return canvas;
  }

  function animateTransform(elem, sx, sy, angle, duration) {
    elem.animate(
      [{
          transform: "rotate(0) translate(0, 0)"
        },
        {
          transform: "rotate(" + angle + "deg) translate(" + sx + "px," + sy + "px)"
        }
      ], {
        duration: duration,
        easing: "ease-in"
      }
    );
  }

  function weightedRandomDistrib(peak, count) {
    const prob = [],
      seq = [];
    for (let i = 0; i < count; i++) {
      prob.push(Math.pow(count - Math.abs(peak - i), 6));
      seq.push(i);
    }
    return chance.weighted(seq, prob);
  }
}