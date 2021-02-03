// 侧边栏，面包屑等路由内容的树形数据结构

function AdminPath() {
  this.data = [{
      title: 'TextBufferGeometry',
      path: '/TextBufferGeometry',
      children: []
    },
    {
      title: 'Diamond',
      path: '/Diamond',
      children: []
    },
    {
      title: 'Border',
      path: '/Border',
      children: []
    }
  ]
}
export const superAdminPathList = new AdminPath().data.sort((a, b) => {
  return a.title.localeCompare(b.title, 'zh-CN')
})