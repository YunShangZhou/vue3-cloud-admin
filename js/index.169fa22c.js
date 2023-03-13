import{d as h,q as p,o as y,e as U,w as a,r as s,a as e,i as x,j as V,k as q,f as L,c as N,l,F as S,as as z,b as v,m as A,H,bK as I}from"./index.c3db50ac.js";import{_ as M}from"./_plugin-vue_export-helper.5059d46b.js";import{u as T}from"./loading.6a9ae7c9.js";const j=""+new URL("../svg/logo.da9b9095.svg",import.meta.url).href,K=""+new URL("../png/login-code.8c841f1c.png",import.meta.url).href,P=h({__name:"index",setup(C){const u=p("MIT License 2022-2023");return(f,i)=>{const c=s("a-space"),d=s("a-layout-footer");return y(),U(d,{class:"app-footer"},{default:a(()=>[e(c,null,{default:a(()=>[x(V(u.value),1)]),_:1})]),_:1})}}});const Q=M(P,[["__scopeId","data-v-0d5f9f8e"]]),$=z('<div class="app-login-top"><div class="header"><img src="'+j+'" alt="tiger" class="logo"><span class="title">vue3-cloud-admin</span></div><div class="desc">\u4E00\u4E2A\u666E\u901A\u7684 Vue3 \u5F00\u53D1\u6A21\u677F</div></div>',1),G={class:"app-login"},J={class:"login-form-error-msg"},O={class:"app-login-footer"},Z=h({__name:"index",setup(C){const{loading:u,setLoading:f}=T(),i=A(),c=p(""),d=q(),g=p(null),t=L({username:"admin",password:"123456",imgCode:"v9am"}),w=()=>{},b=()=>{v(g).validate(async o=>{if(o)return;await d.login(t);const{redirect:_,...r}=i.currentRoute.value.query;i.push({path:_||H,query:{...r}}),setTimeout(()=>{I.success("Hi, \u6B22\u8FCE\u56DE\u6765")},500)}).catch(o=>{console.log("error",o)}).finally(()=>{f(!1)})};return(B,o)=>{const _=s("icon-user"),r=s("a-input"),m=s("a-form-item"),F=s("icon-lock"),k=s("a-input-password"),E=s("a-button"),D=s("a-space"),R=s("a-form");return y(),N(S,null,[$,l("div",G,[l("div",J,V(c.value),1),e(R,{ref_key:"formRef",ref:g,model:t,class:"app-login-form",layout:"vertical"},{default:a(()=>[e(m,{field:"username",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}],"validate-trigger":["change","blur"],"hide-label":""},{default:a(()=>[e(r,{ref:"userNameInput",modelValue:t.username,"onUpdate:modelValue":o[0]||(o[0]=n=>t.username=n),size:"large",placeholder:"\u7528\u6237\u540D: admin"},{prefix:a(()=>[e(_)]),_:1},8,["modelValue"])]),_:1}),e(m,{field:"password",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801"}],"validate-trigger":["change","blur"],"hide-label":""},{default:a(()=>[e(k,{modelValue:t.password,"onUpdate:modelValue":o[1]||(o[1]=n=>t.password=n),size:"large",placeholder:"\u5BC6\u7801: 123456","allow-clear":""},{prefix:a(()=>[e(F)]),_:1},8,["modelValue"])]),_:1}),e(m,{name:"imgCode"},{default:a(()=>[e(r,{modelValue:t.imgCode,"onUpdate:modelValue":o[2]||(o[2]=n=>t.imgCode=n),class:"login-code-input",size:"large"},null,8,["modelValue"]),l("img",{class:"app-code-img",src:K,alt:"",onClick:w})]),_:1}),e(D,{size:16,direction:"vertical",style:{"margin-top":"20px"}},{default:a(()=>[e(E,{type:"primary","html-type":"submit",onClick:b,long:"",loading:v(u)},{default:a(()=>[x("\u786E\u5B9A ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["model"])]),l("div",O,[e(Q)])],64)}}});export{Z as default};
