import{p as n,s as r,e as u,F as l}from"./index.9036433b.js";const c=n({eager:Boolean},"lazy");function m(a,o){const e=r(!1),s=u(()=>e.value||a.eager||o.value);l(o,()=>e.value=!0);function t(){a.eager||(e.value=!1)}return{isBooted:e,hasContent:s,onAfterLeave:t}}export{c as m,m as u};
