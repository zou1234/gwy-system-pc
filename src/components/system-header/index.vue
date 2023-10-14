<template>
    <div class="system">
      <div class="system__header">
        <!--   左边     -->
        <div class="system__header__left">
          <img src="./images/logo.png" alt="">
          <span> {{title}}</span>
        </div>
        <!--   中间     -->
        <div class="system__header__middle">
          <slot></slot>
        </div>
        <!--   右边    -->
        <div class="system__header__right">
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
    </div>
</template>

<script>
    export default {
        name: "index",

        // 注册组件
        components: {},

        // 接受父组件传过来的属性
        props: {
          //中间标题
          title: {
            type: String,
            default: "这是一个标题"
          },

        },


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
.system {
  height: 100%;
  min-width: 1000px;
  box-sizing: border-box;
  &__header {
    height: 60px;
    padding: 0 12px;
    //display: flex;
    //justify-content: space-between;
    background-image: url("./images/heraderBac.jpg");
    background: #205bf5;
    //background: #313248;
    line-height: 60px;
    color: #efeeee;

    &__middle{
      vertical-align: top;
      display: inline-block;
      margin-left: 30px;
    }

    &__left {
      display: inline-block;
      img {
        height: 38px;
        position: relative;
        top: 10px;
      }

      &>span{
        font-size: 26px;
        letter-spacing: 4px;
        font-weight: 600;
      }
    }
    &__right {
      display: inline-block;
      float: right;
      display: flex;
      font-size: 26px;
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
}
</style>