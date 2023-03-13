export default {
  path: '/chart',
  name: 'chart',
  component: () => import('@/layouts/index.vue'),
  redirect: '/chart/line',
  meta: {
    requiresAuth: true,
    icon: 'icon-bar-chart',
    title: '图表',
  },
  children: [
    {
      path: '/chart/line',
      name: 'chart-line',
      component: () => import('@/views/chart/line/index.vue'),
      meta: {
        title: '折线图',
        icon: 'icon-drive-file',
      },
    },
    {
      path: '/chart/progress',
      name: 'chart-progress',
      component: () => import('@/views/chart/progress/index.vue'),
      meta: {
        title: '进度条',
        icon: 'icon-sort',
      },
    },
  ],
}
