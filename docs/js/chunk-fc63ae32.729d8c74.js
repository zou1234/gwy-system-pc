(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc63ae32"],{1391:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"layout-row",attrs:{gutter:0}},[a("el-col",{staticClass:"layout-row__left",attrs:{span:5}},[t._t("left")],2),a("el-col",{staticClass:"layout-row__right",attrs:{span:19}},[t._t("right")],2)],1)},s=[],i={name:"index"},n=i,o=(a("168b"),a("2877")),c=Object(o["a"])(n,l,s,!1,null,"fed7c01a",null);e["a"]=c.exports},"168b":function(t,e,a){"use strict";var l=a("2a22"),s=a.n(l);s.a},"2a22":function(t,e,a){},"3d9b":function(t,e,a){},"3f26":function(t,e,a){"use strict";var l=a("bc25"),s=a.n(l);s.a},"6bbb":function(t,e,a){t.exports=a.p+"img/logo.f197f6d0.png"},8663:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"system"},[l("div",{staticClass:"system__header"},[l("div",{staticClass:"system__header__left"},[l("img",{attrs:{src:a("6bbb"),alt:""}}),l("span",[t._v(" "+t._s(t.title))])]),l("div",{staticClass:"system__header__middle"},[t._t("default")],2),l("div",{staticClass:"system__header__right"},[t._m(0),l("div",{staticClass:"right__item right__help"},[l("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"点击下载帮助手册",placement:"bottom"}},[l("i",{staticClass:"el-icon-collection"})])],1),l("div",{staticClass:"right__item right__download"},[l("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"下载系统运维日志",placement:"bottom"}},[l("i",{staticClass:"el-icon-download"})])],1),l("div",{staticClass:"right__version"},[l("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"版本号：V1.0.0",placement:"bottom-end"}},[l("i",{staticClass:"el-icon-warning-outline"})])],1)])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"right__item right__manage"},[a("div",{staticClass:"right__manage__icon"}),t._v(" 管理员 "),a("div",{staticClass:"right__manage__dropdown"},[a("p",[t._v("密码设置")]),a("p",[t._v("退出系统")])])])}],i={name:"index",components:{},props:{title:{type:String,default:"这是一个标题"}},data(){return{}},computed:{},watch:{},created(){},methods:{},filters:{},mounted(){}},n=i,o=(a("3f26"),a("2877")),c=Object(o["a"])(n,l,s,!1,null,"0f5e4f96",null);e["a"]=c.exports},b7be:function(t,e,a){t.exports=a.p+"img/img.990ef4cd.png"},bc25:function(t,e,a){},bdef:function(t,e,a){"use strict";var l=a("3d9b"),s=a.n(l);s.a},e4aa:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"bbzt"},[l("sy-header",{attrs:{title:"报表统计(直统)系统"}},[l("el-tabs",{staticClass:"l-tabs",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"报表直统",name:"first"}}),l("el-tab-pane",{attrs:{label:"批量计算",name:"second"}})],1)],1),"first"===t.activeName?l("layout-row",[l("div",{staticClass:"bbzt-left",attrs:{slot:"left"},slot:"left"},[l("div",{staticClass:"bbzt-left__top"},[l("el-input",{staticClass:"input-with-select",attrs:{placeholder:"报表名"},model:{value:t.bbName,callback:function(e){t.bbName=e},expression:"bbName"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),l("div",{staticClass:"l-scrollbar"},[l("el-tree",{attrs:{data:t.data,props:t.defaultProps},on:{"node-click":t.handleNodeClick}})],1)],1),l("div",{staticClass:"bbzt-left__bottom"},[l("el-input",{staticClass:"input-with-select",attrs:{placeholder:"机构"},model:{value:t.jgName,callback:function(e){t.jgName=e},expression:"jgName"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),l("div",{staticClass:"l-scrollbar"},[l("el-tree",{attrs:{data:t.data,"show-checkbox":"",props:t.defaultProps},on:{"node-click":t.handleNodeClick}})],1)],1)]),l("div",{staticClass:"bbzt-right",attrs:{slot:"right"},slot:"right"},[l("div",{staticClass:"bbzt-right__header"},[l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:'点击 从"基础信息库"进行统计!',placement:"bottom-end"}},[l("el-button",{attrs:{size:"small",icon:"el-icon-edit-outline"}},[t._v("统计计算")])],1),l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:'点击 从"统计专用中间库"进行统计计算!',placement:"bottom-end"}},[l("el-button",{attrs:{size:"small",icon:"el-icon-setting"}},[t._v("数据反查")])],1),l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击 设置对比的统计单位并对比!",placement:"bottom-end"}},[l("el-button",{attrs:{size:"small",icon:"el-icon-document"}},[t._v("对比(统计库)")])],1)],1),l("img",{attrs:{src:a("b7be"),alt:"/"}})])]):l("layout-row",[l("div",{attrs:{slot:"left"},slot:"left"},[l("div",{staticClass:"bbzt-left__top"},[l("el-input",{staticClass:"input-with-select",attrs:{placeholder:"报表名"},model:{value:t.bbName,callback:function(e){t.bbName=e},expression:"bbName"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),l("div",{staticClass:"l-scrollbar"},[l("el-tree",{attrs:{data:t.data,props:t.defaultProps},on:{"node-click":t.handleNodeClick}})],1)],1),l("div",{staticClass:"bbzt-left__bottom"},[l("el-input",{staticClass:"input-with-select",attrs:{placeholder:"机构"},model:{value:t.jgName,callback:function(e){t.jgName=e},expression:"jgName"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"})],1),l("div",{staticClass:"l-scrollbar"},[l("el-tree",{attrs:{data:t.data,"show-checkbox":"",props:t.defaultProps},on:{"node-click":t.handleNodeClick}})],1)],1)]),l("div",{attrs:{slot:"right"},slot:"right"},[l("div",{staticClass:"bbzt-right__header"},[l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击进行结果导出!",placement:"bottom-end"}},[l("el-button",{attrs:{size:"small",icon:"el-icon-edit-outline"}},[t._v("批量计算")])],1),l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击进行单位设置!",placement:"bottom-end"}},[l("el-button",{attrs:{size:"small",icon:"el-icon-setting"}},[t._v("对比单位设置")])],1),l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击进行评估!",placement:"bottom-end"}},[l("el-button",{attrs:{size:"small",icon:"el-icon-document"}},[t._v("评估")])],1),l("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击进行结果导出!",placement:"bottom-end"}},[l("el-button",{attrs:{size:"small",icon:"el-icon-search"}},[t._v("结果导出")])],1)],1),l("img",{attrs:{src:a("b7be"),alt:"/"}})])])],1)},s=[],i=a("8663"),n=a("1391"),o={name:"index",components:{syHeader:i["a"],layoutRow:n["a"]},data(){return{activeName:"first",tableData:[{date:"2016-05-02",name:"中华人民共和国公务员法"},{date:"2016-05-04",name:"关于贯彻实施公务员法建设高素质专业化公务员队伍的意见"},{date:"2016-05-01",name:"公务员法范围规定"},{date:"2016-05-03",name:"公务员领导职务、职级与级别管理办法"},{date:"2016-05-03",name:"参照《中华人民共和国公务员法》管理的单位审批办法"},{date:"2016-05-03",name:"公务员职务与职级并行规定"},{date:"2016-05-03",name:"公务员职务与职级并行制度实施方案"},{date:"2016-05-03",name:"专业技术类公务员职级设置管理办法（试行）"},{date:"2016-05-03",name:"行政执法类公务员职级设置管理办法（试行）"},{date:"2016-05-03",name:"行政执法类公务员职级设置管理办法（试行）"}],tableData2:[{date:"2016-05-02",name:"公务员法登记办法",sfsbg:"公务员法登记办法"},{date:"2016-05-04",name:"公务员法登记办法",sfsbg:"公务员法登记办法"},{date:"2016-05-01",name:"公务员法登记办法",sfsbg:"公务员法登记办法"},{date:"2016-05-03",name:"公务员法登记办法",sfsbg:"公务员法登记办法"},{date:"2016-05-03",name:"公务员法登记办法",sfsbg:"公务员法登记办法"},{date:"2016-05-03",name:"公务员职务与职级并行规定",sfsbg:"公务员法登记办法"},{date:"2016-05-03",name:"参照《中华人民共和国公务员法》管理的单位审批办法",sfsbg:"公务员法登记办法"},{date:"2016-05-03",name:"公务员职务与职级并行制度实施方案",sfsbg:"公务员法登记办法"},{date:"2016-05-03",name:"专业技术类公务员职级设置管理办法（试行）",sfsbg:"公务员法登记办法"},{date:"2016-05-03",name:"行政执法类公务员职级设置管理办法（试行）",sfsbg:"公务员法登记办法"}],form:{name:"",region:"qb",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},bbName:"",jgName:"",data:[{label:"2022年公务员统计表",children:[{label:"第三表 公务员基本情况（中央一级机关）（一）"}]},{label:"2022年参照公务员法管理的群团机关工作人员统计表",children:[{label:"第三表 参照管理人员基本情况（中央一级机关）"},{label:"第四表 参照管理人员基本情况（中央设在地方机关）"}]},{label:"2021年公务员统计表",children:[{label:"第四表 参照管理人员基本情况（中央设在地方机关）"},{label:"第三表 公务员基本情况（中央一级机关）（一）"}]},{label:"2021年公务员统计表",children:[{label:"第四表 参照管理人员基本情况（中央设在地方机关）"},{label:"第三表 公务员基本情况（中央一级机关）（一）"}]},{label:"2022年参照公务员法管理的事业单位工作人员统计表",children:[{label:"第四表 参照管理人员基本情况（中央设在地方机关）"},{label:"第三表 公务员基本情况（中央一级机关）（一）"}]},{label:"2021年参照公务员法管理的事业单位工作人员统计表",children:[{label:"第四表 参照管理人员基本情况（中央设在地方机关）"},{label:"第三表 公务员基本情况（中央一级机关）（一）"}]},{label:"2019年公务员统计表",children:[{label:"第四表 参照管理人员基本情况（中央设在地方机关）"},{label:"第三表 公务员基本情况（中央一级机关）（一）"}]},{label:"2019年公务员统计表",children:[{label:"第四表 参照管理人员基本情况（中央设在地方机关）"},{label:"第三表 公务员基本情况（中央一级机关）（一）"}]},{label:"2019年公务员统计表",children:[{label:"第四表 参照管理人员基本情况（中央设在地方机关）"},{label:"第三表 公务员基本情况（中央一级机关）（一）"}]},{label:"2019年公务员统计表",children:[{label:"第四表 参照管理人员基本情况（中央设在地方机关）"},{label:"第三表 公务员基本情况（中央一级机关）（一）"}]},{label:"2019年公务员统计表",children:[{label:"第四表 参照管理人员基本情况（中央设在地方机关）"},{label:"第三表 公务员基本情况（中央一级机关）（一）"}]},{label:"2019年公务员统计表",children:[{label:"第四表 参照管理人员基本情况（中央设在地方机关）"},{label:"第三表 公务员基本情况（中央一级机关）（一）"}]}],defaultProps:{children:"children",label:"label"}}},methods:{handleClick(t){console.log(t)},onSubmit(){console.log("submit!")},handleNodeClick(t){console.log(t)}}},c=o,r=(a("bdef"),a("2877")),d=Object(r["a"])(c,l,s,!1,null,"086dc51f",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-fc63ae32.729d8c74.js.map