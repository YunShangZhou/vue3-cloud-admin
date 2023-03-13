const Layout = () => import('@/layouts/index.vue')

export default {
  path: '/basic',
  name: 'basic',
  component: Layout,
  redirect: '/basic/example',
  meta: {
    requiresAuth: true,
    icon: 'icon-drive-file',
    title: '页面',
  },
  children: [
    {
      path: '/basic/example',
      name: 'example',
      component: () => import('@/views/basic/example/index.vue'),
      meta: {
        title: '首页',
        icon: 'icon-compass',
      },
    },
    {
      path: '/basic/print',
      name: 'print',
      component: () => import('@/views/basic/print/index.vue'),
      meta: {
        title: '打印',
        icon: 'icon-drive-file',
      },
    },
    {
      path: '/basic/pdf',
      name: 'pdf',
      component: () => import('@/views/basic/pdf/index.vue'),
      meta: {
        title: 'PDF预览',
        icon: 'icon-file-pdf',
      },
    },
    {
      path: '/basic/qa',
      name: 'qa',
      meta: {
        title: '反馈页面',
        icon: 'icon-close-circle',
      },
      redirect: '/basic/qa/success',
      component: () => import('@/views/basic/qa/index.vue'),
      children: [
        {
          path: '/basic/qa/success',
          name: 'page-qa-success',
          component: () => import('@/views/basic/qa/success/index.vue'),
          meta: {
            title: '操作成功',
            icon: 'icon-file',
          },
        },
        {
          path: '/basic/qa/fail',
          name: 'page-qa-fail',
          component: () => import('@/views/basic/qa/fail/index.vue'),
          meta: {
            title: '操作失败',
            icon: 'icon-file',
          },
        },
      ],
    },
    {
      path: '/basic/error',
      name: 'error',
      meta: {
        title: '错误页面',
        icon: 'icon-close-circle',
      },
      redirect: '/basic/error/404',
      component: () => import('@/views/basic/error/index.vue'),
      children: [
        {
          path: '/basic/error/404',
          name: '404',
          component: () => import('@/views/basic/error/404/index.vue'),
          meta: {
            title: '404',
            icon: 'icon-file',
          },
        },
        {
          path: '/basic/error/403',
          name: '403',
          component: () => import('@/views/basic/error/403/index.vue'),
          meta: {
            title: '403',
            icon: 'icon-file',
          },
        },
      ],
    },
    {
      path: '/basic/qrcode',
      name: 'qrcode',
      component: () => import('@/views/basic/qrcode/index.vue'),
      meta: {
        title: '二维码',
        icon: 'icon-qrcode',
      },
    },
    {
      path: '/basic/viewer',
      name: 'viewer',
      component: () => import('@/views/basic/viewer/index.vue'),
      meta: {
        title: '图片预览',
        icon: 'icon-image',
      },
    },
    {
      path: '/basic/watermark',
      name: 'watermark',
      component: () => import('@/views/basic/watermark/index.vue'),
      meta: {
        title: '水印',
        icon: 'icon-mosaic',
      },
    },
    {
      path: '/basic/baberrage',
      name: 'baberrage',
      component: () => import('@/views/basic/baberrage/index.vue'),
      meta: {
        title: '弹幕',
        icon: 'icon-align-right',
      },
    },
  ],
}
