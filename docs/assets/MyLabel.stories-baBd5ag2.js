import{j as _}from"./jsx-runtime-DQ32znRX.js";import"./index-DH5ua8nC.js";import"./_commonjsHelpers-Cpj98o6Y.js";const s=({label:o,size:g="normal",allCaps:L=!1,color:v,fontColor:x=""})=>_.jsx("span",{className:`${g} ${v}`,style:{color:x},children:L?o.toUpperCase():o});try{s.displayName="MyLabel",s.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Label Size",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:{value:"false"},description:"All Caps",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Color",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:{value:""},description:"Font Color",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const A={title:"UI/Labels/MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"select"},allCaps:{control:"boolean"},fontColor:{control:"color"}}},e={args:{label:"Basic Label",allCaps:!1}},a={args:{label:"All Caps Label",allCaps:!0}},l={args:{label:"Secondary Label",color:"text-secondary",allCaps:!1}},r={args:{label:"Custom Color Label",fontColor:"red",allCaps:!1}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label',
    allCaps: false
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,u,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: true
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,i,C;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary',
    allCaps: false
  }
}`,...(C=(i=l.parameters)==null?void 0:i.docs)==null?void 0:C.source}}};var y,b,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: 'red',
    allCaps: false
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const V=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,r as CustomColor,l as Secondary,V as __namedExportsOrder,A as default};
