import{b as a,U as e,d as t,o as s,a as n,w as l,V as r,u as o,W as i,h as p,q as u,t as c,v as d,X as f,Y as g,F as b,I as y,x as m,y as v,A as w}from"./ant-design-vue-0954d8bd.js";import{A as k,u as O,a as h,_ as j}from"./index-0962f18f.js";function B(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?Object(arguments[e]):{},s=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(t).filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})))),s.forEach((function(e){_(a,e,t[e])}))}return a}function _(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}var S=function(t,s){var n=B({},t,s.attrs);return a(k,B({},n,{icon:e}),null)};S.displayName="ArrowLeftOutlined",S.inheritAttrs=!1;var I=S;const P=t({name:"MainLoading"}),x=Object.assign(P,{props:{loading:{type:Boolean,default:!1},tip:{type:String,default:"加载中..."},customClass:{type:String,default:""}},setup:a=>(e,t)=>(s(),n(o(i),{spinning:a.loading,tip:a.tip,"wrapper-class-name":a.customClass},{default:l((()=>[r(e.$slots,"default")])),_:3},8,["spinning","tip","wrapper-class-name"]))});const A={class:"pd-20"},M={class:"page-panel bg-white"},$={class:"pd-20"},C=t({name:"MainPanel"});var L=j(Object.assign(C,{props:{title:{type:String,default:""},showBreadcrub:{type:Boolean,default:!0},showBack:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},tip:{type:String,default:"加载中..."}},setup(e){const t=O(),i=h(),k=p((()=>i.meta.breadcrumb)),j=()=>{t.go(-1)},B=e,_=p((()=>B.title||i.meta.title));return(t,i)=>(s(),u("div",A,[c("div",M,[a(x,{"custom-class":"page-panel-loading",loading:e.loading,tip:e.tip},{default:l((()=>[c("div",{class:d({"page-back-wrapper":e.showBack})},[a(o(f),{onBack:j},{title:l((()=>{var a;return[e.showBreadcrub&&(null==(a=k.value)?void 0:a.length)?(s(),n(o(g),{key:0,class:"breadcrumb-wrapper"},{default:l((()=>[(s(!0),u(b,null,y(k.value,((a,e)=>(s(),n(o(g).Item,{key:e},{default:l((()=>[m(v(a.title),1)])),_:2},1024)))),128))])),_:1})):(s(),u(b,{key:1},[m(v(_.value),1)],64))]})),backIcon:l((()=>[e.showBack?r(t.$slots,"backIcon",{key:0},(()=>[a(o(I),{style:{"font-size":"16px"}})]),!0):w("",!0)])),_:3}),c("div",$,[r(t.$slots,"default",{},void 0,!0)])],2)])),_:3},8,["loading","tip"])])]))}}),[["__scopeId","data-v-fc43d3ba"]]);export{L as M,x as _};
