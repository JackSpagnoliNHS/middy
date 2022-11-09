"use strict";(self.webpackChunkmiddy=self.webpackChunkmiddy||[]).push([[6827],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2492:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Profiling",sidebar_position:7},l=void 0,d={unversionedId:"best-practices/profiling",id:"best-practices/profiling",title:"Profiling",description:"Inside of @middy/core we've added some hook before and after every middleware called, the handler and from start to end of it's execution.",source:"@site/docs/best-practices/07-profiling.md",sourceDirName:"best-practices",slug:"/best-practices/profiling",permalink:"/docs/best-practices/profiling",draft:!1,editUrl:"https://github.com/middyjs/middy/tree/main/website/docs/best-practices/07-profiling.md",tags:[],version:"current",lastUpdatedAt:1668018971,formattedLastUpdatedAt:"11/9/2022",sidebarPosition:7,frontMatter:{title:"Profiling",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Small node_modules",permalink:"/docs/best-practices/small-node-modules"},next:{title:"FAQ",permalink:"/docs/faq"}},c={},p=[{value:"Time",id:"time",level:2},{value:"Memory",id:"memory",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"@middy/core")," we've added some hook before and after every middleware called, the handler and from start to end of it's execution."),(0,a.kt)("h2",{id:"time"},"Time"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"\nconst defaults = {\n  logger: console.log,\n  enabled: true\n}\n\nconst timePlugin = (opts = {}) => {\n  const { logger, enabled } = { ...defaults, ...opts }\n  const store = {}\n\n  const start = (id) => {\n    store[id] = process.hrtime.bigint()\n  }\n  const stop = (id) => {\n    if (!enabled) return\n    logger(id, Number.parseInt((process.hrtime.bigint() - store[id]).toString()) / 1000000, 'ms')\n  }\n\n  // Only run during cold start\n  const beforePrefetch = () => start('total')\n  const requestStart = () => {\n    if (!store.init) {\n      store.init = store.total\n      stop('init')\n    } else {\n      start('total')\n    }\n  }\n  const beforeMiddleware = start\n  const afterMiddleware = stop\n  const beforeHandler = () => start('handler')\n  const afterHandler = () => stop('handler')\n  const requestEnd = () => stop('total')\n\n  return {\n    beforePrefetch,\n    requestStart,\n    beforeMiddleware,\n    afterMiddleware,\n    beforeHandler,\n    afterHandler,\n    requestEnd\n  }\n}\n\nexport const handler = middy(timePlugin())\n  .use(eventLogger())\n  .use(errorLogger())\n  .use(httpEventNormalizer())\n  .use(httpHeaderNormalizer())\n  .use(httpUrlencodePathParametersParser())\n  .use(httpUrlencodeBodyParser())\n  .use(httpJsonBodyParser())\n  .use(httpCors())\n  .use(httpSecurityHeaders())\n  .use(validator({eventSchema}))\n  .handler(()=>{})\n  \nawait handler()\n")),(0,a.kt)("p",null,"This will log out something this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"inputOutputLoggerMiddlewareBefore 0.156033 ms\nhttpEventNormalizerMiddlewareBefore 0.073921 ms\nhttpHeaderNormalizerMiddlewareBefore 0.095098 ms\nhttpUrlencodePathParserMiddlewareBefore 0.036255 ms\nhttpUrlencodeBodyParserMiddlewareBefore 0.038809 ms\nhttpJsonBodyParserMiddlewareBefore 0.048383 ms\nhttpContentNegotiationMiddlewareBefore 0.042311 ms\nvalidatorMiddlewareBefore 0.083366 ms\nhandler 0.094875 ms\nvalidatorMiddlewareAfter 0.083601 ms\nhttpSecurityHeadersMiddlewareAfter 0.19702 ms\nhttpCorsMiddlewareAfter 0.080532 ms\ninputOutputLoggerMiddlewareAfter 0.066886 ms\nlambda 66.141835 ms\n")),(0,a.kt)("p",null,"From this everything looks good. Sub 1ms for every middleware and the handler. But wait, that ",(0,a.kt)("inlineCode",{parentName:"p"},"total")," doesn't look right.\nYou're correct, ",(0,a.kt)("inlineCode",{parentName:"p"},"total")," includes the initial setup time (or cold start time) for all middlewares. In this case ",(0,a.kt)("inlineCode",{parentName:"p"},"validator")," is the culprit.\nThe Ajv constructor and compiler do a lot of magic when they first run to get ready for later schema validations.\nThis is why in the ",(0,a.kt)("inlineCode",{parentName:"p"},"validator")," middleware we now support passing in complied schema and expose the default compiler in\ncase you want to use it in a build step. We hope this feature will help to you in identify slow middlewares and improve your development experience."),(0,a.kt)("p",null,"There is also a ",(0,a.kt)("inlineCode",{parentName:"p"},"beforeRequest")," hook, but was left out of the example for dramatic effect."),(0,a.kt)("p",null,"Additionally, you'll notice that each middleware shows a descriptive name. This is printing out the function name passed into middy core.\nIf you've looked at the code for some the supported middlewares, you'll see these long descriptive variable names being set, then returned.\nThis is why."),(0,a.kt)("h2",{id:"memory"},"Memory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import memwatch from '@airbnb/node-memwatch'\n\nconst defaults = {\n  logger: console.log\n}\n\nconst memoryPlugin = (opts = {}) => {\n  const { logger } = { ...defaults, ...opts }\n  const store = {}\n\n  const start = (id) => {\n    store[id] = new memwatch.HeapDiff()\n  }\n  const stop = (id) => {\n    logger(id, store[id].end())\n  }\n\n  const beforePrefetch = () => start('total')\n  const requestStart = () => {\n    store.init = store.total\n    stop('init')\n  }\n  const beforeMiddleware = start\n  const afterMiddleware = stop\n  const beforeHandler = () => start('handler')\n  const afterHandler = () => stop('handler')\n  const requestEnd = () => stop('total')\n\n  return {\n    beforePrefetch,\n    requestStart,\n    beforeMiddleware,\n    afterMiddleware,\n    beforeHandler,\n    afterHandler,\n    requestEnd\n  }\n}\n\nexport const handler = middy(memoryPlugin())\n  .use(eventLogger())\n  .use(errorLogger())\n  .use(httpEventNormalizer())\n  .use(httpHeaderNormalizer())\n  .use(httpUrlencodePathParametersParser())\n  .use(httpUrlencodeBodyParser())\n  .use(httpJsonBodyParser())\n  .use(httpCors())\n  .use(httpSecurityHeaders())\n  .use(validator({eventSchema}))\n  .handler(()=>{})\n  \nawait handler()\n")))}m.isMDXComponent=!0}}]);