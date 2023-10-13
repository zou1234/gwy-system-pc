const autoprefixer = require("autoprefixer");
const pxtorem = require("postcss-pxtorem");
const path = require("path");
const webpack = require("webpack");
const baseFn = require('./node-tools/base');
require('./read-modular');
function resolve(dir) {
    return path.join(__dirname, dir);
}

const Timestamp = new Date().getTime();

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
// 第三方包外置
let externals = [
    {
        vue:'Vue'
    },
    {
        jquery: 'jQuery',
        echarts: 'echarts',
    },
    (context, request, callback) => { // echarts已全局引，这里去掉代码内的echarts按需引用依赖
        if (/^echarts\/lib/i.test(request)) {
            return callback(null, 'echarts');
        }
        callback();
    }
];

module.exports = {
    runtimeCompiler: true,
    outputDir: baseFn.getGitverion(),
    publicPath:process.env.NODE_ENV === 'production' ? './' : '/',
    // webpack-dev-server 相关配置
    devServer: {
        host: "0.0.0.0",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            // 'sw-szzfjs': {	// 配置文件代理0
            //     target: 'http://192.168.10.35:8080/',
            //     changeOrigin: true,
            //     pathRewrite: {
            //         '^/sw-szzfjs': '/sw-szzfjs'
            //     }
            // },
            // '/': {
            //     target: 'http://20.20.30.195:8081/datafill/',
            //     changeOrigin: true
            // },
            'yufs': {
                target: 'http://10.201.8.41:8080/yufs/',
                changeOrigin: true,
                pathRewrite: {
                    '^/yufs': '/yufs'
                }
            }
        }, // 设置代理
        before: app => {}
    },
    chainWebpack: config => {
        config.resolve.alias.set("@", resolve("src")).set("@components", resolve("src/components"));

        config.optimization.minimizer('terser').tap(args => {
            // 打包后console失效
            args[0].terserOptions.compress.drop_console = true;
            // 压缩 JavaScript 代码时提取注释
            args[0].extractComments = true;
            return args;
        });

        // 移除 prefetch 插件
        config.plugins.delete('prefetch-index');

        // 外置必须的第三方包
        config.externals(externals);

        // 抽离运行时
        config.optimization.set('runtimeChunk', true);
        // 加到html里
        config.plugin('html-index').tap(args => {
            args[0].chunks.push('runtime~index');
            return args;
        })
    },
    pages: {
        index: {
            entry: 'src/main.js',
            title: '首页'
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 16,
                        propList: ["*"]
                    })
                ]
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        output: {
            // filename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`,
            // chunkFilename: `[name].${process.env.VUE_APP_Version}.${Timestamp}.js`

            filename: process.env.NODE_ENV === "production" ? `[name].[contenthash:8].js` : `[name].[hash:8].js`,
            chunkFilename: process.env.NODE_ENV === "production" ? `[name].[contenthash:8].js` : `[name].[hash:8].js`,
        },

        devtool: "source-map",

    }
};
