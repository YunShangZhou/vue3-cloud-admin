import{D as f,E as c,b as s}from"./index.8d1aabb2.js";var a;const d=typeof window<"u";d&&((a=window==null?void 0:window.navigator)==null?void 0:a.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function l(t){return typeof t=="function"?t():s(t)}function m(t,i){function n(...e){t(()=>i.apply(this,e),{fn:i,thisArg:this,args:e})}return n}function p(t,i={}){let n,e;return u=>{const r=l(t),o=l(i.maxWait);if(n&&clearTimeout(n),r<=0||o!==void 0&&o<=0)return e&&(clearTimeout(e),e=null),u();o&&!e&&(e=setTimeout(()=>{n&&clearTimeout(n),e=null,u()},o)),n=setTimeout(()=>{e&&clearTimeout(e),e=null,u()},r)}}function T(t,i=200,n={}){return m(p(i,n),t)}function h(...t){if(t.length===2){const[i,n]=t;i.value=n}if(t.length===3){const[i,n,e]=t;i[n]=e}}function g(t){f()&&c(t)}export{h as s,g as t,T as u};