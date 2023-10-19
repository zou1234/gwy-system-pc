<template>
  <div>
    <sy-header title="政策法规">
      <el-tabs class="l-tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="公务员法规库查询" name="first"></el-tab-pane>
        <el-tab-pane label="法规所附表格查询" name="second"></el-tab-pane>
      </el-tabs>
    </sy-header>

    <!--  机构管理  -->
    <layout-row v-if="activeName === 'first'">
      <div slot="left">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="法规名称">
            <el-input v-model="form.name" placeholder="请输入名称"></el-input>
          </el-form-item>
          <el-form-item label="是否包含表格">
            <el-select v-model="form.region" placeholder="请选择" style="width: 100%">
              <el-option label="全部" value="qb"></el-option>
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
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column type="index" label="序号" width="60"></el-table-column>
          <el-table-column prop="name" label="法规名称"></el-table-column>
          <el-table-column prop="address" label="文件下载" width="100">
            <template v-slot:="scope">
              <el-button size="mini" type="primary" mini>下载</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="表格" width="100">
            <template v-slot:="scope">
              <el-button size="mini"> 表格</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </layout-row>

    <!--  职数编制统计  -->
    <layout-row  v-else>
      <div slot="left">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="表格">
            <el-input v-model="form.name" placeholder="请输入表格名称"></el-input>
          </el-form-item>
          <el-form-item label="法规名称">
            <el-input v-model="form.name" placeholder="请输入法规名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button>重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <el-table :data="tableData2" style="width: 100%" border>
        <el-table-column type="index" label="序号" width="60"></el-table-column>
        <el-table-column prop="name" label="政策法规名称"></el-table-column>
        <el-table-column prop="sfsbg" label="所附表格名称"></el-table-column>
        <el-table-column label="操作" width="100">
          <template v-slot:="scope">
            <el-button size="mini" type="primary">下载</el-button>
          </template>
        </el-table-column>
      </el-table>
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
      tableData: [
        {
          date: '2016-05-02',
          name: '中华人民共和国公务员法',
        }, {
          date: '2016-05-04',
          name: '关于贯彻实施公务员法建设高素质专业化公务员队伍的意见',
        }, {
          date: '2016-05-01',
          name: '公务员法范围规定',
        }, {
          date: '2016-05-03',
          name: '公务员领导职务、职级与级别管理办法',
        }, {
          date: '2016-05-03',
          name: '参照《中华人民共和国公务员法》管理的单位审批办法',
        }, {
          date: '2016-05-03',
          name: '公务员职务与职级并行规定',
        }, {
          date: '2016-05-03',
          name: '公务员职务与职级并行制度实施方案',
        }, {
          date: '2016-05-03',
          name: '专业技术类公务员职级设置管理办法（试行）',
        }, {
          date: '2016-05-03',
          name: '行政执法类公务员职级设置管理办法（试行）',
        }, {
          date: '2016-05-03',
          name: '行政执法类公务员职级设置管理办法（试行）',
        }
      ],
      tableData2: [
        {
          date: '2016-05-02',
          name: '公务员法登记办法',
          sfsbg: '公务员法登记办法',
        }, {
          date: '2016-05-04',
          name: '公务员法登记办法',
          sfsbg: '公务员法登记办法',
        }, {
          date: '2016-05-01',
          name: '公务员法登记办法',
          sfsbg: '公务员法登记办法',
        }, {
          date: '2016-05-03',
          name: '公务员法登记办法',
          sfsbg: '公务员法登记办法',
        }, {
          date: '2016-05-03',
          name: '公务员法登记办法',
          sfsbg: '公务员法登记办法',
        }, {
          date: '2016-05-03',
          name: '公务员职务与职级并行规定',
          sfsbg: '公务员法登记办法',
        }, {
          date: '2016-05-03',
          name: '参照《中华人民共和国公务员法》管理的单位审批办法',
          sfsbg: '公务员法登记办法',
        }, {
          date: '2016-05-03',
          name: '公务员职务与职级并行制度实施方案',
          sfsbg: '公务员法登记办法',
        }, {
          date: '2016-05-03',
          name: '专业技术类公务员职级设置管理办法（试行）',
          sfsbg: '公务员法登记办法',
        }, {
          date: '2016-05-03',
          name: '行政执法类公务员职级设置管理办法（试行）',
          sfsbg: '公务员法登记办法',
        }
      ],

      form: {
        name: '',
        region: 'qb',
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
    handleClick(item) {
      console.log(item);
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