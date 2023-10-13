import Vue from "vue";
import App from "./App";
const routerPromise = import(`./router/index`);

import "@/assets/css/iconfont/iconfont.css";
import "@/assets/css/global.less";

// 全局组件
import {
    icon,
    Tooltip,
    InfiniteScroll
} from 'element-ui';

Vue.use(icon);
Vue.use(Tooltip);
Vue.use(InfiniteScroll);

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