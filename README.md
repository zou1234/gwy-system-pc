
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

## 分局打包配置说明

由于业务组件及配置的共用性，这边不打算分局拆包为独立的前端工程。这边分局打包配置采用配置不同的路由模块去引入到项目中，依据 `webpack` 按需加载的机制达到分局打包的目的。

配置项放在`package.json`上：

```
// 通过执行不同的命令行，打包不同的分局
"scripts": {
    "dev": "vue-cli-service serve --mode dev",
    "build": "vue-cli-service build --mode pro",
    "tax": "vue-cli-service build --mode pro --dest 税务局 --department=tax",
    "ipb": "vue-cli-service build --mode pro --dest 投促局 --department=ipb",
    "stat": "vue-cli-service build --mode pro --dest 统计局 --department=stat",
    "bof": "vue-cli-service build --mode pro --dest 财务局 --department=bof",
    "power": "vue-cli-service build --mode pro --dest 供电局 --department=power",
    "edu": "vue-cli-service build --mode pro --dest 教育局 --department=edu",
    "mem": "vue-cli-service build --mode pro --dest 事故灾害 --department=mem",
    "msb": "vue-cli-service build --mode pro --dest 市监局 --department=msb",
    "mzj": "vue-cli-service build --mode pro --dest 民政服务局 --department=mzj",
    "eco": "vue-cli-service build --mode pro --dest 生态环境局 --department=eco",
    "forestry": "vue-cli-service build --mode pro --dest 林业生态局 --department=forestry",
    "mohurd": "vue-cli-service build --mode pro --dest 住建局 --department=mohurd",
    "mrn": "vue-cli-service build --mode pro --dest 自然资源局 --department=mrn",
    "med": "vue-cli-service build --mode pro --dest 医保局 --department=med",
    "search": "vue-cli-service build --mode pro --dest 搜索 --department=search",
    "all": "npm run tax && npm run ipd && npm run stat && npm run bof && npm run power && npm run edu && npm run mem && npm run msb && npm run mzj && npm run eco && npm run forestry && npm run mohurd && npm run mrn && npm run med && npm run search",
    "lint": "vue-cli-service lint"
}

// 示例：打包税务局
npm run tax

// 示例：打包全部分局
npm run all

// 示例：打包全部文件
npm run build

// 若新增分局，如何配置命令行？

vue-cli-service build --mode pro --dest [打包目录名称] --department=[分局名称]

注意事项：
- 分局名称要与`路由名称`、`路由地址`相对应

// 例如：
// router.js file 
import tax from './modules/tax';
const routes = [{
        path: '*',
        redirect: '/mrn'
    },
    {
        path:'/test',
        component: () => import('../view/divide-tax-demo/home'),
        meta: {
            title: '拆分税务局模块'
        }
    },
    {
        path:'/test-search',
        component: () => import('../view/divide-tax-demo/search'),
        meta: {
            title: '全局检索模块'
        }
    },
    //税务局
    ...tax
}


```

这边配置了两个变量去调用不同的路由配置，配置项说明如下

```
// .env file

VUE_APP_BASE_API='./'
VUE_APP_Version = "1.0.0"

## 路由打包控制 参数选项为 [index, department]
VUE_APP_ROUTER = "index"

## 分局打包控制 若 VUE_APP_ROUTER 为 `department` 时生效：
## 参数选项为：['tax' => '税务局', 'ipb' => '投促局', 'stat' => '统计局', 'bof' => '财务局', 'power' => '供电局', 'edu' => '教育局', 'mem' => '事故灾害']
## ['msb' => '市监局', 'mzj' => '民政服务局', 'eco' => '生态环境局', 'forestry' => '林业生态局', 'mohurd' => '住建局', 'mrn' => '自然资源局', 'med' => '医保局', 'search' => '搜索']
VUE_APP_DEPARTMENT = "home"

------------ divide line -----------------

// .env.pro file

## 路由打包控制 参数选项为 [index, department]
VUE_APP_ROUTER = "department"

## 分局打包控制 若 VUE_APP_ROUTER 为 `department` 时生效：
## 参数选项为：['tax' => '税务局', 'ipb' => '投促局', 'stat' => '统计局', 'bof' => '财务局', 'power' => '供电局', 'edu' => '教育局', 'mem' => '事故灾害']
## ['msb' => '市监局', 'mzj' => '民政服务局', 'eco' => '生态环境局', 'forestry' => '林业生态局', 'mohurd' => '住建局', 'mrn' => '自然资源局', 'med' => '医保局', 'search' => '搜索']
VUE_APP_DEPARTMENT = "tax"

```

分局打包剖析

```
// vue.config.js file 配置文件

// 解析自定义指令参数 `--department=`
const argv = process.argv;
// 默认路由为全部 路由打包控制 参数选项为 [index, department]
process.env.VUE_APP_ROUTER = "index";
// 默认不设置分局打包
process.env.VUE_APP_DEPARTMENT = "";

// 检测是否存在参数数值
if(argv.length > 0) {
    argv.forEach(item => {
        // 检测是否存在匹配值
        let matchValue = item.match(/^--department\=+.*/);
        if(matchValue) {
            let department = matchValue[0].toString().trim().replace("--department=", "");
            // 采用分局打包
            process.env.VUE_APP_ROUTER = "department";
            // 读取分局名称
            process.env.VUE_APP_DEPARTMENT = department;
        }
    });
}

// main.js file 入口文件

// 路由控制
// import router from "./router/index";
const routerPromise = import(`./router/${process.env.VUE_APP_ROUTER}`);

// 路由配置文件加载
routerPromise.then(({ router }) => {
    // 实例化
    new Vue({
        router,
        store,
        el: "#app",
        render: h => h(App)
    });
});


// department.js file 路由文件 构建动态路由

const routes = [];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({
    scrollBehavior: (to, from, savedPosition) => {
        return { y: 0 }
    },
    routes
});

// import tax from './modules/tax';
const departmentPromise = import(`./modules/${process.env.VUE_APP_DEPARTMENT}`);
departmentPromise.then(routers => {
    router.addRoutes([{
            path: '*',
            redirect: "/" + process.env.VUE_APP_DEPARTMENT
        },
        ...routers.default
    ]);
});

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
