// 默认不需要权限的页面
export const constantRouterMap = [
  {
    path: '/index',
    name: 'index',
    meta: {},
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: '/TextBufferGeometry',
        name: 'TextBufferGeometry',
        meta: {},
        component: () => import('@/views/TextBufferGeometry/index.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/index'
  }
]
