<template>
  <div class="bbzt">
    <sy-header title="报表统计(直统)系统">
      <div>45545</div>
    </sy-header>

    <div>
      <el-row>
        <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import syHeader from '../../components/system-header';

export default {
  name: "index",
  components:{
    syHeader
  }
}
</script>

<style scoped>

</style>