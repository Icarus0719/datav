// 默认不需要权限的页面
export const constantRouterMap = [
  {
    path: '/index',
    name: 'index',
    meta: {},
    redirect: '/webgldemo',
    component: () => import('@/views/Index.vue'),
    children: [
      {
        path: '/webgldemo',
        name: 'TextBufferGeometry',
        meta: {},
        component: () => import('@/views/TextBufferGeometry'),
      },
      {
        path: '/Border',
        name: 'Border',
        meta: {},
        component: () => import('@/views/Border'),
      },
      {
        path: '/Diamond',
        name: 'Diamond',
        meta: {},
        component: () => import('@/views/Diamond'),
      },
      {
        path: '/Snap',
        name: 'Snap',
        meta: {},
        component: () => import('@/views/Snap'),
      },
      {
        path: '/AE',
        name: 'AE',
        meta: {},
        component: () => import('@/views/AE'),
      },
      {
        path: '/ShaderDiamond',
        name: 'ShaderDiamond',
        meta: {},
        component: () => import('@/views/ShaderDiamond'),
      },
      {
        path: '/Other',
        name: 'Other',
        meta: {},
        component: () => import('@/views/Other'),
      },
      {
        path: '/Image',
        name: 'Image',
        meta: {},
        component: () => import('@/views/Image'),
      },
      {
        path: '/SVG',
        name: 'SVG',
        meta: {},
        component: () => import('@/views/SVG'),
        children: [
          {
            path: 'use',
            meta: {},
            component: () => import('@/views/SVG/svg-use.vue'),
          },
          {
            path: 'force',
            meta: {},
            component: () => import('@/views/SVG/svg-force-guidance.vue'),
          },
        ],
      },
      {
        path: '/WebUploader',
        name: 'WebUploader',
        meta: {},
        component: () => import('@/views/WebUploader'),
      },
      {
        path: '/Video',
        name: 'Video',
        meta: {},
        component: () => import('@/views/Video'),
      },
      {
        path: '/TextAnimation',
        name: 'TextAnimation',
        meta: {},
        component: () => import('@/views/TextAnimation'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/index',
  },
];
