import{d as e,l as a,o as t,a as o,w as l,t as n,b as s,u as i,K as r,x as d,Z as p,A as u,q as g,$ as v,F as k,I as c,y as m}from"./ant-design-vue-0954d8bd.js";import{M as y}from"./MainPanel-e655263d.js";import{_ as w}from"./MyDrawer-e11059e9.js";import{_ as f}from"./index-0962f18f.js";const h={class:"pb-15"},b={class:"table-wrapper"},x={key:0,class:"pagination-wrapper"},z=e({name:"TemplatePage"});var C=f(Object.assign(z,{setup(e){const f=[{title:"姓名",key:"name",dataIndex:"name",width:"20%"},{title:"年龄",key:"age",dataIndex:"age",width:"20%"},{title:"地址",key:"address",dataIndex:"address",ellipsis:!0},{title:"操作",key:"op",dataIndex:"op",width:"200"}];f.forEach((e=>e.align="center"));const z=a([]),C=a({total:0,page:1,pageSize:10}),N=a(!1),S=e=>{C.value={...C.value,page:e},L()},_=(e,a)=>{C.value={...C.value,page:1,pageSize:a},L()},L=()=>{N.value=!0,setTimeout((()=>{const{list:e,pagination:a}={list:[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park, New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 2 Lake Park, London No. 2 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park, Sidney No. 1 Lake Park"}],pagination:{...i(C),total:400,page:2}};z.value=e,a.value=a,N.value=!1}),0)},P=a(!1),I=a({}),j=()=>{},J=()=>{};return(e,a)=>(t(),o(y,{loading:N.value},{default:l((()=>[n("div",h,[s(i(r),{type:"primary",onClick:L},{default:l((()=>[d(" 搜索 ")])),_:1})]),n("div",b,[s(i(p),{columns:f,"data-source":z.value,"row-key":e=>e.id,pagination:!1,bordered:!0,scroll:{x:!0},rowClassName:"text-center"},{bodyCell:l((({column:e,record:a})=>["op"===e.dataIndex?(t(),o(i(r),{key:0,type:"link",onClick:()=>{return e=a,P.value=!0,void(I.value=e);var e}},{default:l((()=>[d("查看详情")])),_:2},1032,["onClick"])):u("",!0)])),_:1},8,["data-source","row-key"]),C.value.total?(t(),g("div",x,[s(i(v),{current:C.value.page,"onUpdate:current":a[0]||(a[0]=e=>C.value.page=e),"page-size":C.value.pageSize,"onUpdate:pageSize":a[1]||(a[1]=e=>C.value.pageSize=e),total:C.value.total,"show-size-changer":"","show-total":e=>`总共 ${e} 条数据`,onChange:S,onShowSizeChange:_},null,8,["current","page-size","total","show-total"])])):u("",!0)]),s(w,{visible:P.value,"onUpdate:visible":a[2]||(a[2]=e=>P.value=e),"get-container":e.$el,title:"弹层",onOnConfirm:j,onOnCancel:J},{default:l((()=>[(t(!0),g(k,null,c(I.value,((e,a)=>(t(),g("p",{key:a},m(e),1)))),128))])),_:1},8,["visible","get-container"])])),_:1},8,["loading"]))}}),[["__scopeId","data-v-7e2c556d"]]);export{C as default};
