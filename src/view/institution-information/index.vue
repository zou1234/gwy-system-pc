<template>
    <div>
        <system-header></system-header>
    </div>
</template>

<script>
    import systemHeader from '@/components/system-header';

    export default {
        name: "index",

        // 注册组件
        components: {
            systemHeader
        },

        // 接受父组件传过来的属性
        props: {},

        // 数据
        data() {
            return {};
        },

        // 计算属性
        computed: {},

        // 监听
        watch: {},

        // 创建
        created() {
        },

        // 方法
        methods: {},

        // 过滤
        filters: {},

        // 挂载
        mounted() {
        },
    };
</script>

<style lang="less" scoped>

</style>