this.wc=this.wc||{},this.wc.wcBlocksSharedContext=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=188)}({0:function(e,t){e.exports=window.wp.element},169:function(e,t,r){"use strict";var n=r(170);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},170:function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},188:function(e,t,r){"use strict";r.r(t),r.d(t,"useInnerBlockLayoutContext",(function(){return c})),r.d(t,"InnerBlockLayoutContextProvider",(function(){return u})),r.d(t,"useProductDataContext",(function(){return p})),r.d(t,"ProductDataContextProvider",(function(){return d}));var n=r(0),o=r(52),a=r.n(o);const i=Object(n.createContext)({parentName:"",parentClassName:"",isLoading:!1}),c=()=>Object(n.useContext)(i),u=e=>{let{parentName:t="",parentClassName:r="",children:o}=e;const a={parentName:t,parentClassName:r};return Object(n.createElement)(i.Provider,{value:a},o)};u.propTypes={children:a.a.node,parentName:a.a.string,parentClassName:a.a.string};const s={id:0,name:"",parent:0,type:"simple",variation:"",permalink:"",sku:"",short_description:"",description:"",on_sale:!1,prices:{currency_code:"USD",currency_symbol:"$",currency_minor_unit:2,currency_decimal_separator:".",currency_thousand_separator:",",currency_prefix:"$",currency_suffix:"",price:"0",regular_price:"0",sale_price:"0",price_range:null},price_html:"",average_rating:"0",review_count:0,images:[],categories:[],tags:[],attributes:[],variations:[],has_options:!1,is_purchasable:!1,is_in_stock:!1,is_on_backorder:!1,low_stock_remaining:null,sold_individually:!1,add_to_cart:{text:"Add to cart",description:"Add to cart",url:"",minimum:1,maximum:99,multiple_of:1}},l=Object(n.createContext)({product:s,hasContext:!1,isLoading:!1}),p=()=>Object(n.useContext)(l),d=e=>{let{product:t=null,children:r,isLoading:o}=e;const a={product:t||s,isLoading:o,hasContext:!0};return Object(n.createElement)(l.Provider,{value:a},o?Object(n.createElement)("div",{className:"is-loading"},r):r)}},52:function(e,t,r){e.exports=r(169)()}});