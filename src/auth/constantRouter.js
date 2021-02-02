// 默认不需要权限的页面
export const constantRouterMap = [
  {
    path: '/index',
    name: 'index',
    meta: {},
    component: () => import('@/views/Index.vue')
  },
  {
    path: '*',
    redirect: '/index'
  }
]
