"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[7157],{9899:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=n(4848),r=n(8453),i=n(1470),l=n(9365);const o={sidebar_position:7},a="Move",c={id:"flowctl/api-endpoints/storage/move",title:"Move",description:"This api will move entities from source storage to the destination.",source:"@site/docs/flowctl/api-endpoints/storage/move.mdx",sourceDirName:"flowctl/api-endpoints/storage",slug:"/flowctl/api-endpoints/storage/move",permalink:"/docs/flowctl/api-endpoints/storage/move",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docSidebar",previous:{title:"Mkdir",permalink:"/docs/flowctl/api-endpoints/storage/mkdir"},next:{title:"Version",permalink:"/docs/flowctl/api-endpoints/version"}},d={},h=[{value:"Move Api options",id:"move-api-options",level:2},{value:"Calling Move Api",id:"calling-move-api",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{IIcon:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IIcon",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"move",children:"Move"}),"\n",(0,s.jsx)(t.p,{children:"This api will move entities from source storage to the destination."}),"\n",(0,s.jsx)(t.h2,{id:"move-api-options",children:"Move Api options"}),"\n",(0,s.jsx)(t.p,{children:"The options available in this api are described below:"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Option name"}),(0,s.jsx)("th",{children:"Type"}),(0,s.jsx)("th",{children:"Default Value"}),(0,s.jsx)("th",{children:"Required"}),(0,s.jsx)("th",{children:"Description"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"SourcePath"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{class:"centering greenIcon",children:(0,s.jsx)(n,{icon:"mdi:check",height:"32"})}),(0,s.jsx)("td",{children:"The storage path from which the entities are to be moved"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"DestinationPath"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{class:"centering greenIcon",children:(0,s.jsx)(n,{icon:"mdi:check",height:"32"})}),(0,s.jsx)("td",{children:"The storage path to which the entities are to be moved"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"Include"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Include entities matching pattern"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"Exclude"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Exclude entities matching pattern"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"MinAge"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:["Filter entities older than this in ",(0,s.jsx)(t.strong,{children:"second"})," or suffix",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"ms"})," | ",(0,s.jsx)(t.strong,{children:"s"})," | ",(0,s.jsx)(t.strong,{children:"m"})," | ",(0,s.jsx)(t.strong,{children:"h"})," | ",(0,s.jsx)(t.strong,{children:"d"})," | ",(0,s.jsx)(t.strong,{children:"w"})," | ",(0,s.jsx)(t.strong,{children:"M"})," | ",(0,s.jsx)(t.strong,{children:"y"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"MaxAge"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:["Filter entities younger than this in ",(0,s.jsx)(t.strong,{children:"second"})," or suffix",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"ms"})," | ",(0,s.jsx)(t.strong,{children:"s"})," | ",(0,s.jsx)(t.strong,{children:"m"})," | ",(0,s.jsx)(t.strong,{children:"h"})," | ",(0,s.jsx)(t.strong,{children:"d"})," | ",(0,s.jsx)(t.strong,{children:"w"})," | ",(0,s.jsx)(t.strong,{children:"M"})," | ",(0,s.jsx)(t.strong,{children:"y"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"MinSize"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:["Filter entities bigger than this in ",(0,s.jsx)(t.strong,{children:"KiB"})," or suffix",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"B"})," | ",(0,s.jsx)(t.strong,{children:"K"})," | ",(0,s.jsx)(t.strong,{children:"M"})," | ",(0,s.jsx)(t.strong,{children:"G"})," | ",(0,s.jsx)(t.strong,{children:"T"})," | ",(0,s.jsx)(t.strong,{children:"P"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"MaxSize"})}),(0,s.jsx)("td",{class:"centering",children:"string"}),(0,s.jsx)("td",{class:"centering"}),(0,s.jsx)("td",{}),(0,s.jsxs)("td",{children:["Filter entities smaller than this in KiB or suffix",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"B"})," | ",(0,s.jsx)(t.strong,{children:"K"})," | ",(0,s.jsx)(t.strong,{children:"M"})," | ",(0,s.jsx)(t.strong,{children:"G"})," | ",(0,s.jsx)(t.strong,{children:"T"})," | ",(0,s.jsx)(t.strong,{children:"P"})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"CaseSensitive"})}),(0,s.jsx)("td",{class:"centering",children:"bool"}),(0,s.jsx)("td",{class:"centering",children:"false"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Ignore or apply case sensitive in filters"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"Recurse"})}),(0,s.jsx)("td",{class:"centering",children:"bool"}),(0,s.jsx)("td",{class:"centering",children:"false"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Apply recursion on filtering entities in the specified path"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"ClearDestinationPath"})}),(0,s.jsx)("td",{class:"centering",children:"bool"}),(0,s.jsx)("td",{class:"centering",children:"false"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Clearing all entities and other things in the destination path before starting the move operation"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.strong,{children:"CreateEmptyDirectories"})}),(0,s.jsx)("td",{class:"centering",children:"bool"}),(0,s.jsx)("td",{class:"centering",children:"true"}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:"Create empty source directories on destination after move"})]})]}),"\n",(0,s.jsx)(t.h2,{id:"calling-move-api",children:"Calling Move Api"}),"\n",(0,s.jsx)(t.p,{children:"For calling this api, the following details are required to apply:"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"The options and parameters introduced in the previous section must be included as json data in the request body part."})}),"\n",(0,s.jsxs)("table",{class:"table",children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"URL"}),(0,s.jsx)("th",{children:"Method"}),(0,s.jsx)("th",{children:"ContentType"}),(0,s.jsx)("th",{children:"Body"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(t.a,{href:"http://localhost:5860/storage/move",children:"http://localhost:5860/storage/move"})}),(0,s.jsx)("td",{class:"centering",children:"POST"}),(0,s.jsx)("td",{class:"centering",children:"application/json"}),(0,s.jsx)("td",{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "sourcePath": <STRING VALUE>,\n  "destinationPath": <STRING VALUE>,\n  "include": <STRING VALUE>,\n  "exclude": <STRING VALUE>,\n  "minAge": <STRING VALUE>,\n  "maxAge": <STRING VALUE>,\n  "minSize": <STRING VALUE>,\n  "maxSize": <STRING VALUE>,\n  "caseSensitive": <BOOLEAN VALUE>,\n  "recurse": <BOOLEAN VALUE>,\n  "clearDestinationPath": <BOOLEAN VALUE>,\n  "createEmptyDirectories": <BOOLEAN VALUE>\n}\n'})})})]})]}),"\n",(0,s.jsx)(t.p,{children:"Now, if we want to have these details in the form of an http api call, open a new terminal and enter the following command:"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"First of all make sure flowsynx is running."})}),"\n","\n","\n",(0,s.jsxs)(i.A,{groupId:"httpApi",children:[(0,s.jsx)(l.A,{value:"bashHttpApi",label:"HTTP API (Bash)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'curl -X POST -H "Content-Type: application/json" -d \'{ "sourcePath": "/sourcePath/", "destinationPath": "/destinationPath", "include": "", "exclude": "", "minAge": "", "maxAge": "", "minSize": "", "maxSize": "", "caseSensitive": false, "recurse": true, "clearDestinationPath": false, "createEmptyDirectories": true }\' http://localhost:5860/storage/move\n'})})}),(0,s.jsx)(l.A,{value:"powershellHttpApi",label:"HTTP API (PowerShell)",children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'Invoke-RestMethod -Method Post -ContentType \'application/json\' -Body \'{ "sourcePath": "C:/sourcePath/", "destinationPath": "C:/destinationPath", "include": "", "exclude": "", "minAge": "", "maxAge": "", "minSize": "", "maxSize": "", "caseSensitive": false, "recurse": true, "clearDestinationPath": false, "createEmptyDirectories": true }\' -Uri \'http://localhost:5860/storage/move\'\n'})})})]}),"\n",(0,s.jsxs)(t.p,{children:["Also you can use ",(0,s.jsx)(t.code,{children:"Http Api test clients"})," to test this api. Anyway, after executing this api, a result like below will be obtained."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n  "data": null,\n  "messages": [\n    "The move was done successfully."\n  ],\n  "succeeded": true\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The answer is divided into three ",(0,s.jsx)(t.code,{children:"data"}),", ",(0,s.jsx)(t.code,{children:"messages"}),", and ",(0,s.jsx)(t.code,{children:"succeeded"})," parts.\n",(0,s.jsx)(t.code,{children:"succeeded"})," indicates the status of the execution of this api which is boolean value and can be true or false.\n",(0,s.jsx)(t.code,{children:"messages"})," also indicates the list of possible messages that are returned with the response.\n",(0,s.jsx)(t.code,{children:"data"})," contains the data to be returned."]})]})}function x(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var s=n(4164);const r={tabItem:"tabItem_Ymn6"};var i=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>y});var s=n(6540),r=n(4164),i=n(3104),l=n(6347),o=n(205),a=n(7485),c=n(1682),d=n(9466);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:r}}=e;return{value:t,label:n,attributes:s,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function x(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(i),(0,s.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=u(e),[l,a]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:i}))),[c,h]=j({queryString:n,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Dv)(n);return[r,(0,s.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),m=(()=>{const e=c??p;return x({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{m&&a(m)}),[m]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=n(2303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function b(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:o}=e;const a=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=a.indexOf(t),r=o[n].value;r!==s&&(c(t),l(r))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=a.indexOf(e.currentTarget)+1;t=a[n]??a[0];break}case"ArrowLeft":{const n=a.indexOf(e.currentTarget)-1;t=a[n]??a[a.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>a.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.A)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=p(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",m.tabList),children:[(0,f.jsx)(b,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function y(e){const t=(0,g.A)();return(0,f.jsx)(w,{...e,children:h(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var s=n(6540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);