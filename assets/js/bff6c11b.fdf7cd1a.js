"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4785],{4300:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(5893),s=t(1151);const o={title:"API Gateway (WebSocket)"},r=void 0,i={id:"events/api-gateway-ws",title:"API Gateway (WebSocket)",description:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.",source:"@site/docs/events/api-gateway-ws.md",sourceDirName:"events",slug:"/events/api-gateway-ws",permalink:"/docs/events/api-gateway-ws",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/events/api-gateway-ws.md",tags:[],version:"current",lastUpdatedAt:1700079044,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{title:"API Gateway (WebSocket)"},sidebar:"tutorialSidebar",previous:{title:"API Gateway (REST)",permalink:"/docs/events/api-gateway-rest"},next:{title:"Application Load Balancer",permalink:"/docs/events/application-load-balancer"}},d={},c=[{value:"AWS Documentation",id:"aws-documentation",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub."})}),"\n",(0,a.jsx)(n.h2,{id:"aws-documentation",children:"AWS Documentation"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/services-apigateway.html",children:"Using AWS Lambda with Amazon API Gateway"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api.html",children:"Working with WebSocket APIs"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport wsJsonBodyParserMiddleware from '@middy/ws-json-body-parser'\nimport wsResponseMiddleware from '@middy/ws-response'\nimport wsRouterHandler from '@middy/ws-router'\n\nimport { handler as connectHandler } from './handlers/connect.js'\nimport { handler as disconnectHandler } from './handlers/disconnect.js'\nimport { handler as defaultHandler } from './handlers/default.js'\n\nconst routes = [\n  {\n    routeKey: '$connect',\n    handler: connectHandler\n  },\n  {\n    routeKey: '$disconnect',\n    handler: disconnectHandler\n  },\n  {\n    routeKey: 'default',\n    handler: defaultHandler\n  }\n]\n\nexport const handler = middy()\n  .use(wsJsonBodyParserMiddleware())\n  .use(wsResponseMiddleware())\n  .handler(wsRouterHandler(routes))\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var a=t(7294);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);