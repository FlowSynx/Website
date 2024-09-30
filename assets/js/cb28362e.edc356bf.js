"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[1402],{1770:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=t(4848),r=t(8453),s=t(1470),a=t(9365);const l={sidebar_position:4},o="Delete",c={id:"plugins-specifications/api-endpoints/config/delete",title:"Delete",description:"Delete configuration section.",source:"@site/docs/plugins-specifications/api-endpoints/config/delete.mdx",sourceDirName:"plugins-specifications/api-endpoints/config",slug:"/plugins-specifications/api-endpoints/config/delete",permalink:"/docs/plugins-specifications/api-endpoints/config/delete",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docSidebar",previous:{title:"Details",permalink:"/docs/plugins-specifications/api-endpoints/config/details"},next:{title:"Health",permalink:"/docs/plugins-specifications/api-endpoints/health"}},d={},u=[{value:"Delete Config Api options",id:"delete-config-api-options",level:2},{value:"Calling Delete Config Api",id:"calling-delete-config-api",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components},{IIcon:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IIcon",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"delete",children:"Delete"}),"\n",(0,i.jsx)(n.p,{children:"Delete configuration section."}),"\n",(0,i.jsx)(n.h2,{id:"delete-config-api-options",children:"Delete Config Api options"}),"\n",(0,i.jsx)(n.p,{children:"The options available in this api are described below:"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Option name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Default Value"}),(0,i.jsx)("th",{children:"Required"}),(0,i.jsx)("th",{children:"Description"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.strong,{children:"name"})}),(0,i.jsx)("td",{class:"centering",children:"string"}),(0,i.jsx)("td",{}),(0,i.jsx)("td",{class:"centering greenIcon",children:(0,i.jsx)(t,{icon:"mdi:check",height:"32"})}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:"The unique configuration section name. This value is string type and is required."})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"calling-delete-config-api",children:"Calling Delete Config Api"}),"\n",(0,i.jsx)(n.p,{children:"For calling this api, the following details are required to apply:"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The options and parameters introduced in the previous section must be included as json data in the request body part."})}),"\n",(0,i.jsxs)("table",{class:"table",children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"URL"}),(0,i.jsx)("th",{children:"Method"}),(0,i.jsx)("th",{children:"ContentType"}),(0,i.jsx)("th",{children:"Body"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(n.a,{href:"http://localhost:5860/config/delete",children:"http://localhost:5860/config/delete"})}),(0,i.jsx)("td",{class:"centering",children:"DELETE"}),(0,i.jsx)("td",{class:"centering",children:"application/json"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "azfile"\n}\n'})})})]})]}),"\n",(0,i.jsx)(n.p,{children:"Now, if we want to have these details in the form of an http api call, open a new terminal and enter the following command:"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"First of all make sure flowsynx is running."})}),"\n","\n","\n",(0,i.jsxs)(s.A,{groupId:"httpApi",children:[(0,i.jsx)(a.A,{value:"bashHttpApi",label:"HTTP API (Bash)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'curl -X DELETE -H "Content-Type: application/json" -d \'{ "name": "azfile" }\' http://localhost:5860/config/delete\n'})})}),(0,i.jsx)(a.A,{value:"powershellHttpApi",label:"HTTP API (PowerShell)",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Invoke-RestMethod -Method Delete -ContentType 'application/json' -Body '{ \"name\": \"azfile\" }' -Uri 'http://localhost:5860/config/delete'\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Also you can use ",(0,i.jsx)(n.code,{children:"Http Api test clients"})," to test this api. Anyway, after executing this api, a result like below will be obtained."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "data": null,\n  "messages": [\n    "The given config name is deleted."\n  ],\n  "succeeded": true\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The answer is divided into three ",(0,i.jsx)(n.code,{children:"data"}),", ",(0,i.jsx)(n.code,{children:"messages"}),", and ",(0,i.jsx)(n.code,{children:"succeeded"})," parts.\n",(0,i.jsx)(n.code,{children:"succeeded"})," indicates the status of the execution of this api which is boolean value and can be true or false.\n",(0,i.jsx)(n.code,{children:"messages"})," also indicates the list of possible messages that are returned with the response.\n",(0,i.jsx)(n.code,{children:"data"})," contains the data to be returned."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var i=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(6540),r=t(4164),s=t(3104),a=t(6347),l=t(205),o=t(7485),c=t(1682),d=t(9466);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[a,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,u]=f({queryString:t,groupId:r}),[g,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(4848);function j(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==i&&(c(n),a(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,m.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,m.jsx)(j,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function w(e){const n=(0,x.A)();return(0,m.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(6540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);