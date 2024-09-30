"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[3087],{137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(4848),s=n(8453),i=n(1470),a=n(9365);const o={sidebar_position:6},l="Mkdir",c={id:"plugins-specifications/api-endpoints/storage/mkdir",title:"Mkdir",description:"This api will make the directory on specific storage path.",source:"@site/docs/plugins-specifications/api-endpoints/storage/mkdir.mdx",sourceDirName:"plugins-specifications/api-endpoints/storage",slug:"/plugins-specifications/api-endpoints/storage/mkdir",permalink:"/docs/plugins-specifications/api-endpoints/storage/mkdir",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docSidebar",previous:{title:"List",permalink:"/docs/plugins-specifications/api-endpoints/storage/list"},next:{title:"Move",permalink:"/docs/plugins-specifications/api-endpoints/storage/move"}},d={},u=[{value:"Mkdir Api options",id:"mkdir-api-options",level:2},{value:"Calling Mkdir Api",id:"calling-mkdir-api",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components},{IIcon:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IIcon",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"mkdir",children:"Mkdir"}),"\n",(0,r.jsx)(t.p,{children:"This api will make the directory on specific storage path."}),"\n",(0,r.jsx)(t.h2,{id:"mkdir-api-options",children:"Mkdir Api options"}),"\n",(0,r.jsx)(t.p,{children:"The options available in this api are described below:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Option name"}),(0,r.jsx)("th",{children:"Type"}),(0,r.jsx)("th",{children:"Default Value"}),(0,r.jsx)("th",{children:"Required"}),(0,r.jsx)("th",{children:"Description"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.strong,{children:"Path"})}),(0,r.jsx)("td",{class:"centering",children:"string"}),(0,r.jsx)("td",{class:"centering"}),(0,r.jsx)("td",{class:"centering greenIcon",children:(0,r.jsx)(n,{icon:"mdi:check",height:"32"})}),(0,r.jsx)("td",{children:"The storage path to create the directory on"})]})]}),"\n",(0,r.jsx)(t.h2,{id:"calling-mkdir-api",children:"Calling Mkdir Api"}),"\n",(0,r.jsx)(t.p,{children:"For calling this api, the following details are required to apply:"}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"The options and parameters introduced in the previous section must be included as json data in the request body part."})}),"\n",(0,r.jsxs)("table",{class:"table",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"URL"}),(0,r.jsx)("th",{children:"Method"}),(0,r.jsx)("th",{children:"ContentType"}),(0,r.jsx)("th",{children:"Body"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.a,{href:"http://localhost:5860/storage/mkdir",children:"http://localhost:5860/storage/mkdir"})}),(0,r.jsx)("td",{class:"centering",children:"POST"}),(0,r.jsx)("td",{class:"centering",children:"application/json"}),(0,r.jsx)("td",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "path": <STRING VALUE>\n}\n'})})})]})]}),"\n",(0,r.jsx)(t.p,{children:"Now, if we want to have these details in the form of an http api call, open a new terminal and enter the following command:"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"First of all make sure flowsynx is running."})}),"\n","\n","\n",(0,r.jsxs)(i.A,{groupId:"httpApi",children:[(0,r.jsx)(a.A,{value:"bashHttpApi",label:"HTTP API (Bash)",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'curl -X POST -H "Content-Type: application/json" -d \'{ "path": "/test/" }\' http://localhost:5860/storage/mkdir\n'})})}),(0,r.jsx)(a.A,{value:"powershellHttpApi",label:"HTTP API (PowerShell)",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Invoke-RestMethod -Method Post -ContentType 'application/json' -Body '{ \"path\": \"C:/test\" }' -Uri 'http://localhost:5860/storage/mkdir'\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["Also you can use ",(0,r.jsx)(t.code,{children:"Http Api test clients"})," to test this api. Anyway, after executing this api, a result like below will be obtained."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'{\n  "data": null,\n  "messages": [\n    "The directory was created successfully."\n  ],\n  "succeeded": true\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["The answer is divided into three ",(0,r.jsx)(t.code,{children:"data"}),", ",(0,r.jsx)(t.code,{children:"messages"}),", and ",(0,r.jsx)(t.code,{children:"succeeded"})," parts.\n",(0,r.jsx)(t.code,{children:"succeeded"})," indicates the status of the execution of this api which is boolean value and can be true or false.\n",(0,r.jsx)(t.code,{children:"messages"})," also indicates the list of possible messages that are returned with the response.\n",(0,r.jsx)(t.code,{children:"data"})," contains the data to be returned."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>a});n(6540);var r=n(4164);const s={tabItem:"tabItem_Ymn6"};var i=n(4848);function a(e){let{children:t,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>k});var r=n(6540),s=n(4164),i=n(3104),a=n(6347),o=n(205),l=n(7485),c=n(1682),d=n(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[c,u]=f({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,d.Dv)(n);return[s,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),x=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=n(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function j(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),a(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function k(e){const t=(0,b.A)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);