!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t,n){"use strict";e.exports=n(9)},function(e,t,n){e.exports=n(12)()},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){var t=0;return t=Math.floor(100*t)/100,{score:isFinite(t)?t:0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(1)),o=u(n(0));function u(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t,n=e.icon,r=e.title,u=e.className;if("string"==typeof n)t=n.includes("#")?o.default.createElement("use",{xlinkHref:n}):o.default.createElement("path",{d:n});else{if(!Array.isArray(n))return n;t=n.map(function(e,t){return o.default.createElement("path",{key:t,d:e})})}return o.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 1024 1024",className:"Draftail-Icon ".concat(u||""),"aria-hidden":!r||null,role:r?"img":null,"aria-label":r||null},t)};a.propTypes={icon:r.default.oneOfType([r.default.string,r.default.arrayOf(r.default.string),r.default.node]).isRequired,title:r.default.string,className:r.default.string},a.defaultProps={title:null,className:null};var l=a;t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(1)),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),u=a(n(4));function a(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=(t.__proto__||Object.getPrototypeOf(t)).call(this,e))||"object"!==l(o)&&"function"!=typeof o?c(r):o).state={showTooltipOnHover:!0},n.onMouseDown=n.onMouseDown.bind(c(n)),n.onMouseLeave=n.onMouseLeave.bind(c(n)),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.PureComponent),n=t,(r=[{key:"onMouseDown",value:function(e){var t=this.props,n=t.name,r=t.onClick;e.preventDefault(),this.setState({showTooltipOnHover:!1}),r(n)}},{key:"onMouseLeave",value:function(){this.setState({showTooltipOnHover:!0})}},{key:"render",value:function(){var e=this.props,t=e.name,n=e.active,r=e.label,a=e.title,l=e.icon,i=this.state.showTooltipOnHover;return o.default.createElement("button",{name:t,className:"Draftail-ToolbarButton".concat(n?" Draftail-ToolbarButton--active":""),type:"button","aria-label":a||null,"data-draftail-balloon":!(!a||!i)||null,tabIndex:-1,onMouseDown:this.onMouseDown,onMouseLeave:this.onMouseLeave},l?o.default.createElement(u.default,{icon:l}):null,r?o.default.createElement("span",{className:"Draftail-ToolbarButton__label"},r):null)}}])&&i(n.prototype,r),a&&i(n,a),t}();f.propTypes={name:r.default.string,active:r.default.bool,label:r.default.string,title:r.default.string,icon:r.default.oneOfType([r.default.string,r.default.arrayOf(r.default.string),r.default.node]),onClick:r.default.func},f.defaultProps={name:null,active:!1,label:null,title:null,icon:null,onClick:function(){}};var s=f;t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ToolbarButton",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n(5))&&r.__esModule?r:{default:r}},function(e,t,n){"use strict";e.exports={}},function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,a,l=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var c in n=Object(arguments[i]))o.call(n,c)&&(l[c]=n[c]);if(r){a=r(n);for(var f=0;f<a.length;f++)u.call(n,a[f])&&(l[a[f]]=n[a[f]])}}return l}},function(e,t,n){"use strict";var r=n(8),o=n(7),u=n(2),a="function"==typeof Symbol&&Symbol.for,l=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.call"):60104,c=a?Symbol.for("react.return"):60105,f=a?Symbol.for("react.portal"):60106,s=a?Symbol.for("react.fragment"):60107,p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw(t=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.")).name="Invariant Violation",t.framesToPop=1,t}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};function v(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||y}function b(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||y}function h(){}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&d("85"),this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var m=b.prototype=new h;function O(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||y}m.constructor=b,r(m,v.prototype),m.isPureReactComponent=!0;var g=O.prototype=new h;g.constructor=O,r(g,v.prototype),g.unstable_isAsyncReactComponent=!0,g.render=function(){return this.props.children};var _={current:null},w=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,o={},u=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(u=""+t.key),t)w.call(t,r)&&!j.hasOwnProperty(r)&&(o[r]=t[r]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];o.children=c}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===o[r]&&(o[r]=i[r]);return{$$typeof:l,type:e,key:u,ref:a,props:o,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var k=/\/+/g,x=[];function E(e,t,n,r){if(x.length){var o=x.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function R(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case l:case i:case c:case f:u=!0}}if(u)return n(r,e,""===t?"."+M(e,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var s=t+M(o=e[a],a);u+=R(o,s,n,r)}else if(null===e||void 0===e?s=null:s="function"==typeof(s=p&&e[p]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),a=0;!(o=e.next()).done;)u+=R(o=o.value,s=t+M(o,a++),n,r);else"object"===o&&d("31","[object Object]"===(n=""+e)?"object with keys {"+Object.keys(e).join(", ")+"}":n,"");return u}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function C(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,u.thatReturnsArgument):null!=e&&(S(e)&&(t=o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(k,"$&/")+"/")+n,e={$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}),r.push(e))}function D(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(k,"$&/")+"/"),t=E(t,u,r,o),null==e||R(e,"",A,t),T(t)}var N={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;t=E(null,null,t,n),null==e||R(e,"",C,t),T(t)},count:function(e){return null==e?0:R(e,"",u.thatReturnsNull,null)},toArray:function(e){var t=[];return D(e,t,null,u.thatReturnsArgument),t},only:function(e){return S(e)||d("143"),e}},Component:v,PureComponent:b,unstable_AsyncComponent:O,Fragment:s,createElement:P,cloneElement:function(e,t,n){var o=r({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=_.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(f in t)w.call(t,f)&&!j.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==c?c[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){c=Array(f);for(var s=0;s<f;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:l,type:e.type,key:u,ref:a,props:o,_owner:i}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:S,version:"16.2.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:_,assign:r}},I=Object.freeze({default:N}),$=I&&N||I;e.exports=$.default?$.default:$},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";var r=function(e){};e.exports=function(e,t,n,o,u,a,l,i){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,o,u,a,l,i],s=0;(c=new Error(t.replace(/%s/g,function(){return f[s++]}))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(e,t,n){"use strict";var r=n(2),o=n(11),u=n(10);e.exports=function(){function e(e,t,n,r,a,l){l!==u&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(1)),o=l(n(0)),u=n(6),a=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=(0,e.getEditorState)().getCurrentContent().getPlainText(),n=(0,a.default)(t);if(n)r="Flesch Score: "+n.score;else var r="Flesch Score: N/A";return o.default.createElement(u.ToolbarButton,{name:"SMOG_INDEX",icon:null,label:"".concat(r)})};i.propTypes={getEditorState:r.default.func.isRequired};var c=i;t.default=c},function(e,t,n){"use strict";var r,o=(r=n(13))&&r.__esModule?r:{default:r};window.draftail.registerControl(o.default)}]);