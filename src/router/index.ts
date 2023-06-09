import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { HomePath } from '@/common/constants'
import Login from './modules/login'

// 导入所有router
const metaRouters: any = import.meta.glob('./modules/*.ts', { eager: true, import: 'default' })
// 处理路由
export const routerArray: RouteRecordRaw[] = Object.values(metaRouters)

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: HomePath,
  },
  Login,
  ...routerArray,
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    redirect: { name: '404' },
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL as string),
  routes,
})

export default router
