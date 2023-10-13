<template>
    <div class="home">
        <div class="home__header">
          <syHeader></syHeader>
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
    import syHeader from '../../components/system-header';
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
            syHeader
        },
    };
</script>

<style lang="less" scoped>
    .home {
        height: 100%;
        min-width: 1000px;
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