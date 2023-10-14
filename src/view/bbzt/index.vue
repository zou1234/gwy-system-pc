<template>
  <div class="bbzt">
    <sy-header title="报表统计(直统)系统">
      <el-tabs class="l-tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="报表直统" name="first"></el-tab-pane>
        <el-tab-pane label="批量计算" name="second"></el-tab-pane>
      </el-tabs>
    </sy-header>

    <!--  报表直统  -->
    <layout-row v-if="activeName === 'first'">
      <div class="bbzt-left" slot="left">
        <div class="bbzt-left__top">
          <el-input placeholder="报表名" v-model="bbName" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <div class="l-scrollbar">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
        </div>

        <div class="bbzt-left__bottom">
          <el-input placeholder="机构" v-model="jgName" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>

          <div class="l-scrollbar">
            <el-tree :data="data" show-checkbox :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
        </div>
      </div>

      <div class="bbzt-right" slot="right">
        <div class="bbzt-right__header">
          <el-tooltip  class="item" effect="dark" content='点击 从"基础信息库"进行统计!' placement="bottom-end">
            <el-button size="small" icon="el-icon-edit-outline">统计计算</el-button>
          </el-tooltip>

          <el-tooltip  class="item" effect="dark" content='点击 从"统计专用中间库"进行统计计算!' placement="bottom-end">
            <el-button size="small" icon="el-icon-setting">数据反查</el-button>
          </el-tooltip>

          <el-tooltip  class="item" effect="dark" content="点击 设置对比的统计单位并对比!" placement="bottom-end">
            <el-button size="small" icon="el-icon-document">对比(统计库)</el-button>
          </el-tooltip>
        </div>
        <img src="./image/img.png" alt="/">
      </div>
    </layout-row>

    <!--  批量计算  -->
    <layout-row v-else>
      <div slot="left">
        <div class="bbzt-left__top">
          <el-input placeholder="报表名" v-model="bbName" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <div class="l-scrollbar">
            <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
        </div>

        <div class="bbzt-left__bottom">
          <el-input placeholder="机构" v-model="jgName" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>

          <div class="l-scrollbar">
            <el-tree :data="data" show-checkbox :props="defaultProps" @node-click="handleNodeClick"></el-tree>
          </div>
        </div>
      </div>

      <div slot="right">
        <div class="bbzt-right__header">
          <el-tooltip  class="item" effect="dark" content="点击进行结果导出!" placement="bottom-end">
            <el-button size="small" icon="el-icon-edit-outline">批量计算</el-button>
          </el-tooltip>

          <el-tooltip  class="item" effect="dark" content="点击进行单位设置!" placement="bottom-end">
            <el-button size="small" icon="el-icon-setting">对比单位设置</el-button>
          </el-tooltip>

          <el-tooltip  class="item" effect="dark" content="点击进行评估!" placement="bottom-end">
            <el-button size="small" icon="el-icon-document">评估</el-button>
          </el-tooltip>

          <el-tooltip  class="item" effect="dark" content="点击进行结果导出!" placement="bottom-end">
            <el-button size="small" icon="el-icon-search">结果导出</el-button>
          </el-tooltip>
        </div>

        <img src="./image/img.png" alt="/">
      </div>
    </layout-row>
  </div>
</template>
<style lang="less" scoped>
/deep/ .el-tabs {
  position: relative;
  left: 100px;
}

.l-scrollbar{
  max-height: 380px;
  overflow: auto;
  padding: 10px 0;
}
.bbzt{
  &-left{
    &__top{
      &-tree{
      }
    }

    &__bottom{
      margin-top: 15px;
    }
  }

  &-right{
    &__header{
      background: #e8eaf1;
      margin-bottom: 10px;
      padding: 8px 15px;
    }
  }
}

</style>

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
      },

      bbName: "",
      jgName: "",
      data: [
        {
          label: '2022年公务员统计表',
          children: [{
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        },
        {
          label: '2022年参照公务员法管理的群团机关工作人员统计表',
          children: [{
            label: '第三表 参照管理人员基本情况（中央一级机关）',
          },
            {
              label: '第四表 参照管理人员基本情况（中央设在地方机关）',
            }
          ]
        },
        {
          label: '2021年公务员统计表',
          children: [{
            label: '第四表 参照管理人员基本情况（中央设在地方机关）',
          }, {
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        },
        {
          label: '2021年公务员统计表',
          children: [{
            label: '第四表 参照管理人员基本情况（中央设在地方机关）',
          }, {
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        },
        {
          label: '2022年参照公务员法管理的事业单位工作人员统计表',
          children: [{
            label: '第四表 参照管理人员基本情况（中央设在地方机关）',
          }, {
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        },
        {
          label: '2021年参照公务员法管理的事业单位工作人员统计表',
          children: [{
            label: '第四表 参照管理人员基本情况（中央设在地方机关）',
          }, {
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        },
        {
          label: '2019年公务员统计表',
          children: [{
            label: '第四表 参照管理人员基本情况（中央设在地方机关）',
          }, {
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        },
        {
          label: '2019年公务员统计表',
          children: [{
            label: '第四表 参照管理人员基本情况（中央设在地方机关）',
          }, {
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        },
        {
          label: '2019年公务员统计表',
          children: [{
            label: '第四表 参照管理人员基本情况（中央设在地方机关）',
          }, {
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        },
        {
          label: '2019年公务员统计表',
          children: [{
            label: '第四表 参照管理人员基本情况（中央设在地方机关）',
          }, {
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        },
        {
          label: '2019年公务员统计表',
          children: [{
            label: '第四表 参照管理人员基本情况（中央设在地方机关）',
          }, {
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        }, {
          label: '2019年公务员统计表',
          children: [{
            label: '第四表 参照管理人员基本情况（中央设在地方机关）',
          }, {
            label: '第三表 公务员基本情况（中央一级机关）（一）',
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }

    }
  },
  methods: {
    handleClick(item) {
      console.log(item);
    },
    onSubmit() {
      console.log('submit!');
    },

    handleNodeClick(data) {
      console.log(data);
    }
  }
}
</script>

