"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[3631],{3252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var r=n(5893),a=n(1151),s=n(4866),o=n(5162);const l={title:"http-multipart-body-parser"},i=void 0,d={id:"middlewares/http-multipart-body-parser",title:"http-multipart-body-parser",description:"Automatically parses HTTP requests with content type multipart/form-data and converts the body into an",source:"@site/docs/middlewares/http-multipart-body-parser.md",sourceDirName:"middlewares",slug:"/middlewares/http-multipart-body-parser",permalink:"/docs/middlewares/http-multipart-body-parser",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/http-multipart-body-parser.md",tags:[],version:"current",lastUpdatedAt:1700079044,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{title:"http-multipart-body-parser"},sidebar:"tutorialSidebar",previous:{title:"http-json-body-parser",permalink:"/docs/middlewares/http-json-body-parser"},next:{title:"http-partial-response",permalink:"/docs/middlewares/http-partial-response"}},u={},c=[{value:"Install",id:"install",level:2},{value:"Options",id:"options",level:2},{value:"Sample usage",id:"sample-usage",level:2}];function p(e){const t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Automatically parses HTTP requests with content type ",(0,r.jsx)(t.code,{children:"multipart/form-data"})," and converts the body into an\nobject. Also handles gracefully broken JSON as ",(0,r.jsx)(t.em,{children:"Unsupported Media Type"})," (415 errors)\nif used in combination with ",(0,r.jsx)(t.code,{children:"httpErrorHandler"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"It can also be used in combination with validator so that the content can be validated."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": by default this is going to parse only events that contain the header ",(0,r.jsx)(t.code,{children:"Content-Type"})," (or ",(0,r.jsx)(t.code,{children:"content-type"}),") set to ",(0,r.jsx)(t.code,{children:"multipart/form-data"}),". If you want to support different casing for the header name (e.g. ",(0,r.jsx)(t.code,{children:"Content-type"}),") then you should use the ",(0,r.jsx)(t.a,{href:"#httpheadernormalizer",children:(0,r.jsx)(t.code,{children:"httpHeaderNormalizer"})})," middleware before this middleware."]}),"\n",(0,r.jsx)(t.h2,{id:"install",children:"Install"}),"\n",(0,r.jsx)(t.p,{children:"To install this middleware you can use NPM:"}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save @middy/http-multipart-body-parser\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add @middy/http-multipart-body-parser\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add @middy/http-multipart-body-parser\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"busboy"})," (",(0,r.jsx)(t.code,{children:"object"}),") (optional): defaults to ",(0,r.jsx)(t.code,{children:"{}"})," and it can be used to pass extraparameters to the internal ",(0,r.jsx)(t.code,{children:"busboy"})," instance at creation time. Checkout ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/busboy#busboy-methods",children:"the official documentation"})," for more information on the supported options."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"charset"})," (string) (default ",(0,r.jsx)(t.code,{children:"utf8"}),"): it can be used to change default charset."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"disableContentTypeError"})," (",(0,r.jsx)(t.code,{children:"boolean"}),") (optional): Skip throwing 415 when ",(0,r.jsx)(t.code,{children:"Content-Type"})," is invalid. Default: ",(0,r.jsx)(t.code,{children:"true"}),", will default to ",(0,r.jsx)(t.code,{children:"false"})," in next major version."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note"}),": this middleware will buffer all the data as it is processed internally by ",(0,r.jsx)(t.code,{children:"busboy"}),", so, if you are using this approach to parse significantly big volumes of data, keep in mind that all the data will be allocated in memory. This is somewhat inevitable with Lambdas (as the data is already encoded into the JSON in memory as Base64), but it's good to keep this in mind and evaluate the impact on you application.",(0,r.jsx)(t.br,{}),"\n","If you really have to deal with big files, then you might also want to consider to allowing your users to ",(0,r.jsx)(t.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-UsingHTTPPOST.html",children:"directly upload files to S3"})]}),"\n",(0,r.jsx)(t.h2,{id:"sample-usage",children:"Sample usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport httpHeaderNormalizer from '@middy/http-header-normalizer'\nimport httpMultipartBodyParser from '@middy/http-multipart-body-parser'\n\nconst lambdaHandler = (event, context) => {\n  return {}\n}\n\nexport const handler = middy()\n  .use(httpHeaderNormalizer())\n  .use(httpMultipartBodyParser())\n  .handler(lambdaHandler)\n\n// invokes the handler\nconst event = {\n  headers: {\n    'Content-Type':\n      'multipart/form-data; boundary=----WebKitFormBoundaryppsQEwf2BVJeCe0M'\n  },\n  body: 'LS0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cHBzUUV3ZjJCVkplQ2UwTQ0KQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPSJmb28iDQoNCmJhcg0KLS0tLS0tV2ViS2l0Rm9ybUJvdW5kYXJ5cHBzUUV3ZjJCVkplQ2UwTS0t',\n  isBase64Encoded: true\n}\nhandler(event, {}, (_, body) => {\n  t.is(body, { foo: 'bar' })\n})\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(6010);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),a=n(6010),s=n(2466),o=n(6550),l=n(469),i=n(1980),d=n(7392),u=n(12);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return c(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=p(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,c]=m({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),y=(()=>{const e=d??b;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{y&&i(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,s]),tabValues:s}}var f=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(d(t),o(a))},c=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:c,onClick:u,...s,className:(0,a.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function g(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function w(e){const t=(0,f.Z)();return(0,v.jsx)(g,{...e,children:c(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(7294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);