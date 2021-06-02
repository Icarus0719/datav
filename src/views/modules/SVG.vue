<template>
  <div>
    <h3>SVG</h3>
    <div class="sg-layer-box">
      <div
        class="sg-layer-row-5 box-card"
        v-for="(item, index) in boxData"
        :key="index"
        :class="$route.path.indexOf(item.path) > -1 ? 'card-actived' : ''"
        @click="clickOpt(item)"
      >
        <span>{{ item.text }}</span>
      </div>
      <div class="sg-layer-row-5"></div>
      <div class="sg-layer-row-5"></div>
      <div class="sg-layer-row-5"></div>
    </div>

    <div v-if="selectRow && $route.path.indexOf(selectRow.path) > -1">
      <h4>{{ selectRow.text }}</h4>
      <router-view class="svg-viewer" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boxData: [
        { text: '案例：基础使用', path: '/SVG-use' },
        { text: '案例：力导向图', path: '/SVG-force-guidance' }
      ],
      selectRow: null
    }
  },
  watch: {
    $route(newVal) {
      if (newVal.path === '/SVG') {
        this.selectRow = this.boxData[0]
      }
    }
  },
  mounted() {
    this.selectRow = this.boxData.find((e) => {
      return this.$route.path.indexOf(e.path) > -1
    })
  },
  methods: {
    clickOpt(item) {
      this.selectRow = item
      this.$router.push(item.path)
    }
  }
}
</script>
<style lang="less">
.svg-viewer {
  width: 100%;
  height: 600px;
  border: 1px solid red;
}
</style>