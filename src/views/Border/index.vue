<template>
  <div class="page-content">
    <div class="layer-box">
      <div
        :class="['layer-row-5', 'box-card', `${item.text}`]"
        v-for="(item, index) in boxData"
        :key="index"
      >
        <div>
          <a v-if="item.src" :href="item.src" target="_blank">{{
            item.text
          }}</a>
          <span v-else>{{ item.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      boxData: []
    }
  },
  mounted () {
    const urls = {
      8: "https://css-tricks.com/how-to-animate-a-svg-with-border-image/"
    }
    this.boxData = new Array(10).fill(0).map((e, i) => {
      return {
        text: `border-type-${i}`,
        src: urls[i]
      }
    })
  },
}
</script>
<style lang="less">
.box-card {
  height: 150px;
  background: #fff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    a {
      color: #03a9f3;
      &::after {
        content: '链接';
      }
    }
  }
}

.border-type-0 {
  @borderColor: #03a9f3;
  position: relative;
  border: 1px solid @borderColor;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    transition: height 1s, width 1s;
  }
  &::before {
    top: -5px;
    left: -5px;
    border-top: 1px solid @borderColor;
    border-left: 1px solid @borderColor;
  }

  &::after {
    right: -5px;
    bottom: -5px;
    border-bottom: 1px solid @borderColor;
    border-right: 1px solid @borderColor;
  }
  &:hover::before,
  &:hover::after {
    width: calc(100% + 9px);
    height: calc(100% + 9px);
  }
}

.border-type-1 {
  background: linear-gradient(90deg, #fff 50%, transparent 0) repeat-x,
    linear-gradient(90deg, #fff 50%, transparent 0) repeat-x,
    linear-gradient(0deg, #fff 50%, transparent 0) repeat-y,
    linear-gradient(0deg, #fff 50%, transparent 0) repeat-y;
  background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
  animation: linearGradientMove 0.2s infinite linear;
}
@keyframes linearGradientMove {
  100% {
    background-position: 4px 0, -4px 100%, 0 -4px, 100% 4px;
  }
}

.border-type-2 {
  outline: 1px solid #333;
  // outline-offset: -1px;

  &:hover {
    outline: none;
    background: linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
      linear-gradient(90deg, #333 50%, transparent 0) repeat-x,
      linear-gradient(0deg, #333 50%, transparent 0) repeat-y,
      linear-gradient(0deg, #333 50%, transparent 0) repeat-y;
    background-size: 4px 1px, 4px 1px, 1px 4px, 1px 4px;
    background-position: 0 0, 0 100%, 0 0, 100% 0;
    animation: linearGradientMove 0.2s infinite linear;
  }
}

.border-type-3 {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: transparent;
  &::after {
    content: '';
    position: absolute;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-repeat: no-repeat;
    background-size: 50% 50%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: linear-gradient(#399953, #399953),
      linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33),
      linear-gradient(#377af5, #377af5);
    animation: rotate 4s linear infinite;
  }
  &::before {
    content: '';
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    border-radius: 4px;
    background: #fff;
    z-index: 1;
  }
  > div {
    position: absolute;
    z-index: 10;
  }
}
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.border-type-4 {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  background: #000;
  color: #fff;
  &::after {
    content: '';
    position: absolute;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent,
      rgba(168, 239, 255, 1),
      transparent 30%
    );
    animation: rotate 4s linear infinite;
  }
  &::before {
    content: '';
    position: absolute;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    border-radius: 4px;
    background: #000;
    z-index: 1;
    opacity: 0.3;
  }
  &:hover::before {
    opacity: 1;
  }
  > div {
    position: absolute;
    z-index: 10;
  }
}

.border-type-5 {
  position: relative;
  border: 2px solid gold;
  border-radius: 10px;
  background: gold;
  color: #fff;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 2px solid gold;
    animation: clippath 3s infinite linear;
    border-radius: 10px;
  }
  &::after {
    animation: clippath 3s infinite -1.5s linear;
  }
}
@keyframes clippath {
  0%,
  100% {
    clip-path: inset(0 0 98% 0);
  }
  25% {
    clip-path: inset(0 98% 0 0);
  }
  50% {
    clip-path: inset(98% 0 0 0);
  }
  75% {
    clip-path: inset(0 0 0 98%);
  }
}

.border-type-6 {
  position: relative;
  overflow: hidden;
  background: transparent;
  &::after {
    content: '';
    position: absolute;
    top: 4px;
    bottom: 4px;
    right: 4px;
    left: 4px;
    background: #fff;
    border: 2px solid yellowgreen;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: -20px;
    left: 0px;
    background: #fff;
    transform: rotateZ(-90deg) translate(-100%, -100%);
    transform-origin: top left;
    transition: transform 0.3s;
    transition-timing-function: linear;
  }
  &:hover::before {
    transform: rotateZ(0deg) translate(0%, -0%);
  }
  > div {
    position: absolute;
    z-index: 10;
  }
}

.border-type-7 {
  border: 2px solid;
  border-image: linear-gradient(45deg, gold, deeppink) 1;
  clip-path: inset(0px round 2px);
  animation: huerotate 6s infinite linear;
  filter: hue-rotate(360deg);
}
@keyframes huerotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}

.border-type-8 {
  border: 24px solid;
  border-image: url(https://skullctf.com/images/skull-border.svg);
  border-image-slice: 32;
  border-image-repeat: round;
}
</style>