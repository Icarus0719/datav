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
        ref="tree"
        :model="asideData"
        :current-node-key="asideData[0].path"
        node-key="path"
        :props="{ children: 'children', label: 'title' }"
      ></Tree>
    </div>

    <div class="sg-container is-vertical">
      <router-view class="content-main" />
    </div>
  </div>
</template>
<script>
import Tree from "@/libs/sg-tree.vue";
import { superAdminPathList } from "@/auth/routerTree.js";

export default {
  components: {
    Tree,
  },
  data () {
    return {
      asideData: superAdminPathList,
      filterText: ''
    }
  },
  watch: {
    filterText (newVal) {
      this.$refs.tree.filter(newVal);
    }
  },
  mounted () {
    this.asideData = superAdminPathList.map(e => {
      e.node = {
        label: e.title,
        path: e.path
      }
      return e
    })
  },
}
</script>
<style lang="less">
.content-box {
  height: 100%;
}
.content-main {
  height: auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.aside-menu {
  width: 360px;
  border-right: 1px solid #ccc;
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