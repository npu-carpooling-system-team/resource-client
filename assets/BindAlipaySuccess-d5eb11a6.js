import{l as a,o as n,s as o,h as c,a as i,n as _,z as d,A as r,p as u}from"./.pnpm-835927bf.js";import{_ as p}from"./index-b064aa96.js";const l=e=>(d("data-v-582b2b87"),e=e(),r(),e),m={class:"welcome-banner"},h=l(()=>u("h1",null,"正在处理绑定信息",-1)),y=[h],f={__name:"BindAlipaySuccess",setup(e){const t=a();return n(()=>{const s=t.currentRoute.value.query.token;s===void 0?(o({type:"danger",message:"绑定失败,3s后跳转回登录页面",duration:3e3}),setTimeout(()=>{window.location.href="#/login"},3e3)):(c.set("token",s),o({type:"success",message:"绑定成功,3s后执行跳转",duration:3e3}),setTimeout(()=>{window.location.href="#/main/my/my-home"},3e3))}),(s,b)=>(i(),_("div",m,y))}},B=p(f,[["__scopeId","data-v-582b2b87"]]);export{B as default};
