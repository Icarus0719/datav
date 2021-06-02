<template>
  <div>
    <div class="sg-layer-box">
      <div
        class="sg-layer-row-5 box-card is-vertical"
        :class="'text-card-' + index"
        v-for="(item, index) in boxData"
        :key="index"
      >
        <p>{{ item.text }}</p>
        <p class="text-demo" :class="item.class" data-text="测试文字">
          {{ index === 14 ? '' : '测试文字' }}
        </p>
      </div>
      <div class="sg-layer-row-5"></div>
      <div class="sg-layer-row-5"></div>
      <div class="sg-layer-row-5"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      boxData: [],
    };
  },
  mounted () {
    const urls = {};
    const titles = {
      0: "文字模糊",
      1: "文字渐变",
      2: "文字长阴影",
      3: "文字立体阴影",
      4: '内嵌阴影效果',
      5: '氖光效果',
      6: '文字图片结合',
      7: '文字渐变实现二',
      8: '文字渐变动画',
      9: '文字高光动画',
      10: 'mask-文字出场动画',
      11: '文字镂空',
      12: '渐变色镂空文字',
      13: '文字光影效果',
      14: "文字混合差值效果"
    };
    this.boxData = new Array(16).fill(0).map((e, i) => {
      return {
        text: `${titles[i] || "text-type-" + i}`,
        class: `text-type-${i}`,
        src: urls[i],
      };
    });
  },
};
</script>
<style lang="less">
.text-demo {
  font-size: 40px;
  font-weight: 700;
}
.text-card-4,
.text-card-5,
.text-card-10,
.text-card-9 {
  background-color: #2d2d2d;
}
.text-type-0 {
  color: transparent;
  text-shadow: 0 0 5px rgba(241, 0, 0, 0.5);
}

.text-type-1[data-text] {
  position: relative;
  &::after {
    content: attr(data-text);
    z-index: 10;
    color: red;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-mask-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(0, 0, 0, 0)),
      color-stop(50%, rgba(0, 0, 0, 1)),
      to(rgba(0, 0, 0, 0))
    );
  }
}
.text-type-2 {
  color: #992400;
  text-shadow: 0px 0px #992400, 1px 1px rgba(152, 36, 1, 0.98),
    2px 2px rgba(151, 37, 2, 0.96), 3px 3px rgba(151, 37, 2, 0.94),
    4px 4px rgba(150, 37, 3, 0.92), 5px 5px rgba(149, 38, 4, 0.9),
    6px 6px rgba(148, 38, 5, 0.88);
}
.text-type-3 {
  text-shadow: 0 -1px 0 #ffffff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c,
    0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424,
    0 7px 0 #222222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c,
    0 11px 0 #1a1a1a, 0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414,
    0 15px 0 #121212;
}
.text-type-4 {
  color: #202020;
  letter-spacing: 0.1em;
  text-shadow: -1px -1px 1px #111111, 2px 2px 1px #363636;
}

.text-type-5 {
  color: #fff;
  text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff,
    0 0 100px #0ebeff, 0 0 200px #0ebeff;
}
.text-type-6 {
  color: transparent;
  background: url('../../assets/images/text-bg.jpg') no-repeat center;
  background-size: 100%;
  -webkit-background-clip: text;
}
.text-type-7 {
  color: transparent;
  background: linear-gradient(
    45deg,
    #009688,
    yellowgreen,
    pink,
    #03a9f4,
    #9c27b0,
    #8bc34a
  );
  background-clip: text;
}
.text-type-8 {
  color: transparent;
  background: linear-gradient(45deg, #9c27b0, #8bc34a);
  background-clip: text;
  animation: huerotate 2s infinite;
}
@keyframes huerotate {
  100% {
    filter: hue-rotate(360deg);
  }
}
.text-type-9 {
  position: relative;
  color: transparent;
  background-color: #e8a95b;
  background-clip: text;
  &::after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      90deg,
      transparent 0%,
      transparent 6%,
      white 11%,
      transparent 11.15%,
      transparent 15%,
      rgba(255, 255, 255, 0.3) 20%,
      transparent 25%,
      transparent 27%,
      rgba(255, 255, 255, 0.6) 32%,
      white 33%,
      rgba(255, 255, 255, 0.3) 33.15%,
      transparent 38%,
      transparent 40%,
      rgba(255, 255, 255, 0.3) 45%,
      transparent 50%,
      transparent 100%
    );
    background-clip: text;
    background-size: 150% 100%;
    background-repeat: no-repeat;
    animation: shine 5s infinite linear;
  }
}
@keyframes shine {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -190% 0;
  }
}
.text-type-10 {
  color: #fff;
  mask: radial-gradient(circle at 0 50%, #000, transparent 10%, transparent 0);
  mask-size: 100%;
  animation: scale 4s infinite;
}
@keyframes scale {
  50%,
  100% {
    mask-size: 2000%;
  }
}
.text-type-11 {
  -webkit-text-stroke: 1px red;
  color: transparent;
}
.text-type-12 {
  color: transparent;
  position: relative;
  -webkit-text-stroke: 1px #9a9acc;
  background-color: #2d2d2d;

  &::before {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(45deg, #ff269b, #2ab5f5, #ffbf00);
    mix-blend-mode: multiply;
  }
}
.text-type-13 {
  color: transparent;
  position: relative;
  overflow: hidden;
  -webkit-text-stroke: 1px #7272a5;
  background-color: #2d2d2d;

  &::before {
    content: ' ';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-image: linear-gradient(45deg, #ff269b, #2ab5f5, #ffbf00);
    mix-blend-mode: multiply;
  }

  &::after {
    content: '';
    background: radial-gradient(circle, #fff, #000 50%);
    background-size: 25% 25%;
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;
    mix-blend-mode: color-dodge;
    animation: mix 8s linear infinite;
  }
}
@keyframes mix {
  to {
    transform: translate(50%, 50%);
  }
}
.text-type-14 {
  background: repeating-radial-gradient(
    circle at 200% 200%,
    #000 0,
    #000 150px,
    #fff 150px,
    #fff 300px
  );

  &::before {
    content: attr(data-text);
    color: #fff;
    mix-blend-mode: difference;
  }
}
</style>