(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03fb653e"],{a035:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));var i=a("b775");function n(t){return Object(i["a"])({url:"/iot/deviceLog/list",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/iot/deviceLog/monitor",method:"get",params:t})}},f14e:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"padding-left":"20px"}},[a("el-row",[a("el-col",{attrs:{span:24}},[a("el-form",{ref:"queryForm",attrs:{model:t.queryParams,inline:!0,"label-width":"75px"}},[a("el-form-item",{attrs:{label:"时间范围"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{size:"small","value-format":"yyyy-MM-dd",type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.daterangeTime,callback:function(e){t.daterangeTime=e},expression:"daterangeTime"}})],1),a("el-form-item",{attrs:{label:"最大数量"}},[a("el-input",{model:{value:t.queryParams.total,callback:function(e){t.$set(t.queryParams,"total",e)},expression:"queryParams.total"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.getStatisticData}},[t._v("查询")])],1)],1)],1),a("el-col",{attrs:{span:23}},t._l(t.monitorThings,(function(e,i){return a("div",{key:i,staticStyle:{"margin-bottom":"30px"}},[a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{shadow:"hover","body-style":{padding:"10px 0px",overflow:"auto"}}},[a("div",{ref:"statisticMap",refInFor:!0,staticStyle:{height:"300px",width:"1080px"}})])],1)})),0)],1)],1)},n=[],r=a("c7eb"),o=a("1da1"),s=(a("3ca3"),a("ddb0"),a("b0c0"),a("a035")),c={name:"device-statistic",props:{device:{type:Object,default:null}},watch:{device:function(t,e){this.deviceInfo=t,this.deviceInfo&&0!=this.deviceInfo.deviceId&&(this.monitorThings=this.deviceInfo.monitorList,this.$nextTick((function(){this.getStatistic(),this.getStatisticData(this.monitorThings)})))}},data:function(){return{loading:!1,deviceInfo:{},monitorThings:[],chart:[],daterangeTime:[],queryParams:{serialNumber:null,identity:"",total:200},arrayData:[]}},mounted:function(){},methods:{getStatisticData:function(){var t=this;return Object(o["a"])(Object(r["a"])().mark((function e(){var a,i;return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.loading=!0,a=Object(r["a"])().mark((function e(a){return Object(r["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.queryParams.serialNumber=t.deviceInfo.serialNumber,t.queryParams.identity=t.monitorThings[a].id,null!=t.daterangeTime&&""!=t.daterangeTime&&(t.queryParams.beginTime=t.daterangeTime[0],t.queryParams.endTime=t.daterangeTime[1]+" 23:59"),String(t.monitorThings[a].id)&&Object(s["b"])(t.queryParams).then((function(e){for(var i=e.rows,n=[],r=0;r<i.length;r++){var o=[];o[0]=i[r].time,o[1]=i[r].value,n.push(o)}t.chart[a].setOption({series:[{data:n}]}),t.loading=!1}));case 4:case"end":return e.stop()}}),e)})),i=0;case 3:if(!(i<t.monitorThings.length)){e.next=8;break}return e.delegateYield(a(i),"t0",5);case 5:i++,e.next=3;break;case 8:case"end":return e.stop()}}),e)})))()},getStatistic:function(){for(var t=["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],e=0;e<this.monitorThings.length;e++){var a;this.$refs.statisticMap[e].style.width=document.documentElement.clientWidth-510+"px",this.chart[e]=this.$echarts.init(this.$refs.statisticMap[e]),a={animationDurationUpdate:3e3,tooltip:{trigger:"axis"},title:{left:"center",text:this.monitorThings[e].name+"统计 （单位 "+(void 0!=this.monitorThings[e].dataType.unit?this.monitorThings[e].dataType.unit:"无")+"）"},grid:{top:"80px",left:"40px",right:"20px",bottom:"60px",containLabel:!0},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},xAxis:{type:"time"},yAxis:{type:"value"},dataZoom:[{type:"inside",start:0,end:100},{start:0,end:100}],series:[{name:this.monitorThings[e].name,type:"line",symbol:"none",sampling:"lttb",itemStyle:{color:e>9?t[0]:t[e]},areaStyle:{},data:[]}]},a&&this.chart[e].setOption(a)}}}},l=c,d=a("2877"),m=Object(d["a"])(l,i,n,!1,null,null,null);e["default"]=m.exports}}]);