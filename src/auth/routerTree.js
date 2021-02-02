// 侧边栏，面包屑等路由内容的树形数据结构

function AdminPath () {
  this.data = [
    {
      title: 'TextBufferGeometry',
      path: '/TextBufferGeometry',
      children: []
    },
    {
      title: '用户管理',
      path: '/user',
      children: []
    },
    {
      title: '角色管理',
      path: '/role',
      children: []
    }
  ]
}
export const superAdminPathList = new AdminPath().data
