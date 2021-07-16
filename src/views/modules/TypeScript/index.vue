<template>
  <div class="ts-page">
    <h3>TypeScript 学习</h3>

    <ul class="ts-main">
      <li class="ts-item">
        <div class="item-title">环境配置</div>
        <p>全局安装typescript：npm i typescript -g</p>
        <p>node编译插件：npm i ts-node -g</p>
      </li>

      <li class="ts-item">
        <div class="item-title">命令行</div>
        <p>编译：tsc index.ts</p>
        <p>编译2：tsc -t es5 index.ts</p>
      </li>

      <li class="ts-item">
        <div class="item-title">内容</div>
        <p>静态类型：基础静态类型、对象静态类型</p>
        <p>类型注解、类型推断</p>
        <p>函数传参和返回类型定义，传参对象类型定义</p>
        <p>数组定义，数组对象定义</p>
        <p>类型别名 type</p>
        <p>元组、类型约束</p>
        <p>interface 接口</p>
        <p>interface和class</p>
        <br />
        <p>类：继承，重写，supper，访问类型：public,private,protected</p>
        <p>类的继承中子类如何继承父类的构造器</p>
        <p>private中getter和setter的使用</p>
        <p>static的作用，静态方法，不需要new实例，直接class调用方法</p>
        <p>只读属性和抽象类</p>
      </li>
    </ul>
    <br />
    <div>{{ text }}</div>
  </div>
</template>
<script>
import { getText } from './index.js'
export default {
  data() {
    return {
      text: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.text = getText()
    }
  }
}
</script>
<style lang="less">
.item-title {
  font-size: 16px;
  color: #000;
  line-height: 32px;
  margin-top: 30px;
}
</style>