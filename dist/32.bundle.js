"use strict";(self.webpackChunklowcoder_sdk_embedding=self.webpackChunklowcoder_sdk_embedding||[]).push([[32,919],{919:(e,n,t)=>{t.r(n),t.d(n,{TabBar:()=>f,TabBarItem:()=>l});var r=t(294),o=t(889),c=t(439);t(935);const a="adm-badge",i=(0,o.j)(o.F,{}),s=(0,c.a)((e=>{const{content:n,color:t,children:r}=e,s=n===i,l=(0,o.c)(a,!!r&&`${a}-fixed`,s&&`${a}-dot`,e.bordered&&`${a}-bordered`),u=n||0===n?(0,c.w)(e,(0,o.j)("div",{className:l,style:{"--color":t},children:!s&&(0,o.j)("div",{className:`${a}-content`,children:n})})):null;return r?(0,o.a)("div",{className:(0,o.c)(`${a}-wrapper`,e.wrapperClassName),style:e.wrapperStyle,children:[r,u]}):u}),{dot:i});const l=()=>null,u="adm-tab-bar",d={safeArea:!1},f=e=>{var n;const t=(0,c.m)(d,e);let a=null;const i=[];!function(e,n){let t=0;!function e(c){r.Children.forEach(c,(r=>{o.r.isFragment(r)?e(r.props.children):(n(r,t),t+=1)}))}(e)}(t.children,((e,n)=>{if(!r.isValidElement(e))return;const t=e.key;"string"==typeof t&&(0===n&&(a=t),i.push(e))}));const[l,f]=(0,c.u)({value:t.activeKey,defaultValue:null!==(n=t.defaultActiveKey)&&void 0!==n?n:a,onChange:e=>{var n;null!==e&&(null===(n=t.onChange)||void 0===n||n.call(t,e))}});return(0,c.w)(t,(0,o.a)("div",{className:u,children:[(0,o.j)("div",{className:`${u}-wrap`,children:i.map((e=>{const n=e.key===l;return(0,c.w)(e.props,(0,o.j)("div",{onClick:()=>{const{key:n}=e;null!=n&&f(n.toString())},className:(0,o.c)(`${u}-item`,{[`${u}-item-active`]:n}),children:function(){const t=e.props.icon&&(0,o.j)("div",{className:`${u}-item-icon`,children:"function"==typeof e.props.icon?e.props.icon(n):e.props.icon}),r=e.props.title&&(0,o.j)("div",{className:(0,o.c)(`${u}-item-title`,!!t&&`${u}-item-title-with-icon`),children:"function"==typeof e.props.title?e.props.title(n):e.props.title});return t?(0,o.a)(o.F,{children:[(0,o.j)(s,{content:e.props.badge,className:`${u}-icon-badge`,children:t}),r]}):r?(0,o.j)(s,{content:e.props.badge,className:`${u}-title-badge`,children:r}):null}()},e.key))}))}),t.safeArea&&(0,o.j)(c.S,{position:"bottom"})]}))}},32:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var r=t(919),o=t(439);t(294),t(889),t(935);const c=(0,o.a)(r.TabBar,{Item:r.TabBarItem})},439:(e,n,t)=>{t.d(n,{S:()=>y,_:()=>i,a:()=>h,b:()=>w,c:()=>b,d:()=>a,e:()=>c,i:()=>g,m:()=>m,u:()=>j,w:()=>s});var r=t(889),o=t(294);function c(e,n,t,r){return new(t||(t=Promise))((function(o,c){function a(e){try{s(r.next(e))}catch(e){c(e)}}function i(e){try{s(r.throw(e))}catch(e){c(e)}}function s(e){e.done?o(e.value):function(e){return e instanceof t?e:new t((function(n){n(e)}))}(e.value).then(a,i)}s((r=r.apply(e,n||[])).next())}))}function a(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,c=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=c.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(t=c.return)&&t.call(c)}finally{if(o)throw o.error}}return a}function i(e,n,t){if(t||2===arguments.length)for(var r,o=0,c=n.length;o<c;o++)(r||!(o in n))&&(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function s(e,n){const t=Object.assign({},n.props);e.className&&(t.className=(0,r.c)(n.props.className,e.className)),e.style&&(t.style=Object.assign(Object.assign({},t.style),e.style)),void 0!==e.tabIndex&&(t.tabIndex=e.tabIndex);for(const n in e)e.hasOwnProperty(n)&&(n.startsWith("data-")||n.startsWith("aria-"))&&(t[n]=e[n]);return o.cloneElement(n,t)}var l=r.w,u=r.v,d=r.x,f=u((function(e,n,t,r){l(n,d(n),e,r)}));const p=(0,r.g)(f);function m(...e){function n(e,n){return void 0===n?e:n}let t=Object.assign({},e[0]);for(let r=1;r<e.length;r++)t=p(t,e[r],n);return t}function h(e,n){const t=e;for(const e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}const v="adm-safe-area",y=e=>s(e,(0,r.j)("div",{className:(0,r.c)(v,`${v}-position-${e.position}`)}));var b=function(e){return"function"==typeof e};const g=!1;function w(e){g&&(b(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var n=(0,o.useRef)(e);n.current=(0,o.useMemo)((function(){return e}),[e]);var t=(0,o.useRef)();return t.current||(t.current=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.current.apply(this,e)}),t.current}const N=function(){var e=a((0,o.useState)({}),2)[1];return(0,o.useCallback)((function(){return e({})}),[])};function j(e){const{value:n,defaultValue:t,onChange:r}=e,c=N(),a=(0,o.useRef)(void 0!==n?n:t);void 0!==n&&(a.current=n);const i=w(((e,n=!1)=>{const t="function"==typeof e?e(a.current):e;if(n||t!==a.current)return a.current=t,c(),null==r?void 0:r(t)}));return[a.current,i]}}}]);