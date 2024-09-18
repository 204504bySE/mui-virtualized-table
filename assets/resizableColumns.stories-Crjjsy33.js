import{j as a}from"./GlobalStyles-DEmgRY6Z.js";import{A as d}from"./index-LGruJc33.js";import{c as m,M as c}from"./data-4NJIdAsz.js";import"./index-uubelm5h.js";import"./index-Dei0BBcc.js";const x={title:"basic/Resizable Columns"},e={render:()=>{const l=m(1e3);return a.jsx("div",{style:{height:"calc(100vh)"},children:a.jsx(d,{children:({width:s,height:o})=>a.jsx(c,{data:l,columns:[{name:"fullName",header:"Name",cell:t=>`${t.firstName} ${t.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title",width:10},{name:"jobArea",header:"Job Area"}],width:s,resizable:!0,maxHeight:o,includeHeaders:!0,fixedRowCount:1,cellProps:{style:{paddingRight:0}},style:{backgroundColor:"white"}})})})},name:"Simple table"};var r,n,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(1000);
    return <div style={{
      height: "calc(100vh)"
    }}>\r
          <AutoSizer>\r
            {({
          width,
          height
        }) => <MuiVirtualizedTable data={data} columns={[{
          name: "fullName",
          header: "Name",
          // width: 180,
          cell: d => \`\${d.firstName} \${d.lastName}\`,
          cellProps: {
            style: {
              paddingRight: 0
            }
          }
        }, {
          name: "jobTitle",
          header: "Job Title",
          width: 10
        }, {
          name: "jobArea",
          header: "Job Area"
        }]} width={width} resizable maxHeight={height} includeHeaders={true} fixedRowCount={1} cellProps={{
          style: {
            paddingRight: 0
          }
        }} style={{
          backgroundColor: "white"
        }} />}\r
          </AutoSizer>\r
        </div>;
  },
  name: "Simple table"
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const f=["SimpleTable"];export{e as SimpleTable,f as __namedExportsOrder,x as default};
