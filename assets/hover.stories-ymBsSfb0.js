import{j as i}from"./GlobalStyles-DEmgRY6Z.js";import{M as d,a as c}from"./data-4NJIdAsz.js";import"./index-uubelm5h.js";import"./index-Dei0BBcc.js";const y={title:"basic/Hover"},t={render:()=>{const n=c();return i.jsx(d,{data:n,columns:[{name:"name",header:"Dessert (100g serving)",cellProps:{style:{paddingRight:0}}},{name:"calories",header:"Calories",cellProps:{align:"right"}},{name:"fat",header:"Fat (g)",cellProps:{align:"right"}},{name:"carbs",header:"Carbs (g)",cellProps:{align:"right"}},{name:"protein",header:"Protein (g)",cellProps:{align:"right"}}],isCellHovered:(r,e,a,o)=>e.id&&e.id===o.id,includeHeaders:!0,width:900,style:{backgroundColor:"white"}})},name:"row"},l={render:()=>{const n=c();return i.jsx(d,{data:n,columns:[{name:"name",header:"Dessert (100g serving)",cellProps:{style:{paddingRight:0}}},{name:"calories",header:"Calories",cellProps:{align:"right"}},{name:"fat",header:"Fat (g)",cellProps:{align:"right"}},{name:"carbs",header:"Carbs (g)",cellProps:{align:"right"}},{name:"protein",header:"Protein (g)",cellProps:{align:"right"}}],isCellHovered:(r,e,a,o)=>r.name===a.name,includeHeaders:!0,width:900,style:{backgroundColor:"white"}})},name:"column"},s={render:()=>{const n=c();return i.jsx(d,{data:n,columns:[{name:"name",header:"Dessert (100g serving)",cellProps:{style:{paddingRight:0}}},{name:"calories",header:"Calories",cellProps:{align:"right"}},{name:"fat",header:"Fat (g)",cellProps:{align:"right"}},{name:"carbs",header:"Carbs (g)",cellProps:{align:"right"}},{name:"protein",header:"Protein (g)",cellProps:{align:"right"}}],isCellHovered:(r,e,a,o)=>e.id&&e.id===o.id||r.name===a.name,includeHeaders:!0,width:900,style:{backgroundColor:"white"}})},name:"both"};var g,m,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const data = createDessertData();
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
    }]} isCellHovered={(column, rowData, hoveredColumn, hoveredRowData) => rowData.id && rowData.id === hoveredRowData.id} includeHeaders={true} width={900} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "row"
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,p,P;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const data = createDessertData();
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
    }]} isCellHovered={(column, rowData, hoveredColumn, hoveredRowData) => column.name === hoveredColumn.name} includeHeaders={true} width={900} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "column"
}`,...(P=(p=l.parameters)==null?void 0:p.docs)==null?void 0:P.source}}};var C,w,v;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const data = createDessertData();
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
    }]} isCellHovered={(column, rowData, hoveredColumn, hoveredRowData) => rowData.id && rowData.id === hoveredRowData.id || column.name === hoveredColumn.name} includeHeaders={true} width={900} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "both"
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const f=["Row","Column","Both"];export{s as Both,l as Column,t as Row,f as __namedExportsOrder,y as default};
