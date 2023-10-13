<template>
  <el-row class="layout-row" :gutter="0">
    <el-col class="layout-row__left" :span="5">
      <slot name="left"></slot>
    </el-col>
    <el-col class="layout-row__right" :span="19">
      <slot name="right"></slot>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.layout-row{
  width: 100vw;
  box-sizing: border-box;
  /*padding: 10px;*/
}

/deep/.el-col{
  /*border: 1px solid red;*/

}

/deep/.el-col>div{
  background: #fff;
  padding: 10px;
  margin: 10px 5px 0 10px;

  height: calc(100vh - 80px);
}

</style>