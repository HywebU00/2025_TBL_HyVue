import{p as H,i as fe,c,r as ne,a as Z,b as O,g as xe,s as M,o as oe,u as qe,d as Je,e as Ze,f as ie,h as Ie,j as Xe,_ as ke,k as Ce,l as Me,m as Te,n as U,q as ge,t as he,v as ye,w as r,x as _,y as De,z as Ge,A as z,B as Ee,C as G,D as Re,E as Q,F as _e,G as $e,H as et,I as tt,T as at,J as lt,K as nt,L,M as W,N as ot,O as it}from"./index-TiTJAVk7.js";import{_ as st}from"./logo-Bkv06IaL.js";import{u as ut,a as j,m as $,b as se,c as me,d as Pe,e as Le,f as He,g as Oe,h as ze,i as Ne,V as Ae,j as ae,k as Fe,l as rt,n as ct,o as vt,p as dt,t as mt}from"./VBtn-C21pNDQi.js";import{V as ft,a as gt}from"./VCard-DCqFbU2D.js";import{V as ht}from"./index-B2snILOk.js";import{u as we,a as yt,b as At,m as wt,V as bt,c as de,d as X}from"./scopeId-CCPlYbap.js";const le=Symbol.for("vuetify:layout"),We=Symbol.for("vuetify:layout-item"),pe=1e3,pt=H({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Qe=H({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function St(){const e=fe(le);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Ue(e){const n=fe(le);if(!n)throw new Error("[Vuetify] Could not find injected layout");const a=e.id??`layout-item-${qe()}`,d=xe("useLayoutItem");Ie(We,{id:a});const t=M(!1);Je(()=>t.value=!0),Ze(()=>t.value=!1);const{layoutItemStyles:l,layoutItemScrimStyles:o}=n.register(d,{...e,active:c(()=>t.value?!1:e.active.value),id:a});return ie(()=>n.unregister(a)),{layoutItemStyles:l,layoutRect:n.layoutRect,layoutItemScrimStyles:o}}const Bt=(e,n,a,d)=>{let t={top:0,left:0,right:0,bottom:0};const l=[{id:"",layer:{...t}}];for(const o of e){const i=n.get(o),y=a.get(o),p=d.get(o);if(!i||!y||!p)continue;const g={...t,[i.value]:parseInt(t[i.value],10)+(p.value?parseInt(y.value,10):0)};l.push({id:o,layer:g}),t=g}return l};function Vt(e){const n=fe(le,null),a=c(()=>n?n.rootZIndex.value-100:pe),d=ne([]),t=Z(new Map),l=Z(new Map),o=Z(new Map),i=Z(new Map),y=Z(new Map),{resizeRef:p,contentRect:g}=ut(),b=c(()=>{const s=new Map,v=e.overlaps??[];for(const u of v.filter(f=>f.includes(":"))){const[f,h]=u.split(":");if(!d.value.includes(f)||!d.value.includes(h))continue;const B=t.get(f),C=t.get(h),R=l.get(f),N=l.get(h);!B||!C||!R||!N||(s.set(h,{position:B.value,amount:parseInt(R.value,10)}),s.set(f,{position:C.value,amount:-parseInt(N.value,10)}))}return s}),A=c(()=>{const s=[...new Set([...o.values()].map(u=>u.value))].sort((u,f)=>u-f),v=[];for(const u of s){const f=d.value.filter(h=>{var B;return((B=o.get(h))==null?void 0:B.value)===u});v.push(...f)}return Bt(v,t,l,i)}),S=c(()=>!Array.from(y.values()).some(s=>s.value)),m=c(()=>A.value[A.value.length-1].layer),V=c(()=>({"--v-layout-left":O(m.value.left),"--v-layout-right":O(m.value.right),"--v-layout-top":O(m.value.top),"--v-layout-bottom":O(m.value.bottom),...S.value?void 0:{transition:"none"}})),x=c(()=>A.value.slice(1).map((s,v)=>{let{id:u}=s;const{layer:f}=A.value[v],h=l.get(u),B=t.get(u);return{id:u,...f,size:Number(h.value),position:B.value}})),T=s=>x.value.find(v=>v.id===s),w=xe("createLayout"),I=M(!1);oe(()=>{I.value=!0}),Ie(le,{register:(s,v)=>{let{id:u,order:f,position:h,layoutSize:B,elementSize:C,active:R,disableTransitions:N,absolute:ue}=v;o.set(u,f),t.set(u,h),l.set(u,B),i.set(u,R),N&&y.set(u,N);const ee=Xe(We,w==null?void 0:w.vnode).indexOf(s);ee>-1?d.value.splice(ee,0,u):d.value.push(u);const q=c(()=>x.value.findIndex(F=>F.id===u)),J=c(()=>a.value+A.value.length*2-q.value*2),k=c(()=>{const F=h.value==="left"||h.value==="right",Y=h.value==="right",Ye=h.value==="bottom",ce=C.value??B.value,Ke=ce===0?"%":"px",be={[h.value]:0,zIndex:J.value,transform:`translate${F?"X":"Y"}(${(R.value?0:-(ce===0?100:ce))*(Y||Ye?-1:1)}${Ke})`,position:ue.value||a.value!==pe?"absolute":"fixed",...S.value?void 0:{transition:"none"}};if(!I.value)return be;const P=x.value[q.value];if(!P)throw new Error(`[Vuetify] Could not find layout item "${u}"`);const ve=b.value.get(u);return ve&&(P[ve.position]+=ve.amount),{...be,height:F?`calc(100% - ${P.top}px - ${P.bottom}px)`:C.value?`${C.value}px`:void 0,left:Y?void 0:`${P.left}px`,right:Y?`${P.right}px`:void 0,top:h.value!=="bottom"?`${P.top}px`:void 0,bottom:h.value!=="top"?`${P.bottom}px`:void 0,width:F?C.value?`${C.value}px`:void 0:`calc(100% - ${P.left}px - ${P.right}px)`}}),te=c(()=>({zIndex:J.value-1}));return{layoutItemStyles:k,layoutItemScrimStyles:te,zIndex:J}},unregister:s=>{o.delete(s),t.delete(s),l.delete(s),i.delete(s),y.delete(s),d.value=d.value.filter(v=>v!==s)},mainRect:m,mainStyles:V,getLayoutItem:T,items:x,layoutRect:g,rootZIndex:a});const D=c(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),E=c(()=>({zIndex:n?a.value:void 0,position:n?"relative":void 0,overflow:n?"hidden":void 0}));return{layoutClasses:D,layoutStyles:E,getLayoutItem:T,items:x,layoutRect:g,layoutRef:p}}const xt={};function It(e,n){const a=Me("router-view");return Te(),Ce(a)}const kt=ke(xt,[["render",It]]),Ct="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAA/AD8DAREAAhEBAxEB/8QAHAAAAgICAwAAAAAAAAAAAAAACAkGBwIDBAUK/8QAGwEAAgIDAQAAAAAAAAAAAAAAAwYCBAABBQf/2gAMAwEAAhADEAAAAHJjsa8yF5tYGbkccZbIcnJrPI5CLxt552Q2Og4bBZXLv124J/pCOHfseQZizPaalBwf/QvV1zuii9i4Lt25PJrBZDmCfO6taIfoMmtC0BOAPT5JSuiG3E1fMckj07xfef8Apd7aNUcShrepRB/8teqYe0e0AhPCFlmbwrPQ3GuK/bvNz5YFhyJRbhyEfNpKWmZ16Y3iZK3MvQ/M2E9TlS2cOyJrnljTqwxw1IcKhq29DatE49Is0ET/xAAzEAABAwIEBAQGAQQDAAAAAAABAgMEBQYABwgRCRIhMRMiMkEKFBVRYYFiI0KConGhsf/aAAgBAQABPwDkGFJHXGemelrabstajdt41ZikUSnJ87q+q3ln0tNpHVbij2SMZw/FTWzZN8mDQ8rKlVaSFkfMyquhiQ4PuGghQH7VjIL4nC0b0ul2NfeX1XsylIWlBmx5YnrihXUF1rlSrb8o3xlRmtbudViU+5bVrECv0GqtB6LNhuhxp1J/8I7EHqD0OGwP1jlwtvEt5uDGdeedQyyyguOOLPKltIBJUT7AAE744m/FPRrq1JVONAnOoy+th9cC3IvUCUASlcsp91unt7hGwxlpwOczdTVFZr7FJNtUyUQ80/UnfDekp9ilr1ftW2NRXCBvLLzKdFVpbDFUuOm0/wCUlMJc5lVBCNyhXYArA8uOCPxR6voZ1TsWTdEt+NlpedRRTqzBlbgUKYs8jcxAPo2XsHB7pwyd0dx+jhsAIwobDHGezlfyM4Z+a9XhPrjVCfSvo0VxHRSFylBlRH5Dal44BOgqJmvmKvNK76d8/Apj5ao0R5B8Lxk93yD3KeycWfbrDtrBSm9uUAbDpsMZ2Wyz9BeWlKdlA8u+OM5pegUG6Wb/AKdCRDdfUGav4KeUP7khLp/ljhB6lnNWfDmywu2XJ+arDdLFHqrncrlQyWFLP5WlCF/54bQAjrhaRjjfSaVf9t5N5S1X+tCzMvZhiWwHS347LKT5CUkEBS3EDcY0n6fZ+SOkxi2oprkx21p1QbeYoKwxLnpEp4oQha9indJSd9wfzjTPmbel1ZqT4po+aNqR6e94PyderaKpFnI2B8RB5AtA3Ow69djjW/dd91uXVKbRWrmmxKAz4z8SizG4cioKKSoN+OsEoHYeXqSca1bJrdw6Qbwmz6FdNAjkxkFisVg1NDjnjNnmbdV5h3KT2G+PhN85hVsgc08u/F52rVrcaqwh9mZSFtq/2jjCDzJw574+In1RT8teIrlKuMS4xlrFi1sMg7eK74yn1D/JKWxjQhrVtLU5b0q+rcplVodBqFQUyqHUQhLzT6UIU4ByKUkjzgg79cRsy4dRqNSVChyHIMbquTyFXJv9gkEn8nbphOddDiasJ9NhyY9TiS2kGSpHURVJQT/U9k77AbHruccefPeDTtMFwoihp/xHo6EMoOyRu+nbHwkC1jOfNUo6sSrZhFav5CTiP6cOI8px8TbZMyg64xV3mj8lWLcirYc9tghxg/7ox8Ptrxh2nmHVMnbkYL9LuxPz1Ne7pjS2UbOJI9gtoD9t4n29W7VgfUbTqIitBRW40WEutrT/ABO3MlX72OMw5V/XrfLz8uWqnUbn55CmIiWFvDt5l7dAehJ7+wxxv9WdGzCvKLllarrS4VFcQ/Vn2jzbuIQUtM/kjcrV9iRj4Q/KJykZJZnXs/2q0+LRof3LTKFOrP7W4MM+XC/Rji4cNKncRfJFuFFnMUW96Ah00ac6yXW3Ur9cd0JBVyKISQR6TjS5wW72Y1rO2rdUOfQJNlTW3qyYMzdoIW0lxoMvoIcBUlW5+wxBsms5K2owm2y49AjsBkRX3FODZI235jud9hjV5nfmRmDR5FDjU9FAhunlkzUOFx9xO/ZHQBP/AD1xol4cGkLOa2rJuis2ZbMbNCjlEepxnp62lVOY0SfHcjKXyveINnCrl6nvjKfI+0cj6B9KtK3aVb1OQ6t4R4LCWUJUtRUo7D7knCFYcokladiptH59W2IFIU3TVx2l8i3QeZ8gFSfboPv/ANYq2k2DQLwu68qSXZFVmhhUxLixvODUdCCdz0SsJSPwcOV2NNiBDSnEB7+xafb9Y1BZSMzHIqlchYWStzlHX8DGnPTJSmriiXCIsYzVJcjxlOICvASsFDjvQ9+UkAfc7noOtr1mo2f8jTXwuotuc6Org54wb7kE+pPboeoxT6g1U45cZUVIB2O42IOP/8QAKhEAAQMCBQMEAgMAAAAAAAAAAQACAwQRBRASITEGE1EiMkFhFCBCobH/2gAIAQIBAT8A/TWEM9eTnb7qqx+OJ3bjGpUuOgS6ZRYFRua5upnCb5WrPqLES1wpYjzyqOnZ2blVkAG4XTtY7eB24QO2eLVEkFI+WL3AKpqRNP3vkgKpJYB23h1/Fwqe75C15AA+SLqimY2oABB+wLKF5I3zq4u6x0fkKemdRzBku6ErSTpGyL9LyRuFgkPdrEwb5u3K6ipC6MVA/ioCeQrtsTyV05QOYDUSDnhN9xzETnmzVjmIiBppreo/0FeVg1BRzC9ysJq2SwAA7jZMGTYfKDLLGcDbM51Uw+r/AFOkBuFMNBXStA9zvzHccD7To9rhaV//xAAoEQABAwIGAgEFAQAAAAAAAAABAAIDBBEFBhASITETQTIiUXGxwdH/2gAIAQMBAT8A0AW1eNbVYq2sbR7VNl97/qldtVVl4GO8LruClYWktd2ratWXcPBaaqQXt1/Sqyd4lVC4uvdZloW7RUtHPtHXBaeKarbFN8bqjpvBF4fQv+1A0P3eRhbb78qZgjh3MBJPoGxVdTPdTOcWkfk39qRouQFbnSkkEbmyDsG6w6obWwl0fH5UlLsA3O5TIS6INPazBM2noT7KuCEVtTOGrLddaQ0598hQPgc8sqFWMpowGwFZoxJryKWM9d/4gLRjQpsm0crAsMdJaqcbN/ZTJY3us5PDS3hYvRviqHOI4JuiRoX6YZjbo2spZPj1f7EleBw5VM7e0hZmxBjYzRt77J/iadP/2Q==",Mt=H({...$(),...pt({fullHeight:!0}),...ye()},"VApp"),Tt=U()({name:"VApp",props:Mt(),setup(e,n){let{slots:a}=n;const d=ge(e),{layoutClasses:t,getLayoutItem:l,items:o,layoutRef:i}=Vt(e),{rtlClasses:y}=he();return j(()=>{var p;return r("div",{ref:i,class:["v-application",d.themeClasses.value,t.value,y.value,e.class],style:[e.style]},[r("div",{class:"v-application__wrap"},[(p=a.default)==null?void 0:p.call(a)])])}),{getLayoutItem:l,items:o,theme:d}}}),Dt=H({text:String,...$(),...se()},"VToolbarTitle"),Et=U()({name:"VToolbarTitle",props:Dt(),setup(e,n){let{slots:a}=n;return j(()=>{const d=!!(a.default||a.text||e.text);return r(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var t;return[d&&r("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]}})}),{}}}),Rt=[null,"prominent","default","comfortable","compact"],je=H({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Rt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ne(),...$(),...ze(),...Oe(),...se({tag:"header"}),...ye()},"VToolbar"),Se=U()({name:"VToolbar",props:je(),setup(e,n){var S;let{slots:a}=n;const{backgroundColorClasses:d,backgroundColorStyles:t}=me(_(e,"color")),{borderClasses:l}=Pe(e),{elevationClasses:o}=Le(e),{roundedClasses:i}=He(e),{themeClasses:y}=ge(e),{rtlClasses:p}=he(),g=M(!!(e.extended||(S=a.extension)!=null&&S.call(a))),b=c(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),A=c(()=>g.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return De({VBtn:{variant:"text"}}),j(()=>{var T;const m=!!(e.title||a.title),V=!!(a.image||e.image),x=(T=a.extension)==null?void 0:T.call(a);return g.value=!!(e.extended||x),r(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},d.value,l.value,o.value,i.value,y.value,p.value,e.class],style:[t.value,e.style]},{default:()=>[V&&r("div",{key:"image",class:"v-toolbar__image"},[a.image?r(ae,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):r(Ae,{key:"image-img",cover:!0,src:e.image},null)]),r(ae,{defaults:{VTabs:{height:O(b.value)}}},{default:()=>{var w,I,D;return[r("div",{class:"v-toolbar__content",style:{height:O(b.value)}},[a.prepend&&r("div",{class:"v-toolbar__prepend"},[(w=a.prepend)==null?void 0:w.call(a)]),m&&r(Et,{key:"title",text:e.title},{text:a.title}),(I=a.default)==null?void 0:I.call(a),a.append&&r("div",{class:"v-toolbar__append"},[(D=a.append)==null?void 0:D.call(a)])])]}}),r(ae,{defaults:{VTabs:{height:O(A.value)}}},{default:()=>[r(ht,null,{default:()=>[g.value&&r("div",{class:"v-toolbar__extension",style:{height:O(A.value)}},[x])]})]})]})}),{contentHeight:b,extensionHeight:A}}}),Pt=H({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Lt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=n;let d=0,t=0;const l=ne(null),o=M(0),i=M(0),y=M(0),p=M(!1),g=M(!1),b=c(()=>Number(e.scrollThreshold)),A=c(()=>Ge((b.value-o.value)/b.value||0)),S=()=>{const m=l.value;if(!m||a&&!a.value)return;d=o.value,o.value="window"in m?m.pageYOffset:m.scrollTop;const V=m instanceof Window?document.documentElement.scrollHeight:m.scrollHeight;if(t!==V){t=V;return}g.value=o.value<d,y.value=Math.abs(o.value-b.value)};return z(g,()=>{i.value=i.value||o.value}),z(p,()=>{i.value=0}),oe(()=>{z(()=>e.scrollTarget,m=>{var x;const V=m?document.querySelector(m):window;V&&V!==l.value&&((x=l.value)==null||x.removeEventListener("scroll",S),l.value=V,l.value.addEventListener("scroll",S,{passive:!0}))},{immediate:!0})}),ie(()=>{var m;(m=l.value)==null||m.removeEventListener("scroll",S)}),a&&z(a,S,{immediate:!0}),{scrollThreshold:b,currentScroll:o,currentThreshold:y,isScrollActive:p,scrollRatio:A,isScrollingUp:g,savedScroll:i}}const Ht=H({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...je(),...Qe(),...Pt(),height:{type:[Number,String],default:64}},"VAppBar"),Ot=U()({name:"VAppBar",props:Ht(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const d=ne(),t=Ee(e,"modelValue"),l=c(()=>{var I;const w=new Set(((I=e.scrollBehavior)==null?void 0:I.split(" "))??[]);return{hide:w.has("hide"),fullyHide:w.has("fully-hide"),inverted:w.has("inverted"),collapse:w.has("collapse"),elevate:w.has("elevate"),fadeImage:w.has("fade-image")}}),o=c(()=>{const w=l.value;return w.hide||w.fullyHide||w.inverted||w.collapse||w.elevate||w.fadeImage||!t.value}),{currentScroll:i,scrollThreshold:y,isScrollingUp:p,scrollRatio:g}=Lt(e,{canScroll:o}),b=c(()=>l.value.hide||l.value.fullyHide),A=c(()=>e.collapse||l.value.collapse&&(l.value.inverted?g.value>0:g.value===0)),S=c(()=>e.flat||l.value.fullyHide&&!t.value||l.value.elevate&&(l.value.inverted?i.value>0:i.value===0)),m=c(()=>l.value.fadeImage?l.value.inverted?1-g.value:g.value:void 0),V=c(()=>{var D,E;if(l.value.hide&&l.value.inverted)return 0;const w=((D=d.value)==null?void 0:D.contentHeight)??0,I=((E=d.value)==null?void 0:E.extensionHeight)??0;return b.value?i.value<y.value||l.value.fullyHide?w+I:w:w+I});G(c(()=>!!e.scrollBehavior),()=>{Re(()=>{b.value?l.value.inverted?t.value=i.value>y.value:t.value=p.value||i.value<y.value:t.value=!0})});const{ssrBootStyles:x}=we(),{layoutItemStyles:T}=Ue({id:e.name,order:c(()=>parseInt(e.order,10)),position:_(e,"location"),layoutSize:V,elementSize:M(void 0),active:t,absolute:_(e,"absolute")});return j(()=>{const w=Se.filterProps(e);return r(Se,Q({ref:d,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...T.value,"--v-toolbar-image-opacity":m.value,height:void 0,...x.value},e.style]},w,{collapse:A.value,flat:S.value}),a)}),{}}}),zt=H({...rt({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Nt=U()({name:"VAppBarNavIcon",props:zt(),setup(e,n){let{slots:a}=n;return j(()=>r(Fe,Q(e,{class:["v-app-bar-nav-icon"]}),a)),{}}}),Ft=H({scrollable:Boolean,...$(),...vt(),...se({tag:"main"})},"VMain"),Wt=U()({name:"VMain",props:Ft(),setup(e,n){let{slots:a}=n;const{dimensionStyles:d}=ct(e),{mainStyles:t}=St(),{ssrBootStyles:l}=we();return j(()=>r(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[t.value,l.value,d.value,e.style]},{default:()=>{var o,i;return[e.scrollable?r("div",{class:"v-main__scroller"},[(o=a.default)==null?void 0:o.call(a)]):(i=a.default)==null?void 0:i.call(a)]}})),{}}});function Qt(e){let{rootEl:n,isSticky:a,layoutItemStyles:d}=e;const t=M(!1),l=M(0),o=c(()=>{const p=typeof t.value=="boolean"?"top":t.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[p]:O(l.value)}:{top:d.value.top}]});oe(()=>{z(a,p=>{p?window.addEventListener("scroll",y,{passive:!0}):window.removeEventListener("scroll",y)},{immediate:!0})}),ie(()=>{window.removeEventListener("scroll",y)});let i=0;function y(){const p=i>window.scrollY?"up":"down",g=n.value.getBoundingClientRect(),b=parseFloat(d.value.top??0),A=window.scrollY-Math.max(0,l.value-b),S=g.height+Math.max(l.value,b)-window.scrollY-window.innerHeight,m=parseFloat(getComputedStyle(n.value).getPropertyValue("--v-body-scroll-y"))||0;g.height<window.innerHeight-b?(t.value="top",l.value=b):p==="up"&&t.value==="bottom"||p==="down"&&t.value==="top"?(l.value=window.scrollY+g.top-m,t.value=!0):p==="down"&&S<=0?(l.value=0,t.value="bottom"):p==="up"&&A<=0&&(m?t.value!=="top"&&(l.value=-A+m+b,t.value="top"):(l.value=g.top+A,t.value="top")),i=window.scrollY}return{isStuck:t,stickyStyles:o}}const Ut=100,jt=20;function Be(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ve(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let n=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const d=Be(n),t=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);n+=(t-d)*Math.abs(t),a===e.length-1&&(n*=.5)}return Be(n)*1e3}function Yt(){const e={};function n(t){Array.from(t.changedTouches).forEach(l=>{(e[l.identifier]??(e[l.identifier]=new _e(jt))).push([t.timeStamp,l])})}function a(t){Array.from(t.changedTouches).forEach(l=>{delete e[l.identifier]})}function d(t){var p;const l=(p=e[t])==null?void 0:p.values().reverse();if(!l)throw new Error(`No samples for touch id ${t}`);const o=l[0],i=[],y=[];for(const g of l){if(o[0]-g[0]>Ut)break;i.push({t:g[0],d:g[1].clientX}),y.push({t:g[0],d:g[1].clientY})}return{x:Ve(i),y:Ve(y),get direction(){const{x:g,y:b}=this,[A,S]=[Math.abs(g),Math.abs(b)];return A>S&&g>=0?"right":A>S&&g<=0?"left":S>A&&b>=0?"down":S>A&&b<=0?"up":Kt()}}}return{addMovement:n,endTouch:a,getVelocity:d}}function Kt(){throw new Error}function qt(e){let{el:n,isActive:a,isTemporary:d,width:t,touchless:l,position:o}=e;oe(()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",I,{passive:!1}),window.addEventListener("touchend",D,{passive:!0})}),ie(()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",D)});const i=c(()=>["left","right"].includes(o.value)),{addMovement:y,endTouch:p,getVelocity:g}=Yt();let b=!1;const A=M(!1),S=M(0),m=M(0);let V;function x(s,v){return(o.value==="left"?s:o.value==="right"?document.documentElement.clientWidth-s:o.value==="top"?s:o.value==="bottom"?document.documentElement.clientHeight-s:K())-(v?t.value:0)}function T(s){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const u=o.value==="left"?(s-m.value)/t.value:o.value==="right"?(document.documentElement.clientWidth-s-m.value)/t.value:o.value==="top"?(s-m.value)/t.value:o.value==="bottom"?(document.documentElement.clientHeight-s-m.value)/t.value:K();return v?Math.max(0,Math.min(1,u)):u}function w(s){if(l.value)return;const v=s.changedTouches[0].clientX,u=s.changedTouches[0].clientY,f=25,h=o.value==="left"?v<f:o.value==="right"?v>document.documentElement.clientWidth-f:o.value==="top"?u<f:o.value==="bottom"?u>document.documentElement.clientHeight-f:K(),B=a.value&&(o.value==="left"?v<t.value:o.value==="right"?v>document.documentElement.clientWidth-t.value:o.value==="top"?u<t.value:o.value==="bottom"?u>document.documentElement.clientHeight-t.value:K());(h||B||a.value&&d.value)&&(V=[v,u],m.value=x(i.value?v:u,a.value),S.value=T(i.value?v:u),b=m.value>-20&&m.value<80,p(s),y(s))}function I(s){const v=s.changedTouches[0].clientX,u=s.changedTouches[0].clientY;if(b){if(!s.cancelable){b=!1;return}const h=Math.abs(v-V[0]),B=Math.abs(u-V[1]);(i.value?h>B&&h>3:B>h&&B>3)?(A.value=!0,b=!1):(i.value?B:h)>3&&(b=!1)}if(!A.value)return;s.preventDefault(),y(s);const f=T(i.value?v:u,!1);S.value=Math.max(0,Math.min(1,f)),f>1?m.value=x(i.value?v:u,!0):f<0&&(m.value=x(i.value?v:u,!1))}function D(s){if(b=!1,!A.value)return;y(s),A.value=!1;const v=g(s.changedTouches[0].identifier),u=Math.abs(v.x),f=Math.abs(v.y);(i.value?u>f&&u>400:f>u&&f>3)?a.value=v.direction===({left:"right",right:"left",top:"down",bottom:"up"}[o.value]||K()):a.value=S.value>.5}const E=c(()=>A.value?{transform:o.value==="left"?`translateX(calc(-100% + ${S.value*t.value}px))`:o.value==="right"?`translateX(calc(100% - ${S.value*t.value}px))`:o.value==="top"?`translateY(calc(-100% + ${S.value*t.value}px))`:o.value==="bottom"?`translateY(calc(100% - ${S.value*t.value}px))`:K(),transition:"none"}:void 0);return G(A,()=>{var u,f;const s=((u=n.value)==null?void 0:u.style.transform)??null,v=((f=n.value)==null?void 0:f.style.transition)??null;Re(()=>{var h,B,C,R;(B=n.value)==null||B.style.setProperty("transform",((h=E.value)==null?void 0:h.transform)||"none"),(R=n.value)==null||R.style.setProperty("transition",((C=E.value)==null?void 0:C.transition)||null)}),$e(()=>{var h,B;(h=n.value)==null||h.style.setProperty("transform",s),(B=n.value)==null||B.style.setProperty("transition",v)})}),{isDragging:A,dragProgress:S,dragStyles:E}}function K(){throw new Error}const Jt=["start","end","left","right","top","bottom"],Zt=H({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Jt.includes(e)},sticky:Boolean,...Ne(),...$(),...wt(),...nt({mobile:null}),...ze(),...Qe(),...Oe(),...se({tag:"nav"}),...ye()},"VNavigationDrawer"),Xt=U()({name:"VNavigationDrawer",props:Zt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,n){let{attrs:a,emit:d,slots:t}=n;const{isRtl:l}=he(),{themeClasses:o}=ge(e),{borderClasses:i}=Pe(e),{backgroundColorClasses:y,backgroundColorStyles:p}=me(_(e,"color")),{elevationClasses:g}=Le(e),{displayClasses:b,mobile:A}=et(e),{roundedClasses:S}=He(e),m=dt(),V=Ee(e,"modelValue",null,k=>!!k),{ssrBootStyles:x}=we(),{scopeId:T}=yt(),w=ne(),I=M(!1),{runOpenDelay:D,runCloseDelay:E}=At(e,k=>{I.value=k}),s=c(()=>e.rail&&e.expandOnHover&&I.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),v=c(()=>mt(e.location,l.value)),u=c(()=>e.persistent),f=c(()=>!e.permanent&&(A.value||e.temporary)),h=c(()=>e.sticky&&!f.value&&v.value!=="bottom");G(()=>e.expandOnHover&&e.rail!=null,()=>{z(I,k=>d("update:rail",!k))}),G(()=>!e.disableResizeWatcher,()=>{z(f,k=>!e.permanent&&tt(()=>V.value=!k))}),G(()=>!e.disableRouteWatcher&&!!m,()=>{z(m.currentRoute,()=>f.value&&(V.value=!1))}),z(()=>e.permanent,k=>{k&&(V.value=!0)}),e.modelValue==null&&!f.value&&(V.value=e.permanent||!A.value);const{isDragging:B,dragProgress:C}=qt({el:w,isActive:V,isTemporary:f,width:s,touchless:_(e,"touchless"),position:v}),R=c(()=>{const k=f.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):s.value;return B.value?k*C.value:k}),{layoutItemStyles:N,layoutItemScrimStyles:ue}=Ue({id:e.name,order:c(()=>parseInt(e.order,10)),position:v,layoutSize:R,elementSize:s,active:c(()=>V.value||B.value),disableTransitions:c(()=>B.value),absolute:c(()=>e.absolute||h.value&&typeof re.value!="string")}),{isStuck:re,stickyStyles:ee}=Qt({rootEl:w,isSticky:h,layoutItemStyles:N}),q=me(c(()=>typeof e.scrim=="string"?e.scrim:null)),J=c(()=>({...B.value?{opacity:C.value*.2,transition:"none"}:void 0,...ue.value}));return De({VList:{bgColor:"transparent"}}),j(()=>{const k=t.image||e.image;return r(lt,null,[r(e.tag,Q({ref:w,onMouseenter:D,onMouseleave:E,class:["v-navigation-drawer",`v-navigation-drawer--${v.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":I.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":f.value,"v-navigation-drawer--persistent":u.value,"v-navigation-drawer--active":V.value,"v-navigation-drawer--sticky":h.value},o.value,y.value,i.value,b.value,g.value,S.value,e.class],style:[p.value,N.value,x.value,ee.value,e.style]},T,a),{default:()=>{var te,F,Y;return[k&&r("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?r(ae,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):r(Ae,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&r("div",{class:"v-navigation-drawer__prepend"},[(te=t.prepend)==null?void 0:te.call(t)]),r("div",{class:"v-navigation-drawer__content"},[(F=t.default)==null?void 0:F.call(t)]),t.append&&r("div",{class:"v-navigation-drawer__append"},[(Y=t.append)==null?void 0:Y.call(t)])]}}),r(at,{name:"fade-transition"},{default:()=>[f.value&&(B.value||V.value)&&!!e.scrim&&r("div",Q({class:["v-navigation-drawer__scrim",q.backgroundColorClasses.value],style:[J.value,q.backgroundColorStyles.value],onClick:()=>{u.value||(V.value=!1)}},T),null)]})])}),{isStuck:re}}}),Gt={data:()=>({tab:null,drawer:!0,rail:!1,value:0,windowWidth:"",railWidth:"1",open:["Users"],opened:["案件管理"],overlay:!1,isSmallScreen:window.innerWidth<768}),components:{pageView:kt},methods:{handleResize(){this.windowWidth=window.innerWidth,this.isSmallScreen=window.innerWidth<991},menuTarget(e){this.opened=e.slice(-1)},pushLink(e){this.$router.push({path:e})}},mounted(){this.windowWidth=window.innerWidth,this.handleResize(),window.addEventListener("resize",this.handleResize)}},_t={class:"logoImg d-flex align-center"},$t={class:"userInfo"};function ea(e,n,a,d,t,l){const o=Me("pageView");return Te(),Ce(Tt,null,{default:L(()=>[r(ft,{class:"header"},{default:L(()=>[r(Ot,null,{default:L(()=>[r(Nt,{icon:"mdi-menu",class:"rounded-0 h-100 ml-0 menuBtn bg-darkprimary",onClick:n[0]||(n[0]=ot(i=>e.rail=!e.rail,["stop"]))}),W("div",_t,[r(Ae,{class:"logo",src:st,alt:""}),n[8]||(n[8]=W("span",{class:"text"},"後台管理系統",-1))])]),_:1})]),_:1}),r(Xt,{modelValue:e.drawer,"onUpdate:modelValue":n[6]||(n[6]=i=>e.drawer=i),class:it(["navDrawer",{hidden:e.rail}]),rail:e.rail,permanent:"","rail-width":e.railWidth,width:240,onClick:n[7]||(n[7]=i=>e.rail=!1)},{default:L(()=>[r(bt,{density:"compact",nav:"",class:"text-navText",opened:e.opened,"onUpdate:opened":l.menuTarget},{default:L(()=>[r(de,{value:"Home1"},{activator:L(({props:i})=>[r(X,Q({"prepend-icon":"mdi-application-edit-outline"},i,{"append-icon":"",title:"活動管理",onClick:n[1]||(n[1]=y=>l.pushLink("/"))}),null,16)]),_:1}),r(de,{value:"Home2"},{activator:L(({props:i})=>[r(X,Q({"prepend-icon":"mdi-chart-bar"},i,{"append-icon":"",title:"統計報表",onClick:n[2]||(n[2]=y=>l.pushLink("/"))}),null,16)]),_:1}),r(de,{value:"Home3"},{activator:L(({props:i})=>[r(X,Q({"prepend-icon":"mdi-account-cog"},i,{title:"戶政系統查詢",onClick:n[3]||(n[3]=y=>l.pushLink("/"))}),null,16)]),default:L(()=>[r(X,{title:"網站管理1",value:"網站管理1",onClick:n[4]||(n[4]=i=>l.pushLink(""))}),r(X,{title:"網站管理2",value:"網站管理2",onClick:n[5]||(n[5]=i=>l.pushLink(""))})]),_:1})]),_:1},8,["opened","onUpdate:opened"]),W("div",$t,[r(gt,{image:Ct,size:"35"}),n[9]||(n[9]=W("ul",{class:""},[W("li",null,"Elle Wang"),W("li",null,"企劃處")],-1)),r(Fe,{variant:"text",size:"small",icon:"mdi-logout"})])]),_:1},8,["modelValue","class","rail","rail-width"]),r(Wt,null,{default:L(()=>[W("div",null,[r(o)])]),_:1})]),_:1})}const sa=ke(Gt,[["render",ea]]);export{sa as default};
