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
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="法规名称" >
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="是否包含表格" >
            <el-select v-model="form.region" placeholder="请选择" style="width: 100%">
              <el-option label="是" value="shanghai"></el-option>
              <el-option label="否" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <div slot="right">
        <el-table
            :data="tableData"
            style="width: 100%">
          <el-table-column prop="date" label="序号"></el-table-column>
          <el-table-column prop="name" label="法规名称"></el-table-column>
          <el-table-column prop="address" label="文件下载"></el-table-column>
          <el-table-column prop="address" label="表格"></el-table-column>
        </el-table>

      </div>
    </layout-row>
  </div>
</template>

<script>
import syHeader from '../../components/system-header';
import layoutRow from '../../components/layout-row';

export default {
  name: "index",
  components: {
    syHeader,
    layoutRow
  },
  data() {
    return {
      activeName: 'first',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    handleClick() {

    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
/deep/ .el-tabs {
  position: relative;
  left: 100px;
}
</style>