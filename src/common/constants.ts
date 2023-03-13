import { version } from '../../package.json'
import type { Pagination } from '@/types/global'

interface ICodeMessage {
  [propName: number]: string
}

export const CodeMessage: ICodeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}

// export const BASE_URL = import.meta.env.VITE_BASE_URL
export const APP_VERSION = version
// 空白页面
export const BlankList = ['/example/blank']
// 项目英文名称
export const ProjectName = 'Vue3 Tiger Admin'
export const ProjectTitle = ProjectName.replace(/\s+/g, '')
// 项目中文名称
export const ProjectKeywords = '一个普通的开发模板'
// 存储 key
export const StoreKey = `${ProjectTitle}-${APP_VERSION}`
// 登录地址
export const LoginPath = '/login'
// 首页地址
export const HomePath = '/basic/example'
// 仓库地址
export const Github = 'https://github.com/yunshangzhou/vue3-cloud-admin'
// Dialog 标题
export const TitleMap: any = { create: '新增', update: '修改', delete: '删除' }
// 分页配置
export const BasePagination: Pagination = { page: 1, limit: 10, showJumper: true, showTotal: true, showPageSize: false }

// 作者信息
export const authorInfo = [
  {
    label: '作者',
    value: 'yunshangzhou',
  },
  {
    label: 'qq',
    value: '912453237',
  },
  {
    label: '邮箱',
    value: 'yunshangzhou@163.com',
  },
  {
    label: '技术栈',
    value: 'vue2/3全家桶,react、mobx,ts,tailwindcss，以及webpack、vite工程化配置。',
  },
]

// 项目信息
export const projectInfo = [
  {
    label: '项目名称',
    value: 'vue3-cloud-admin',
  },
  {
    label: '项目介绍',
    value: '这是一款基于Vue3、pinia、ts及其他第三方插件集成的后台管理系统。',
  },
  {
    label: '仓库地址',
    value: 'https://github.com/yunshangzhou/vue3-cloud-admin',
  },
  {
    label: '项目技术栈',
    value: 'Vite, Vue3, Arco, Pinia, VueUse, Axios, UnoCSS',
  },
  {
    label: '插件使用',
    value: 'screenfull ---- 全屏工具\n@iconify/vue ---- 图标引用\nvue3-pdfjs ---- pdf预览\nv-viewer ---- 图片预览\nvue3-print-nb ---- 表格打印\nqrcode ---- 二维码生成',
  },
]
