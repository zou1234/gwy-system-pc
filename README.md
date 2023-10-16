
## 相关说明

App 开发采用 `vue-cli3` 脚手架构建，采用了 `vue + vant + axios + vue-router + less` 技术栈。


## 文件目录结构

```
├── public                     # 静态资源
│   │── config                 # 配置项（现场实施可以动态修改的配置）
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码 
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── mock                   # 模拟数据
│   ├── router                 # 路由
│       │── modules            # 路由模块
│       │── department.js       # 不同分局打包入口
│       └── index.js           # 主入口
│   ├── store                  # 全局 store管理
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│       │── bof/ipd/stat...    # 各个市局页面
│       └── component-list     # 组件展示页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .env                       # 通用环境变量配置
├── .env.dev                   # 开发环境变量配置
├── .env.pro                   # 生产环境变量配置
├── .gitignore                 # git 提交忽略文件
├── .prettierrc.js             # 编辑器格式化 prettier 配置
├── .babel.config.js           # babel 配置解析
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json
```

## 开发注意项

1. 代理相关配置在 `vue-config.js` 文件配置；

```
// webpack-dev-server 相关配置
devServer: {
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
        'sw-szzfjs': {	// 配置文件代理
            target: 'http://192.168.10.35:8080/',
            changeOrigin: true,
            pathRewrite: {
                '^/sw-szzfjs': '/sw-szzfjs'
            }
        }
    }, // 设置代理
    before: app => {}
}

```

2. Api 接口请求在 `src/api` 文件夹编写；
3. 开发各个市局请在 `views` 文件夹创建独立的各个市局文件夹。
4. 数据调用建议使用 `request`:

```
import request from "@/utils/request";

// 若数据需要转化为字符串，则使用 `qs.stringify`
import qs from "qs";

function commonQuery(param) {
   return  request({
        url: "/commonQueryController/commonQuery",
        method: "get",
        params: param
    })
}
function commonPost(param) {
    return  request({
        url: "/commonQueryController/commonQuery",
        method: "post",
        data: qs.stringify(param)
    })
}

export default{
    commonQuery,
    commonPost,
}
```

## 项目安装
```
npm install
```

### 项目编译及热加载
```
npm run dev
```

### 打包项目用于生产环境
```
npm run build
```

### 脚手架的相关配置
See [Configuration Reference](https://cli.vuejs.org/config/).
