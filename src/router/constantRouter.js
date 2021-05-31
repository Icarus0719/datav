import { _import } from './helper';

// 默认不需要权限的页面
export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    meta: {},
    component: _import('common/Login'),
  },
];
