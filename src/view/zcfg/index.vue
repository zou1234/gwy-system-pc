<template>
  <div>
    <sy-header title="政策法规">
      <el-tabs class="l-tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="机构管理" name="first"></el-tab-pane>
        <el-tab-pane label="职数编制统计" name="second"></el-tab-pane>
      </el-tabs>
    </sy-header>

    <layout-row>
      <div slot="left">
        erererer
      </div>
      <div slot="right">
        erererer
      </div>
    </layout-row>
  </div>
</template>

<script>
import syHeader from '../../components/system-header';
import layoutRow from '../../components/layout-row';

export default {
  name: "index",
  components:{
    syHeader,
    layoutRow
  },
  data(){
    return{
      activeName: 'first',
    }
  },
  methods:{
    handleClick(){

    }
  }
}
</script>

<style scoped>
/deep/.el-tabs{
  position: relative;
  left: 100px;
}
</style>