<template>
  <svg viewBox="-400 -400 800 800"></svg>
</template>
<script>
import Force from '@/plugin/svg/sg-force-guidance.js';

export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const points = new Array(16).fill(0).map((e, i, arr) => {
        return {
          name: e,
          color: `hsl(${(360 * i) / arr.length},100%,60%)`,
        };
      });
      const svg = document.querySelector('svg');
      new Force(svg, points);
    },
  },
};
</script>