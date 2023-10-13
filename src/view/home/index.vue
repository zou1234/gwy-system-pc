<template>
    <div class="home">
        <div class="home__header">
            <div class="home__header__left">
                <!--<img src="./images/logo.png" alt="">-->
                <!--全国公务员管理信息系统-->
            </div>
            <div class="home__header__right">
                <div class="right__item right__manage">
                    <div class="right__manage__icon"></div>
                    管理员
                    <div class="right__manage__dropdown">
                        <p>密码设置</p>
                        <p>退出系统</p>
                    </div>
                </div>
                <div class="right__item right__help">
                    <el-tooltip class="item" effect="light" content="点击下载帮助手册" placement="bottom">
                        <i class="el-icon-collection"></i>
                    </el-tooltip>
                </div>
                <div class="right__item right__download">
                    <el-tooltip class="item" effect="light" content="下载系统运维日志" placement="bottom">
                        <i class="el-icon-download"></i>
                    </el-tooltip>
                </div>
                <div class="right__version">
                    <el-tooltip class="item" effect="light" content="版本号：V1.0.0" placement="bottom-end">
                        <i class="el-icon-warning-outline"></i>
                    </el-tooltip>
                </div>
            </div>
        </div>

        <div class="home__content">
            <div class="home__content__left">
                <basic-management></basic-management>
                <statistics-yearbook></statistics-yearbook>
                <query-application></query-application>
            </div>

            <div class="home__content__center">
                <team-situation></team-situation>
                <policies-regulations></policies-regulations>
            </div>

            <div class="home__content__right">
                <business-module></business-module>
            </div>
        </div>
    </div>
</template>

<script>
    import basicManagement from './layout/basic-management';
    import statisticsYearbook from './layout/statistics-yearbook';
    import queryApplication from './layout/query-application';
    import teamSituation from './layout/team-situation';
    import policiesRegulations from './layout/policies-regulations';
    import businessModule from './layout/business-module';

    export default {
        name: "home",

        // 注册组件
        components: {
            basicManagement,
            statisticsYearbook,
            queryApplication,
            teamSituation,
            policiesRegulations,
            businessModule,
        },
    };
</script>

<style lang="less" scoped>
    .home {
        height: 100%;
        min-width: 1000px;
        &__header {
            height: 60px;
            padding: 0 12px;
            display: flex;
            justify-content: space-between;
            background-image: url("./images/heraderBac.jpg");
            line-height: 60px;
            color: #d2e3f7;
            font-size: 26px;
            letter-spacing: 4px;
            font-weight: 600;
            &__left {
                img {
                    height: 38px;
                    margin-right: 10px;
                }
            }
            &__right {
                display: flex;
                .right__item {
                    margin-right: 16px;
                }
                i:hover {
                    color: #0cf;
                    cursor: pointer;
                }
                .right__manage:hover {
                    color: #52f8f9;
                    .right__manage__dropdown {
                        display: block;
                    }
                }
                .right__manage {
                    position: relative;
                    display: flex;
                    align-items: center;
                    letter-spacing: 0 !important;
                    color: #2cc6ff;
                    font-size: 14px;
                    font-weight: 400;
                    &__icon {
                        position: relative;
                        top: 2px;
                        margin-right: 4px;
                        height: 35px !important;
                        background-image: url("./images/manage.png");
                        background-position: -8px -4px;
                    }
                    &__dropdown {
                        display: none;
                        position: absolute;
                        top: 60px;
                        left: -32px;
                        width: auto;
                        padding: 8px 18px;
                        background: rgba(43, 157, 242, .7);
                        border-radius: 0 0 6px 6px;
                        line-height: 26px;
                        z-index: 10;
                        p {
                            color: #fff;
                            cursor: pointer;
                        }
                        p:hover {
                            color: #52f8f9;
                        }
                    }
                }
                .right__manage:hover .right__manage__icon {
                    background-position: -8px 35px;
                }
                .right__manage__icon, i {
                    width: 26px;
                    height: 26px;
                    color: #01a7f2;
                }
            }
        }
        &__content {
            height: calc(100% - 60px);
            min-height: 520px;
            position: relative;
            padding: 13px;
            background-color: #f1f2f2;
            &__left {
                float: left;
                height: 100%;
                width: 30%;
                margin-right: 16px;
            }
            &__center {
                float: left;
                display: flex;
                flex-direction: column;
                height: 100%;
                width: calc(50% - 32px);
                margin-right: 16px;
            }
            &__right {
                float: left;
                display: flex;
                flex-direction: column;
                width: 20%;
                height: 100%;
            }
        }
    }
</style>