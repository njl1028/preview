import{aF as a,o as e,J as s,an as t,R as l,y as o,aO as n,q as d,L as i,b as p,w as r,x as u,c,S as f,W as g,T as m,U as y,V as b,aP as h,aQ as k,aR as v,aS as w}from"./element-plus-DF9tb4vq.js";import{b as x}from"./index-B8qrbVBv.js";import{_ as B,d as _,c as S}from"./index-D0rUMq_P.js";const j=["element-loading-text"],O=o({name:"MainLoading"}),$=Object.assign(O,{props:{loading:{type:Boolean,default:!1},tip:{type:String,default:"加载中..."},customClass:{type:String,default:""}},setup:o=>(d,i)=>{const p=n;return a((e(),s("div",{"element-loading-text":o.tip,class:l(o.customClass)},[t(d.$slots,"default")],10,j)),[[p,o.loading]])}}),C={class:"overflow-hidden h-full"},I={class:"page-panel bg-white h-full"},L={class:"pd-20 h-0 flex-1"},M=o({name:"MainPanel"}),P=B(Object.assign(M,{props:{title:{type:String,default:""},showBreadcrub:{type:Boolean,default:!0},showBack:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},tip:{type:String,default:"加载中..."}},setup(a){const o=_(),n=S(),B=d((()=>n.meta.breadcrumb)),j=()=>{o.go(-1)},O=a,M=d((()=>O.title||n.meta.title));return(o,n)=>{const d=w,_=h,S=k,O=v,P=$;return e(),s("div",C,[i("div",I,[p(P,{class:"page-panel-loading h-full",loading:a.loading,tip:a.tip},{default:r((()=>[i("div",{class:l(["h-full flex flex-col",{"page-back-wrapper":a.showBack}])},[p(S,{onBack:j},{content:r((()=>{var t;return[a.showBreadcrub&&(null==(t=u(B))?void 0:t.length)?(e(),c(_,{key:0,class:"breadcrumb-wrapper"},{default:r((()=>[(e(!0),s(f,null,g(u(B),((a,s)=>(e(),c(d,{key:s},{default:r((()=>[m(y(a.title),1)])),_:2},1024)))),128))])),_:1})):(e(),s(f,{key:1},[m(y(u(M)),1)],64))]})),icon:r((()=>[a.showBack?t(o.$slots,"backIcon",{key:0},(()=>[p(u(x),{style:{"font-size":"16px"}})]),!0):b("",!0)])),_:3}),i("div",L,[p(O,null,{default:r((()=>[t(o.$slots,"default",{},void 0,!0)])),_:3})])],2)])),_:3},8,["loading","tip"])])])}}}),[["__scopeId","data-v-e8defa82"]]);export{P as _};
