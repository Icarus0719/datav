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
      title: 'AE动画',
      path: '/AE',
      children: []
    },
    {
      title: 'ShaderDiamond',
      path: '/ShaderDiamond',
      children: []
    },
    {
      title: 'Other',
      path: '/Other',
      children: []
    },
    {
      title: 'Image',
      path: '/Image',
      children: []
    }
  ]
}
export const superAdminPathList = new AdminPath().data.sort((a, b) => {
  return a.title.localeCompare(b.title, 'zh-CN')
})