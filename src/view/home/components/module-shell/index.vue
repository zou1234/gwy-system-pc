<template>
    <div class="module-shell" :style="{height: height}">
        <div class="module-shell__title">{{title}}</div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "index",

        // 接受父组件传过来的属性
        props: {
            height: String,

            title: {
                type: String,
                default: '标题'
            }
        },
    };
</script>

<style lang="less" scoped>
    .module-shell{
        margin-bottom: 12px;
        background: #fff;
        border-radius: 3px;
        -webkit-box-shadow: 3px 3px 2px #e8e6e6;
        box-shadow: 3px 3px 2px #e8e6e6;
        &__title{
            height: 35px;
            padding-left: 16px;
            border-bottom: 1px solid #e1e9ed;
            color: #1a79d1;
            font-size: 16px;
            font-weight: 700;
            line-height: 35px;
        }
    }
</style>