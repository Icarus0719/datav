<template>
  <div>
    <ul class="sinenuts-box sg-layer-box">
      <li
        class="sinenuts-item sg-layer-row-10"
        :style="{ background: item.color }"
        v-for="(item, index) in sineNutsData"
        :key="index"
      >
        <span>{{ index + 1 }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import SineNuts from "@/plugin/sineNuts";
export default {
  data () {
    return {
      sineNutsData: []
    }
  },
  mounted () {
    this.openSineNuts();
  },
  methods: {
    async openSineNuts () {
      this.sineNutsData = new Array(10).fill(0).map(() => {
        return {
          color: `rgba(${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)}, ${Math.ceil(Math.random() * 255)},0.5)`
        }
      })
      await this.$nextTick()
      const dom = document.querySelector(".sinenuts-box");
      const SineClass = new SineNuts(dom);
      SineClass.start();
    },
  },
}
</script>
<style lang="less">
.sinenuts-box {
  height: 200px;
  margin: 20px 0;
  text-align: center;
  align-items: flex-end;
  cursor: pointer;
  .sinenuts-item {
    height: 50%;
  }
}
</style>