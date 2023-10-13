<template>
    <module-shell title="队伍情况" class="module-shell">
        <div class="team-situation__content">
            <div class="list-content ranks">
                <div class="list-content__item" v-for="item in ranksData" :key="item.title">
                    <span class="item__value">0</span><span class="item__unit">人</span>
                    <p class="item__title">{{item.title}}</p>
                </div>
            </div>
            <div class="list-content rank">
                <div class="list-content__divider">职级情况
                    <div class="list-content__divider__line"></div>
                </div>
                <div class="list-content__item" v-for="item in rankData" :key="item.title">
                    <span class="item__value">0</span><span class="item__unit">人</span>
                    <p class="item__title">{{item.title}}</p>
                </div>
            </div>
            <div class="list-content age">
                <div class="list-content__divider">年龄情况
                    <div class="list-content__divider__line"></div>
                </div>
                <div class="list-content__item" v-for="item in ageData" :key="item.title">
                    <span class="item__value">0</span><span class="item__unit">人</span>
                    <p class="item__title">{{item.title}}</p>
                </div>
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
                ranksData: [
                    {
                        title: '公务员总数'
                    },
                    {
                        title: '领导职务'
                    },
                    {
                        title: '综合管理类职级'
                    },
                    {
                        title: '兼任职级'
                    }
                ],
                rankData: [
                    {
                        title: '巡视员（1-2级）'
                    },
                    {
                        title: '调研员（1-4级）'
                    },
                    {
                        title: '主任科员（1-4级）'
                    },
                    {
                        title: '科员（1-2级）'
                    }
                ],
                ageData: [
                    {
                        title: '35岁及以下'
                    },
                    {
                        title: '36岁至45岁'
                    },
                    {
                        title: '46岁至55岁'
                    },
                    {
                        title: '56岁及以上'
                    }
                ],
            };
        },
    };
</script>

<style lang="less" scoped>
    .module-shell{
        flex: none;
    }
    .team-situation__content {
        .list-content {
            position: relative;
            display: flex;
            padding: 10px;
            &__divider {
                position: absolute;
                top: 0;
                display: flex;
                align-items: center;
                width: calc(100% - 20px);
                padding-left: 6px;
                font-size: 12px;
                color: #979fa4;
                &__line {
                    height: 1px;
                    flex: auto;
                    margin-left: 4px;
                    border-bottom: 1px dashed #dee7eb;
                }
            }
            &__item {
                width: 25%;
                padding: 8px 0;
                border-right: 1px solid #e0e9ed;
                text-align: center;
                .item__value {
                    color: #fd6922;
                    font-size: 1.3rem;
                    font-weight: 700;
                }
                .item__unit {
                    margin-left: 2px;
                    color: #999;
                    font-size: .9rem;
                    font-weight: 400;
                }
                .item__title {
                    color: #333;
                    font-size: .8rem;
                    line-height: 1.5rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            &__item:last-child {
                border: 0;
            }
        }
        .rank, .age {
            padding-top: 16px;
        }
        .rank .item__value {
            color: #06b945;
        }
        .age .item__value {
            color: #dca815;
        }
    }
</style>