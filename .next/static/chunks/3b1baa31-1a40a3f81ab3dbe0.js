"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[644],{2599:(e,t,r)=>{var o,n;function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}r.d(t,{X3:()=>c}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(o||(o={}));function a(e,t){if(!1===e||null==e)throw Error(t)}function i(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function d(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(n||(n={}));let u=new Set(["lazy","caseSensitive","path","id","index","children"]);class c extends Error{}class h{constructor(e,t,r,o){void 0===o&&(o=!1),this.status=e,this.statusText=t||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}let l=["post","put","patch","delete"],f=new Set(l);[...l],Symbol("deferred");function p(e,t){let{pathname:r,routeId:o,method:n,type:s,message:a}=void 0===t?{}:t,i="Unknown Server Error",d="Unknown @remix-run/router error";return 400===e?(i="Bad Request",n&&r&&o?d="You made a "+n+' request to "'+r+'" but did not provide a `loader` for route "'+o+'", so there is no way to handle the request.':"defer-action"===s?d="defer() is not supported in actions":"invalid-body"===s&&(d="Unable to encode submission body")):403===e?(i="Forbidden",d='Route "'+o+'" does not match URL "'+r+'"'):404===e?(i="Not Found",d='No route matches URL "'+r+'"'):405===e&&(i="Method Not Allowed",n&&r&&o?d="You made a "+n.toUpperCase()+' request to "'+r+'" but did not provide an `action` for route "'+o+'", so there is no way to handle the request.':n&&(d='Invalid request method "'+n.toUpperCase()+'"')),new h(e||500,i,Error(d),!0)}}}]);