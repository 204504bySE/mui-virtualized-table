import{j as n}from"./GlobalStyles-DEmgRY6Z.js";import{A as i}from"./index-LGruJc33.js";import{c as d,M as l}from"./data-4NJIdAsz.js";import"./index-uubelm5h.js";import"./index-Dei0BBcc.js";const k={title:"basic/Column widths"},o={render:()=>{const a=d(100);return n.jsx("div",{style:{height:"calc(100vh)"},children:n.jsx(i,{children:({width:t,height:r})=>n.jsx(l,{data:a,columns:[{name:"fullName",header:"Name",width:180,cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:t,maxHeight:r,includeHeaders:!0,style:{backgroundColor:"white"}})})})},name:"fixed width (first column)"},s={render:()=>{const a=d(100);return n.jsx("div",{style:{height:"calc(100vh)"},children:n.jsx(i,{children:({width:t,height:r})=>n.jsx(l,{data:a,columns:[{name:"fullName",header:"Name",minWidth:180,cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:t,maxHeight:r,includeHeaders:!0,style:{backgroundColor:"white"}})})})},name:"minWidth (first column)"},h={render:()=>{const a=d(100);return n.jsx("div",{style:{height:"calc(100vh)"},children:n.jsx(i,{children:({width:t,height:r})=>n.jsx(l,{data:a,columns:[{name:"fullName",header:"Name",minWidth:180,cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title",minWidth:300},{name:"jobArea",header:"Job Area",minWidth:200}],width:t,maxHeight:r,includeHeaders:!0,style:{backgroundColor:"white"}})})})},name:"minWidth (all columns)"},c={render:()=>{const a=d(100);return n.jsx("div",{style:{height:"calc(100vh)"},children:n.jsx(i,{children:({width:t,height:r})=>n.jsx(l,{data:a,columns:[{name:"fullName",header:"Name",width:"40%",cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title",width:"40%"},{name:"jobArea",header:"Job Area",width:"40%"}],width:t,maxHeight:r,includeHeaders:!0,style:{backgroundColor:"white"}})})})},name:"percentage widths exceeding table width (40% each)"},m={render:()=>{const a=d(100);return n.jsx("div",{style:{height:"calc(100vh)"},children:n.jsx(i,{children:({width:t,height:r})=>n.jsx(l,{data:a,columns:[{name:"jobTitle",header:"Job Title"},{name:"fullName",header:"Person Full Name",width:100,cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobArea",header:"Job Area"}],width:t,maxHeight:r,includeHeaders:!0,fixedRowCount:1,onHeaderClick:(e,{column:C})=>alert(`Clicked '${C.name}' header in column'`),style:{backgroundColor:"white"}})})})},name:"fixed width (long headers)"};var u,g,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(100);
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
          width: 180,
          cell: d => \`\${d.firstName} \${d.lastName}\`,
          cellProps: {
            style: {
              paddingRight: 0
            }
          }
        }, {
          name: "jobTitle",
          header: "Job Title"
        }, {
          name: "jobArea",
          header: "Job Area"
        }]} width={width} maxHeight={height} includeHeaders={true} style={{
          backgroundColor: "white"
        }} />}\r
          </AutoSizer>\r
        </div>;
  },
  name: "fixed width (first column)"
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var p,w,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(100);
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
          minWidth: 180,
          cell: d => \`\${d.firstName} \${d.lastName}\`,
          cellProps: {
            style: {
              paddingRight: 0
            }
          }
        }, {
          name: "jobTitle",
          header: "Job Title"
        }, {
          name: "jobArea",
          header: "Job Area"
        }]} width={width} maxHeight={height} includeHeaders={true} style={{
          backgroundColor: "white"
        }} />}\r
          </AutoSizer>\r
        </div>;
  },
  name: "minWidth (first column)"
}`,...(x=(w=s.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var N,j,f;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(100);
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
          minWidth: 180,
          cell: d => \`\${d.firstName} \${d.lastName}\`,
          cellProps: {
            style: {
              paddingRight: 0
            }
          }
        }, {
          name: "jobTitle",
          header: "Job Title",
          minWidth: 300
        }, {
          name: "jobArea",
          header: "Job Area",
          minWidth: 200
        }]} width={width} maxHeight={height} includeHeaders={true} style={{
          backgroundColor: "white"
        }} />}\r
          </AutoSizer>\r
        </div>;
  },
  name: "minWidth (all columns)"
}`,...(f=(j=h.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var A,y,T;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(100);
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
          width: "40%",
          cell: d => \`\${d.firstName} \${d.lastName}\`,
          cellProps: {
            style: {
              paddingRight: 0
            }
          }
        }, {
          name: "jobTitle",
          header: "Job Title",
          width: "40%"
        }, {
          name: "jobArea",
          header: "Job Area",
          width: "40%"
        }]} width={width} maxHeight={height} includeHeaders={true} style={{
          backgroundColor: "white"
        }} />}\r
          </AutoSizer>\r
        </div>;
  },
  name: "percentage widths exceeding table width (40% each)"
}`,...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var v,W,H;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(100);
    return <div style={{
      height: "calc(100vh)"
    }}>\r
          <AutoSizer>\r
            {({
          width,
          height
        }) => <MuiVirtualizedTable data={data} columns={[{
          name: "jobTitle",
          header: "Job Title"
        }, {
          name: "fullName",
          header: "Person Full Name",
          width: 100,
          cell: d => \`\${d.firstName} \${d.lastName}\`,
          cellProps: {
            style: {
              paddingRight: 0
            }
          }
        }, {
          name: "jobArea",
          header: "Job Area"
        }]} width={width} maxHeight={height} includeHeaders={true} fixedRowCount={1} onHeaderClick={(event, {
          column
        }) => alert(\`Clicked '\${column.name}' header in column'\`)} style={{
          backgroundColor: "white"
        }} />}\r
          </AutoSizer>\r
        </div>;
  },
  name: "fixed width (long headers)"
}`,...(H=(W=m.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const R=["FixedWidthFirstColumn","MinWidthFirstColumn","MinWidthAllColumns","PercentageWidthsExceedingTableWidth40Each","FixedWidthLongHeaders"];export{o as FixedWidthFirstColumn,m as FixedWidthLongHeaders,h as MinWidthAllColumns,s as MinWidthFirstColumn,c as PercentageWidthsExceedingTableWidth40Each,R as __namedExportsOrder,k as default};
