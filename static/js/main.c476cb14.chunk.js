(this["webpackJsonptest-flow"]=this["webpackJsonptest-flow"]||[]).push([[0],{175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},294:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(22),c=n.n(r),l=(n(175),n(176),n(72)),i=n(14),d=n(33),s=(n(177),n(26)),u=n(4),p=function(e){var t=e.data;return Object(u.jsxs)("span",{children:[Object(u.jsxs)("div",{className:"diamond",children:[Object(u.jsx)(s.c,{type:"source",position:"top",id:"diamond-1"}),Object(u.jsx)("span",{style:{margin:"0 auto"},children:t.label}),Object(u.jsx)(s.c,{type:"source",position:"right",style:{right:"-20%"},id:"diamond-2"}),Object(u.jsx)(s.c,{type:"target",position:"left",style:{left:"-20%"},id:"diamond-3"}),Object(u.jsx)(s.c,{type:"target",position:"bottom",id:"diamond-4"})]}),Object(u.jsx)("div",{style:{position:"absolute",content:"",top:0,left:0,height:"100%",width:"100%",transform:"rotateX(45deg) rotateZ(45deg)",backgroundColor:t.color,border:"1px solid black",zIndex:-1}})]})},b=function(e){var t=e.data;return Object(u.jsxs)("div",{children:[t.icon&&Object(u.jsx)(u.Fragment,{children:t.icon}),t.text&&Object(u.jsx)("span",{children:t.text})]})},j=function(e){var t=e.data;return Object(u.jsxs)("div",{className:"circle",style:t.style,children:[Object(u.jsx)(s.c,{type:"target",position:"top",id:"circle-1"}),Object(u.jsx)(s.c,{type:"source",position:"left",id:"circle-2",hidden:!0}),Object(u.jsx)(b,{data:t}),Object(u.jsx)(s.c,{type:"source",position:"right",id:"circle-3",hidden:!0}),Object(u.jsx)(s.c,{type:"source",position:"bottom",id:"circle-4",hidden:!0})]})},h=n(305),m=n(84),g=n(304),f=n(303),O=n(301),x=n(167),v=function(e){return Object(u.jsx)(x.a,Object(i.a)(Object(i.a)({},e),{},{children:e.text}))},y=n(299),A=y.a.Title,w=n(5),N=n.n(w),E=function(e,t){return"SET_ELEMENT"===t.type?Object(i.a)(Object(i.a)({},e),{},{selectedElement:Object(i.a)({},t.payload)}):e},T={selectedTree:[],selectedElement:null},P=Object(a.createContext)(T),k=function(e){var t=e.children,n=Object(a.useReducer)(E,T),o=Object(d.a)(n,2),r=o[0],c=o[1];return Object(u.jsx)(P.Provider,{value:{selectedElement:r.selectedElement,setEditableElement:function(e){c({type:"SET_ELEMENT",payload:e})}},children:t})},C={space:g.b,paragraph:function(e){return Object(u.jsx)("p",Object(i.a)(Object(i.a)({},e),{},{children:e.text}))},title:function(e){return Object(u.jsx)(A,{children:e.text})},row:f.a,input:O.a,button:v,handle:s.c},S={diamond:p,circle:j,img:function(e){var t=e.data;return Object(u.jsxs)("div",{style:{border:"1px solid black"},children:[Object(u.jsx)("img",{src:t.image,alt:t.alt}),Object(u.jsx)(s.c,{type:"target",position:"top"})]})},module:function(e){var t=e.data,n=e.selected,a=t.interactive,o=t.module,r=["module-node",n?"edit-module":""];return Object(u.jsx)("div",{className:N()(r),style:{border:"1px solid #A3A3A3"},children:a?Object(u.jsx)(o,{component:t.domTree.component,props:t.domTree.props,innerProps:t.domTree.innerProps,selected:t.domTree.selected,children:t.domTree.children}):Object(u.jsx)(o,{data:t})})}},D=[{id:"1",data:{label:"Successful Login Screen!"},position:{x:782,y:429}},{id:"22",type:"module",data:{title:"Login",module:function e(t){var n=t.customid,r=t.component,c=t.selected,l=t.props,d=t.internalProps,s=void 0===d?{}:d,p=t.children,b=t.handleClick,j=void 0===b?function(e,t,n){}:b,h=Object(a.useContext)(P).setEditableElement;if("undefined"!==typeof C[r]){var m=[l.className,s.className,"".concat(c?"selected":"")],g=Object.assign({},l.style,s.style);return o.a.createElement(C[r],Object(i.a)(Object(i.a)(Object(i.a)({customid:n,key:n},l),s),{},{style:g,onClick:function(e){return function(e,t){"function"===typeof j&&h(t),e.stopPropagation()}(e,t)},className:N()(m)}),p&&p.map((function(t){return e(t)})))}return Object(u.jsx)("span",{children:"Unnknown element"})},domTree:function(e){var t,n=1;return function e(t){t.customid=n,t.key=n,t.selected=!1,t.title="".concat(t.component," ").concat(t.customid),n+=1;var a=t.children;if(a){var o,r=Object(m.a)(a);try{for(r.s();!(o=r.n()).done;){e(o.value)}}catch(c){r.e(c)}finally{r.f()}}return t}((t=e,JSON.parse(JSON.stringify(t))))}({component:"space",selected:!1,props:{direction:"vertical",style:{backgroundColor:"white",padding:"12px"}},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},children:[{component:"row",selected:!0,props:{justify:"space-between",style:{padding:"0 15px"}},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},children:[{selected:!1,component:"title",props:{text:"Login"},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},customid:3,key:3,title:"title 3"},{component:"paragraph",props:{text:"Login Error",style:{color:"red"}},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},customid:4,key:4,selected:!1,title:"paragraph 4"},{component:"handle",internal:!0,props:{type:"target",position:"right",id:"login-error-1",style:{top:"13%",right:"4%"}}},{component:"handle",internal:!0,props:{type:"input",position:"left"}}],customid:2,key:2,title:"row 2"},{component:"paragraph",props:{text:"Choose one of the following login styles"},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},customid:5,key:5,selected:!1,title:"paragraph 5"},{component:"space",props:{size:"small"},children:[{component:"button",props:{type:"primary",shape:"round",size:"middle",text:"With Facebook"},innerProps:{className:"dnd-element"},customid:7,key:7,selected:!1,title:"button 7"},{component:"button",props:{type:"danger",shape:"round",size:"middle",text:"With Google"},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},customid:8,key:8,selected:!1,title:"button 8"}],customid:6,key:6,selected:!1,title:"space 6"},{component:"paragraph",props:{text:"Or email address"},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},customid:9,key:9,selected:!1,title:"paragraph 9"},{component:"input",props:{placeholder:"Email"},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},customid:10,key:10,selected:!1,title:"input 10"},{component:"input",props:{placeholder:"password"},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},customid:11,key:11,selected:!1,title:"input 11"},{component:"handle",internal:!0,props:{type:"source",position:"right",id:"login-input-1",style:{top:"270px",position:"absolute",left:"96%"}}},{component:"handle",internal:!0,props:{type:"source",position:"right",id:"login-input-2",style:{top:"230px",position:"absolute",left:"96%"}}},{component:"row",props:{justify:"space-between"},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},children:[{component:"button",props:{type:"primary",shape:"round",size:"middle",text:"Login"},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},customid:13,key:13,selected:!1,title:"button 13"},{component:"paragraph",props:{text:"Create an Account"},internalProps:{bounds:"parent",className:"dnd-element",draggable:!1},customid:14,key:14,selected:!1,title:"paragraph 14"}],customid:12,key:12,selected:!1,title:"row 12"},{component:"handle",internal:!0,props:{type:"source",position:"bottom",id:"create-account-1",style:{left:"75%"}}},{component:"handle",internal:!0,props:{type:"source",position:"right",id:"login-right-1"}}],customid:1,key:1,title:"space 1"}),interactive:!0},position:{x:98,y:122}},{id:"3",type:"diamond",position:{x:626,y:314},data:{label:"SUCCESS",color:"#fdffdf"}},{id:"4",type:"img",position:{x:232,y:587},data:{image:"data:image/png;base64,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",alt:"Email Icon Image"}},{id:"5",type:"circle",position:{x:373,y:624},data:{icon:Object(u.jsx)(h.a,{style:{fontSize:"2.2rem"}})}},{source:"3",sourceHandle:"diamond-2",target:"1",targetHandle:null,label:"Yes",labelStyle:{fill:"green",fontWeight:700},type:"smoothstep",arrowHeadType:"arrowclosed",id:"reactflow__edge-3diamond-2-1null"},{source:"3",sourceHandle:"diamond-1",target:"22",targetHandle:"login-error-1",type:"smoothstep",label:"No",labelStyle:{fill:"red",fontWeight:700},arrowHeadType:"arrowclosed",id:"reactflow__edge-3diamond-1-22login-error-1"},{source:"22",sourceHandle:"login-right-1",target:"3",targetHandle:"diamond-3",type:"smoothstep",arrowHeadType:"arrowclosed",id:"reactflow__edge-22login-right-1-3diamond-3"},{source:"22",sourceHandle:"login-input-1",target:"5",targetHandle:"circle-1",type:"smoothstep",arrowHeadType:"arrowclosed",id:"reactflow__edge-22login-input-1-5circle-1"},{source:"22",sourceHandle:"login-input-2",target:"5",targetHandle:"circle-1",type:"smoothstep",arrowHeadType:"arrowclosed",id:"reactflow__edge-22login-input-2-5circle-1"},{source:"22",sourceHandle:"create-account-1",target:"4",type:"smoothstep",arrowHeadType:"arrowclosed",id:"create-account-email"}],H={input:{component:"input",props:{placeholder:"New Input Field"},internalProps:{bounds:"parent",className:"dnd-element"},selected:!1},paragraph:{component:"paragraph",selected:!1,props:{text:"New paragraph test.",style:{color:"red",width:"100px"}},internalProps:{bounds:"parent",className:"dnd-element",style:{resize:"both",overflow:"auto"}}}},B=n(302),I=n(298),J=n(164),Y=n(162),Q=n(161),U=B.a.Panel,F=y.a.Title,Z=y.a.Paragraph,G=function(e){var t=e.color,n=e.onChange,o=Object(a.useState)(t),r=Object(d.a)(o,2),c=r[0],l=r[1];return Object(a.useEffect)((function(){t&&l(t)}),[t,c]),Object(Q.a)((function(){return n(c)}),200,[c]),Object(u.jsx)(Y.a,{color:c,onChange:l})},L=function(e){var t,n,o=e.onUpdateName,r=void 0===o?null:o,c=e.selectedName,l=void 0===c?"":c,i=e.selected,s=void 0===i?null:i,p=e.onColorUpdate,b=void 0===p?function(){}:p,j=e.colorList,h=void 0===j?[]:j,m=e.color,g=void 0===m?"":m,f=function(e,t){e.dataTransfer.setData("application/reactflow",t),e.dataTransfer.effectAllowed="move"},O=Object(a.useState)(""),x=Object(d.a)(O,2),v=x[0],y=x[1];Object(a.useEffect)((function(){g&&y(g)}),[g]);var A=s&&s.id&&(null===(t=s.data)||void 0===t?void 0:t.label),w=s&&s.id&&(null===(n=s.data)||void 0===n?void 0:n.color);return Object(u.jsxs)("aside",{className:"right-bar",children:[Object(u.jsx)(F,{style:{padding:"0 10px"},level:3,children:"Design & Elements"}),Object(u.jsxs)(B.a,{defaultActiveKey:["3"],children:[Object(u.jsxs)(U,{header:"Draggable Nodes",children:[Object(u.jsx)("div",{className:"description",children:"These are just the default nodes, but we can also have our own custom ones. Drag and drop to canvas to test around."}),Object(u.jsx)("div",{children:"Press delete key to remove elements."}),Object(u.jsx)("div",{children:"Blue handles are targets (input); red handles are sources (output);"}),Object(u.jsx)("div",{className:"dndnode input",onDragStart:function(e){return f(e,"input")},draggable:!0,children:"Input Node"}),Object(u.jsx)("div",{className:"dndnode",onDragStart:function(e){return f(e,"default")},draggable:!0,children:"Default Node"}),Object(u.jsx)("div",{className:"dndnode output",onDragStart:function(e){return f(e,"output")},draggable:!0,children:"Output Node"}),Object(u.jsx)(I.a,{}),Object(u.jsx)(Z,{children:"This is a custom node created. Drag and drop it to the canvas!"}),Object(u.jsx)("div",{className:"dndnode diamond",onDragStart:function(e){return f(e,"diamond")},draggable:!0,children:"Diamond Node"})]},"1"),Object(u.jsxs)(U,{header:"Label Update",children:[Object(u.jsx)(Z,{children:"Try selecting a node with labels, then updating its label below:"}),A&&Object(u.jsxs)("div",{className:"updatenode__controls",children:[Object(u.jsx)("label",{children:"Node label:"}),Object(u.jsx)("input",{value:l,onChange:function(e){return t=e.target.value,void(r&&"function"===typeof r&&r(t));var t}})]})]},"2"),Object(u.jsxs)(U,{header:"Color Update",children:[Object(u.jsx)(Z,{children:"This option is only available for diamong decision node"}),w&&Object(u.jsxs)("div",{children:[Object(u.jsx)(Z,{style:{marginTop:"10px"},children:"Color Picker and Color History Palette: Select a color to change your element's background"}),Object(u.jsx)(F,{level:5,children:"React Color"}),Object(u.jsx)(J.a,{width:"90%",presetColors:h,color:v,onChange:y,onChangeComplete:function(e){return b(e.hex)}}),Object(u.jsx)(I.a,{}),Object(u.jsx)(F,{level:5,children:"React Colorful"}),Object(u.jsxs)("div",{className:"picker",children:[Object(u.jsx)(G,{color:v.hex,onChange:b}),Object(u.jsx)("div",{className:"picker__swatches",children:h.map((function(e){return Object(u.jsx)("button",{className:"picker__swatch",style:{background:e},onClick:function(){return b(e)}},e)}))})]})]})]},"3")]})]})},R=n(300),z=n(306),K=y.a.Title,M=y.a.Paragraph,V=B.a.Panel,W=function e(t){return t.map((function(t){return t.children?Object(i.a)(Object(i.a)({},t),{},{children:e(t.children)}):t})).filter((function(e){return!e.internal}))},q=function(e){var t,n,o=e.selected,r=e.setEditElement,c=e.editElement,l=void 0===c?null:c,i=W((null===o||void 0===o||null===(t=o.data)||void 0===t?void 0:t.domTree)?[null===o||void 0===o||null===(n=o.data)||void 0===n?void 0:n.domTree]:[]),s=o&&"module"===o.type,p=Object.entries((null===l||void 0===l?void 0:l.props)||[]),b=Object(a.useContext)(P),j=b.selectedElement,h=b.setEditableElement,m=Object(a.useState)([]),x=Object(d.a)(m,2),v=x[0],y=x[1];Object(a.useEffect)((function(){r(j),j&&y([j.key])}),[j,r]);var A=function(e,t){e.dataTransfer.setData("designer/add",JSON.stringify({module:o.id,type:t})),e.dataTransfer.effectAllowed="move"};return Object(u.jsx)("aside",{className:"left-bar",children:Object(u.jsxs)(g.b,{direction:"vertical",children:[Object(u.jsx)(K,{style:{padding:"0 10px"},level:3,children:"Module Components"}),Object(u.jsx)(M,{style:{padding:"0 10px"},children:"Double click on the login module to see its properties."}),s&&Object(u.jsxs)("div",{children:[Object(u.jsxs)(K,{style:{padding:"0 10px"},level:4,children:["Module: ",o.data.title]}),Object(u.jsxs)(B.a,{defaultActiveKey:["left-panel-1"],children:[Object(u.jsx)(V,{header:"Element Tree",children:i&&Object(u.jsx)(R.a,{showLine:!0,showLeafIcon:!1,defaultExpandAll:!0,onSelect:function(e,t){y(e),h(t.node)},selectedKeys:v,treeData:i})},"left-panel-1"),Object(u.jsxs)(V,{header:"Draggable Elements",children:[Object(u.jsxs)("div",{style:{width:"100%",height:"60px",alignSelf:"center",border:"1px solid #c9c9c9",marginBottom:"10px",textAlign:"center"},className:"grabbable",onDragStart:function(e){return A(e,"input")},draggable:!0,children:[Object(u.jsx)(O.a,{className:"elements",style:{width:"100px"},disabled:!0})," ",Object(u.jsx)("br",{}),"Add Input Element"]}),Object(u.jsxs)("div",{onDragStart:function(e){return A(e,"paragraph")},draggable:!0,className:"grabbable",style:{width:"100%",height:"60px",border:"1px solid #c9c9c9",textAlign:"center"},children:[Object(u.jsx)(z.a,{className:"elements",style:{width:"100px"},disabled:!0})," ",Object(u.jsx)("br",{}),"Add Paragraph Element"]})]},"left-panel-2"),Object(u.jsxs)(V,{header:"Selected Element Properties",children:[Object(u.jsx)("strong",{children:l&&Object(u.jsxs)(K,{level:5,children:["Properties of ",l.title]})}),Object(u.jsx)("div",{children:p&&function e(t){return t.map((function(t){var n=Object(d.a)(t,2),a=n[0],o=n[1];return Object(u.jsxs)(f.a,{style:{marginTop:"10px"},children:[Object(u.jsx)("strong",{children:a}),Object(u.jsxs)("span",{children:[" ","object"===typeof o?e(Object.entries(o)):Object(u.jsx)(O.a,{value:o})]})]},a)}))}(p)})]},"left-panel-3")]})]})]})})},X=function(e){return JSON.parse(JSON.stringify(e))},_=function e(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"customid",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return t[a]===o?t:null===(n=t.children)||void 0===n?void 0:n.reduce((function(t,n){return t||e(n,a,o)}),void 0)},$=function e(t){var n=t.customid;return t.children?Math.max.apply(Math,[n].concat(Object(l.a)(t.children.map(e)))):n},ee=function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t.selected=n,t.children&&t.children.map((function(t){return e(t,n)})),t},te=function(e,t){var n=X(e);n=ee(n,!1);var a=_(n,"customid",t);return a&&(a.selected=!a.selected),n},ne=0,ae=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(null),n=Object(d.a)(t,2),o=n[0],r=n[1],c=Object(a.useState)(D),p=Object(d.a)(c,2),b=p[0],j=p[1],h=Object(a.useState)(null),m=Object(d.a)(h,2),g=m[0],f=m[1],O=Object(a.useState)(null),x=Object(d.a)(O,2),v=x[0],y=x[1],A=Object(a.useState)(""),w=Object(d.a)(A,2),N=w[0],E=w[1],T=Object(a.useState)([]),P=Object(d.a)(T,2),C=P[0],B=P[1],I=Object(a.useState)(null),J=Object(d.a)(I,2),Y=J[0],Q=J[1];Object(a.useEffect)((function(){j((function(e){var t;return(null===g||void 0===g||null===(t=g.data)||void 0===t?void 0:t.label)?e.map((function(e){return e.id===g.id&&(e.data=Object(i.a)(Object(i.a)({},e.data),{},{label:N})),e})):e}))}),[N,g,j]),Object(a.useEffect)((function(){if(Y){if(!C.includes(Y)){var e=C.length>=14?C.slice(C.length-13):Object(l.a)(C);e.push(Y),B(e)}j((function(e){var t;return(null===g||void 0===g||null===(t=g.data)||void 0===t?void 0:t.color)?e.map((function(e){return e.id===g.id&&(e.data=Object(i.a)(Object(i.a)({},e.data),{},{color:Y})),e})):e}))}}),[Y,C,B,j,g]),Object(a.useEffect)((function(){j((function(e){return g?e.map((function(e){var t;e.id===g.id&&(e=Object(i.a)(Object(i.a)({},e),{},{selected:!0,draggable:!1}),v&&(null===(t=e.data)||void 0===t?void 0:t.domTree)&&(e=Object(i.a)(Object(i.a)({},e),{},{data:Object(i.a)(Object(i.a)({},e.data),{},{domTree:te(e.data.domTree,v.customid)})})));return e})):e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{selected:!1,draggable:!0})}))}))}),[v,g,j]);var U=function(e){(!e||g&&e.find((function(e){return e.id!==g.id})))&&(f(null),E(""),Q(""),y(null))};return Object(u.jsx)("div",{className:"dndflow",children:Object(u.jsx)(k,{children:Object(u.jsxs)(s.d,{children:[Object(u.jsx)(q,{selected:g,setEditElement:y,editElement:v}),Object(u.jsx)("div",{className:"reactflow-wrapper",ref:e,children:Object(u.jsxs)(s.f,{elements:b,nodeTypes:S,onConnect:function(e){return j((function(t){return Object(s.e)(Object(i.a)(Object(i.a)({},e),{},{type:"smoothstep"}),t)}))},arrowHeadColor:"#1e0a45",onElementsRemove:function(e){return j((function(t){return Object(s.g)(e,t)}))},onLoad:function(e){return r(e)},onDrop:function(t){t.preventDefault();var n=e.current.getBoundingClientRect(),a=t.dataTransfer.getData("application/reactflow"),r=t.dataTransfer.getData("designer/add");if(a){var c=o.project({x:t.clientX-n.left,y:t.clientY-n.top}),d={id:"dndnode_".concat(ne++),type:a,position:c,data:{label:"".concat(a," node")}};j((function(e){return e.concat(d)}))}else if(r){var s=JSON.parse(r);if(s.module===g.id){var u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=X(e),o=$(a)+1,r=_(a,"customid",n||e.customid);return null===r||void 0===r||r.children.push(Object(i.a)(Object(i.a)({},X(t)),{},{customid:o,key:o,title:"".concat(t.component," ").concat(o)})),a}(g.data.domTree,H[s.type]),p=Object(i.a)(Object(i.a)({},g),{},{data:Object(i.a)(Object(i.a)({},g.data),{},{domTree:u})});f(p),j((function(e){return[].concat(Object(l.a)(e.filter((function(e){return e.id!==g.id}))),[p])}))}}},onDragOver:function(e){e.preventDefault(),"none"!==e.dataTransfer.dropEffect&&(e.dataTransfer.dropEffect="move")},onEdgeUpdate:function(e,t){return j((function(n){return Object(s.h)(e,t,n)}))},onElementClick:function(e,t){var n,a;t&&((null===(n=t.data)||void 0===n?void 0:n.label)||"module"===t.type)?(f(t),(null===(a=t.data)||void 0===a?void 0:a.label)&&(E(t.data.label),y(null),t.data.color&&Q(t.data.color))):U()},onSelectionChange:U,deleteKeyCode:46,children:[Object(u.jsx)(s.b,{}),Object(u.jsx)(s.a,{color:"#aaa",gap:16})]})}),Object(u.jsx)(L,{onUpdateName:function(e){E(e)},selectedName:N,color:Y,colorList:C,onColorUpdate:function(e){Q(e)},selected:g})]})})})};var oe=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(ae,{})})},re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,307)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),r(e),c(e)}))};c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(oe,{})}),document.getElementById("root")),re()}},[[294,1,2]]]);
//# sourceMappingURL=main.c476cb14.chunk.js.map