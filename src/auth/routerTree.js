// 侧边栏，面包屑等路由内容的树形数据结构

function AdminPath() {
  this.data = [{
      title: 'TextBufferGeometry',
      path: '/TextBufferGeometry',
      children: []
    },
    {
      title: 'MeshPhysicalMaterial-Diamond',
      path: '/Diamond',
      children: []
    },
    {
      title: 'Border动画',
      path: '/Border',
      children: []
    },
    {
      title: 'Snap响指效果',
      path: '/Snap',
      children: []
    },
    {
      title: 'SineNuts三角函数动画',
      path: '/SineNuts',
      children: []
    },
    {
      title: 'AE动画',
      path: '/AE',
      children: []
    },
    {
      title: 'ShaderDiamond',
      path: '/ShaderDiamond',
      children: []
    }
  ]
}
export const superAdminPathList = new AdminPath().data.sort((a, b) => {
  return a.title.localeCompare(b.title, 'zh-CN')
})