"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[8729],{9571:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(5893),o=n(1151);const s={title:"MQ"},a=void 0,r={id:"events/mq",title:"MQ",description:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub.",source:"@site/docs/events/mq.md",sourceDirName:"events",slug:"/events/mq",permalink:"/docs/events/mq",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/events/mq.md",tags:[],version:"current",lastUpdatedAt:1700079044,formattedLastUpdatedAt:"Nov 15, 2023",frontMatter:{title:"MQ"},sidebar:"tutorialSidebar",previous:{title:"Lex",permalink:"/docs/events/lex"},next:{title:"RDS",permalink:"/docs/events/rds"}},d={},l=[{value:"AWS Documentation",id:"aws-documentation",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"This page is a work in progress. If you want to help us to make this page better, please consider contributing on GitHub."})}),"\n",(0,i.jsx)(t.h2,{id:"aws-documentation",children:"AWS Documentation"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html",children:"Using Lambda with Amazon MQ"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import middy from '@middy/core'\nimport eventNormalizerMiddleware from '@middy/event-normalizer'\n\nexport const handler = middy()\n  .use(eventNormalizerMiddleware())\n  .handler((event, context, {signal}) => {\n    // ...\n  })\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(7294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);