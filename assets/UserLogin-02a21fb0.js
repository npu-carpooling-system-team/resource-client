import{l as N,m as v,o as R,h,n as V,a as m,p as z,q as d,d as s,b as n,s as l,t as f,v as C,I as E,F as P,x as y,y as j,e as x,c as _,z as G,A as q,B as H,D as M,E as O,G as J}from"./.pnpm-2d117cc4.js";import{_ as L}from"./index-a31a7085.js";import{e as K}from"./jsencrypt-dc7e6574.js";import{v as Q,a as W,b as X}from"./validatorUtil-fa8d24ca.js";import{_ as Y}from"./index-a75880ea.js";const Z=""+new URL("alipayLogo-e4ca2d5f.png",import.meta.url).href;const I=p=>(q("data-v-5d2b9eef"),p=p(),H(),p),ee={class:"login-box"},te=I(()=>d("h1",{style:{"margin-top":"10%"}},"西工大拼车平台",-1)),oe={class:"icon-box"},ae={class:"form-box",id:"form-box"},se=I(()=>d("div",{style:{height:"5%"}},null,-1)),ne={class:"submit-login-btn"},le={__name:"UserLogin",setup(p){const c=N(),t=v({username:"",password:"",code:""}),u=v(!0),U=()=>{l({type:"danger",message:"表单校验未通过,请检查输入"});const o=document.getElementById("form-box");o.style.height="50%"},F=async()=>{f({duration:0,forbidClick:!0,message:"登录中"});const o={username:t.value.username,password:K(t.value.password)};try{h.remove("token");const{data:e}=await L.post("/api/auth/login/password",o);if(e.code!==null&&e.code===2e3){if(e.result.role===1){f({duration:3e3,forbidClick:!0,message:"该账号为管理员账号,3秒后跳转到管理端"}),setTimeout(()=>{window.location.href="https://carpooling-admin.wangminan.me/#/preHandleLogin?token="+e.result.token},3e3);return}h.set("token",e.result.token),await c.push("/main/home")}else l({type:"danger",message:"用户名密码登录未通过,请检查输入"})}catch(e){l({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{C()}},g=v(!0),w=v(""),$=async()=>{f({duration:0,forbidClick:!0,message:"请求验证码发送中"});const o={phone:t.value.username};try{const{data:e}=await L.post("/api/auth/sendsms",o);if(e.code!==null&&e.code===2e3){l({type:"success",message:"验证码已发送"}),w.value="300s",g.value=!1;let r=300;const i=setInterval(()=>{r--,w.value=r+"s",r===0&&(clearInterval(i),g.value=!0)},1e3)}else l({type:"danger",message:`验证码发送失败,${e.msg},请重试`})}catch(e){l({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{C()}},S=async()=>{f({duration:0,forbidClick:!0,message:"登录中"});const o={phone:t.value.username,code:t.value.code};try{const e=await L.post("/api/auth/login/phone",o);e.data.code!==null&&e.data.code===2e3?(h.set("token",e.data.result.token),await c.push("/main/home")):l({type:"danger",message:"用户名短信登录未通过,请检查输入"})}catch(e){l({type:"danger",message:`服务器异常${e},请通知管理员`})}finally{C()}},A=()=>{window.location.replace("https://openauth.alipaydev.com/oauth2/publicAppAuthorize.htm?app_id=2021000121691518&scope=auth_user&redirect_uri=https%3A%2F%2Fcarpooling-server.wangminan.me%2Fapi%2Fauth%2Flogin%2Foauth%2Fcallback")},B=async()=>{await c.push("/register")};R(async()=>{h.get("token")!==void 0&&await c.push("/main/home");const o=navigator.userAgent.toLowerCase(),e=o.indexOf("chrome")!==-1;if(e){const r=o.match(/chrome\/([\d.]+)/)[1];parseInt(r.split(".")[0])<51&&V({title:"我们建议您升级浏览器",message:"为了避免跳转、显示与样式的问题 , 我们建议您更新Chrome浏览器到51以上版本以获得更好的体验",theme:"round-button"}).then(()=>{window.sessionStorage.setItem("showUserAgentCheck","true")})}else e||V({title:"我们建议您更换浏览器",message:"为了避免跳转、显示与样式的问题 , 我们建议您更换为Chrome内核的浏览器以获得更好的体验",theme:"round-button"}).then(()=>{window.sessionStorage.setItem("showUserAgentCheck","true")})});const D=()=>new URL(""+new URL("carpooling-de87f268.svg",import.meta.url).href,self.location).href;return(o,e)=>{const r=E,i=M,b=O,k=J,T=P;return m(),z("div",ee,[te,d("div",oe,[s(r,{round:"",width:"80%",height:"80%",src:D()},null,8,["src"])]),d("div",ae,[se,s(T,{onSubmit:e[6]||(e[6]=a=>u.value?F():S()),onFailed:U},{default:n(()=>[s(i,{class:"login-type-choose-btn",style:{"margin-top":"0"},plain:"",block:"",type:"warning",onClick:e[0]||(e[0]=a=>u.value=!u.value)},{default:n(()=>[y(j(u.value?"切换到验证码登录":"切换到用户名密码登录"),1)]),_:1}),s(k,{style:{"margin-top":"5%"},inset:""},{default:n(()=>[s(b,{modelValue:t.value.username,"onUpdate:modelValue":e[1]||(e[1]=a=>t.value.username=a),name:"手机号",label:"手机号",placeholder:"请输入手机号",type:"tel",rules:[{validator:x(Q),message:"请输入正确的手机号码"}]},null,8,["modelValue","rules"])]),_:1}),u.value?(m(),_(k,{key:0,inset:"",style:{"margin-top":"5%"}},{default:n(()=>[s(b,{modelValue:t.value.password,"onUpdate:modelValue":e[2]||(e[2]=a=>t.value.password=a),name:"密码",label:"密码",type:"password",placeholder:"请输入密码",autocomplete:"off",rules:[{validator:x(W),message:"应为4-16位数字/字母/下划线"}]},null,8,["modelValue","rules"])]),_:1})):(m(),_(k,{key:1,style:{"margin-top":"5%"},inset:""},{default:n(()=>[s(b,{modelValue:t.value.code,"onUpdate:modelValue":e[4]||(e[4]=a=>t.value.code=a),center:"",clearable:"",type:"digit",label:"短信验证码",placeholder:"请输入验证码",rules:[{validator:x(X),message:"应为4位数字"}]},{button:n(()=>[g.value?(m(),_(i,{key:0,size:"small",type:"primary",onClick:e[3]||(e[3]=a=>$())},{default:n(()=>[y(" 发送验证码 ")]),_:1})):g.value?G("",!0):(m(),_(i,{key:1,size:"small",type:"primary",disabled:"",loading:"","loading-text":w.value},null,8,["loading-text"]))]),_:1},8,["modelValue","rules"])]),_:1})),d("div",ne,[s(i,{plain:"",block:"",type:"primary","native-type":"submit"},{default:n(()=>[y(" 登录 ")]),_:1}),s(i,{plain:"",block:"",type:"success",onClick:e[5]||(e[5]=a=>B())},{default:n(()=>[y(" 新账号注册 ")]),_:1})])]),_:1}),d("img",{onClick:e[7]||(e[7]=a=>A()),class:"alipay-icon",src:Z,alt:"支付宝登录"})])])}}},pe=Y(le,[["__scopeId","data-v-5d2b9eef"]]);export{pe as default};
