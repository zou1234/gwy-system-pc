<template>
    <module-shell title="查询应用" height="20%" class="module-shell">
        <div class="query-application__content">
            <div class="content__text">公务员查询分析PAD端APP</div>
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
            return {};
        },
    };
</script>

<style lang="less" scoped>
    .module-shell {
        margin: 0;
    }

    .query-application__content {
        height: calc(100% - 35px);
        padding: 5px 15px;
        background: url(../../images/cxyy.png) no-repeat bottom;
        background-size: 100% 100%;
        color: #333;
        cursor: pointer;
        .content__text {
            display: flex;
            align-items: center;
            height: 100%;
            background: url(../../images/app.png) no-repeat 100% 100%;
            padding: 0 20% 0 10px;
            font-size: 20px;
            color: #333333;
        }
    }
</style>