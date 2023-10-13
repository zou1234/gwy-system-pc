<template>
    <module-shell title="业务模块" class="module-shell" height="100%">
        <div class="business-module__content">
            <div class="module__list" v-for="item in moduleList" :key="item.title">
                <img :src="item.img" alt="">
                <div class="module__list__title">{{item.title}}</div>
                <div v-if="item.authority" class="module__list__authority">权限已开启</div>
            </div>
        </div>
    </module-shell>
</template>

<script>
    import moduleShell from "../../components/module-shell";

    export default {
        name: "index",

        // 注册组件
        components: {
            moduleShell,
        },

        // 接受父组件传过来的属性
        props: {},

        // 数据
        data() {
            return {
                moduleList: [
                    {
                        img: require('../../images/resignation.png'),
                        title: '辞去公职',
                        authority: true
                    },
                    {
                        img: require('../../images/djba.png'),
                        title: '登记备案',
                    },
                    {
                        img: require('../../images/resignation.png'),
                        title: '干部任免',
                    },
                    {
                        img: require('../../images/jypx.png'),
                        title: '教育培训',
                    },
                    {
                        img: require('../../images/pskh.png'),
                        title: '平时考核',
                    },
                    {
                        img: require('../../images/jlgl.png'),
                        title: '奖励管理',
                    },
                    {
                        img: require('../../images/cgly.png'),
                        title: '出国（境）管理',
                    },
                    {
                        img: require('../../images/gzgl.png'),
                        title: '工资管理',
                    },
                    {
                        img: require('../../images/dagl.png'),
                        title: '档案管理',
                    },
                    {
                        img: require('../../images/rckgl.png'),
                        title: '人才库管理',
                    },
                    {
                        img: require('../../images/jdry.png'),
                        title: '借调人员',
                    },
                    {
                        img: require('../../images/ltxrygl.png'),
                        title: '离退休管理人员',
                    },
                ]
            };
        },

    };
</script>

<style lang="less" scoped>
    .module-shell {
        margin: 0;
    }

    .business-module__content {
        display: flex;
        flex-wrap: wrap;
        height: calc(100% - 35px);
        .module__list {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            text-align: center;
            border-bottom: 1px solid #e5e5e5;
            cursor: pointer;
            overflow: hidden;
            img {
                width: 26px;
            }
            &__title {
                font-size: 12px;
                line-height: 20px;
            }
            &__authority{
                position: absolute;
                right: 0;
                bottom: 0;
                line-height: 16px;
                padding: 0 6px;
                background: #ff8d00;
                border-radius: 0.5rem 0 0 0;
                color: #fff;
                font-size: 12px;
                text-align: center;
            }
        }
        .module__list:nth-child(odd) {
            border-right: 1px solid #e5e5e5;
        }
        .module__list:hover {
            background-color: #eefaff;
        }
        .module__list:hover img {
            filter: drop-shadow(#24a2f1 0 100px);
            transform: translateY(-100px);
        }

        .module__list:hover .module__list__title {
            color: #24a2f1;
        }
    }


</style>