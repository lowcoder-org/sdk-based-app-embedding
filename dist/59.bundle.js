"use strict";(self.webpackChunklowcoder_sdk_embedding=self.webpackChunklowcoder_sdk_embedding||[]).push([[59],{59:(e,n,l)=>{l.r(n),l.d(n,{TimeMobileUIView:()=>m,TimeRangeMobileUIView:()=>f});var t=l(742),o=l(889);l(439),l(294),l(935);t.c&&document.addEventListener("touchstart",(()=>{}),!0);const r=(e=1)=>[...o.n.range(0,24,e).map((e=>{const n=(e<10?"0":"")+e;return{label:n,value:n}}))],a=(e=1)=>[...o.n.range(0,12,e).map((e=>{const n=(e<10?"0":"")+e;return{label:n,value:n}}))],s=(e=1)=>o.n.range(0,60,e).map((e=>{const n=(e<10?"0":"")+e;return{label:n,value:n}})),i=[{label:"AM",value:"am"},{label:"PM",value:"pm"}],u=e=>{const{disabledHours:n,disabledMinutes:l,disabledSeconds:u}=e.disabledTime();t.P.prompt({getContainer:()=>document.querySelector(`#${o.C}`)||document.body,mouseWheel:!0,destroyOnClose:!0,closeOnMaskClick:!0,columns:t=>{const d=(0,o.h)(t.join(":"),o.l);return[(e.use12Hours?a:r)(e.hourStep).filter((({label:e,value:l})=>!n().includes(Number(l)+("pm"===t[3]?12:0)))),s(e.minuteStep).filter((({label:e,value:n})=>!l(d.hour()).includes(Number(n)))),s(e.secondStep).filter((({label:e,value:n})=>!u(d.hour(),d.minute()).includes(Number(n)))),...e.use12Hours?[i]:[]]},defaultValue:e.value?e.value.format(e.use12Hours?o.m:o.T).split(":"):void 0,onConfirm:n=>{const l=(0,o.h)(n.join(":"),o.l);e.onChange(l)},onClose:e.onBlur}),e.onFocus()},d=o.s.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #d7d9e0;

  ${e=>e.$style&&(0,o.e)(e.$style)}
`,c=o.s.div`
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`,m=e=>(0,o.a)(d,{ref:e.viewRef,$style:e.$style,onClick:()=>{u(e)},children:[(0,o.j)(c,{children:e.value?e.value.format(e.format||o.T):(0,o.t)("time.placeholder")}),e.suffixIcon]}),f=e=>(0,o.a)(d,{ref:e.viewRef,$style:e.$style,children:[(0,o.j)(c,{onClick:()=>u({...e,value:e.start,onChange:n=>e.onChange(n,e.end)}),children:e.start?e.start.format(e.format||o.T):(0,o.t)("time.startTime")}),(0,o.j)(o.S,{}),(0,o.j)(c,{onClick:()=>u({...e,value:e.end,onChange:n=>e.onChange(e.start,n)}),children:e.end?e.end.format(e.format||o.T):(0,o.t)("time.endTime")}),e.suffixIcon]})}}]);