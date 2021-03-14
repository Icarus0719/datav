<template>
  <div>
    <div class="sg-layer-box">
      <div
        class="sg-layer-row-5 box-card is-vertical"
        v-for="(item, index) in boxData"
        :key="index"
      >
        <p>{{ item.text }}</p>
        <p :class="item.class" data-text="测试文字">测试文字</p>
      </div>
      <div class="sg-layer-row-5"></div>
      <div class="sg-layer-row-5"></div>
      <div class="sg-layer-row-5"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boxData: [],
    };
  },
  mounted() {
    const urls = {};
    const titles = {
      0: "文字模糊",
      1: "文字渐变",
      2: "文字长阴影",
    };
    this.boxData = new Array(9).fill(0).map((e, i) => {
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
   @function makelongrightshadow($color) {
    $val: 0px 0px $color;

    @for $i from 1 through 50 {
        $color: fade-out(desaturate($color, 1%), .02);
        $val: #{$val}, #{$i}px #{$i}px #{$color};
    }

    @return $val;
}
.text-type-2 {
  color: #992400;
  text-shadow: 0px 0px #992400, 1px 1px rgba(152, 36, 1, 0.98),
    2px 2px rgba(151, 37, 2, 0.96), 3px 3px rgba(151, 37, 2, 0.94),
    4px 4px rgba(150, 37, 3, 0.92), 5px 5px rgba(149, 38, 4, 0.9),
    6px 6px rgba(148, 38, 5, 0.88), 7px 7px rgba(148, 39, 5, 0.86),
    8px 8px rgba(147, 39, 6, 0.84), 9px 9px rgba(146, 39, 7, 0.82),
    }
 
</style>