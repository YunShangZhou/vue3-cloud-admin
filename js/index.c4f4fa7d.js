import{d as F,u as V,o as s,c as b,a as e,w as o,b as g,e as h,r as a,f as Y,t as Z,g as z,F as $,h as L,i as R,j as B,k as ee,l as k,G as te,m as T,n as U,p as ne,q as N,s as oe,v as ae,x as se,y as J,z as Q,A as X,T as le,B as ce,H as D,C as W}from"./index.c3db50ac.js";import{s as K}from"./index.acde5008.js";import{_ as ue}from"./_plugin-vue_export-helper.5059d46b.js";const re=""+new URL("../png/avatar.e21aeef1.png",import.meta.url).href,_e=F({__name:"index",setup(l){const n=V(),t=()=>{n.setCollapsed(!n.collapsed)};return(r,c)=>{const u=a("icon-menu-unfold"),i=a("icon-menu-fold"),p=a("a-button");return s(),b("div",{className:"app-hamburger",onClick:t},[e(p,{size:"mini"},{default:o(()=>[g(n).collapsed?(s(),h(u,{key:0})):(s(),h(i,{key:1}))]),_:1})])}}});const j=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],A=(()=>{if(typeof document>"u")return!1;const l=j[0],n={};for(const t of j)if((t==null?void 0:t[1])in document){for(const[c,u]of t.entries())n[l[c]]=u;return n}return!1})(),G={change:A.fullscreenchange,error:A.fullscreenerror};let w={request(l=document.documentElement,n){return new Promise((t,r)=>{const c=()=>{w.off("change",c),t()};w.on("change",c);const u=l[A.requestFullscreen](n);u instanceof Promise&&u.then(c).catch(r)})},exit(){return new Promise((l,n)=>{if(!w.isFullscreen){l();return}const t=()=>{w.off("change",t),l()};w.on("change",t);const r=document[A.exitFullscreen]();r instanceof Promise&&r.then(t).catch(n)})},toggle(l,n){return w.isFullscreen?w.exit():w.request(l,n)},onchange(l){w.on("change",l)},onerror(l){w.on("error",l)},on(l,n){const t=G[l];t&&document.addEventListener(t,n,!1)},off(l,n){const t=G[l];t&&document.removeEventListener(t,n,!1)},raw:A};Object.defineProperties(w,{isFullscreen:{get:()=>Boolean(document[A.fullscreenElement])},element:{enumerable:!0,get:()=>{var l;return(l=document[A.fullscreenElement])!=null?l:void 0}},isEnabled:{enumerable:!0,get:()=>Boolean(document[A.fullscreenEnabled])}});A||(w={isEnabled:!1});const O=w,ie=F({__name:"index",setup(l){const n=Y({title:"\u5168\u5C4F",icon:!0}),{icon:t,title:r}=Z(n),c=()=>{if(!O.isEnabled)return!1;O.toggle();const u=O.isFullscreen;n.icon=u,n.title=u?"\u5168\u5C4F":"\u9000\u51FA"};return(u,i)=>{const p=a("icon-fullscreen"),_=a("icon-fullscreen-exit"),y=a("a-button"),E=a("a-tooltip");return s(),b("div",{class:"flex items-center",onClick:c},[e(E,{content:g(r)},{default:o(()=>[e(y,{type:"outline",shape:"circle"},{default:o(()=>[g(t)?(s(),h(p,{key:0})):(s(),h(_,{key:1}))]),_:1})]),_:1},8,["content"])])}}}),pe={class:"app-breadcrumb"},de=F({__name:"index",setup(l){const n=V(),t=z(()=>n.breadcrumbList);return(r,c)=>{const u=a("a-breadcrumb-item"),i=a("icon-right"),p=a("a-breadcrumb");return s(),b("div",pe,[e(p,null,{separator:o(()=>[e(i)]),default:o(()=>[(s(!0),b($,null,L(g(t),(_,y)=>(s(),h(u,{key:y},{default:o(()=>[R(B(_.title),1)]),_:2},1024))),128))]),_:1})])}}});const me={class:"app-helper-menu"},fe={class:"header-dropdown-wrap"},he=k("img",{class:"app-header-avatar",alt:"avatar",src:re},null,-1),ye=k("span",null,"\u767B\u51FA",-1),be=F({__name:"index",setup(l){const n=ee(),t=V(),r=T(),c="admin",u=()=>{t.updateSettings({globalSettings:!0})},i=async()=>{await n.logout(),r.push("/login")};return(p,_)=>{const y=a("icon-settings"),E=a("a-button"),v=a("a-tooltip"),d=a("icon-home"),m=a("a-link"),x=a("a-space"),S=a("a-doption"),f=a("icon-github"),M=a("a-divider"),C=a("icon-export"),I=a("a-dropdown"),P=a("a-layout-header");return s(),h(P,{class:"app-header"},{default:o(()=>[e(_e),e(de),k("div",me,[k("ul",fe,[k("li",null,[e(ie)]),k("li",null,[e(v,{content:"\u8BBE\u7F6E"},{default:o(()=>[e(E,{class:"nav-btn",type:"outline",shape:"circle",onClick:u},{icon:o(()=>[e(y)]),_:1})]),_:1})]),k("li",null,[e(I,{class:"app-overlay-menu",trigger:"hover"},{content:o(()=>[e(S,null,{default:o(()=>[e(x,null,{default:o(()=>[e(d),e(m,{onClick:_[0]||(_[0]=qe=>p.$router.push({name:"example"}))},{default:o(()=>[R("\u9996\u9875")]),_:1})]),_:1})]),_:1}),e(S,null,{default:o(()=>[e(x,null,{default:o(()=>[e(f),e(m,{href:g(te),target:"_blank",rel:"noopener noreferrer"},{default:o(()=>[R("\u9879\u76EE\u5730\u5740")]),_:1},8,["href"])]),_:1})]),_:1}),e(M),e(S,{onClick:i},{default:o(()=>[e(x,null,{default:o(()=>[e(C),ye]),_:1})]),_:1})]),default:o(()=>[k("div",null,[he,k("span",{className:"app-name"},B(c))])]),_:1})])])])]),_:1})}}});function q(l){const n=U(l.type);return ne(n)}const ge={class:"name"},ke=F({__name:"index",setup(l){const n=V(),t=T(),r=N(!1),c=z(()=>t.currentRoute.value.matched[0].path),u=_=>{i(_),t.push(_)},i=_=>{const y=p(ae,_);y&&n.setRoutes(y)},p=(_,y)=>_.find(E=>E.path===y);return i(t.currentRoute.value.matched[0].path),(_,y)=>{const E=a("a-menu-item"),v=a("a-menu"),d=a("a-layout-sider");return s(),h(d,{style:{width:"100px"},class:"app-root-sider"},{default:o(()=>[e(v,{theme:"dark",collapsed:r.value,"default-selected-keys":[g(c)],onMenuItemClick:u},{default:o(()=>[(s(!0),b($,null,L(g(oe),m=>(s(),h(E,{key:m.path},{default:o(()=>{var x,S;return[e(q,{type:(x=m==null?void 0:m.meta)==null?void 0:x.icon},null,8,["type"]),k("span",ge,B((S=m==null?void 0:m.meta)==null?void 0:S.title),1)]}),_:2},1024))),128))]),_:1},8,["collapsed","default-selected-keys"])]),_:1})}}}),ve={class:"app-menu-item-inner-title"},xe=F({name:"SubMenu"}),Fe=F({...xe,props:{nav:null},setup(l){const t=se(l,"nav");return(r,c)=>{const u=a("a-menu-item"),i=a("SubMenu",!0),p=a("a-sub-menu");return s(),h(p,{key:g(t).path},{title:o(()=>[k("span",null,[e(q,{type:g(t).meta.icon},null,8,["type"]),k("span",null,B(g(t).meta.title),1)])]),default:o(()=>[(s(!0),b($,null,L(g(t).children,(_,y)=>(s(),b($,null,[_.children?(s(),h(i,{key:y,nav:_},null,8,["nav"])):(s(),h(u,{key:_.path,title:_.meta.title},{default:o(()=>[k("span",ve,[e(q,{type:_.meta.icon},null,8,["type"]),R(" "+B(_.meta.title),1)])]),_:2},1032,["title"]))],64))),256))]),_:1})}}}),Ce={class:"name"},we=F({__name:"index",setup(l){const n=V(),t=J(),r=T(),c=X(),u=z(()=>n.routes),i=N(""),p=N(""),_=v=>v.map(({path:d,meta:{title:m}})=>({title:m,path:d})),y=v=>{K(i,v.matched.length>=2?v.matched.slice(-2,-1)[0].path:""),K(p,v.path);const d=_(v.matched),m=v.matched.slice(-1)[0];n.setBreadcrumbList(d),t.addTag({title:m.meta.title,path:m.path})},E=v=>{r.push(v)};return Q(()=>c,y,{immediate:!0,deep:!0}),(v,d)=>{const m=a("a-menu-item"),x=a("a-menu"),S=a("a-layout-sider");return s(),h(S,{class:"app-sider",collapsed:g(n).collapsed},{default:o(()=>[e(x,{style:{height:"100%"},"default-open-keys":[i.value],"auto-open-selected":!0,"selected-keys":[p.value],breakpoint:"xl",onMenuItemClick:E},{default:o(()=>[(s(!0),b($,null,L(g(u).children,f=>{var M;return s(),b($,{key:f.path},[((M=f==null?void 0:f.children)==null?void 0:M.length)===1?(s(),h(m,{key:f.path,title:f.children[0].meta.title},{default:o(()=>[e(q,{type:f.children[0].meta.icon},null,8,["type"]),k("span",null,B(f.children[0].meta.title),1)]),_:2},1032,["title"])):(s(),b($,{key:1},[f.children?(s(),h(Fe,{key:1,nav:f},null,8,["nav"])):(s(),h(m,{key:f.path,path:f.path,title:f.meta.title},{default:o(()=>[e(q,{type:f.meta.icon},null,8,["type"]),k("span",Ce,B(f.meta.title),1)]),_:2},1032,["path","title"]))],64))],64)}),128))]),_:1},8,["default-open-keys","selected-keys"])]),_:1},8,["collapsed"])}}}),Se={};function Ee(l,n){const t=a("router-view"),r=a("a-layout-content");return s(),h(r,{class:"app-layout-content"},{default:o(()=>[e(t,null,{default:o(({Component:c,route:u})=>[e(le,{appear:"",name:"fade-transform",mode:"out-in"},{default:o(()=>[(s(),h(U(c),{key:u.path}))]),_:2},1024)]),_:1})]),_:1})}const $e=ue(Se,[["render",Ee]]),Be=F({__name:"item",props:{type:null,name:null,defaultValue:{type:Boolean}},emits:["inputChange"],setup(l,{emit:n}){const t=l,r=c=>{n("inputChange",{value:c,key:t.name})};return(c,u)=>{const i=a("a-input-number"),p=a("a-switch");return l.type==="number"?(s(),h(i,{key:0,style:{width:"80px"},size:"small","default-value":+l.defaultValue,onChange:r},null,8,["default-value"])):(s(),h(p,{key:1,"default-checked":l.defaultValue,size:"small",onChange:r},null,8,["default-checked"]))}}}),Me={class:"app-settings-column"},Re={class:"title"},H=F({__name:"column",props:{title:null,options:null},setup(l){const n=l,t=V(),r=({key:c,value:u})=>{u&&c==="colorWeek"&&(document.body.classList.add("app-color-week"),document.body.setAttribute("arco-theme","dark")),!u&&c==="colorWeek"&&(document.body.classList.remove("app-color-week"),document.body.removeAttribute("arco-theme")),t.updateSettings({[c]:u})};return(c,u)=>{const i=a("a-space");return s(),b("div",Me,[k("h5",Re,B(n.title),1),e(i,{direction:"vertical",fill:""},{default:o(()=>[(s(!0),b($,null,L(n.options,p=>(s(),b("div",{key:p.name,class:"switch-wrapper"},[k("span",null,B(p.name),1),e(Be,{type:p.type||"switch",name:p.key,"default-value":p.defaultVal,onInputChange:r},null,8,["type","name","default-value"])]))),128))]),_:1})])}}});const Ae=F({__name:"index",setup(l){const n=V(),t=z(()=>n.globalSettings),r=[{name:"\u5BFC\u822A\u680F",key:"navbar",defaultVal:!0},{name:"\u83DC\u5355\u680F",key:"menu",defaultVal:!0}],c=[{name:"\u6697\u9ED1\u6A21\u5F0F",key:"colorWeek",defaultVal:!1}],u=()=>{n.updateSettings({globalSettings:!1})};return(i,p)=>{const _=a("a-divider"),y=a("a-drawer");return s(),h(y,{visible:g(t),onCancel:u,"unmount-on-close":"",footer:!1},{title:o(()=>[R("\u5168\u5C40\u914D\u7F6E")]),default:o(()=>[e(H,{options:r,title:"\u5185\u5BB9\u533A\u57DF"}),e(_,{class:"app-drawer-div"}),e(H,{options:c,title:"\u5176\u5B83\u8BBE\u7F6E"})]),_:1},8,["visible"])}}});const Ve={class:"tags-wrap"},ze=F({__name:"index",setup(l){const n=X(),t=T(),r=J(),c=z(()=>r.tagList),u=N(t.currentRoute.value.path),i=d=>[{"tag-active":u.value===d.path},{"tag-home":D===d.path}],p=d=>d.path!==D;Q(()=>n.path,d=>{K(u,d)},{immediate:!0,deep:!0});const _=d=>{t.push(d)},y=d=>{const{path:m}=d;let x=D;m===u.value&&(c.value.some((S,f)=>{var M,C;return S.path===m?(x=f<c.value.length-1?(M=c.value[f+1])==null?void 0:M.path:(C=c.value[f-1])==null?void 0:C.path,!0):!1}),t.push(x))},E=d=>{y(d),r.deleteTag(d)},v=(d,m,x)=>{switch(d){case"1":r.closeRightTags(m.path,x);break;case"2":r.closeOtherTag({tag:m});break;case"3":r.emptyTag();break;default:console.log("default")}};return(d,m)=>{const x=a("icon-home"),S=a("a-tag"),f=a("a-doption"),M=a("a-dropdown");return s(),b("ul",Ve,[(s(!0),b($,null,L(g(c),(C,I)=>(s(),b("li",{key:C.path,class:ce(i(C))},[e(M,{class:"app-tags-contextmenu",trigger:"contextMenu",style:{display:"block"},onSelect:P=>v(P,C,I)},{content:o(()=>[e(f,{value:"1"},{default:o(()=>[R("\u5173\u95ED\u53F3\u4FA7")]),_:1}),e(f,{value:"2"},{default:o(()=>[R("\u5173\u95ED\u5176\u5B83")]),_:1}),e(f,{value:"3"},{default:o(()=>[R("\u5173\u95ED\u5168\u90E8")]),_:1})]),default:o(()=>[e(S,{closable:p(C),onClose:P=>E(C),onClick:P=>_(C)},{default:o(()=>[C.path===g(D)?(s(),h(x,{key:0})):(s(),b($,{key:1},[R(B(C.title),1)],64))]),_:2},1032,["closable","onClose","onClick"])]),_:2},1032,["onSelect"])],2))),128))])}}}),Le={class:"app-tagsview"},Pe=F({__name:"index",setup(l){return(n,t)=>(s(),b("div",Le,[e(ze)]))}});const Ie=F({__name:"index",setup(l){const n=V(),t=z(()=>n.navbar),r=z(()=>n.menu);return(c,u)=>{const i=a("a-layout");return s(),b($,null,[e(i,{class:"app-layout",style:{"min-height":"100vh"}},{default:o(()=>[e(i,null,{default:o(()=>[e(ke),g(r)?(s(),h(we,{key:0})):W("",!0),e(i,null,{default:o(()=>[g(t)?(s(),h(be,{key:0})):W("",!0),e(Pe),e($e)]),_:1})]),_:1})]),_:1}),e(Ae)],64)}}});export{Ie as default};
