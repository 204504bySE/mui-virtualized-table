import{_ as c,e as Q,j as d,f as z,g as ie,c as he}from"./GlobalStyles-DEmgRY6Z.js";import{r as u}from"./index-uubelm5h.js";import{l as X,m as Y,s as H,B as ue,u as pe,n as me,o as Z,p as ee,q as j,t as ge,M as $,a as M}from"./data-4NJIdAsz.js";import"./index-Dei0BBcc.js";function we(e){return X("PrivateSwitchBase",e)}Y("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ce=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Re=e=>{const{classes:t,checked:r,disabled:a,edge:n}=e,s={root:["root",r&&"checked",a&&"disabled",n&&`edge${z(n)}`],input:["input"]};return ee(s,we,t)},Ie=H(ue)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),ve=H("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),fe=u.forwardRef(function(t,r){const{autoFocus:a,checked:n,checkedIcon:s,className:o,defaultChecked:R,disabled:x,disableFocusRipple:h=!1,edge:I=!1,icon:S,id:p,inputProps:y,inputRef:D,name:v,onBlur:m,onChange:g,onFocus:w,readOnly:ne,required:te,tabIndex:se,type:f,value:_}=t,ae=Q(t,Ce),[V,oe]=pe({controlled:n,default:!!R,name:"SwitchBase",state:"checked"}),i=me(),re=l=>{w&&w(l),i&&i.onFocus&&i.onFocus(l)},de=l=>{m&&m(l),i&&i.onBlur&&i.onBlur(l)},le=l=>{if(l.nativeEvent.defaultPrevented)return;const N=l.target.checked;oe(N),g&&g(l,N)};let C=x;i&&typeof C>"u"&&(C=i.disabled);const ce=f==="checkbox"||f==="radio",B=c({},t,{checked:V,disabled:C,disableFocusRipple:h,edge:I}),E=Re(B);return d.jsxs(Ie,c({component:"span",className:Z(E.root,o),centerRipple:!0,focusRipple:!h,disabled:C,tabIndex:null,role:void 0,onFocus:re,onBlur:de,ownerState:B,ref:r},ae,{children:[d.jsx(ve,c({autoFocus:a,checked:n,defaultChecked:R,className:E.input,disabled:C,id:ce&&p,name:v,onChange:le,readOnly:ne,ref:D,required:te,ownerState:B,tabIndex:se,type:f},f==="checkbox"&&_===void 0?{}:{value:_},y)),V?s:S]}))}),be=j(d.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ke=j(d.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Pe=j(d.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function xe(e){return X("MuiCheckbox",e)}const F=Y("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),Se=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],ye=e=>{const{classes:t,indeterminate:r,color:a}=e,n={root:["root",r&&"indeterminate",`color${z(a)}`]},s=ee(n,xe,t);return c({},t,s)},De=H(fe,{shouldForwardProp:e=>ge(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.indeterminate&&t.indeterminate,r.color!=="default"&&t[`color${z(r.color)}`]]}})(({theme:e,ownerState:t})=>c({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ie(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${F.checked}, &.${F.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${F.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),Be=d.jsx(ke,{}),Fe=d.jsx(be,{}),ze=d.jsx(Pe,{}),O=u.forwardRef(function(t,r){var a,n;const s=he({props:t,name:"MuiCheckbox"}),{checkedIcon:o=Be,color:R="primary",icon:x=Fe,indeterminate:h=!1,indeterminateIcon:I=ze,inputProps:S,size:p="medium",className:y}=s,D=Q(s,Se),v=h?I:x,m=h?I:o,g=c({},s,{color:R,indeterminate:h,size:p}),w=ye(g);return d.jsx(De,c({type:"checkbox",inputProps:c({"data-indeterminate":h},S),icon:u.cloneElement(v,{fontSize:(a=v.props.fontSize)!=null?a:p}),checkedIcon:u.cloneElement(m,{fontSize:(n=m.props.fontSize)!=null?n:p}),ownerState:g,ref:r,className:Z(w.root,y)},D,{classes:w}))}),_e={title:"basic/Selected"},b={render:()=>{const e=M(),[t,r]=u.useState({selectedRowIds:[]});return d.jsx($,{data:e,columns:[{name:"name",header:"Dessert (100g serving)",cellProps:{style:{paddingRight:0}}},{name:"calories",header:"Calories",cellProps:{align:"right"}},{name:"fat",header:"Fat (g)",cellProps:{align:"right"}},{name:"carbs",header:"Carbs (g)",cellProps:{align:"right"}},{name:"protein",header:"Protein (g)",cellProps:{align:"right"}}],isCellSelected:(a,n)=>t.selectedRowIds.some(s=>n&&n.id===s),onCellClick:(a,{rowData:n})=>{r(s=>s.selectedRowIds.some(o=>n.id===o)?{selectedRowIds:s.selectedRowIds.filter(o=>o!==n.id)}:{selectedRowIds:[...s.selectedRowIds,n.id]})},includeHeaders:!0,width:900,style:{backgroundColor:"white"}})},name:"basic"},k={render:()=>{const e=M(),[t,r]=u.useState({selectedRowIds:[]});return d.jsx($,{data:e,columns:[{name:"name",header:"Dessert (100g serving)",cellProps:{style:{paddingRight:0}}},{name:"calories",header:"Calories",cellProps:{align:"right"}},{name:"fat",header:"Fat (g)",cellProps:{align:"right"}},{name:"carbs",header:"Carbs (g)",cellProps:{align:"right"}},{name:"protein",header:"Protein (g)",cellProps:{align:"right"}}],isCellSelected:(a,n)=>t.selectedRowIds.some(s=>n&&n.id===s),isCellHovered:(a,n,s,o)=>n.id&&n.id===o.id,onCellClick:(a,{rowData:n})=>{r(s=>s.selectedRowIds.some(o=>n.id===o)?{selectedRowIds:s.selectedRowIds.filter(o=>o!==n.id)}:{selectedRowIds:[...s.selectedRowIds,n.id]})},includeHeaders:!0,width:900,style:{backgroundColor:"white"}})},name:"with hover"},P={render:()=>{const e=M(),[t,r]=u.useState({selectedRowIds:[]});return d.jsx($,{data:e,columns:[{name:"checkbox",header:d.jsx(O,{checked:t.selectedRowIds.length>0,onChange:a=>r(n=>n.selectedRowIds.length===e.length?{selectedRowIds:[]}:{selectedRowIds:e.map(s=>s.id)}),...t.selectedRowIds.length>0&&t.selectedRowIds.length!==e.length&&{indeterminate:!0,color:"default"}}),cell:a=>d.jsx(O,{checked:t.selectedRowIds.some(n=>a.id===n)}),cellProps:{style:{paddingRight:0}},width:72},{name:"name",header:"Dessert (100g serving)",cellProps:{style:{paddingRight:0}}},{name:"calories",header:"Calories",cellProps:{align:"right"}},{name:"fat",header:"Fat (g)",cellProps:{align:"right"}},{name:"carbs",header:"Carbs (g)",cellProps:{align:"right"}},{name:"protein",header:"Protein (g)",cellProps:{align:"right"}}],isCellSelected:(a,n)=>t.selectedRowIds.some(s=>n&&n.id===s),isCellHovered:(a,n,s,o)=>n.id&&n.id===o.id,onCellClick:(a,{rowData:n})=>{r(s=>s.selectedRowIds.some(o=>n.id===o)?{selectedRowIds:s.selectedRowIds.filter(o=>o!==n.id)}:{selectedRowIds:[...s.selectedRowIds,n.id]})},includeHeaders:!0,width:900,style:{backgroundColor:"white"}})},name:"with hover and checkbox"};var U,L,T;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const data = createDessertData();
    const [state, setState] = useState<any>({
      selectedRowIds: []
    });
    return <MuiVirtualizedTable data={data} columns={[{
      name: "name",
      header: "Dessert (100g serving)",
      cellProps: {
        style: {
          paddingRight: 0
        }
      }
    }, {
      name: "calories",
      header: "Calories",
      cellProps: {
        align: "right"
      }
    }, {
      name: "fat",
      header: "Fat (g)",
      cellProps: {
        align: "right"
      }
    }, {
      name: "carbs",
      header: "Carbs (g)",
      cellProps: {
        align: "right"
      }
    }, {
      name: "protein",
      header: "Protein (g)",
      cellProps: {
        align: "right"
      }
    }]} isCellSelected={(column, rowData) => state.selectedRowIds.some(id => rowData && rowData.id === id)} onCellClick={(event, {
      rowData
    }) => {
      setState(prevState => {
        if (prevState.selectedRowIds.some(id => rowData.id === id)) {
          // remove
          return {
            selectedRowIds: prevState.selectedRowIds.filter(id => id !== rowData.id)
          };
        } else {
          // add
          return {
            selectedRowIds: [...prevState.selectedRowIds, rowData.id]
          };
        }
      });
    }} includeHeaders={true} width={900} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "basic"
}`,...(T=(L=b.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var W,q,A;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const data = createDessertData();
    const [state, setState] = useState<any>({
      selectedRowIds: []
    });
    return <MuiVirtualizedTable data={data} columns={[{
      name: "name",
      header: "Dessert (100g serving)",
      cellProps: {
        style: {
          paddingRight: 0
        }
      }
    }, {
      name: "calories",
      header: "Calories",
      cellProps: {
        align: "right"
      }
    }, {
      name: "fat",
      header: "Fat (g)",
      cellProps: {
        align: "right"
      }
    }, {
      name: "carbs",
      header: "Carbs (g)",
      cellProps: {
        align: "right"
      }
    }, {
      name: "protein",
      header: "Protein (g)",
      cellProps: {
        align: "right"
      }
    }]} isCellSelected={(column, rowData) => state.selectedRowIds.some(id => rowData && rowData.id === id)} isCellHovered={(column, rowData, hoveredColumn, hoveredRowData) => rowData.id && rowData.id === hoveredRowData.id} onCellClick={(event, {
      rowData
    }) => {
      setState(prevState => {
        if (prevState.selectedRowIds.some(id => rowData.id === id)) {
          // remove
          return {
            selectedRowIds: prevState.selectedRowIds.filter(id => id !== rowData.id)
          };
        } else {
          // add
          return {
            selectedRowIds: [...prevState.selectedRowIds, rowData.id]
          };
        }
      });
    }} includeHeaders={true} width={900} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "with hover"
}`,...(A=(q=k.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var G,J,K;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const data = createDessertData();
    const [state, setState] = useState<any>({
      selectedRowIds: []
    });
    return <MuiVirtualizedTable data={data} columns={[{
      name: "checkbox",
      header: <Checkbox checked={state.selectedRowIds.length > 0} onChange={e => setState(prevState => {
        if (prevState.selectedRowIds.length === data.length) {
          // deselect all
          return {
            selectedRowIds: []
          };
        } else {
          // select all
          return {
            selectedRowIds: data.map(d => d.id)
          };
        }
      })} {...state.selectedRowIds.length > 0 && state.selectedRowIds.length !== data.length && {
        indeterminate: true,
        color: "default"
      }} />,
      cell: rowData => <Checkbox checked={state.selectedRowIds.some(id => rowData.id === id)} />,
      cellProps: {
        style: {
          paddingRight: 0
        }
      },
      width: 72
    }, {
      name: "name",
      header: "Dessert (100g serving)",
      cellProps: {
        style: {
          paddingRight: 0
        }
      }
    }, {
      name: "calories",
      header: "Calories",
      cellProps: {
        align: "right"
      }
    }, {
      name: "fat",
      header: "Fat (g)",
      cellProps: {
        align: "right"
      }
    }, {
      name: "carbs",
      header: "Carbs (g)",
      cellProps: {
        align: "right"
      }
    }, {
      name: "protein",
      header: "Protein (g)",
      cellProps: {
        align: "right"
      }
    }]} isCellSelected={(column, rowData) => state.selectedRowIds.some(id => rowData && rowData.id === id)} isCellHovered={(column, rowData, hoveredColumn, hoveredRowData) => rowData.id && rowData.id === hoveredRowData.id} onCellClick={(event, {
      rowData
    }) => {
      setState(prevState => {
        if (prevState.selectedRowIds.some(id => rowData.id === id)) {
          // remove
          return {
            selectedRowIds: prevState.selectedRowIds.filter(id => id !== rowData.id)
          };
        } else {
          // add
          return {
            selectedRowIds: [...prevState.selectedRowIds, rowData.id]
          };
        }
      });
    }} includeHeaders={true} width={900} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "with hover and checkbox"
}`,...(K=(J=P.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const Ve=["_Basic","WithHover","WithHoverAndCheckbox"];export{k as WithHover,P as WithHoverAndCheckbox,b as _Basic,Ve as __namedExportsOrder,_e as default};
