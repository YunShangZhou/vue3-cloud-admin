import{_ as B}from"./index.vue_vue_type_style_index_0_lang.a8546682.js";import{d as C,g as $,o as i,c as v,e as b,w as l,l as e,B as p,ab as f,b as m,j as y,r as o,q as u,a as s}from"./index.8d1aabb2.js";const w={class:"app-progress-bar"},D={class:"name"},_=C({__name:"index",props:{classes:{default:""},title:{default:""},label:{default:"[]"},value:{default:0}},setup(a){const n=a,t=$(()=>`${n.value/100*100}%`);return(c,r)=>{const d=o("a-tooltip");return i(),v("div",w,[a.title?(i(),b(d,{key:0,content:a.title},{default:l(()=>[e("div",{class:p(["progress",a.classes]),style:f(`width: ${m(t)}`)},null,6)]),_:1},8,["content"])):(i(),v("div",{key:1,class:p(["progress",a.classes]),style:f(`width: ${m(t)}`)},null,6)),e("div",D,y(a.label),1)])}}});const k={class:"progress"},z={class:"flex"},E=e("span",{class:"mr-5 font-bold"},"\u5F53\u524D\u5B8C\u6210\u91CF",-1),N={class:"progress"},S={class:"flex"},V=e("span",{class:"mr-5 font-bold"},"\u5DF2\u7ECF\u5B8C\u6210\u91CF",-1),j={class:"progress"},q={class:"progress"},I=C({__name:"index",setup(a){const n=u(26.5),t=u(30),c=u(80),r=u(100);return(d,A)=>{const h=o("a-space"),g=o("a-col"),x=o("a-row"),F=o("a-card");return i(),b(B,{class:"app-page-progress"},{default:l(()=>[s(F,null,{default:l(()=>[s(x,null,{default:l(()=>[s(g,{span:12},{default:l(()=>[s(h,{direction:"vertical",size:20,class:"flex"},{default:l(()=>[e("div",k,[e("div",z,[E,s(_,{class:"flex-1",label:`${n.value} %`,title:"\u5F53\u524D\u5B8C\u6210\u91CF",value:n.value},null,8,["label","value"])])]),e("div",N,[e("div",S,[V,s(_,{class:"flex-1",classes:"success",title:"\u5DF2\u7ECF\u5B8C\u6210\u91CF",label:`${t.value} %`,value:t.value},null,8,["label","value"])])]),e("div",j,[s(_,{classes:"warning",title:"\u5269\u4F59\u5B8C\u6210\u91CF",label:`${c.value} %`,value:c.value},null,8,["label","value"])]),e("div",q,[s(_,{classes:"danger",title:"\u8D85\u989D\u5B8C\u6210\u91CF",label:`${r.value} %`,value:r.value},null,8,["label","value"])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{I as default};
