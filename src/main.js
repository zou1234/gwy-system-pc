import Vue from "vue";
import App from "./App";

const routerPromise = import(`./router/index`);

import "@/assets/css/iconfont/iconfont.css";
import "@/assets/css/global.less";
import "@/assets/css/element-overwrite.less";

// 全局组件
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

// 路由配置文件加载
routerPromise.then(({
                        router
                    }) => {
    // 实例化
    new Vue({
        router,
        el: "#app",
        render: h => h(App)
    });
});