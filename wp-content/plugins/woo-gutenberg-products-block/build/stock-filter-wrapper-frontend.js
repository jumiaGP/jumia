(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[84],{104:function(e,t,c){"use strict";c.d(t,"c",(function(){return l})),c.d(t,"b",(function(){return r})),c.d(t,"a",(function(){return a})),c.d(t,"d",(function(){return i}));var s=c(22),n=c(70),o=c(135);const l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"filter_stock_status";const c=Object(n.d)(t);if(!c)return[];const o=Object(s.a)(c)?c.split(","):c;return Object.keys(e).filter(e=>o.includes(e))};function r(){return Math.floor(Math.random()*Date.now())}const a=e=>e.trim().replace(/\s/g,"").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,""),i=e=>({heading:Object(s.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(s.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||o.attributes.headingLevel.default,showFilterButton:"true"===(null==e?void 0:e.showFilterButton),showCounts:"false"!==(null==e?void 0:e.showCounts),isPreview:!1,displayStyle:Object(s.a)(null==e?void 0:e.displayStyle)&&e.displayStyle||o.attributes.displayStyle.default,selectType:Object(s.a)(null==e?void 0:e.selectType)&&e.selectType||o.attributes.selectType.default})},135:function(e){e.exports=JSON.parse('{"name":"woocommerce/stock-filter","version":"1.0.0","title":"Filter by Stock Controls","description":"Enable customers to filter the product grid by stock status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":{"link":true,"__experimentalDefaultControls":{"text":true}},"inserter":false,"lock":false},"example":{"attributes":{"isPreview":true}},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"showCounts":{"type":"boolean","default":true},"showFilterButton":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woo-gutenberg-products-block","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},158:function(e,t,c){"use strict";var s=c(0),n=c(1),o=c(26),l=c(73),r=c(152),a=c(148),i=c(29),u=c(59),b=c(31),d=c(137),f=c(2),O=c(92),m=c(67),j=c(66),g=c(65),p=c(60),k=c(91),v=c(13),w=c.n(v),h=c(30),y=c(71),_=c(19),E=c(14),S=c(70),C=c(6),L=c(7),N=c.n(L);const x=[{value:"preview-1",name:"In Stock",label:Object(s.createElement)(p.a,{name:"In Stock",count:3}),textLabel:"In Stock (3)"},{value:"preview-2",name:"Out of stock",label:Object(s.createElement)(p.a,{name:"Out of stock",count:3}),textLabel:"Out of stock (3)"},{value:"preview-3",name:"On backorder",label:Object(s.createElement)(p.a,{name:"On backorder",count:2}),textLabel:"On backorder (2)"}];c(219);var A=c(104),F=c(43);const P=S.a+"stock_status";t.a=e=>{let{attributes:t,isEditor:c=!1}=e;const v=Object(F.b)(),L=Object(f.getSettingWithCoercion)("is_rendering_php_template",!1,y.a),[B,I]=Object(s.useState)(!1),{outofstock:T,...R}=Object(f.getSetting)("stockStatusOptions",{}),W=c?[]:Object(f.getSettingWithCoercion)("product_ids",[],Array.isArray),M=Object(s.useRef)(Object(f.getSetting)("hideOutOfStockItems",!1)?R:{outofstock:T,...R}),D=Object(s.useMemo)(()=>Object(A.c)(M.current,P),[]),[J,$]=Object(s.useState)(D),[q,z]=Object(s.useState)(t.isPreview?x:[]),[Q]=Object(s.useState)(Object.entries(M.current).map(e=>{let[t,c]=e;return{slug:t,name:c}}).filter(e=>!!e.name).sort((e,t)=>e.slug.localeCompare(t.slug))),[U]=Object(b.a)(),[V,Z]=Object(b.b)("stock_status",D),{results:G,isLoading:H}=Object(d.a)({queryStock:!0,queryState:U,productIds:W,isEditor:c}),K=Object(s.useCallback)(e=>Object(_.b)(G,"stock_status_counts")&&Array.isArray(G.stock_status_counts)?G.stock_status_counts.find(t=>{let{status:c,count:s}=t;return c===e&&0!==Number(s)}):null,[G]),[X,Y]=Object(s.useState)(Object(A.b)()),ee=Object(a.a)(t);Object(s.useEffect)(()=>{if(H||t.isPreview)return;const e=Q.map(e=>{const c=K(e.slug);if(!(c||J.includes(e.slug)||(n=e.slug,null!=U&&U.stock_status&&U.stock_status.some(e=>{let{status:t=[]}=e;return t.includes(n)}))))return null;var n;const o=c?Number(c.count):0;return{value:e.slug,name:Object(h.decodeEntities)(e.name),label:Object(s.createElement)(p.a,{name:Object(h.decodeEntities)(e.name),count:t.showCounts?o:null}),textLabel:t.showCounts?`${Object(h.decodeEntities)(e.name)} (${o})`:Object(h.decodeEntities)(e.name)}}).filter(e=>!!e);z(e),Y(Object(A.b)())},[t.showCounts,t.isPreview,H,K,J,U.stock_status,Q]);const te="single"!==t.selectType,ce=Object(s.useCallback)(e=>{c||(e&&!L&&Z(e),(e=>{if(!window)return;if(0===e.length){const e=Object(E.removeQueryArgs)(window.location.href,P);return void(e!==window.location.href&&Object(S.c)(e))}const t=Object(E.addQueryArgs)(window.location.href,{[P]:e.join(",")});t!==window.location.href&&Object(S.c)(t)})(e))},[c,Z,L]);Object(s.useEffect)(()=>{t.showFilterButton||ce(J)},[t.showFilterButton,J,ce]);const se=Object(s.useMemo)(()=>V,[V]),ne=Object(i.a)(se),oe=Object(u.a)(ne);Object(s.useEffect)(()=>{w()(oe,ne)||w()(J,ne)||$(ne)},[J,ne,oe]),Object(s.useEffect)(()=>{B||(Z(D),I(!0))},[Z,B,I,D]);const le=Object(s.useCallback)(e=>{const t=e=>{const t=q.find(t=>t.value===e);return t?t.name:null},c=e=>{let{filterAdded:c,filterRemoved:s}=e;const l=c?t(c):null,r=s?t(s):null;l?Object(o.speak)(Object(n.sprintf)(
/* translators: %s stock statuses (for example: 'instock'...) */
Object(n.__)("%s filter added.","woo-gutenberg-products-block"),l)):r&&Object(o.speak)(Object(n.sprintf)(
/* translators: %s stock statuses (for example:'instock'...) */
Object(n.__)("%s filter removed.","woo-gutenberg-products-block"),r))},s=J.includes(e);if(!te){const t=s?[]:[e];return c(s?{filterRemoved:e}:{filterAdded:e}),void $(t)}if(s){const t=J.filter(t=>t!==e);return c({filterRemoved:e}),void $(t)}const l=[...J,e].sort();c({filterAdded:e}),$(l)},[J,te,q]);if(!H&&0===q.length)return v(!1),null;const re="h"+t.headingLevel,ae=!t.isPreview&&!M.current||0===q.length,ie=!t.isPreview&&H;if(!Object(f.getSettingWithCoercion)("has_filterable_products",!1,y.a))return v(!1),null;const ue=Object(s.createElement)(re,{className:"wc-block-stock-filter__title"},t.heading),be=ae?Object(s.createElement)(g.a,null,ue):ue;return v(!0),Object(s.createElement)(s.Fragment,null,!c&&t.heading&&be,Object(s.createElement)("div",{className:N()("wc-block-stock-filter","style-"+t.displayStyle,{"is-loading":ae})},"dropdown"===t.displayStyle?Object(s.createElement)(s.Fragment,null,Object(s.createElement)(k.a,{key:X,className:N()(ee.className,{"single-selection":!te,"is-loading":ae}),style:{...ee.style},suggestions:q.filter(e=>!J.includes(e.value)).map(e=>e.value),disabled:ae,placeholder:Object(n.__)("Select stock status","woo-gutenberg-products-block"),onChange:e=>{!te&&e.length>1&&(e=e.slice(-1)),e=e.map(e=>{const t=q.find(t=>t.value===e);return t?t.value:e});const t=Object(C.difference)(e,J);if(1===t.length)return le(t[0]);const c=Object(C.difference)(J,e);1===c.length&&le(c[0])},value:J,displayTransform:e=>{const t=q.find(t=>t.value===e);return t?t.textLabel:e},saveTransform:A.a,messages:{added:Object(n.__)("Stock filter added.","woo-gutenberg-products-block"),removed:Object(n.__)("Stock filter removed.","woo-gutenberg-products-block"),remove:Object(n.__)("Remove stock filter.","woo-gutenberg-products-block"),__experimentalInvalid:Object(n.__)("Invalid stock filter.","woo-gutenberg-products-block")}}),te&&Object(s.createElement)(l.a,{icon:r.a,size:30})):Object(s.createElement)(O.a,{className:"wc-block-stock-filter-list",options:q,checked:J,onChange:le,isLoading:ae,isDisabled:ie})),Object(s.createElement)("div",{className:"wc-block-stock-filter__actions"},J.length>0&&!ae&&Object(s.createElement)(j.a,{onClick:()=>{$([]),ce([])},screenReaderLabel:Object(n.__)("Reset stock filter","woo-gutenberg-products-block")}),t.showFilterButton&&Object(s.createElement)(m.a,{className:"wc-block-stock-filter__button",isLoading:ae,disabled:ae||ie,onClick:()=>ce(J)})))}},219:function(e,t){},277:function(e,t,c){"use strict";c.d(t,"a",(function(){return r}));var s=c(61),n=c(112),o=c(19),l=c(113);const r=e=>{if(!Object(n.a)())return{className:"",style:{}};const t=Object(o.a)(e)?e:{},c=Object(l.a)(t.style);return Object(s.__experimentalUseColorProps)({...t,style:c})}},440:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(277),o=c(22),l=c(158),r=c(104);t.default=e=>{const t=Object(n.a)(e);return Object(s.createElement)("div",{className:Object(o.a)(e.className)?e.className:"",style:{...t.style}},Object(s.createElement)(l.a,{isEditor:!1,attributes:Object(r.d)(e)}))}}}]);