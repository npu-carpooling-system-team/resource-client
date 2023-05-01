import{u as v,w as L,o as O,c as P,a as b,b as k,d as I,r as A,C as y,e as R,f as T,g as w,s as D,h as V,i as C}from"./.pnpm-89aee2be.js";let p,N=(async()=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();let d,f,h,_,m,i,g,u;p=(r,o)=>{const n=r.__vccOpts||r;for(const[t,e]of o)n[t]=e;return n},d={__name:"App",setup(r){const o=v();return L(o,n=>{console.log(n),n?document.getElementById("config-provider").style.backgroundColor="black":document.getElementById("config-provider").style.backgroundColor="#ebedf0"}),(n,t)=>{const e=A("router-view"),a=y;return O(),P(a,{id:"config-provider",class:"config-provider",theme:I(o)?"dark":"light"},{default:b(()=>[k(e)]),_:1},8,["theme"])}}},f=p(d,[["__scopeId","data-v-861e8314"]]),h="modulepreload",_=function(r,o){return new URL(r,o).href},m={},i=function(r,o,n){if(!o||o.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(o.map(e=>{if(e=_(e,n),e in m)return;m[e]=!0;const a=e.endsWith(".css"),E=a?'[rel="stylesheet"]':"";if(n)for(let l=t.length-1;l>=0;l--){const c=t[l];if(c.href===e&&(!a||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${E}`))return;const s=document.createElement("link");if(s.rel=a?"stylesheet":h,a||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),a)return new Promise((l,c)=>{s.addEventListener("load",l),s.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},g=[{path:"/",name:"default",redirect:"/login"},{path:"/login",name:"login",component:()=>i(()=>import("./UserLogin-2cca7db1.js"),["./UserLogin-2cca7db1.js",".pnpm-89aee2be.js",".pnpm-7682398f.css","./validatorUtil-9a5b9e7f.js","./UserLogin-ab8aa575.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u767B\u5F55"}},{path:"/register",name:"register",component:()=>i(()=>import("./UserRegister-60fa7330.js"),["./UserRegister-60fa7330.js",".pnpm-89aee2be.js",".pnpm-7682398f.css","./validatorUtil-9a5b9e7f.js","./UserRegister-ed150eb0.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u6CE8\u518C"}},{path:"/privacy",name:"privacy",component:()=>i(()=>import("./PrivacyPolicy-9ca40f36.js"),["./PrivacyPolicy-9ca40f36.js",".pnpm-89aee2be.js",".pnpm-7682398f.css","./PrivacyPolicy-7721c626.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u9690\u79C1\u653F\u7B56"}},{path:"/oauth/alipay/success",name:"oauth-success",component:()=>i(()=>import("./OAuthSuccess-82db66a7.js"),["./OAuthSuccess-82db66a7.js",".pnpm-89aee2be.js",".pnpm-7682398f.css","./OAuthSuccess-d304854d.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u652F\u4ED8\u5B9D\u767B\u9646\u6210\u529F"}},{path:"/oauth/alipay/failure",name:"oauth-failure",component:()=>i(()=>import("./OAuthFailure-327c7cca.js"),["./OAuthFailure-327c7cca.js",".pnpm-89aee2be.js",".pnpm-7682398f.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u652F\u4ED8\u5B9D\u767B\u9646\u5931\u8D25"}},{path:"/main",name:"main",component:()=>i(()=>import("./MainPage-e4df4421.js"),["./MainPage-e4df4421.js",".pnpm-89aee2be.js",".pnpm-7682398f.css"],import.meta.url),meta:{title:"\u897F\u5DE5\u5927\u62FC\u8F66\u7CFB\u7EDF-\u4E3B\u9875"}}],u=R({history:T(),routes:g}),u.beforeEach((r,o,n)=>{if(r.meta.title&&(document.title=r.meta.title),r.path==="/login"||r.path==="/register"||r.path==="/oauth/alipay/success"||r.path==="/oauth/alipay/failure"||r.path==="/privacy")return n();if(!w.get("token"))return D({type:"danger",message:"\u8BF7\u5148\u767B\u5F55"}),n("/login");n()}),V(f).use(C()).use(u).use(y).mount("#app")})();export{p as _,N as __tla};
