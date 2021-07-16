// 侧边栏，面包屑等路由页面的树形数据结构
function getMenuList() {
  this.data = [
    {
      title: 'TextBufferGeometry',
      url: '/TextBufferGeometry',
      children: [],
    },
    {
      title: 'MeshPhysicalMaterial-Diamond',
      url: '/Diamond',
      children: [],
    },
    {
      title: 'Border动画',
      url: '/Border',
      children: [],
    },
    {
      title: 'Snap响指效果',
      url: '/Snap',
      children: [],
      isCheck: 1,
    },
    {
      title: 'AE动画',
      url: '/AE',
      children: [],
      isCheck: 1,
    },
    {
      title: 'ShaderDiamond',
      url: '/ShaderDiamond',
      children: [],
    },
    {
      title: 'Other',
      url: '/Other',
      children: [],
    },
    {
      title: 'Image',
      url: '/Image',
      children: [],
    },
    {
      title: 'SVG',
      url: '/SVG',
      children: [
        {
          title: '基础使用',
          url: '/SVG-use',
          children: [],
          isCheck: 1,
        },
        {
          title: '力导向图',
          url: '/SVG-force-guidance',
          children: [],
        },
      ],
    },
    {
      title: '断点上传',
      url: '/WebUploader',
      children: [],
    },
    {
      title: 'Video',
      url: '/Video',
      children: [],
    },
    {
      title: 'Rollup开发组件库',
      url: '/Rollup',
      children: [
        {
          title: 'UI组件库',
          url: '/Sungui',
          children: [],
        },
      ],
    },
    {
      title: 'Text动画',
      url: '/TextAnimation',
      children: [],
    },
    {
      title: 'WebGL',
      url: '/WebGL-guide',
      children: [
        {
          title: 'webgl编程指南',
          url: '',
          children: [
            {
              title: 'chapter02',
              url: '/WebGL-guide-chapter02',
              children: [],
            },
            {
              title: 'chapter03',
              url: '/WebGL-guide-chapter03',
              children: [],
            },
          ],
        },
      ],
    },
    {
      title: '富文本编辑器',
      url: '/Editor',
      children: [],
    },
    {
      title: 'TypeScript',
      url: '/TypeScript',
      children: [],
    },
  ]
}
export const menuList = new getMenuList().data.sort((a, b) => {
  return a.title.localeCompare(b.title, 'zh-CN')
})
