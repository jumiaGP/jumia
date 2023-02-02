this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["rating-filter"]=function(e){function t(t){for(var r,a,l=t[0],s=t[1],i=t[2],b=0,d=[];b<l.length;b++)a=l[b],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={42:0,1:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;return o.push([409,0]),n()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wc.wcBlocksData},103:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)({}),o=()=>{const{wrapper:e}=Object(r.useContext)(c);return t=>{e&&e.current&&(e.current.hidden=!t)}}},104:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(13);function c(e,t){const n=Object(r.useRef)();return Object(r.useEffect)(()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)},[e,t]),n.current}},106:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(10),c=n(7),o=n(0),a=n(40),l=n(143),s=n(33);const i=e=>{const{namespace:t,resourceName:n,resourceValues:i=[],query:u={},shouldSelect:b=!0,isEditor:d=!1}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const p=Object(o.useRef)({results:[],isLoading:!0}),g=Object(a.a)(u),f=Object(a.a)(i),O=Object(l.a)(),m=Object(c.useSelect)(e=>{var c;if(d&&Object(s.a)(null==p||null===(c=p.current)||void 0===c?void 0:c.results)&&Object.keys(p.current.results).length>0)return{results:p.current.results,isLoading:!1};if(!b)return null;const o=e(r.COLLECTIONS_STORE_KEY),a=[t,n,g,f],l=o.getCollectionError(...a);if(l){if(!(l instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");O(l)}return{results:o.getCollection(...a),isLoading:!o.hasFinishedResolution("getCollection",a)}},[t,n,f,g,b]);return null!==m&&(p.current=m),p.current}},11:function(e,t){e.exports=window.wp.compose},12:function(e,t){e.exports=window.wp.primitives},126:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),a=n.n(o),l=n(29);n(167),t.a=e=>{let{className:t,label:
/* translators: Reset button text for filters. */
n=Object(c.__)("Reset","woo-gutenberg-products-block"),onClick:o,screenReaderLabel:s=Object(c.__)("Reset filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{className:a()("wc-block-components-filter-reset-button",t),onClick:o},Object(r.createElement)(l.a,{label:n,screenReaderLabel:s}))}},127:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),a=n.n(o),l=n(29);n(168),t.a=e=>{let{className:t,isLoading:n,disabled:o,label:
/* translators: Submit button text for filters. */
s=Object(c.__)("Apply","woo-gutenberg-products-block"),onClick:i,screenReaderLabel:u=Object(c.__)("Apply filter","woo-gutenberg-products-block")}=e;return Object(r.createElement)("button",{type:"submit",className:a()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":n},t),disabled:o,onClick:i},Object(r.createElement)(l.a,{label:s,screenReaderLabel:u}))}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"boolean"==typeof e},13:function(e,t){e.exports=window.React},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(5),c=n(56),o=n(33),a=n(99);const l=e=>{if(!Object(c.b)())return{className:"",style:{}};const t=Object(o.a)(e)?e:{},n=Object(a.a)(t.style);return Object(r.__experimentalUseBorderProps)({...t,style:n})}},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);const c=()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)(t=>{e(()=>{throw t})},[])}},15:function(e,t){e.exports=window.wc.blocksCheckout},155:function(e,t,n){"use strict";var r=n(6),c=n.n(r),o=n(0),a=n(302),l=n(4),s=n.n(l);n(194),t.a=e=>{let{className:t,style:n,suggestions:r,multiple:l=!0,saveTransform:i=(e=>e.trim().replace(/\s/g,"-")),messages:u={},validateInput:b=(e=>r.includes(e)),label:d="",...p}=e;return Object(o.createElement)("div",{className:s()("wc-blocks-components-form-token-field-wrapper",t,{"single-selection":!l}),style:n},Object(o.createElement)(a.a,c()({label:d,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:b,saveTransform:i,maxLength:l?void 0:1,suggestions:r,messages:u},p)))}},156:function(e,t,n){"use strict";var r=n(0),c=n(1),o=n(4),a=n.n(o),l=n(15);n(195),t.a=e=>{let{className:t,onChange:n,options:o=[],checked:s=[],isLoading:i=!1,isDisabled:u=!1,limit:b=10}=e;const[d,p]=Object(r.useState)(!1),g=Object(r.useMemo)(()=>[...Array(5)].map((e,t)=>Object(r.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})),[]),f=Object(r.useMemo)(()=>{const e=o.length-b;return!d&&Object(r.createElement)("li",{key:"show-more",className:"show-more"},Object(r.createElement)("button",{onClick:()=>{p(!0)},"aria-expanded":!1,"aria-label":Object(c.sprintf)(
/* translators: %s is referring the remaining count of options */
Object(c._n)("Show %s more option","Show %s more options",e,"woo-gutenberg-products-block"),e)},Object(c.sprintf)(
/* translators: %s number of options to reveal. */
Object(c._n)("Show %s more","Show %s more",e,"woo-gutenberg-products-block"),e)))},[o,b,d]),O=Object(r.useMemo)(()=>d&&Object(r.createElement)("li",{key:"show-less",className:"show-less"},Object(r.createElement)("button",{onClick:()=>{p(!1)},"aria-expanded":!0,"aria-label":Object(c.__)("Show less options","woo-gutenberg-products-block")},Object(c.__)("Show less","woo-gutenberg-products-block"))),[d]),m=Object(r.useMemo)(()=>{const e=o.length>b+5;return Object(r.createElement)(r.Fragment,null,o.map((t,c)=>Object(r.createElement)(r.Fragment,{key:t.value},Object(r.createElement)("li",e&&!d&&c>=b&&{hidden:!0},Object(r.createElement)(l.CheckboxControl,{id:t.value,className:"wc-block-checkbox-list__checkbox",label:t.label,checked:s.includes(t.value),onChange:()=>{n(t.value)},disabled:u})),e&&c===b-1&&f)),e&&O)},[o,n,s,d,b,O,f,u]),j=a()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":i},t);return Object(r.createElement)("ul",{className:j},i?g:m)}},16:function(e,t){e.exports=window.wp.url},167:function(e,t){},168:function(e,t){},182:function(e){e.exports=JSON.parse('{"name":"woocommerce/rating-filter","version":"1.0.0","title":"Filter by Rating Controls","description":"Enable customers to filter the product grid by rating.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"__experimentalDefaultControls":{"text":true}},"inserter":false,"lock":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"showCounts":{"type":"boolean","default":true},"displayStyle":{"type":"string","default":"list"},"showFilterButton":{"type":"boolean","default":false},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},194:function(e,t){},195:function(e,t){},2:function(e,t){e.exports=window.wc.wcSettings},20:function(e,t,n){"use strict";n.d(t,"n",(function(){return o})),n.d(t,"l",(function(){return a})),n.d(t,"k",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"i",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return b})),n.d(t,"j",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return f})),n.d(t,"a",(function(){return O})),n.d(t,"h",(function(){return m})),n.d(t,"b",(function(){return j}));var r,c=n(2);const o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),a=o.pluginUrl+"images/",l=o.pluginUrl+"build/",s=o.buildPhase,i=null===(r=c.STORE_PAGES.shop)||void 0===r?void 0:r.permalink,u=c.STORE_PAGES.checkout.id,b=(c.STORE_PAGES.checkout.permalink,c.STORE_PAGES.privacy.permalink),d=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),p=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),g=c.STORE_PAGES.cart.permalink,f=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),O=Object(c.getSetting)("allowedCountries",{}),m=Object(c.getSetting)("shippingStates",{}),j=Object(c.getSetting)("allowedStates",{})},235:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u}));var r=n(16),c=n(2),o=n(128);const a=Object(c.getSettingWithCoercion)("is_rendering_php_template",!1,o.a),l="query_type_",s="filter_";function i(e){return window?Object(r.getQueryArg)(window.location.href,e):null}function u(e){a?window.location.href=e:window.history.replaceState({},"",e)}},26:function(e,t){e.exports=window.wp.isShallowEqual},266:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),c=n(249),o=n(8),a=n(40),l=n(33),s=n(55),i=n(106),u=n(46);const b=e=>{let{queryAttribute:t,queryPrices:n,queryStock:b,queryRating:d,queryState:p,productIds:g,isEditor:f=!1}=e,O=Object(u.a)();O+="-collection-data";const[m]=Object(s.a)(O),[j,w]=Object(s.b)("calculate_attribute_counts",[],O),[_,h]=Object(s.b)("calculate_price_range",null,O),[y,k]=Object(s.b)("calculate_stock_status_counts",null,O),[E,v]=Object(s.b)("calculate_rating_counts",null,O),S=Object(a.a)(t||{}),C=Object(a.a)(n),x=Object(a.a)(b),T=Object(a.a)(d);Object(r.useEffect)(()=>{"object"==typeof S&&Object.keys(S).length&&(j.find(e=>Object(l.b)(S,"taxonomy")&&e.taxonomy===S.taxonomy)||w([...j,S]))},[S,j,w]),Object(r.useEffect)(()=>{_!==C&&void 0!==C&&h(C)},[C,h,_]),Object(r.useEffect)(()=>{y!==x&&void 0!==x&&k(x)},[x,k,y]),Object(r.useEffect)(()=>{E!==T&&void 0!==T&&v(T)},[T,v,E]);const[N,R]=Object(r.useState)(f),[P]=Object(c.a)(N,200);N||R(!0);const A=Object(r.useMemo)(()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(o.sortBy)(e.calculate_attribute_counts.map(e=>{let{taxonomy:t,queryType:n}=e;return{taxonomy:t,query_type:n}}),["taxonomy","query_type"])),t})(m),[m]);return Object(i.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...p,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...!Object(o.isEmpty)(g)&&{include:g},...A},shouldSelect:P,isEditor:f})}},29:function(e,t,n){"use strict";var r=n(0),c=n(4),o=n.n(c);t.a=e=>{let t,{label:n,screenReaderLabel:c,wrapperElement:a,wrapperProps:l={}}=e;const s=null!=n,i=null!=c;return!s&&i?(t=a||"span",l={...l,className:o()(l.className,"screen-reader-text")},Object(r.createElement)(t,l,c)):(t=a||r.Fragment,s&&i&&n!==c?Object(r.createElement)(t,l,Object(r.createElement)("span",{"aria-hidden":"true"},n),Object(r.createElement)("span",{className:"screen-reader-text"},c)):Object(r.createElement)(t,l,n))}},3:function(e,t){e.exports=window.wp.components},33:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));const r=e=>!(e=>null===e)(e)&&e instanceof Object&&e.constructor===Object;function c(e,t){return r(e)&&t in e}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),c=n(26),o=n.n(c);function a(e){const t=Object(r.useRef)(e);return o()(e,t.current)||(t.current=e),t.current}},409:function(e,t,n){e.exports=n(483)},410:function(e,t){},45:function(e,t){e.exports=window.wp.a11y},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);const c=Object(r.createContext)("page"),o=()=>Object(r.useContext)(c);c.Provider},47:function(e,t){e.exports=window.wp.deprecated},483:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),o=n(0),a=n(9),l=n(79),s=n(520),i=n(4),u=n.n(i),b=n(5),d=n(1),p=n(3),g=n(45),f=n(535),O=e=>{let{className:t,rating:n,ratedProductsCount:r}=e;const c=u()("wc-block-components-product-rating",t),a={width:n/5*100+"%"},l=Object(d.sprintf)(
/* translators: %f is referring to the average rating value */
Object(d.__)("Rated %f out of 5","woo-gutenberg-products-block"),n),s={__html:Object(d.sprintf)(
/* translators: %s is the rating value wrapped in HTML strong tags. */
Object(d.__)("Rated %s out of 5","woo-gutenberg-products-block"),Object(d.sprintf)('<strong class="rating">%f</strong>',n))};return Object(o.createElement)("div",{className:c},Object(o.createElement)("div",{className:"wc-block-components-product-rating__stars",role:"img","aria-label":l},Object(o.createElement)("span",{style:a,dangerouslySetInnerHTML:s})),null!==r?Object(o.createElement)("span",{className:"wc-block-components-product-rating-count"},"(",r,")"):null)},m=n(133),j=n(40),w=n(104),_=n(533),h=n(55),y=n(266),k=n(2),E=n(128),v=n(33),S=n(26),C=n.n(S),x=n(156),T=n(127),N=n(126),R=n(155),P=n(16),A=n(235),L=n(8);const F=[{label:Object(o.createElement)(O,{className:"",key:5,rating:5,ratedProductsCount:5}),value:"5"},{label:Object(o.createElement)(O,{className:"",key:4,rating:4,ratedProductsCount:4}),value:"4"},{label:Object(o.createElement)(O,{className:"",key:3,rating:3,ratedProductsCount:3}),value:"3"},{label:Object(o.createElement)(O,{className:"",key:2,rating:2,ratedProductsCount:2}),value:"2"},{label:Object(o.createElement)(O,{className:"",key:1,rating:1,ratedProductsCount:1}),value:"1"}];n(410);var M=n(84),B=n(182);function G(){return Math.floor(Math.random()*Date.now())}const q=e=>e.trim().replace(/\s/g,"-").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,"");var D=n(103);const Q=e=>Object(d.sprintf)(
/* translators: %s is referring to the average rating value */
Object(d.__)("Rated %s out of 5 filter added.","woo-gutenberg-products-block"),e),Y=e=>Object(d.sprintf)(
/* translators: %s is referring to the average rating value */
Object(d.__)("Rated %s out of 5 filter added.","woo-gutenberg-products-block"),e);var U=e=>{let{attributes:t,isEditor:n}=e;const r=Object(D.a)(),c=Object(k.getSettingWithCoercion)("is_rendering_php_template",!1,E.a),[a,s]=Object(o.useState)(!1),[i]=Object(h.a)(),{results:b,isLoading:p}=Object(y.a)({queryRating:!0,queryState:i,isEditor:n}),[S,B]=Object(o.useState)(t.isPreview?F:[]),U=!t.isPreview&&p&&0===S.length,I=!t.isPreview&&p,V=Object(o.useMemo)(()=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"filter_rating";const t=Object(A.d)(e);if(!t)return[];const n=Object(M.a)(t)?t.split(","):t;return n}("rating_filter"),[]),[K,W]=Object(o.useState)(V),[J,z]=Object(h.b)("rating",V),[H,Z]=Object(o.useState)(G()),$=Object(m.a)(t),[X,ee]=Object(o.useState)(!1),te="single"!==t.selectType,ne=Object(o.useCallback)(e=>{n||(e&&!c&&z(e),(e=>{if(!window)return;if(0===e.length){const e=Object(P.removeQueryArgs)(window.location.href,"rating_filter");return void(e!==window.location.href&&Object(A.c)(e))}const t=Object(P.addQueryArgs)(window.location.href,{rating_filter:e.join(",")});t!==window.location.href&&Object(A.c)(t)})(e))},[n,z,c]);Object(o.useEffect)(()=>{t.showFilterButton||ne(K)},[t.showFilterButton,K,ne]);const re=Object(o.useMemo)(()=>J,[J]),ce=Object(j.a)(re),oe=Object(w.a)(ce);Object(o.useEffect)(()=>{C()(oe,ce)||C()(K,ce)||W(ce)},[K,ce,oe]),Object(o.useEffect)(()=>{a||(z(V),s(!0))},[z,a,s,V]),Object(o.useEffect)(()=>{if(p||t.isPreview)return;const e=!p&&Object(v.b)(b,"rating_counts")&&Array.isArray(b.rating_counts)?[...b.rating_counts].reverse():[];if(n&&0===e.length)return B(F),void ee(!0);const r=e.filter(e=>Object(v.a)(e)&&Object.keys(e).length>0).map(e=>{var n;return{label:Object(o.createElement)(O,{key:null==e?void 0:e.rating,rating:null==e?void 0:e.rating,ratedProductsCount:t.showCounts?null==e?void 0:e.count:null}),value:null==e||null===(n=e.rating)||void 0===n?void 0:n.toString()}});B(r),Z(G())},[t.showCounts,t.isPreview,b,p,J,n]);const ae=Object(o.useCallback)(e=>{const t=K.includes(e);if(!te){const n=t?[]:[e];return Object(g.speak)(t?Y(e):Q(e)),void W(n)}if(t){const t=K.filter(t=>t!==e);return Object(g.speak)(Y(e)),void W(t)}const n=[...K,e].sort((e,t)=>Number(t)-Number(e));Object(g.speak)(Q(e)),W(n)},[K,te]);return(p||0!==S.length)&&Object(k.getSettingWithCoercion)("has_filterable_products",!1,E.a)?(r(!0),Object(o.createElement)(o.Fragment,null,X&&Object(o.createElement)(_.a,{status:"warning",isDismissible:!1},Object(o.createElement)("p",null,Object(d.__)("Your store doesn't have any products with ratings yet. This filter option will display when a product receives a review.","woo-gutenberg-products-block"))),Object(o.createElement)("div",{className:u()("wc-block-rating-filter","style-"+t.displayStyle,{"is-loading":U})},"dropdown"===t.displayStyle?Object(o.createElement)(o.Fragment,null,Object(o.createElement)(R.a,{key:H,className:u()($.className,{"single-selection":!te,"is-loading":U}),style:{...$.style,borderStyle:"none"},suggestions:S.filter(e=>!K.includes(e.value)).map(e=>e.value),disabled:U,placeholder:Object(d.__)("Select Rating","woo-gutenberg-products-block"),onChange:e=>{!te&&e.length>1&&(e=[e[e.length-1]]),e=e.map(e=>{const t=S.find(t=>t.value===e);return t?t.value:e});const t=Object(L.difference)(e,K);if(1===t.length)return ae(t[0]);const n=Object(L.difference)(K,e);1===n.length&&ae(n[0])},value:K,displayTransform:e=>{const t={value:e,label:Object(o.createElement)(O,{key:Number(e),rating:Number(e),ratedProductsCount:0})},n=S.find(t=>t.value===e)||t,{label:r,value:c}=n;return Object.assign({},r,{toLocaleLowerCase:()=>c,substring:(e,t)=>0===e&&1===t?r:""})},saveTransform:q,messages:{added:Object(d.__)("Rating filter added.","woo-gutenberg-products-block"),removed:Object(d.__)("Rating filter removed.","woo-gutenberg-products-block"),remove:Object(d.__)("Remove rating filter.","woo-gutenberg-products-block"),__experimentalInvalid:Object(d.__)("Invalid rating filter.","woo-gutenberg-products-block")}}),te&&Object(o.createElement)(l.a,{icon:f.a,size:30})):Object(o.createElement)(x.a,{className:"wc-block-rating-filter-list",options:S,checked:K,onChange:e=>{ae(e.toString())},isLoading:U,isDisabled:I})),Object(o.createElement)("div",{className:"wc-block-rating-filter__actions"},K.length>0&&!U&&Object(o.createElement)(N.a,{onClick:()=>{W([]),setProductRatings([]),ne([])},screenReaderLabel:Object(d.__)("Reset rating filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(o.createElement)(T.a,{className:"wc-block-rating-filter__button",isLoading:U,disabled:U||I,onClick:()=>ne(K)})))):(r(!1),null)},I=Object(p.withSpokenMessages)(e=>{let{attributes:t,setAttributes:n}=e;const{className:r,displayStyle:c,showCounts:a,showFilterButton:l,selectType:s}=t,i=Object(b.useBlockProps)({className:u()("wc-block-rating-filter",r)});return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(b.InspectorControls,{key:"inspector"},Object(o.createElement)(p.PanelBody,{title:Object(d.__)("Display Settings","woo-gutenberg-products-block")},Object(o.createElement)(p.ToggleControl,{label:Object(d.__)("Display product count","woo-gutenberg-products-block"),checked:a,onChange:()=>n({showCounts:!a})}),Object(o.createElement)(p.__experimentalToggleGroupControl,{label:Object(d.__)("Allow selecting multiple options?","woo-gutenberg-products-block"),value:s||"multiple",onChange:e=>n({selectType:e}),className:"wc-block-attribute-filter__multiple-toggle"},Object(o.createElement)(p.__experimentalToggleGroupControlOption,{value:"multiple",label:Object(d.__)("Multiple","woo-gutenberg-products-block")}),Object(o.createElement)(p.__experimentalToggleGroupControlOption,{value:"single",label:Object(d.__)("Single","woo-gutenberg-products-block")})),Object(o.createElement)(p.__experimentalToggleGroupControl,{label:Object(d.__)("Display Style","woo-gutenberg-products-block"),value:c,onChange:e=>n({displayStyle:e}),className:"wc-block-attribute-filter__display-toggle"},Object(o.createElement)(p.__experimentalToggleGroupControlOption,{value:"list",label:Object(d.__)("List","woo-gutenberg-products-block")}),Object(o.createElement)(p.__experimentalToggleGroupControlOption,{value:"dropdown",label:Object(d.__)("Dropdown","woo-gutenberg-products-block")})),Object(o.createElement)(p.ToggleControl,{label:Object(d.__)("Show 'Apply filters' button","woo-gutenberg-products-block"),help:l?Object(d.__)("Products will only update when the button is clicked.","woo-gutenberg-products-block"):Object(d.__)("Products will update as soon as attributes are selected.","woo-gutenberg-products-block"),checked:l,onChange:e=>n({showFilterButton:e})}))),Object(o.createElement)("div",i,Object(o.createElement)(p.Disabled,null,Object(o.createElement)(U,{attributes:t,isEditor:!0}))))});Object(a.registerBlockType)(B,{icon:{src:Object(o.createElement)(l.a,{icon:s.a,className:"wc-block-editor-components-block-icon"})},attributes:{...B.attributes},edit:I,save(e){let{attributes:t}=e;const{className:n,showCounts:r}=t,a={"data-show-counts":r};return Object(o.createElement)("div",c()({},b.useBlockProps.save({className:u()("is-loading",n)}),a),Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-rating-filter__placeholder"}))}})},5:function(e,t){e.exports=window.wp.blockEditor},54:function(e,t){e.exports=window.wp.keycodes},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p}));var r=n(10),c=n(7),o=n(0),a=n(26),l=n.n(a),s=n(40),i=n(104),u=n(46);const b=e=>{const t=Object(u.a)();e=e||t;const n=Object(c.useSelect)(t=>t(r.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0),[e]),{setValueForQueryContext:a}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[n,Object(o.useCallback)(t=>{a(e,t)},[e,a])]},d=(e,t,n)=>{const a=Object(u.a)();n=n||a;const l=Object(c.useSelect)(c=>c(r.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t),[n,e]),{setQueryValue:s}=Object(c.useDispatch)(r.QUERY_STATE_STORE_KEY);return[l,Object(o.useCallback)(t=>{s(n,e,t)},[n,e,s])]},p=(e,t)=>{const n=Object(u.a)();t=t||n;const[r,c]=b(t),a=Object(s.a)(r),d=Object(s.a)(e),p=Object(i.a)(d),g=Object(o.useRef)(!1);return Object(o.useEffect)(()=>{l()(p,d)||(c(Object.assign({},a,d)),g.current=!0)},[a,d,p,c]),g.current?[r,c]:[e,c]}},56:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l}));var r=n(9),c=n(20);const o=(e,t)=>{if(c.m>2)return Object(r.registerBlockType)(e,t)},a=()=>c.m>2,l=()=>c.m>1},67:function(e,t){e.exports=window.wp.dom},7:function(e,t){e.exports=window.wp.data},8:function(e,t){e.exports=window.lodash},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));const r=e=>"string"==typeof e},9:function(e,t){e.exports=window.wp.blocks},95:function(e,t){e.exports=window.wp.warning},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(84),c=n(33);const o=e=>Object(r.a)(e)?JSON.parse(e)||{}:Object(c.a)(e)?e:{}}});