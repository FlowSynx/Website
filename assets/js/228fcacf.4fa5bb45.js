"use strict";(self.webpackChunkflowsynx=self.webpackChunkflowsynx||[]).push([[9878],{4076:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(4848),a=t(8453),i=t(1470),l=t(9365);const s={sidebar_position:1},o="Service invocation API",c={id:"api/service-invocation-api",title:"Service invocation API",description:"In this guide, you\u2019ll simulate and access an application by running and calling the FlowSynx API directly.",source:"@site/docs/api/service-invocation-api.mdx",sourceDirName:"api",slug:"/api/service-invocation-api",permalink:"/docs/api/service-invocation-api",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docSidebar",previous:{title:"API",permalink:"/docs/category/api"},next:{title:"Configuration API",permalink:"/docs/api/configuration-api"}},u={},d=[{value:"Step 1: Open terminal",id:"step-1-open-terminal",level:2},{value:"Step 2: Run the FlowSynx",id:"step-2-run-the-flowsynx",level:2},{value:"Step 3: Calling API",id:"step-3-calling-api",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"service-invocation-api",children:"Service invocation API"}),"\n",(0,r.jsx)(n.p,{children:"In this guide, you\u2019ll simulate and access an application by running and calling the FlowSynx API directly."}),"\n",(0,r.jsx)(n.h2,{id:"step-1-open-terminal",children:"Step 1: Open terminal"}),"\n","\n","\n",(0,r.jsxs)(i.A,{groupId:"operating-systems",children:[(0,r.jsxs)(l.A,{value:"linuxMacOs",label:"Linux/MacOS",children:[(0,r.jsxs)(n.p,{children:["You will need to use ",(0,r.jsx)(n.code,{children:"sudo"})," for this quickstart if:"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The install path is ",(0,r.jsx)(n.code,{children:"/usr/local/bin"})," (default install path)."]}),"\n"]})]}),(0,r.jsxs)(l.A,{value:"windows",label:"Windows",children:[(0,r.jsx)(n.p,{children:"Run Windows Terminal or command prompt as administrator."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Right click on the Windows Terminal or command prompt icon."}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.strong,{children:"Run as administrator"}),"."]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"step-2-run-the-flowsynx",children:"Step 2: Run the FlowSynx"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"flowctl run\n"})}),"\n",(0,r.jsx)(n.p,{children:"After executing this command, FlowSynx starts to be running and the logs like below will be displayed."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Now listening on: http://[::]:5860"\n[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Application started. Press Ctrl+C to shut down."\n[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Hosting environment: Production"\n[time=2/1/2024 6:50:39 PM | level=INFO | machine=TEST-PC] message="Content root path: _____________"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"step-3-calling-api",children:"Step 3: Calling API"}),"\n",(0,r.jsxs)(n.p,{children:["Open a new terminal and enter the below command (in this example ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"List"})})," command will be called to getting list from given path):"]}),"\n",(0,r.jsxs)(i.A,{groupId:"httpApi",children:[(0,r.jsx)(l.A,{value:"bashHttpApi",label:"HTTP API (Bash)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -X POST -H "Content-Type: application/json" -d \'{ "entity": "/", "options": { "fields": [], "filter": "", "caseSensitive": false, "recurse": false, "sort": "", "limit": "", "includeMetadata": false }}\' http://localhost:5860/list\n'})})}),(0,r.jsx)(l.A,{value:"powershellHttpApi",label:"HTTP API (PowerShell)",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'Invoke-RestMethod -Method Post -ContentType \'application/json\' -Body \'{ "entity": "C:/", "options": { "fields": [], "filter": "", "caseSensitive": false, "recurse": false, "sort": "", "limit": "", "includeMetadata": false }}\' -Uri \'http://localhost:5860/list\'\n'})})})]}),"\n",(0,r.jsxs)(n.p,{children:["After executing the command, the result will be returned to you in the form of ",(0,r.jsx)(n.code,{children:"json"})," data."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var i=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var r=t(6540),a=t(4164),i=t(3104),l=t(6347),s=t(205),o=t(7485),c=t(1682),u=t(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=m({queryString:t,groupId:a}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=c??f;return h({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(e){const n=(0,v.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>s});var r=t(6540);const a={},i=r.createContext(a);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);