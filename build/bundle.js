!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/build",n(n.s=10)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("body-parser")},function(e,t){e.exports=require("redux-thunk")},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,n){"use strict";n.r(t);n(9);var r=n(5),o=n.n(r),i=n(0),u=n.n(i),c=n(6),a=n.n(c),l=n(1),f=n(7),s=n.n(f),p=n(3),b=n(4);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];return r=this,o=(e=d(t)).call.apply(e,[this].concat(u)),n=!o||"object"!==y(o)&&"function"!=typeof o?h(r):o,v(h(n),"state",{showText:!1}),v(h(n),"onHit",function(){return n.setState({showText:!n.state.showText})}),n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,i["Component"]),n=t,(r=[{key:"render",value:function(){return u.a.createElement("div",{className:"div"},u.a.createElement(p.Helmet,null,u.a.createElement("meta",{name:"description",content:"Free Web tutorials"}),u.a.createElement("title",null,"Home page")),u.a.createElement("h1",null,"Some of my tutorial another sdfsdf"),u.a.createElement("p",null,this.props.message," "),this.state.showText&&u.a.createElement("h1",null,"Hurry we are going to learn something new"),u.a.createElement("button",{onClick:this.onHit},"Hit me"))}}])&&m(n.prototype,r),o&&m(n,o),t}(),w=Object(b.connect)(function(e){return{message:e.meta.message}})(O);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,E(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,i["Component"]),n=t,(r=[{key:"render",value:function(){return u.a.createElement(l.Switch,null,u.a.createElement(l.Route,{path:"/",render:function(e){return u.a.createElement(w,e)}}))}}])&&j(n.prototype,r),o&&j(n,o),t}(),T=n(2),q=n(8),k=n.n(q);function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R={message:"this is a message"},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MESSAGE":return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){H(e,t,n[t])})}return e}({},e,{message:t.payload.message});default:return e}},A=Object(T.combineReducers)({meta:M}),C=[k.a],D=Object(T.createStore)(A,T.applyMiddleware.apply(void 0,C)),N=D.getState(),F=o()(),G=process.env.PORT||3e3;F.use(s.a.json()),F.use(o.a.static("build/public")),F.get("*",function(e,t){var n=a.a.renderToString(u.a.createElement(l.StaticRouter,{location:e.url,context:{}},u.a.createElement(b.Provider,{store:D},u.a.createElement(P,null)))),r=p.Helmet.renderStatic(),o="\n  <html>\n    <head>\n      ".concat(r.meta.toString(),"\n      ").concat(r.title.toString(),"\n    </head>\n    <body>\n        <div id='root'>").concat(n,"</div>\n\n        <script>\n        window.REDUX_DATA = ").concat(JSON.stringify(N),"\n        <\/script>\n        <script src='client.bundle.js'><\/script>   \n    </body>\n  </html>");t.send(o)}),F.listen(G,function(){console.log("App is running on port ".concat(G))})}]);