import{a,x as e,i as s,j as l,g as o,o as t,b as d,y as n,t as i,u,e as c,w as r,C as m,D as p,_ as v}from"./index.a37fc666.js";const b={class:"switch-roles"},_=(a=>(m("data-v-572bc9d0"),a=a(),p(),a))((()=>n("span",null,"切换权限：",-1))),g=v(a({__name:"SwitchRoles",emits:["change"],setup(a,{emit:m}){const p=e(),v=s(p.roles[0]);return l(v,(async a=>{await p.changeRoles(a),m("change")})),(a,e)=>{const s=o("el-radio-button"),l=o("el-radio-group");return t(),d("div",null,[n("div",null,"你的权限："+i(u(p).roles),1),n("div",b,[_,c(l,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=a=>v.value=a)},{default:r((()=>[c(s,{label:"editor"}),c(s,{label:"admin"})])),_:1},8,["modelValue"])])])}}}),[["__scopeId","data-v-572bc9d0"]]);export{g as S};
