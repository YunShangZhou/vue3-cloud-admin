预览地址： [http://yunshangzhou.gitee.io/vue3-cloud-admin/](https://yunshangzhou.gitee.io/vue3-cloud-admin/)

仓库地址： [https://gitee.com/yunshangzhou/vue3-cloud-admin](https://gitee.com/yunshangzhou/vue3-cloud-admin)

技术栈为：Vite, Vue3, Arco, Pinia, VueUse, Axios, UnoCSS

### 1. vue3-cloud-admin介绍
这是一款基于Vue3、pinia、ts及其他第三方插件集成的后台管理系统。

#### 2. 插件介绍
- [unocss](https://github.com/unocss/unocss)
- [screenfull](https://www.npmjs.com/package/screenfull)
  主要封装浏览器全屏事件
- [@iconify/vue](https://github.com/iconify/iconify)
  可以灵活引用多处图标。
  - [icon查询入口](https://icones.js.org/)
- [vue3-pdfjs](https://github.com/randolphtellis/vue3-pdfjs)
  预览PDFJS
- [v-viewer](https://github.com/mirari/v-viewer)
  图片预览
- [vue3-print-nb](https://www.npmjs.com/package/vue3-print-nb)
  打印页面
- [qrcode](https://github.com/scopewu/qrcode.vue)
  以多种方式生成二维码，可以带Logo

#### 3. 文件结构
```javascript
|—— dist // 打包资源
|—— public
|  |—— pdf // pdf测试文档
└─src
    ├─api // api文档 
    ├─assets // 静态资源文档
    ├─components // 组件文档
    ├─common // 全局常量配置
    ├─hooks // hooks
    ├─layouts // 布局组件
    ├─router // 路由
    ├─store // 统一状态管理
    ├─styles // css
    ├─types // 各模块接口定义目录
    ├─utils // 工具类api
    └─views // 页面模块目录
        ├─basic // 基础
        ├─chart // 图表
        ├─login // 登录
        ├─table // 表格
```

#### 4. 如何在本地运行
根目录下运行 `npm install`，然后运行 `npm run dev`
```
// 安装依赖
npm install

// 启动项目
npm run dev
```
