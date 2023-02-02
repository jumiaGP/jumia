!function(){"use strict";var e={n:function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,{a:o}),o},d:function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.i18n,o=window.wp.blocks,r=window.wp.plugins,c=window.wp.element,n=window.wp.primitives,l=(0,c.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,c.createElement)(n.Path,{d:"M18.2 17c0 .7-.6 1.2-1.2 1.2H7c-.7 0-1.2-.6-1.2-1.2V7c0-.7.6-1.2 1.2-1.2h3.2V4.2H7C5.5 4.2 4.2 5.5 4.2 7v10c0 1.5 1.2 2.8 2.8 2.8h10c1.5 0 2.8-1.2 2.8-2.8v-3.6h-1.5V17zM14.9 3v1.5h3.7l-6.4 6.4 1.1 1.1 6.4-6.4v3.7h1.5V3h-6.3z"})),i=window.lodash,s=window.wp.apiFetch,a=e.n(s),p=window.wp.components,d=window.wp.data,w=window.wp.blockEditor,u=(0,p.withNotices)((e=>{let{clientId:r,attributes:n,noticeOperations:l,noticeUI:i}=e;(0,c.useEffect)((()=>{n.file&&b(n.file)}),[]);const[s,u]=(0,c.useState)(!1),{replaceBlocks:m}=(0,d.useDispatch)("core/block-editor"),b=e=>{u(!0);const n=e[0];if("application/json"!==n.type){const e=[(0,c.createElement)("strong",{key:"filename"},n.name),": ",(0,t.__)("Sorry, only JSON files are supported here.","otter-blocks")];return l.removeAllNotices(),l.createErrorNotice(e),void u(!1)}const i=new FileReader;i.onload=async()=>{let e;try{e=JSON.parse(i.result)}catch(e){return l.removeAllNotices(),l.createErrorNotice((0,t.__)("Invalid JSON file","otter-blocks")),void u(!1)}if(e.__file&&e.content&&"wp_export"===e.__file&&(e=(0,o.parse)(e.content)),e.__file&&e.content&&"wp_block"===e.__file){const r=await a()({path:"/wp/v2/types/wp_block"}),c=await a()({path:`/wp/v2/${r.rest_base}`,data:{title:e.title||(0,t.__)("Untitled Reusable Block","otter-blocks"),content:e.content,status:"publish"},method:"POST"});if(!c.id)return l.removeAllNotices(),l.createErrorNotice((0,t.__)("Invalid Reusable Block JSON file","otter-blocks")),void u(!1);e=`\x3c!-- wp:block { "ref": ${c.id} } /--\x3e`,e=(0,o.parse)(e)}m(r,e),u(!1)},i.readAsText(n)},_=(0,w.useBlockProps)();return s?(0,c.createElement)("div",_,(0,c.createElement)(p.Placeholder,null,(0,c.createElement)(p.Spinner,null))):(0,c.createElement)("div",_,(0,c.createElement)(p.Placeholder,{label:(0,t.__)("Import Blocks from JSON","otter-blocks"),instructions:(0,t.__)("Upload JSON file from your device.","otter-blocks"),icon:"category",notices:i},(0,c.createElement)(p.FormFileUpload,{accept:"text/json",onChange:e=>b(e.target.files),isSecondary:!0},(0,t.__)("Upload")),(0,c.createElement)(p.DropZone,{label:(0,t.__)("Import from JSON","otter-blocks"),onFilesDrop:b})))}));(0,o.registerBlockType)("themeisle-blocks/importer",{apiVersion:2,title:(0,t.__)("Import Blocks from JSON","otter-blocks"),description:(0,t.__)("Allows you import blocks from a JSON file.","blocks-export-import"),icon:"category",category:"widgets",keywords:[(0,t.__)("JSON","otter-blocks"),(0,t.__)("Importer","otter-blocks"),(0,t.__)("Import","blocks-export-import")],attributes:{file:{type:"object"}},transforms:{from:[{type:"files",isMatch:e=>"application/json"===e[0].type,transform:e=>(0,o.createBlock)("themeisle-blocks/importer",{file:e})}]},edit:u,save:()=>null}),(0,r.registerPlugin)("blocks-export-import",{render:()=>{const{blocks:e,count:r}=(0,d.useSelect)((e=>{const{getSelectedBlockCount:t,getSelectedBlock:o,getMultiSelectedBlocks:r}=e("core/block-editor");return{blocks:1===t()?o():r(),count:t()}}),[]),{createNotice:n}=(0,d.useDispatch)("core/notices"),s=async()=>{if(!e)return;let c,l;if(1===r&&"core/block"===e.name){const t=e.attributes.ref,o=await a()({path:"/wp/v2/types/wp_block"});let r;try{r=await a()({path:`/wp/v2/${o.rest_base}/${t}?context=edit`})}catch(e){return void(e.message&&n("error",e.message,{type:"snackbar"}))}const s=r.title.raw,p=r.content.raw;l=(0,i.kebabCase)(s)+".json",c={__file:"wp_block",title:s,content:p}}else l="blocks-export.json",c={__file:"wp_export",version:2,content:(0,o.serialize)(e)};const s=JSON.stringify({...c},null,2);n("success",(0,t.__)("Blocks exported.","otter-blocks"),{type:"snackbar"}),((e,t,o)=>{const r=new window.Blob([t],{type:"application/json"});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(r,e);else{const t=document.createElement("a");t.href=URL.createObjectURL(r),t.download=e,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)}})(l,s)};return(0,c.createElement)(w.BlockSettingsMenuControls,null,(()=>(0,c.createElement)(p.MenuItem,{icon:l,onClick:s},(0,t.__)("Export as JSON","otter-blocks"))))}})}();