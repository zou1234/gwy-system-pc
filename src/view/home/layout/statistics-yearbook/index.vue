<template>
    <module-shell title="统计年报" height="30%">
        <div class="statistics-yearbook__content">
            <div class="content__item dedicated-library">
                统计专用库
            </div>
            <div class="content__item civil-servant">
                公务员统计
            </div>
            <div class="content__item yearbook-materials">
                年鉴资料
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
            return {};
        },
    };
</script>

<style lang="less" scoped>
    .statistics-yearbook__content {
        display: flex;
        flex-wrap: wrap;
        height: calc(100% - 35px);
        padding: 10px;
        .content__item {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 4px;
            font-size: 12px;
            color: #fff;
            cursor: pointer;
        }
        .dedicated-library {
            flex: auto;
            margin: 0 5px 10px 0;
            background: url("../../images/tjzyk.png") no-repeat 100% 100%, linear-gradient(0deg, #2ecefe, #23b2f8);
            background-size: auto 100%;
        }
        .dedicated-library:hover {
            background: url("../../images/tjzyk.png") no-repeat 100% 100%, linear-gradient(0deg, #01c1fa, #0eacf8);
            background-size: auto 100%;
        }
        .civil-servant {
            flex: auto;
            margin: 0 0 10px 5px;
            background: url("../../images/gwytj.png") no-repeat 100% 100%, linear-gradient(0deg, #f3a224, #ffc926);
            background-size: auto 100%;
        }
        .civil-servant:hover {
            background: url("../../images/gwytj.png") no-repeat 100% 100%, linear-gradient(0deg, #ffc926, #f3a224);
            background-size: auto 100%;
        }
        .yearbook-materials {
            width: 100%;
            background: url("../../images/njzl.png") no-repeat 100% 100%, linear-gradient(0deg, #25c998, #6be4c0);
            background-size: auto 100%;
        }
        .yearbook-materials:hover {
            background: url("../../images/njzl.png") no-repeat 100% 100%, linear-gradient(0deg, #62e1bb, #25c998);
            background-size: auto 100%;
        }
    }
</style>