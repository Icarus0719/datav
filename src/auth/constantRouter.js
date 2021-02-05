// 默认不需要权限的页面
export const constantRouterMap = [{
    path: '/index',
    name: 'index',
    meta: {},
    redirect: '/TextBufferGeometry',
    component: () => import('@/views/Index.vue'),
    children: [{
        path: '/TextBufferGeometry',
        name: 'TextBufferGeometry',
        meta: {},
        component: () => import('@/views/TextBufferGeometry')
      }, {
        path: '/Border',
        name: 'Border',
        meta: {},
        component: () => import('@/views/Border')
      }, {
        path: '/Diamond',
        name: 'Diamond',
        meta: {},
        component: () => import('@/views/Diamond')
      },
      {
        path: '/Snap',
        name: 'Snap',
        meta: {},
        component: () => import('@/views/Snap')
      },
      {
        path: '/AE',
        name: 'AE',
        meta: {},
        component: () => import('@/views/AE')
      },
      {
        path: '/ShaderDiamond',
        name: 'ShaderDiamond',
        meta: {},
        component: () => import('@/views/ShaderDiamond')
      }
    ]
  },
  {
    path: '*',
    redirect: '/index'
  }
]