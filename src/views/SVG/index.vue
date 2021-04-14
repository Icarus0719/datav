<template>
  <div>
    <h3>SVG</h3>
    <div class="sg-layer-box">
      <div
        class="sg-layer-row-5 box-card"
        v-for="(item, index) in boxData"
        :key="index"
        :class="tabTitle ? 'card-actived' : ''"
        @click="clickOpt(item)"
      >
        <span>{{ item.text }}</span>
      </div>
      <div class="sg-layer-row-5"></div>
      <div class="sg-layer-row-5"></div>
      <div class="sg-layer-row-5"></div>
    </div>

    <div v-if="tabTitle">
      <h4>{{ tabTitle }}</h4>
      <router-view class="svg-viewer" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      boxData: [],
      tabTitle: '',
    };
  },
  watch: {
    $route(newVal) {
      if (newVal.path === '/SVG') {
        this.tabTitle = '';
      }
    },
  },
  mounted() {
    this.boxData = [{ text: '案例：use,clip,mask', path: '/use' }];
  },
  methods: {
    clickOpt(item) {
      this.tabTitle = item.text;
      this.$router.push('/SVG' + item.path);
    },
  },
};
</script>
<style lang="less">
.svg-viewer {
  width: 100%;
  height: 600px;
  border: 1px solid red;
}
</style>