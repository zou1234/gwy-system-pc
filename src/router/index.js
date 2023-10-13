import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

let routes;

routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import ('../view/home'),
        meta: {
            title: '全国公务员管理信息系统'
        }
    },
    {
        path: '/institution-information',
        component: () => import ('../view/institution-information'),
        meta: {
            title: '机构信息管理-全国公务员管理信息系统'
        }
    },
    {
        path: '/zcfg',
        component: () => import ('../view/zcfg'),
        meta: {
            title: '机构信息管理-全国公务员管理信息系统'
        }
    },
    {
        path: '/bbzt',
        component: () => import ('../view/bbzt'),
        meta: {
            title: '机构信息管理-全国公务员管理信息系统'
        }
    },
];

routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({
    scrollBehavior: (to, from, savedPosition) => {
        return {y: 0};
    },
    routes
});


router.beforeEach(async (to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) document.title = title;
    next();
});

export {
    router,
    routes
};