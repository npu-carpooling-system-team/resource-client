import{k as re,H as le,l as h,w as se,m as te,o as n,n as A,b as m,d as E,a as d,q as f,s as r,t as b,N as ie,F as de,c as o,v as g,y as u,p as O,D as ne,B as oe,K as ue,L as ve,U as ce,E as me,z as pe,A as ge}from"./.pnpm-c62345a9.js";import{v as ye,c as fe,b as be}from"./validatorUtil-fa8d24ca.js";import{_ as $}from"./index-8e3cc4cb.js";import{s as F,a as ke,b as M}from"./ocrUtil-1601fcd9.js";import{u as _e}from"./index-01ed37e0.js";import{_ as he}from"./index-911a86d7.js";const Ve=N=>(pe("data-v-0363d32d"),N=N(),ge(),N),xe={class:"register-form"},De=Ve(()=>O("h5",null,"用户角色选择(可多选)",-1)),Ne={key:2},Pe={class:"submit-login-btn"},we={__name:"ReviseInfo",setup(N){const T=re(),J=_e(),{currentUser:c}=le(J),e=h({username:"",userImage:"",email:"",alipayId:"",isDriver:!0,isPassenger:!0,driversName:"",driversPersonalId:"",driversLicenseNo:"",driversLicenseType:"",driversPlateNo:"",driversVehicleType:"",driversExpireDate:"",avgScore:""}),V=h({mail:"",code:""}),x=h(!1),P=h(!0),w=h(""),Z=async()=>{if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e.value.email)){r({type:"danger",message:"邮箱格式不正确"});return}f({duration:0,forbidClick:!0,message:"请求验证码发送中"});const l={email:e.value.email};try{const{data:a}=await $.post("/api/auth/sendmail",l);if(a.code!==null&&a.code===2e3){r({type:"success",message:"验证码已发送"}),w.value="300s",P.value=!1;let s=300;const t=setInterval(()=>{s--,w.value=s+"s",s===0&&(clearInterval(t),P.value=!1)},1e3)}else r({type:"danger",message:`验证码发送失败,${a.msg},请重试`})}catch(a){r({type:"danger",message:`服务器异常${a},请通知管理员`})}finally{b()}},G=async()=>{if(V.value.mail=e.value.email,!be(V.value.code)||/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(V.value.code)){r({type:"danger",message:"格式不正确"});return}f({duration:0,forbidClick:!0,message:"请求邮箱验证中"});try{const{data:l}=await $.post("/api/auth/checkmail",V.value);l.code!==null&&l.code===2e3?(r({type:"success",message:"邮箱验证成功"}),x.value=!0):r({type:"danger",message:`邮箱验证失败,${l.msg},请重试`})}catch(l){r({type:"danger",message:`服务器异常${l},请通知管理员`})}finally{b()}},k=h([]),v=h(!1);let L=!1,z=!1,R=!1,U=!1,S=!1;const D=l=>l.content.size>10*1024*1024?(r({type:"danger",message:"文件大小不能超过10M"}),!1):/image\/(png|jpg|jpeg|JPG|PNG)/.test(l.file.type)?!0:(r({type:"danger",message:"文件格式不正确"}),!1),j=async l=>{if(D(l)){f({duration:0,forbidClick:!0,message:"正在识别身份证"});try{const{data:a}=await F(l);if(a.code===2e3){const s=JSON.parse(a.data);if(s.data.face!==null){const t=s.data.face;if(t.warning.isCopy!==0||t.warning.isReshoot!==0){r({type:"danger",message:"识别到翻拍或复制。请识别原件身份证"});return}e.value.driversName=t.data.name,e.value.driversPersonalId=t.data.idNumber,L=!0}else r({type:"danger",message:"身份证识别失败,请重试"})}else r({type:"danger",message:`身份证识别失败,${a.msg},请重试`})}catch(a){r({type:"danger",message:`服务器异常${a},请通知管理员`})}finally{b()}}},q=async l=>{if(D(l)){f({duration:0,forbidClick:!0,message:"正在识别身份证"});try{const{data:a}=await F(l);if(a.code===2e3){const s=JSON.parse(a.data);if(s.data.back!==null){const t=s.data.back;if(t.warning.isCopy!==0||t.warning.isReshoot!==0){r({type:"danger",message:"识别到翻拍或复制。请识别原件身份证"});return}t.data.validPeriod.split("-")[1]==="长期"?t.data.validPeriod="2999-12-31":e.value.driversExpireDate=t.data.validPeriod.split("-")[1].replace(/(\d{4})\.(\d{2})\.(\d{2})/,"$1-$2-$3"),z=!0}else r({type:"danger",message:"请识别身份证反面"})}else r({type:"danger",message:`身份证识别失败,${a.msg},请重试`})}catch(a){r({type:"danger",message:`服务器异常${a},请通知管理员`})}finally{b()}}},Y=async l=>{if(D(l))e.value.driversName===""&&r({type:"danger",message:"请先识别身份证信息"});else return;f({duration:0,forbidClick:!0,message:"正在识别驾驶证"});try{const{data:a}=await ke(l);if(a.code===2e3){const s=JSON.parse(a.data);if(s.data.face!==null){if(s.data.face.data.name!==e.value.driversName||s.data.face.data.licenseNumber!==e.value.driversPersonalId){r({type:"danger",message:"驾驶证与身份证所属人不一致,请更新材料"});return}e.value.driversLicenseNo=s.data.face.data.licenseNumber,e.value.driversLicenseType=s.data.face.data.approvedType;const t=s.data.face.data.validPeriod.split("至")[1];e.value.driversExpireDate===""?e.value.driversExpireDate=t:e.value.driversExpireDate=e.value.driversExpireDate>t?t:e.value.driversExpireDate,R=!0}else r({type:"danger",message:"驾驶证识别失败,请重试"})}else r({type:"danger",message:`驾驶证识别失败,${a.msg},请重试`})}catch(a){r({type:"danger",message:`服务器异常${a},请通知管理员`})}finally{b()}},H=async l=>{if(D(l)){f({duration:0,forbidClick:!0,message:"正在识别行驶证"});try{const{data:a}=await M(l);if(a.code===2e3){const s=JSON.parse(a.data);if(s.data.face!==null){if(s.data.face.data.owner!==e.value.driversName){r({type:"danger",message:"行驶证与身份证所属人不一致或身份信息为空,请更新材料"});return}else s.data.face.data.useNature!=="非营运"&&r({type:"warning",message:"行驶证非营运,我们建议您更新材料"});e.value.driversPlateNo=s.data.face.data.licensePlateNumber,e.value.driversVehicleType=s.data.face.data.model+" "+s.data.face.data.vehicleType,U=!0}}else r({type:"danger",message:"行驶证识别失败,请重试"})}catch(a){r({type:"danger",message:`服务器异常${a},请通知管理员`})}finally{b()}}},K=async l=>{if(D(l)){f({duration:0,forbidClick:!0,message:"正在识别行驶证"});try{const{data:a}=await M(l);if(a.code===2e3){const s=JSON.parse(a.data);if(s.data.back!==null){if(s.data.back.data.inspectionRecord===null){r({type:"danger",message:"行驶证未年检,请更新材料"});return}const t=s.data.back.data.inspectionRecord,p=/有效期至(\d{1,4}年\d{1,2}月)/g,_=t.match(p);if(_===null){r({type:"danger",message:"行驶证年检信息解析失败,请更新材料"});return}_.sort((C,I)=>{const i=C.match(/\d{1,4}年\d{1,2}月/)[0],ae=I.match(/\d{1,4}年\d{1,2}月/)[0];return i>ae?1:-1});const y=_[_.length-1].match(/\d{1,4}年\d{1,2}月/)[0].replace("年","-").replace("月","-01");e.value.driversExpireDate===""?e.value.driversExpireDate=y:e.value.driversExpireDate=e.value.driversExpireDate>y?y:e.value.driversExpireDate,S=!0}}else r({type:"danger",message:"行驶证识别失败,请重试"})}catch(a){r({type:"danger",message:`服务器异常${a},请通知管理员`})}finally{b()}}};se(k,l=>{v.value=!!l.includes("isDriver")});const Q=()=>e.value.driversName===""||e.value.driversPersonalId===""||e.value.driversVehicleType===""||e.value.driversExpireDate===""||e.value.driversPlateNo==="",W=()=>!L||!z||!R||!U||!S,X=()=>e.value.isDriver&&Q?(r({type:"danger",message:"请完善司机信息"}),!1):!x.value&&e.value.email!==""?(r({type:"danger",message:"请先完成邮箱校验"}),!1):e.value.isDriver&&W?(r({type:"danger",message:"请先有关证照校验"}),!1):!0,ee=async()=>{f({duration:0,forbidClick:!0,message:"正在提交修改信息"});try{if(k.value.indexOf("isDriver")!==-1?e.value.isDriver=!0:k.value.indexOf("isPassenger")!==-1&&(e.value.isPassenger=!0),!e.value.isDriver&&!e.value.isPassenger){r({type:"danger",message:"请选择用户角色"});return}if(!X())return;const{data:l}=await $.put("/api/user/info",e.value);l.code===2e3?(r({type:"success",message:"修改个人信息成功"}),await T.push("/main/my/my-home")):r({type:"danger",message:l.message})}catch(l){r({type:"danger",message:`服务器异常${l},请通知管理员`})}finally{b()}};return te(()=>{e.value.username=c.value.user.username,e.value.email=c.value.user.email,e.value.userImage=c.value.user.userImage,e.value.alipayId=c.value.user.alipayId,e.value.isDriver=c.value.user.isDriver,e.value.isPassenger=c.value.user.isPassenger,e.value.driversName=c.value.driver.driversName,e.value.driversPersonalId=c.value.driver.driversPersonalId,e.value.driversVehicleType=c.value.driver.driversVehicleType,e.value.driversExpireDate=c.value.driver.driversExpireDate,e.value.driversPlateNo=c.value.driver.driversPlateNo,e.value.driversLicenseType=c.value.driver.driversLicenseType,c.value.user.isDriver&&(k.value.push("isDriver"),v.value=!0),c.value.user.isPassenger&&k.value.push("isPassenger")}),(l,a)=>{const s=ie,t=ne,p=oe,_=ue,B=ve,y=ce,C=me,I=de;return n(),A("div",xe,[m(s,{title:"修改个人信息","left-text":"返回","left-arrow":"",onClickLeft:a[0]||(a[0]=i=>E(T).go(-1))}),m(I,{onSubmit:a[14]||(a[14]=i=>ee())},{default:d(()=>[m(C,{inset:"",style:{padding:"1%"}},{default:d(()=>[m(t,{modelValue:e.value.username,"onUpdate:modelValue":a[1]||(a[1]=i=>e.value.username=i),name:"手机号",label:"手机号",placeholder:"请输入手机号",type:"tel",clearable:"",rules:[{validator:E(ye),message:"请输入正确的手机号码"}],disabled:!0},null,8,["modelValue","rules"]),m(t,{modelValue:e.value.email,"onUpdate:modelValue":a[2]||(a[2]=i=>e.value.email=i),center:"",clearable:"",label:"邮箱",placeholder:"请输入邮箱(非强制)",disabled:x.value},null,8,["modelValue","disabled"]),x.value?u("",!0):(n(),o(t,{key:0,modelValue:V.value.code,"onUpdate:modelValue":a[4]||(a[4]=i=>V.value.code=i),center:"",clearable:"",type:"digit",label:"邮箱验证码",placeholder:"请输入验证码",rules:[{required:!1,validator:E(fe),message:"应为4位数字"}]},{button:d(()=>[P.value?(n(),o(p,{key:0,size:"small",type:"primary",onClick:a[3]||(a[3]=i=>Z())},{default:d(()=>[g(" 发送验证码 ")]),_:1})):P.value?u("",!0):(n(),o(p,{key:1,size:"small",type:"primary",disabled:"",loading:"","loading-text":w.value},null,8,["loading-text"]))]),_:1},8,["modelValue","rules"])),x.value?u("",!0):(n(),o(p,{key:1,plain:"",block:"",type:"primary",size:"small",style:{width:"40%",margin:"1% auto"},onClick:a[5]||(a[5]=i=>G())},{default:d(()=>[g("验证邮箱")]),_:1})),De,m(B,{modelValue:k.value,"onUpdate:modelValue":a[6]||(a[6]=i=>k.value=i),direction:"horizontal",class:"checkbox-area"},{default:d(()=>[m(_,{name:"isPassenger"},{default:d(()=>[g("我希望拼车-乘客")]),_:1}),m(_,{name:"isDriver"},{default:d(()=>[g("我可以搭人-司机")]),_:1})]),_:1},8,["modelValue"]),v.value?(n(),A("h5",Ne,"请您点击按钮，通过图片识别修改以下信息")):u("",!0),v.value?(n(),o(y,{key:3,style:{width:"60%",margin:"0 auto"},"after-read":j},{default:d(()=>[m(p,{plain:"",block:"",type:"primary",size:"small"},{default:d(()=>[g(" 拍摄您的身份证-正面-以自动识别 ")]),_:1})]),_:1})):u("",!0),v.value?(n(),o(y,{key:4,style:{width:"60%",margin:"1% auto"},"after-read":q},{default:d(()=>[m(p,{plain:"",block:"",type:"primary",size:"small"},{default:d(()=>[g(" 拍摄您的身份证-背面-以自动识别 ")]),_:1})]),_:1})):u("",!0),v.value?(n(),o(t,{key:5,modelValue:e.value.driversPersonalId,"onUpdate:modelValue":a[7]||(a[7]=i=>e.value.driversPersonalId=i),center:"",disabled:"",clearable:"",label:"身份证号",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),v.value?(n(),o(t,{key:6,modelValue:e.value.driversName,"onUpdate:modelValue":a[8]||(a[8]=i=>e.value.driversName=i),center:"",disabled:"",clearable:"",label:"真实姓名",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),v.value?(n(),o(y,{key:7,style:{width:"60%",margin:"1% auto"},"after-read":Y},{default:d(()=>[m(p,{plain:"",block:"",type:"primary",size:"small"},{default:d(()=>[g(" 拍摄您的驾驶证-主页-以自动识别 ")]),_:1})]),_:1})):u("",!0),v.value?(n(),o(t,{key:8,modelValue:e.value.driversLicenseNo,"onUpdate:modelValue":a[9]||(a[9]=i=>e.value.driversLicenseNo=i),center:"",disabled:"",clearable:"",label:"驾驶证号",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),v.value?(n(),o(t,{key:9,modelValue:e.value.driversLicenseType,"onUpdate:modelValue":a[10]||(a[10]=i=>e.value.driversLicenseType=i),center:"",disabled:"",clearable:"",label:"准驾类型",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),v.value?(n(),o(y,{key:10,style:{width:"60%",margin:"1% auto"},"after-read":H},{default:d(()=>[m(p,{plain:"",block:"",type:"primary",size:"small"},{default:d(()=>[g(" 拍摄您的行驶证-主页-以自动识别 ")]),_:1})]),_:1})):u("",!0),v.value?(n(),o(y,{key:11,style:{width:"60%",margin:"1% auto"},"after-read":K},{default:d(()=>[m(p,{plain:"",block:"",type:"primary",size:"small"},{default:d(()=>[g(" 拍摄您的行驶证-副页-以自动识别 ")]),_:1})]),_:1})):u("",!0),v.value?(n(),o(t,{key:12,modelValue:e.value.driversPlateNo,"onUpdate:modelValue":a[11]||(a[11]=i=>e.value.driversPlateNo=i),center:"",disabled:"",clearable:"",label:"车牌号",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),v.value?(n(),o(t,{key:13,modelValue:e.value.driversVehicleType,"onUpdate:modelValue":a[12]||(a[12]=i=>e.value.driversVehicleType=i),center:"",disabled:"",clearable:"",autosize:"",type:"textarea",label:"车型",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0),v.value?(n(),o(t,{key:14,modelValue:e.value.driversExpireDate,"onUpdate:modelValue":a[13]||(a[13]=i=>e.value.driversExpireDate=i),center:"",disabled:"",clearable:"",label:"证照最早过期时间",placeholder:"该位置会被自动填充"},null,8,["modelValue"])):u("",!0)]),_:1}),O("div",Pe,[m(p,{plain:"",block:"",type:"primary","native-type":"submit"},{default:d(()=>[g(" 确认修改 ")]),_:1})])]),_:1})])}}},ze=he(we,[["__scopeId","data-v-0363d32d"]]);export{ze as default};
