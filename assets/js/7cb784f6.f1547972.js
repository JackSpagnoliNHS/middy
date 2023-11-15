"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[711],{4122:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>o});var s=n(5893),d=n(1151);const t={title:"Upgrade 1.x -> 2.x",sidebar_position:1e3},i=void 0,a={id:"upgrade/1-2",title:"Upgrade 1.x -> 2.x",description:'aka "The async/await Update"',source:"@site/docs/upgrade/1-2.md",sourceDirName:"upgrade",slug:"/upgrade/1-2",permalink:"/docs/upgrade/1-2",draft:!1,unlisted:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/upgrade/1-2.md",tags:[],version:"current",lastUpdatedAt:1700079044,formattedLastUpdatedAt:"Nov 15, 2023",sidebarPosition:1e3,frontMatter:{title:"Upgrade 1.x -> 2.x",sidebar_position:1e3},sidebar:"tutorialSidebar",previous:{title:"Upgrade 2.x -> 3.x",permalink:"/docs/upgrade/2-3"},next:{title:"Upgrade 0.x -> 1.x",permalink:"/docs/upgrade/0-1"}},l={},o=[{value:"Core",id:"core",level:2},{value:"Middleware",id:"middleware",level:2},{value:"cache",id:"cache",level:3},{value:"db-manager",id:"db-manager",level:3},{value:"do-not-wait-for-empty-event-loop",id:"do-not-wait-for-empty-event-loop",level:3},{value:"function-shield",id:"function-shield",level:3},{value:"http-content-negotiation",id:"http-content-negotiation",level:3},{value:"http-cors",id:"http-cors",level:3},{value:"http-error-handler",id:"http-error-handler",level:3},{value:"http-event-normalizer",id:"http-event-normalizer",level:3},{value:"http-header-normalizer",id:"http-header-normalizer",level:3},{value:"http-json-body-parser",id:"http-json-body-parser",level:3},{value:"http-multipart-body-parser",id:"http-multipart-body-parser",level:3},{value:"http-partial-response",id:"http-partial-response",level:3},{value:"http-response-serializer",id:"http-response-serializer",level:3},{value:"http-security-headers",id:"http-security-headers",level:3},{value:"http-urlencode-body-parser",id:"http-urlencode-body-parser",level:3},{value:"http-urlencode-path-parser",id:"http-urlencode-path-parser",level:3},{value:"input-output-logger",id:"input-output-logger",level:3},{value:"rds-signer",id:"rds-signer",level:3},{value:"s3-key-normalizer",id:"s3-key-normalizer",level:3},{value:"s3-object-response",id:"s3-object-response",level:3},{value:"secrets-manager",id:"secrets-manager",level:3},{value:"sqs-json-body-parser",id:"sqs-json-body-parser",level:3},{value:"sqs-partial-batch-failure",id:"sqs-partial-batch-failure",level:3},{value:"ssm",id:"ssm",level:3},{value:"sts",id:"sts",level:3},{value:"validator",id:"validator",level:3},{value:"warmup",id:"warmup",level:3}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:'aka "The async/await Update"'}),"\n",(0,s.jsxs)(r.p,{children:["Version 2.x of Middy no longer supports Node.js versions 10.x. You are highly encouraged to move to Node.js 14.x,\nwhich support ES6 modules by default (",(0,s.jsx)(r.code,{children:"export"}),"), optional chaining (",(0,s.jsx)(r.code,{children:"?."}),") and nullish coalescing operator (",(0,s.jsx)(r.code,{children:"??"}),") natively."]}),"\n",(0,s.jsx)(r.h2,{id:"core",children:"Core"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["In handler ",(0,s.jsx)(r.code,{children:"callback(err, response)"})," have been removed for ",(0,s.jsx)(r.code,{children:"async/await"})," support","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"return response"})," to trigger ",(0,s.jsx)(r.code,{children:"after"})," middleware stack"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"throw new Error(...)"})," to trigger ",(0,s.jsx)(r.code,{children:"onError"})," middleware stack"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(r.li,{children:["In middleware ",(0,s.jsx)(r.code,{children:"next(err)"})," has been removed for ",(0,s.jsx)(r.code,{children:"async/await"})," support","\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"throw new Error(...)"})," to trigger ",(0,s.jsx)(r.code,{children:"onError"})," middleware stack"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"return response"})," to ",(0,s.jsx)(r.strong,{children:"short circuit"})," any middleware stack and respond. v1.x currently throws an error when something is returned"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"middleware",children:"Middleware"}),"\n",(0,s.jsx)(r.h3,{id:"cache",children:"cache"}),"\n",(0,s.jsx)(r.p,{children:"Deprecated. Too generic and had low usage."}),"\n",(0,s.jsx)(r.p,{children:"However, you can use the following if needed:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"const { createHash } = require('crypto')\n\nmodule.exports = (opts) => {\n  const storage = {}\n  const defaults = {\n    calculateCacheId: async (event) =>\n      createHash('md5').update(JSON.stringify(event)).digest('hex'),\n    getValue: async (key) => storage[key],\n    setValue: async (key, value) => {\n      storage[key] = value\n    }\n  }\n\n  const options = { ...defaults, ...opts }\n  let currentCacheKey\n\n  const cacheMiddlewareBefore = async (request) => {\n    const cacheKey = await options.calculateCacheId(request.event)\n    const response = await options.getValue(cacheKey)\n    if (response) {\n      return response\n    }\n    request.internal.cacheKey = cacheKey\n  }\n\n  const cacheMiddlewareAfter = async (request) => {\n    await options.setValue(request.internal.cacheKey, request.response)\n  }\n\n  return {\n    before: cacheMiddlewareBefore,\n    after: cacheMiddlewareAfter\n  }\n}\n"})}),"\n",(0,s.jsx)(r.h3,{id:"db-manager",children:"db-manager"}),"\n",(0,s.jsxs)(r.p,{children:["Deprecated. Too generic and had low usage. You can check out ",(0,s.jsx)(r.a,{href:"https://github.com/willfarrell/middy-rds",children:"middy-rds"})," as a\npossible alternative or example on building your own replacement."]}),"\n",(0,s.jsx)(r.h3,{id:"do-not-wait-for-empty-event-loop",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/do-not-wait-for-empty-event-loop",children:"do-not-wait-for-empty-event-loop"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"function-shield",children:"function-shield"}),"\n",(0,s.jsx)(r.p,{children:"Deprecated. Only supported up to Node v10."}),"\n",(0,s.jsx)(r.h3,{id:"http-content-negotiation",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-content-negotiation",children:"http-content-negotiation"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-cors",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-cors",children:"http-cors"})}),"\n",(0,s.jsx)(r.p,{children:"Added new options to support more headers"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"methods"}),"\n",(0,s.jsx)(r.li,{children:"exposeHeaders"}),"\n",(0,s.jsx)(r.li,{children:"requestHeaders"}),"\n",(0,s.jsx)(r.li,{children:"requestMethods"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-error-handler",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-error-handler",children:"http-error-handler"})}),"\n",(0,s.jsx)(r.p,{children:"Added in support to honour httpError.expose. Errors with statusCode >= 500 are no longer applied to response by default.\nAdded new option to catch any non-http and statusCode >= 500 errors"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"fallbackMessage"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"http-event-normalizer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-event-normalizer",children:"http-event-normalizer"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-header-normalizer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-header-normalizer",children:"http-header-normalizer"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-json-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-json-body-parser",children:"http-json-body-parser"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-multipart-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-multipart-body-parser",children:"http-multipart-body-parser"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-partial-response",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-partial-response",children:"http-partial-response"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-response-serializer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-response-serializer",children:"http-response-serializer"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"http-security-headers",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-security-headers",children:"http-security-headers"})}),"\n",(0,s.jsxs)(r.p,{children:["No longer adds ",(0,s.jsx)(r.code,{children:"statusCode:500"})," when there is no response."]}),"\n",(0,s.jsx)(r.h3,{id:"http-urlencode-body-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-urlencode-body-parser",children:"http-urlencode-body-parser"})}),"\n",(0,s.jsxs)(r.p,{children:["Remove ",(0,s.jsx)(r.code,{children:"extended"})," option. Only uses ",(0,s.jsx)(r.code,{children:"qs"})," as the parser, formally enabled by options ",(0,s.jsx)(r.code,{children:"{extended: true}"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"http-urlencode-path-parser",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/http-urlencode-path-parser",children:"http-urlencode-path-parser"})}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"input-output-logger",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/input-output-logger",children:"input-output-logger"})}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Now additionally logs response from the ",(0,s.jsx)(r.code,{children:"onError"})," middleware stack"]}),"\n",(0,s.jsx)(r.li,{children:"Support for omiting within nested arrays"}),"\n",(0,s.jsxs)(r.li,{children:["Add in support for ",(0,s.jsx)(r.code,{children:"replacer"})," to be passed into ",(0,s.jsx)(r.code,{children:"JSON.stringify()"})]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"rds-signer",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/rds-signer",children:"rds-signer"})}),"\n",(0,s.jsxs)(r.p,{children:["New middleware to fetch RDS credential used when connecting with IAM roles. This was built into ",(0,s.jsx)(r.code,{children:"db-manager"}),"."]}),"\n",(0,s.jsx)(r.h3,{id:"s3-key-normalizer",children:"s3-key-normalizer"}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"s3-object-response",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/s3-object-response",children:"s3-object-response"})}),"\n",(0,s.jsx)(r.p,{children:"New middleware to fetch and respond to S3 Object Get request event."}),"\n",(0,s.jsx)(r.h3,{id:"secrets-manager",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/secrets-manager",children:"secrets-manager"})}),"\n",(0,s.jsx)(r.p,{children:"Refactored, see documentation"}),"\n",(0,s.jsx)(r.h3,{id:"sqs-json-body-parser",children:"sqs-json-body-parser"}),"\n",(0,s.jsx)(r.p,{children:"No change"}),"\n",(0,s.jsx)(r.h3,{id:"sqs-partial-batch-failure",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/sqs-partial-batch-failure",children:"sqs-partial-batch-failure"})}),"\n",(0,s.jsxs)(r.p,{children:["Replaced option ",(0,s.jsx)(r.code,{children:"sqs"})," with ",(0,s.jsx)(r.code,{children:"AwsClient"})," and added in more options for control."]}),"\n",(0,s.jsx)(r.h3,{id:"ssm",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/ssm",children:"ssm"})}),"\n",(0,s.jsx)(r.p,{children:"Refactored, see documentation"}),"\n",(0,s.jsx)(r.h3,{id:"sts",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/sts",children:"sts"})}),"\n",(0,s.jsx)(r.p,{children:"New middleware to fetch assume role credentials."}),"\n",(0,s.jsx)(r.h3,{id:"validator",children:(0,s.jsx)(r.a,{href:"/docs/middlewares/validator",children:"validator"})}),"\n",(0,s.jsxs)(r.p,{children:["Upgraded ",(0,s.jsx)(r.code,{children:"ajv"})," and it's plugins to support JSON Schema Draft 2020-12 specification. Defaults were change because of this."]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Plugin ",(0,s.jsx)(r.code,{children:"ajv-keywords"})," removed from being included by default because it's quite a large package and usually only one keyword is used."]}),"\n",(0,s.jsxs)(r.li,{children:["Plugin ",(0,s.jsx)(r.code,{children:"ajv-errors"})," removed from included by default because it conflicts with ",(0,s.jsx)(r.code,{children:"ajv-i18n"})," when dealing with custom messages for multiple languages"]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"warmup",children:"warmup"}),"\n",(0,s.jsxs)(r.p,{children:["Deprecated. This was a work round for a missing feature in AWS Lambda. AWS added in the ability to use ",(0,s.jsx)(r.a,{href:"https://aws.amazon.com/blogs/aws/new-provisioned-concurrency-for-lambda-functions/",children:"provisioned concurrency"}),"\non 2019-12-03, removing the need for this work around."]}),"\n",(0,s.jsx)(r.p,{children:"However, you can use the following if needed:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"middy(lambdaHandler).before((request) => {\n  if (request.event.source === 'serverless-plugin-warmup') {\n    console.log('Exiting early via warmup Middleware')\n    return 'warmup'\n  }\n})\n"})})]})}function h(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>a,a:()=>i});var s=n(7294);const d={},t=s.createContext(d);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);