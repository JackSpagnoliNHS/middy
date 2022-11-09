"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[4288],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),c=l(a),u=i,w=c["".concat(s,".").concat(u)]||c[u]||p[u]||n;return a?r.createElement(w,o(o({ref:t},m),{},{components:a})):r.createElement(w,o({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var l=2;l<n;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2627:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return p}});var r=a(7462),i=a(3366),n=(a(7294),a(3905)),o=["components"],d={title:"Third-party middlewares",sidebar_position:100},s=void 0,l={unversionedId:"middlewares/third-party",id:"middlewares/third-party",title:"Third-party middlewares",description:"The following middlewares are created and maintained outside this project. We cannot guarantee for its functionality.",source:"@site/docs/middlewares/third-party.md",sourceDirName:"middlewares",slug:"/middlewares/third-party",permalink:"/docs/middlewares/third-party",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/middlewares/third-party.md",tags:[],version:"current",lastUpdatedAt:1668018971,formattedLastUpdatedAt:"11/9/2022",sidebarPosition:100,frontMatter:{title:"Third-party middlewares",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Official middlewares",permalink:"/docs/middlewares/intro"},next:{title:"cloudwatch-metrics",permalink:"/docs/middlewares/cloudwatch-metrics"}},m={},p=[{value:"Version 2.x - 3.x",id:"version-2x---3x",level:2},{value:"Version 1.x",id:"version-1x",level:2}],c={toc:p};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The following middlewares are created and maintained outside this project. We cannot guarantee for its functionality.\nIf your middleware is missing, feel free to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/middyjs/middy/pulls"},"open a Pull Request"),"."),(0,n.kt)("h2",{id:"version-2x---3x"},"Version 2.x - 3.x"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/awslabs/aws-lambda-powertools-typescript"},"aws-lambda-powertools-typescript"),": A suite of utilities for AWS Lambda Functions that makes structured logging, creating custom metrics asynchronously and tracing with AWS X-Ray easier",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/awslabs/aws-lambda-powertools-typescript/tree/main/docs/middlewares/logger"},"logger"),": Structured logging made easier, and a middleware to enrich log items with key details of the Lambda context"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/awslabs/aws-lambda-powertools-typescript/tree/main/docs/middlewares/metrics"},"metrics"),": Custom Metrics created asynchronously via CloudWatch Embedded Metric Format (EMF)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/awslabs/aws-lambda-powertools-typescript/tree/main/docs/middlewares/tracer"},"tracer"),": Utilities to trace Lambda function handlers, and both synchronous and asynchronous functions"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/getndazn/dazn-lambda-powertools"},"dazn-lambda-powertools"),": A collection of middlewares, AWS clients and helper libraries that make working with lambda easier."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-ajv"},"middy-ajv"),": AJV validator optimized for performance"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-sparks-joi"},"middy-sparks-joi"),": Joi validator"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-idempotent"},"middy-idempotent"),": idempotency middleware for middy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-jsonapi"},"middy-jsonapi"),": JSONAPI middleware for middy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-lesslog"},"middy-lesslog"),": Middleware for ",(0,n.kt)("inlineCode",{parentName:"li"},"lesslog"),", a teeny-tiny and severless-ready logging utility"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-rds"},"middy-rds"),": Creates RDS connection using ",(0,n.kt)("inlineCode",{parentName:"li"},"knex")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"pg")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-recaptcha"},"middy-recaptcha"),": reCAPTCHA validation middleware"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/serkan-ozal/middy-event-loop-tracer"},"middy-event-loop-tracer"),": Middleware for dumping active tasks with their stacktraces in the event queue just before AWS Lambda function timeouts. So you can understand what was going on in the function when timeout happens."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/serkan-ozal/middy-console-logger"},"middy-console-logger"),": Middleware for filtering logs printed over console logging methods. If the level of the console logging method is equal or bigger than configured level, the log is printed, Otherwise, it is ignored."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/serkan-ozal/middy-invocation"},"middy-invocation"),": Middleware for accessing current AWS Lambda invocation event and context from anywhere without need to passing event and context as arguments through your code."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/serkan-ozal/middy-profiler"},"middy-profiler"),": Middleware for profiling CPU on AWS Lambda during invocation and shows what methods/modules consume what percent of CPU time")),(0,n.kt)("h2",{id:"version-1x"},"Version 1.x"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-redis"},"middy-redis"),": Redis connection middleware"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-extractor"},"middy-extractor"),": Extracts data from events using expressions"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@keboola/middy-error-logger"},"@keboola/middy-error-logger"),": middleware that catches thrown exceptions and rejected promises and logs them comprehensibly to the console"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@keboola/middy-event-validator"},"@keboola/middy-event-validator"),": Joi powered event validation middleware"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-reroute"},"middy-reroute"),": provides complex redirect, rewrite and proxying capabilities by simply placing a rules file into your S3 bucket"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middytohof"},"middytohof"),": Convert Middy middleware plugins to higher-order functions returning lambda handlers"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wrap-ware"},"wrap-ware"),": A middleware wrapper which works with promises / async"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-middleware-warmup"},"middy-middleware-warmup"),": A middy plugin to help keep your Lambdas warm during Winter"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@sharecover-co/middy-aws-xray-tracing"},"@sharecover-co/middy-aws-xray-tracing"),": AWS X-Ray Tracing Middleware"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@sharecover-co/middy-http-response-serializer"},"@sharecover-co/middy-http-response-serializer"),": This middleware serializes the response to JSON and wraps it in a 200 HTTP response"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@seedrs/middyjs-middleware"},"@seedrs/middyjs-middleware"),": Collection of useful middlewares"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-autoproxyresponse"},"middy-autoproxyresponse"),": A middleware that lets you return simple JavaScript objects from Lambda function handlers and converts them into LAMBDA_PROXY responses"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-middleware-jwt-auth"},"jwt-auth"),": JSON web token authorization middleware based on ",(0,n.kt)("inlineCode",{parentName:"li"},"express-jwt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-mongoose-connector"},"middy-mongoose-connector"),": MongoDB connection middleware for ",(0,n.kt)("a",{parentName:"li",href:"https://mongoosejs.com/"},"mongoose.js")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@ematipico/middy-request-response"},"@ematipico/middy-request-response"),": a middleware that creates a pair of request/response objects"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@marcosantonocito/middy-cognito-permission"},"@marcosantonocito/middy-cognito-permission"),": Authorization and roles permission management for the Middy framework that works with Amazon Cognito"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-env"},"middy-env"),": Fetch, validate and type cast environment variables"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Eomm/sqs-json-body-parser"},"sqs-json-body-parser"),": Parse the SQS body to JSON"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/middy-lesslog/v/legacy"},"middy-lesslog"),": Middleware for ",(0,n.kt)("inlineCode",{parentName:"li"},"lesslog"),", a teeny-tiny and severless-ready logging utility")))}u.isMDXComponent=!0}}]);