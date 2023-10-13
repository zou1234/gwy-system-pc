<template>
    <module-shell title="政策法规" class="module-shell">
        <div class="policies-regulations__content" v-infinite-scroll="load">
            <div class="content__list" v-for="(item, index) in policies" :key="index">
                <div class="content__list__text">
                    <span>{{index + 1}}</span>{{item.title}}
                </div>
                <i class="icon iconfont">&#xe632;</i>
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
                key: 0,
                policies: [],
                policiesAll: [
                    {
                        title: '中华人民共和国公务员法'
                    },
                    {
                        title: '关于贯彻实施公务员法建设高素质专业化公务员队伍的意见'
                    },
                    {
                        title: '公务员法范围规定'
                    },
                    {
                        title: '公务员法登记办法'
                    },
                    {
                        title: '公务员领导职务、职级与级别管理办法'
                    },
                    {
                        title: '参照《中华人民共和国公务员法》管理的单位审批办法'
                    },
                    {
                        title: '公务员职务与职级并行制度实施方案'
                    },
                    {
                        title: '专业技术类公务员职级设置管理办法（试行）'
                    },
                    {
                        title: '行政执法类公务员职级设置管理办法（试行）'
                    },
                    {
                        title: '专业技术类公务员专业技术任职资格评定办法（试行）'
                    },
                    {
                        title: '新录用公务员任职定级规定'
                    },
                    {
                        title: '公务员录用规定'
                    },
                    {
                        title: '公务员调任规定'
                    },
                    {
                        title: '公务员培训规定'
                    },
                    {
                        title: '公务员考核规定'
                    },
                    {
                        title: '公务员平时考核办法（试行）'
                    },
                    {
                        title: '公务员奖励规定'
                    },
                    {
                        title: '公务员转任规定'
                    },
                    {
                        title: '公务员回避规定'
                    },
                    {
                        title: '公务员辞去公职规定'
                    },
                    {
                        title: '公务员辞退规定'
                    },
                ]
            };
        },
        methods: {
            load() {
                let index = this.key;
                this.key += 5;
                let arr = this.policiesAll.slice(index, this.key);
                this.policies.push(...arr);
            }
        }
    };
</script>

<style lang="less" scoped>
    .module-shell {
        padding-bottom: 14px;
        margin: 0;
        height: calc(100% - 320px);
    }

    .policies-regulations__content {
        height: calc(100% - 35px);
        padding: 0 16px 6px;
        margin: 7px 6px 4px 0;
        overflow: auto;
        .content__list {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 25px;
            &__text {
                color: #082638;
                font-size: 12px;
                line-height: 12px;
                overflow: hidden;
                padding: 0;
                text-overflow: ellipsis;
                white-space: nowrap;
                span {
                    display: inline-block;
                    text-align: left;
                    width: 25px;
                    color: #999;
                }
            }
            .iconfont {
                font-size: 14px;
                color: #337ab7;
                cursor: pointer;
            }
            .iconfont:hover {
                color: #20a0ff;
            }
        }
    }

    .policies-regulations__content::-webkit-scrollbar {
        width: 4px;
        background-color: #fff;
    }

    .policies-regulations__content::-webkit-scrollbar-thumb {
        background: #dce0eb;
        border-radius: 10px;
    }
</style>