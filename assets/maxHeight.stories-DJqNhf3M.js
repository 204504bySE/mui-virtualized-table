import{j as a}from"./GlobalStyles-DEmgRY6Z.js";import{A as r}from"./index-LGruJc33.js";import{c as i,M as u}from"./data-4NJIdAsz.js";import{P as g}from"./PaginatedTable-JbAFUTzs.js";import"./index-uubelm5h.js";import"./index-Dei0BBcc.js";const B={title:"basic/maxHeight"},d={render:()=>{const n=i(100);return a.jsx(r,{children:({width:t,height:o})=>a.jsx(u,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:t,maxHeight:500,style:{backgroundColor:"white"}})})},name:"basic"},s={render:()=>{const n=i(100);return a.jsx(r,{children:({width:t,height:o})=>a.jsx(u,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:t,maxHeight:500,includeHeaders:!0,style:{backgroundColor:"white"}})})},name:"headers"},l={render:()=>{const n=i(100);return a.jsx(r,{children:({width:t,height:o})=>a.jsx(u,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:t,maxHeight:500,includeHeaders:!0,fixedRowCount:1,style:{backgroundColor:"white"}})})},name:"fixed headers"},m={render:()=>{const n=i(15);return a.jsx(r,{children:({width:t,height:o})=>a.jsx(g,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:t,maxHeight:400,includeHeaders:!0,style:{backgroundColor:"white"}})})},name:"pagination"},h={render:()=>{const n=i(15);return a.jsx(r,{children:({width:t,height:o})=>a.jsx(g,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:t,maxHeight:800,includeHeaders:!0,style:{backgroundColor:"white"}})})},name:"pagination (maxHeight > calculatedHeight)"},c={render:()=>{const n=i(15);return a.jsx(r,{children:({width:t,height:o})=>a.jsx(g,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:e=>`${e.firstName} ${e.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:t,fitHeightToRows:!0,includeHeaders:!0,style:{backgroundColor:"white"}})})},name:"pagination (fitHeightToRows)"};var b,p,w;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(100);
    return <AutoSizer>\r
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
      }]} width={width} maxHeight={500} style={{
        backgroundColor: "white"
      }} />}\r
        </AutoSizer>;
  },
  name: "basic"
}`,...(w=(p=d.parameters)==null?void 0:p.docs)==null?void 0:w.source}}};var N,H,j;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(100);
    return <AutoSizer>\r
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
      }]} width={width} maxHeight={500} includeHeaders={true} style={{
        backgroundColor: "white"
      }} />}\r
        </AutoSizer>;
  },
  name: "headers"
}`,...(j=(H=s.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var x,A,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(100);
    return <AutoSizer>\r
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
      }]} width={width} maxHeight={500} includeHeaders={true} fixedRowCount={1} style={{
        backgroundColor: "white"
      }} />}\r
        </AutoSizer>;
  },
  name: "fixed headers"
}`,...(T=(A=l.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};var f,P,y;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(15);
    return <AutoSizer>\r
          {({
        width,
        height
      }) => <PaginatedTable data={data} columns={[{
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
      }]} width={width} maxHeight={400} includeHeaders={true} style={{
        backgroundColor: "white"
      }} />}\r
        </AutoSizer>;
  },
  name: "pagination"
}`,...(y=(P=m.parameters)==null?void 0:P.docs)==null?void 0:y.source}}};var J,$,R;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(15);
    return <AutoSizer>\r
          {({
        width,
        height
      }) => <PaginatedTable data={data} columns={[{
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
      }]} width={width} maxHeight={800} includeHeaders={true} style={{
        backgroundColor: "white"
      }} />}\r
        </AutoSizer>;
  },
  name: "pagination (maxHeight > calculatedHeight)"
}`,...(R=($=h.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var S,z,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(15);
    return <AutoSizer>\r
          {({
        width,
        height
      }) => <PaginatedTable data={data} columns={[{
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
      }]} width={width} fitHeightToRows={true} includeHeaders={true} style={{
        backgroundColor: "white"
      }} />}\r
        </AutoSizer>;
  },
  name: "pagination (fitHeightToRows)"
}`,...(C=(z=c.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const E=["Basic","Headers","FixedHeaders","_Pagination","PaginationMaxHeightCalculatedHeight","PaginationFitHeightToRows"];export{d as Basic,l as FixedHeaders,s as Headers,c as PaginationFitHeightToRows,h as PaginationMaxHeightCalculatedHeight,m as _Pagination,E as __namedExportsOrder,B as default};
