"use strict";(self.webpackChunkwebflow_openblocks=self.webpackChunkwebflow_openblocks||[]).push([[647],{647:(e,o,l)=>{l.r(o),l.d(o,{TimeMobileUIView:()=>f,TimeRangeMobileUIView:()=>m});var n=l(895),t=l(854);l(596),l(294),l(935),n.c&&document.addEventListener("touchstart",(()=>{}),!0);const r=(e=1)=>[...t.o.exports.range(0,24,e).map((e=>{const o=(e<10?"0":"")+e;return{label:o,value:o}}))],a=(e=1)=>[...t.o.exports.range(0,12,e).map((e=>{const o=(e<10?"0":"")+e;return{label:o,value:o}}))],s=(e=1)=>t.o.exports.range(0,60,e).map((e=>{const o=(e<10?"0":"")+e;return{label:o,value:o}})),i=[{label:"AM",value:"am"},{label:"PM",value:"pm"}],u=e=>{const{disabledHours:o,disabledMinutes:l,disabledSeconds:u}=e.disabledTime();n.P.prompt({getContainer:()=>document.querySelector(`#${t.C}`)||document.body,mouseWheel:!0,destroyOnClose:!0,closeOnMaskClick:!0,columns:n=>{const d=(0,t.h)(n.join(":"),t.m);return[(e.use12Hours?a:r)(e.hourStep).filter((({label:e,value:l})=>!o().includes(Number(l)+("pm"===n[3]?12:0)))),s(e.minuteStep).filter((({label:e,value:o})=>!l(d.hour()).includes(Number(o)))),s(e.secondStep).filter((({label:e,value:o})=>!u(d.hour(),d.minute()).includes(Number(o)))),...e.use12Hours?[i]:[]]},defaultValue:e.value?e.value.format(e.use12Hours?t.n:t.T).split(":"):void 0,onConfirm:o=>{const l=(0,t.h)(o.join(":"),t.m);e.onChange(l)},onClose:e.onBlur}),e.onFocus()},d=t.s.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  background-color: #ffffff;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #d7d9e0;

  ${e=>e.$style&&(0,t.e)(e.$style)}
`,c=t.s.div`
  overflow: hidden;
  white-space: nowrap;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`,f=e=>(0,t.a)(d,{ref:e.viewRef,$style:e.$style,onClick:()=>{u(e)},children:[(0,t.j)(c,{children:e.value?e.value.format(e.format||t.T):(0,t.t)("time.placeholder")}),e.suffixIcon]}),m=e=>(0,t.a)(d,{ref:e.viewRef,$style:e.$style,children:[(0,t.j)(c,{onClick:()=>u({...e,value:e.start,onChange:o=>e.onChange(o,e.end)}),children:e.start?e.start.format(e.format||t.T):(0,t.t)("time.startTime")}),(0,t.j)(t.S,{}),(0,t.j)(c,{onClick:()=>u({...e,value:e.end,onChange:o=>e.onChange(e.start,o)}),children:e.end?e.end.format(e.format||t.T):(0,t.t)("time.endTime")}),e.suffixIcon]})}}]);