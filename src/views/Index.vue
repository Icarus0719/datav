<template>
  <div class="content-box sg-container">
    <div class="sg-aside aside-menu">
      <div class="aside-logo">SG-DATAV</div>
      <el-input
        placeholder="输入关键字"
        v-model="filterText"
        prefix-icon="el-icon-search"
        class="filter-input"
      >
      </el-input>
      <Tree
        class="sg-aside-tree"
        ref="tree"
        v-model="asideData"
        :current-node-key="$route.path"
        node-key="url"
        :props="{ children: 'children', label: 'title' }"
        @node-click="nodeClick"
      ></Tree>
    </div>

    <div class="sg-container is-vertical">
      <router-view class="content-main page-content" />
    </div>
  </div>
</template>
<script>
import Tree from '@/element-ui-libs/sg-tree.vue'
import { menuList } from '@/router/menuList.js'

export default {
  components: {
    Tree
  },
  data() {
    return {
      asideData: menuList,
      filterText: ''
    }
  },
  watch: {
    filterText(newVal) {
      this.$refs.tree.filter(newVal)
    }
  },
  mounted() {},
  methods: {
    nodeClick(node) {
      this.$router.push(node.url)
    }
  }
}
</script>
<style lang="less">
.content-box {
  min-height: 100%;
}
.content-main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.aside-menu {
  width: 360px;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
}
.sg-aside-tree {
  flex: 1;
  overflow-y: auto;
}
.aside-logo {
  height: 64px;
  line-height: 64px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  font-style: italic;
  border-bottom: 1px solid #ccc;
}
.filter-input {
  width: calc(100% - 40px);
  margin: 20px;
}
</style>