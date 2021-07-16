<template>
  <div>
    <h4>Rollup入门</h4>
    <span>模块打包器，主流开源框架，类库都使用它</span>
    <br />
    <a href="https://www.imooc.com/article/262083" target="_blank">
      参考资料：快速入门
    </a>
    <a href="https://www.imooc.com/article/263597" target="_blank">
      参考资料：快速进阶
    </a>
    <a href="https://www.imooc.com/article/264074" target="_blank">
      参考资料：快速精通--vue源码打包原理
    </a>
    <br />
    <p>输出模块编译协议：umd,es,cjs(commonjs)</p>
    <h4>插件：</h4>
    <p>rollup-plugin-node-resolve:将依赖的第三方插件与源码进行混合打包</p>
    <br />
    <p>@babel/node,@babel/core，@babel/preset-env：</p>
    <p>
      在node环境中编写es6语法，因为node不支持es6，支持commonjs。D安装。cmd:babel-node
      index.js。
    </p>
    <p>.babelrc文件的配置</p>
    <br />
    <p>tree-shaking机制：</p>
    <p>
      就是使用export直接导出想引用的数据，不使用export
      default{}。因为这样打包只会将使用到的数据打包进去，不会全部引用
    </p>
    <br />
    <p>
      external属性：
      resolve插件可以将外部引用集成到项目中，但是有些不想集成，可以使用这个属性
    </p>
    <br />
    <p>@rollup/plugin-commonjs插件：</p>
    <p>识别有的外部插件是commonjs写的，编译时需要用这个插件进行编译</p>
    <br />
    <p>@rollup/plugin-babel插件:</p>
    <p>编译时，将es6语法变为es5低版本语言，必须的插件</p>
    <br />
    <p>@rollup/plugin-json插件：</p>
    <p>用于json文件的编译构建</p>
    <br />
    <p>rollup-plugin-terser插件：</p>
    <p>用于打包压缩，生产时使用</p>
    <br />
    <p>rollup-plugin-vue插件：</p>
    <p>vue文件的编译</p>
    <p>需要安装@vue/compiler-sfc：编译template</p>
    <p>需要安装rollup-plugin-postcss：编译css</p>
    <p>
      上面都安装了，也会报错，注意vue插件需要安装在前面，plugin插件也是有序的
    </p>
    <br />
    <p>eslint：在开发vue组件时，不装eslint的话，其他项目中引入是要报错的</p>
    <p>安装：eslint ,eslint-plugin-vue</p>
    <p>cmd: npx eslint --init ;生成.eslintrc.js</p>
    <br />
    <p>vue2.0组件开发</p>
    <p>rollup-plugin-vue的版本降低到5.0,好像6.0是对应vue3.0</p>
    <P>rollup-plugin-postcss也降到3.0</P>
    <p>
      vue3.0需要安装@vue/compiler-sfc，而vue2.0则需要安装vue-template-compiler
    </p>

    <br />
    <p>组件的按需加载</p>
    <P>babel-plugin-import的使用</P>

    <h4>另外</h4>
    <p>
      npm link :
      关联本地另一个文件夹下的组件库。本地开发调试使用，没问题后可以将组件或插件发布到npm上
    </p>
    <p>组件库操作步骤：</p>
    <p>1、修改package.json中的main属性，指定入口文件</p>
    <p>
      2、添加files属性,作用是上传npm发布是要包含哪些文件。files:["dist","src"]
    </p>
    <p>3、输入npm link :如果报错，可以尝试删除node_modules文件夹，再npm link</p>
    <p>
      4、第三步会在本地node安装包中生成一个组件库包。这时在应用项目中的package.json中的dependencies手动添加组件库，命名一个版本号
    </p>
    <p>
      5、应用项目中npm link
      xxx。这样可以将本地的组件库安装到了项目的node_modules
    </p>
  </div>
</template>
<script>
export default {}
</script>