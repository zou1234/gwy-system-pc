<template>
  <module-shell title="基础管理" height="calc(50% - 24px)">
    <div class="basic-management__content">
      <div class="menu-item"
           v-for="item in menuItem"
           :key="item.title"
           @click="handleRouter(item)"
      >
        <img :src="item.img" alt="">
        <p>{{ item.title }}</p>
      </div>
    </div>

    <el-dialog
        title="Excel信息采集"
        :visible.sync="dialogVisible"
        width="40%"
        :before-close="handleClose">
      <img src="./img.png" alt="" width="100%">

    </el-dialog>
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
      dialogVisible: false,
      menuItem: [
        {
          img: require('../../images/jgxxgl.png'),
          title: '机构信息管理',
          route: '/institution-information'
        },
        {
          img: require('../../images/xxglxt.png'),
          title: '信息管理系统'
        },
        {
          img: require('../../images/bbzt.png'),
          title: '报表直统'
        },
        {
          img: require('../../images/xxcj.png'),
          title: 'Excel信息采集'
        },
        {
          img: require('../../images/sjjs.png'),
          title: '数据接受'
        },
        {
          img: require('../../images/zcfg.png'),
          title: '政策法规'
        },
      ]
    };
  },

  methods: {
    handleRouter(item) {
      if (item.route) this.$router.push(item.route);

      if(item.title === "Excel信息采集"){
        this.dialogVisible = true
      }
    },

    handleClose(done) {
      this.dialogVisible = false
    }
  }
};
</script>

<style lang="less" scoped>
.basic-management__content {
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 35px);
  padding: 16px 16px 0;

  .menu-item {
    width: 100% / 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
    color: #333333;

    img {
      width: 40%;
      margin-bottom: 8px;
    }

    p {
      font-size: 12px;
    }
  }

  .menu-item:hover {
    color: #0cf !important;
    cursor: pointer;
  }
}
</style>