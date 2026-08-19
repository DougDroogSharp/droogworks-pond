import{c as s}from"./index-BTQZj1HT.js";import{b as h,g as p,d}from"./db-Di5Fbjz6.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=s("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=s("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=s("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=s("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=s("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=s("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=s("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=s("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=s("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=s("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]),l=()=>"showSaveFilePicker"in window&&"showOpenFilePicker"in window,u=async(e,r)=>{if(l())try{const n=await(await window.showSaveFilePicker({suggestedName:r.suggestedName,types:r.types,startIn:"documents"})).createWritable();return await n.write(e),await n.close(),!0}catch(o){if(o.name==="AbortError")return!1;o.name==="SecurityError"?console.warn("File System Access API blocked, using fallback"):console.error("File save error:",o)}const t=new Blob([e],{type:"application/json"}),a=document.createElement("a");return a.href=URL.createObjectURL(t),a.download=r.suggestedName||"file.json",document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(a.href),!0},w=async e=>{if(l())try{const[r]=await window.showOpenFilePicker({types:e.types,multiple:!1}),t=await r.getFile();return{content:await t.text(),name:t.name}}catch(r){if(r.name==="AbortError")return null;console.error("File open error:",r)}return new Promise(r=>{var a;const t=document.createElement("input");t.type="file",t.accept=((a=e.types)==null?void 0:a.flatMap(o=>Object.values(o.accept).flat()).join(","))||"*",t.onchange=async()=>{var i;const o=(i=t.files)==null?void 0:i[0];if(!o){r(null);return}const n=await o.text();r({content:n,name:o.name})},t.oncancel=()=>r(null),t.click()})},M={types:[{description:"Dramaton Game Files",accept:{"application/json":[".dram",".json"]}}]},y={types:[{description:"Dramaton Library Files",accept:{"application/json":[".dramlib",".json"]}}]},m="dramaton_library_v1",_=async e=>{try{return await h(m,e),!0}catch(r){return console.error("Failed to save library to IndexedDB",r),!1}},T=async()=>{try{return await p(m)||d()}catch(e){return console.error("Failed to load library from IndexedDB",e),d()}},$=async e=>{const r=JSON.stringify(e,null,2),t=`dramaton_library_${new Date().toISOString().slice(0,10)}.dramlib`;return u(r,{...y,suggestedName:t})},j=async()=>{const e=await w(y);if(!e)return null;try{const r=JSON.parse(e.content);if(!r.version||!Array.isArray(r.actors))throw new Error("Invalid library format");return r}catch{throw new Error("Failed to parse library file")}},P=(e,r,t,a)=>{const o={...r,libraryId:`lib_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,addedAt:Date.now(),source:t,tags:a};return{...e,actors:[...e.actors,o]}},E=(e,r,t,a)=>{const o={...r,libraryId:`lib_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,addedAt:Date.now(),source:t,tags:a};return{...e,scenes:[...e.scenes,o]}},O=(e,r,t,a)=>{const o={...r,libraryId:`lib_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,addedAt:Date.now(),source:t,tags:a};return{...e,drops:[...e.drops,o]}},R=(e,r,t,a)=>{const o={...r,libraryId:`lib_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,addedAt:Date.now(),source:t,tags:a};return{...e,items:[...e.items,o]}},N=(e,r,t,a)=>{const o={...r,libraryId:`lib_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,addedAt:Date.now(),source:t,tags:a};return{...e,sfx:[...e.sfx,o]}},C=(e,r,t,a)=>{const o={...r,libraryId:`lib_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,addedAt:Date.now(),source:t,tags:a};return{...e,episodes:[...e.episodes??[],o]}},V=(e,r)=>({...e,actors:e.actors.filter(t=>t.libraryId!==r)}),q=(e,r)=>({...e,scenes:e.scenes.filter(t=>t.libraryId!==r)}),B=(e,r)=>({...e,drops:e.drops.filter(t=>t.libraryId!==r)}),U=(e,r)=>({...e,items:e.items.filter(t=>t.libraryId!==r)}),G=(e,r)=>({...e,sfx:e.sfx.filter(t=>t.libraryId!==r)}),c=e=>`${e}_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,W=(e,r)=>{const t={...r,id:c("actor"),graphics:r.graphics.map(a=>({...a,id:c("graphic")}))};return delete t.libraryId,delete t.addedAt,delete t.source,delete t.tags,{...e,actors:[...e.actors,t]}},Y=(e,r)=>{var a,o;const t={...r,id:c("scene"),stage:(a=r.stage)==null?void 0:a.map(n=>({...n,id:c("stage")})),audioTracks:(o=r.audioTracks)==null?void 0:o.map(n=>({...n,id:c("audio")}))};return delete t.libraryId,delete t.addedAt,delete t.source,delete t.tags,{...e,scenes:[...e.scenes,t]}},H=(e,r)=>{const t={...r,id:c("drop")};return delete t.libraryId,delete t.addedAt,delete t.source,delete t.tags,{...e,drops:[...e.drops,t]}},J=(e,r)=>{const t={...r,id:c("item")};return delete t.libraryId,delete t.addedAt,delete t.source,delete t.tags,{...e,items:[...e.items,t]}},K=(e,r)=>{const t={...r,id:c("sfx")};return delete t.libraryId,delete t.addedAt,delete t.source,delete t.tags,{...e,sfx:[...e.sfx,t]}},z=e=>{var r;return e.actors.length+e.scenes.length+e.drops.length+e.items.length+e.sfx.length+(((r=e.episodes)==null?void 0:r.length)??0)};export{g as A,k as C,M as D,I as M,v as P,D as S,S as T,A as U,F as V,x as a,P as b,E as c,O as d,R as e,L as f,N as g,C as h,u as i,z as j,K as k,T as l,J as m,H as n,w as o,Y as p,W as q,G as r,_ as s,U as t,B as u,q as v,V as w,$ as x,j as y};
