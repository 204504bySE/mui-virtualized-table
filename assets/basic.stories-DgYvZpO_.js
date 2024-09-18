import{j as e}from"./GlobalStyles-DEmgRY6Z.js";import{A as d}from"./index-LGruJc33.js";import{M as l,c as s,w as ze,a as D}from"./data-4NJIdAsz.js";import{P as Ae}from"./PaginatedTable-JbAFUTzs.js";import"./index-uubelm5h.js";import"./index-Dei0BBcc.js";const Ve={title:"Basic"},c={render:()=>e.jsx(l,{width:500,style:{backgroundColor:"white"}}),name:"default (empty)"},m={render:()=>{const n=s(5);return e.jsx(l,{data:n,columns:[{name:"firstName"},{name:"lastName"}],width:500,style:{backgroundColor:"white"}})},name:"simple"},u={render:()=>{const n=s(5);return e.jsx(d,{children:({width:a,height:t})=>e.jsx(l,{data:n,columns:[{name:"firstName"},{name:"lastName"}],width:a,style:{backgroundColor:"white"}})})},name:"responsive"},h={render:()=>{const n=s(1e3);return e.jsx("div",{style:{height:"calc(100vh)"},children:e.jsx(d,{children:({width:a,height:t})=>e.jsx(l,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:r=>`${r.firstName} ${r.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:a,maxHeight:t,includeHeaders:!0,style:{backgroundColor:"white"}})})})},name:"composite cells"},g={render:()=>{const n=s(5);return e.jsx(l,{data:n,columns:[{name:"firstName"},{name:"lastName"}],includeHeaders:!0,width:500,style:{backgroundColor:"white"}})},name:"include headers"},p={render:()=>{const n=s(5);return e.jsx(l,{data:n,columns:[{name:"firstName",header:"First Name"},{name:"lastName",header:"Last Name"}],includeHeaders:!0,width:500,style:{backgroundColor:"white"}})},name:"custom headers"},b={render:()=>{const n=s(1e3);return e.jsx("div",{style:{height:"calc(100vh)"},children:e.jsx(d,{children:({width:a,height:t})=>e.jsx(l,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:r=>`${r.firstName} ${r.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:a,maxHeight:t,includeHeaders:!0,fixedRowCount:1,style:{backgroundColor:"white"}})})})},name:"fixed/freeze row(s)"},w={render:()=>{const n=s(1e3);return e.jsx("div",{style:{height:"calc(100vh)"},children:e.jsx(d,{children:({width:a,height:t})=>e.jsx(l,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:r=>`${r.firstName} ${r.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title",width:400},{name:"jobArea",header:"Job Area",width:400},{name:"jobType",header:"Job Type",width:400}],width:a,maxHeight:t,includeHeaders:!0,fixedColumnCount:1,style:{backgroundColor:"white"}})})})},name:"fixed/freeze column(s)"},C={render:()=>{const n=s(1e3);return e.jsx("div",{style:{height:"calc(100vh)"},children:e.jsx(d,{children:({width:a,height:t})=>e.jsx(l,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:r=>`${r.firstName} ${r.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title",width:400},{name:"jobArea",header:"Job Area",width:400},{name:"jobType",header:"Job Type",width:400}],width:a,maxHeight:t,includeHeaders:!0,fixedRowCount:1,fixedColumnCount:1,style:{backgroundColor:"white"}})})})},name:"fixed/freeze both"},N={render:()=>{const n=D();return e.jsx(l,{data:n,columns:[{name:"name",header:"Dessert (100g serving)",cellProps:{style:{paddingRight:0}}},{name:"calories",header:"Calories",cellProps:{align:"right"}},{name:"fat",header:"Fat (g)",cellProps:{align:"right"}},{name:"carbs",header:"Carbs (g)",cellProps:{align:"right"}},{name:"protein",header:"Protein (g)",cellProps:{align:"right"}}],includeHeaders:!0,width:900,rowHeight:24,style:{backgroundColor:"white"}})},name:"row height"},f={render:()=>{const n=D();return e.jsx(l,{data:n,columns:[{name:"name",header:"Dessert (100g serving)",cellProps:{style:{paddingRight:0}}},{name:"calories",header:"Calories",cellProps:{align:"right"}},{name:"fat",header:"Fat (g)",cellProps:{align:"right"}},{name:"carbs",header:"Carbs (g)",cellProps:{align:"right"}},{name:"protein",header:"Protein (g)",cellProps:{align:"right"}}],includeHeaders:!0,width:900,cellProps:{size:"small"},style:{backgroundColor:"white"}})},name:"default cellProps"},k={render:()=>{const n=D();return e.jsx(l,{data:n,columns:[{name:"name",header:"Dessert (100g serving)",cellProps:{style:{paddingRight:0}}},{name:"calories",header:"Calories",cellProps:{align:"right"}},{name:"fat",header:"Fat (g)",cellProps:{align:"right"}},{name:"carbs",header:"Carbs (g)",cellProps:{align:"right"}},{name:"protein",header:"Protein (g)",cellProps:{align:"right"}}],includeHeaders:!0,width:900,cellProps:(a,t)=>a.name==="fat"&&t&&t[a.name]>10?{style:{backgroundColor:"rgba(255,0,0,.5)",color:"white"}}:{},style:{backgroundColor:"white"}})},name:"cellProps as function"},P={render:()=>{const n=s(10);return e.jsx(l,{data:n,columns:[{name:"fullName",header:"Name",width:100,cell:a=>`${a.firstName} ${a.lastName}`},{name:"jobTitle",header:"Job Title",width:100},{name:"jobArea",header:"Job Area",width:100}],width:300,includeHeaders:!0,rowHeight:24,style:{backgroundColor:"white"},cellProps:{style:{paddingRight:0}}})},name:"text overflow"},y={render:()=>{const n=s(5);return e.jsx(d,{children:({width:a,height:t})=>e.jsx(l,{data:n,columns:[{name:"firstName",header:"First Name"},{name:"lastName",header:"Last Name (disabled)",onHeaderClick:!1},{name:"jobTitle",header:"Job Title (custom)",onHeaderClick:(r,{column:o})=>{alert(`Job Title header clicked; column.name: ${o.name}`)}}],width:a,style:{backgroundColor:"white"},includeHeaders:!0,onHeaderClick:(r,{column:o})=>alert(`Clicked '${o.name}' header in column'`),onCellClick:(r,{column:o,rowData:i})=>alert(`Clicked cell in column '${o.name}' containing '${i[o.name]}'`)})})},name:"clickable headers and cells"},x={render:()=>{const n=s(5),a=ze(t=>e.jsx(d,{children:({width:r})=>e.jsx(l,{data:n,classes:{cellClickable:t.classes.cellClickable},columns:[{name:"firstName",header:"First Name"},{name:"lastName",header:"Last Name (disabled)",onHeaderClick:!1},{name:"jobTitle",header:"Job Title (custom)",onHeaderClick:()=>{alert("Job Title header clicked")}}],width:r,style:{backgroundColor:"white"},includeHeaders:!0,onHeaderClick:(o,{column:i})=>alert(`Clicked '${i.name}' header in column'`),onCellClick:(o,{column:i,rowData:ve})=>alert(`Clicked cell in column '${i.name}' containing '${ve[i.name]}'`)})}),(t,r)=>({cellClickable:{cursor:"auto"}}));return e.jsx(a,{})},name:"clickable without pointer"},T={render:()=>{const n=s(5);return e.jsx(d,{children:({width:a,height:t})=>e.jsx(l,{data:n,columns:[{name:"firstName",header:"First Name"},{name:"lastName",header:"Last Name"},{name:"jobTitle",header:"Job Title"}],width:a,style:{backgroundColor:"white"},includeHeaders:!0,onCellDoubleClick:(r,{column:o,rowData:i})=>alert(`Double-clicked cell in column '${o.name}' containing '${i[o.name]}'`),onCellContextMenu:(r,{column:o,rowData:i})=>{r.preventDefault(),alert(`Right-clicked cell in column '${o.name}' containing '${i[o.name]}'`)}})})},name:"double clicks and context menus"},j={render:()=>{const n=s(100);return e.jsx(d,{children:({width:a,height:t})=>e.jsx(Ae,{data:n,columns:[{name:"fullName",header:"Name",width:180,cell:r=>`${r.firstName} ${r.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title"},{name:"jobArea",header:"Job Area"}],width:a,includeHeaders:!0,style:{backgroundColor:"white"}})})},name:"pagination"},H={render:()=>e.jsx(Ae,{data:void 0,columns:[{name:"firstName"},{name:"lastName"}],includeHeaders:!0,fixedRowCount:1,width:500,style:{backgroundColor:"white"}}),name:"null data and include headers"};var A,v,z;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <MuiVirtualizedTable width={500} style={{
    backgroundColor: "white"
  }} />,
  name: "default (empty)"
}`,...(z=(v=c.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var $,S,J;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(5);
    return <MuiVirtualizedTable data={data} columns={[{
      name: "firstName"
    }, {
      name: "lastName"
    }]} width={500} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "simple"
}`,...(J=(S=m.parameters)==null?void 0:S.docs)==null?void 0:J.source}}};var R,F,M;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(5);
    return <AutoSizer>\r
        {({
        width,
        height
      }) => <MuiVirtualizedTable data={data} columns={[{
        name: "firstName"
      }, {
        name: "lastName"
      }]} width={width} style={{
        backgroundColor: "white"
      }} />}\r
      </AutoSizer>;
  },
  name: "responsive"
}`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var V,B,L;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  name: "composite cells"
}`,...(L=(B=h.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var E,I,O;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(5);
    return <MuiVirtualizedTable data={data} columns={[{
      name: "firstName"
    }, {
      name: "lastName"
    }]} includeHeaders={true} width={500} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "include headers"
}`,...(O=(I=g.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var _,W,q;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(5);
    return <MuiVirtualizedTable data={data} columns={[{
      name: "firstName",
      header: "First Name"
    }, {
      name: "lastName",
      header: "Last Name"
    }]} includeHeaders={true} width={500} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "custom headers"
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var G,K,Q;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
        }]} width={width} maxHeight={height} includeHeaders={true} fixedRowCount={1} style={{
          backgroundColor: "white"
        }} />}\r
        </AutoSizer>\r
      </div>;
  },
  name: "fixed/freeze row(s)"
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
          width: 180,
          cell: d => \`\${d.firstName} \${d.lastName}\`,
          cellProps: {
            style: {
              paddingRight: 0
            }
          }
        }, {
          name: "jobTitle",
          header: "Job Title",
          width: 400
        }, {
          name: "jobArea",
          header: "Job Area",
          width: 400
        }, {
          name: "jobType",
          header: "Job Type",
          width: 400
        }]} width={width} maxHeight={height} includeHeaders={true} fixedColumnCount={1} style={{
          backgroundColor: "white"
        }} />}\r
        </AutoSizer>\r
      </div>;
  },
  name: "fixed/freeze column(s)"
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
          width: 180,
          cell: d => \`\${d.firstName} \${d.lastName}\`,
          cellProps: {
            style: {
              paddingRight: 0
            }
          }
        }, {
          name: "jobTitle",
          header: "Job Title",
          width: 400
        }, {
          name: "jobArea",
          header: "Job Area",
          width: 400
        }, {
          name: "jobType",
          header: "Job Type",
          width: 400
        }]} width={width} maxHeight={height} includeHeaders={true} fixedRowCount={1} fixedColumnCount={1} style={{
          backgroundColor: "white"
        }} />}\r
        </AutoSizer>\r
      </div>;
  },
  name: "fixed/freeze both"
}`,...(ne=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,re,te;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const data = createDessertData();
    const orderBy = "FullName desc";
    const [orderProp, orderDirection] = orderBy;
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
    }]} includeHeaders={true} width={900} rowHeight={24} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "row height"
}`,...(te=(re=N.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,oe,se;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const data = createDessertData();
    const orderBy = "FullName desc";
    const [orderProp, orderDirection] = orderBy;
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
    }]} includeHeaders={true} width={900} cellProps={{
      size: "small"
    }} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "default cellProps"
}`,...(se=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,de,ce;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const data = createDessertData();
    const orderBy = "FullName desc";
    const [orderProp, orderDirection] = orderBy;
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
    }]} includeHeaders={true} width={900} cellProps={(column, rowData) => column.name === "fat" && rowData && rowData[column.name] > 10 ? {
      style: {
        backgroundColor: "rgba(255,0,0,.5)",
        color: "white"
      }
    } : {}} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "cellProps as function"
}`,...(ce=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,ue,he;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(10);
    return <MuiVirtualizedTable data={data} columns={[{
      name: "fullName",
      header: "Name",
      width: 100,
      cell: d => \`\${d.firstName} \${d.lastName}\`
    }, {
      name: "jobTitle",
      header: "Job Title",
      width: 100
    }, {
      name: "jobArea",
      header: "Job Area",
      width: 100
    }]} width={300} includeHeaders={true} rowHeight={24} style={{
      backgroundColor: "white"
    }}
    // cellProps={{ size="'small"' }}
    cellProps={{
      style: {
        paddingRight: 0
      }
    }} />;
  },
  name: "text overflow"
}`,...(he=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,pe,be;y.parameters={...y.parameters,docs:{...(ge=y.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(5);
    return <AutoSizer>\r
        {({
        width,
        height
      }) => <MuiVirtualizedTable data={data} columns={[{
        name: "firstName",
        header: "First Name"
      }, {
        name: "lastName",
        header: "Last Name (disabled)",
        onHeaderClick: false
      }, {
        name: "jobTitle",
        header: "Job Title (custom)",
        onHeaderClick: (event, {
          column
        }) => {
          alert(\`Job Title header clicked; column.name: \${column.name}\`);
        }
      }]} width={width} style={{
        backgroundColor: "white"
      }} includeHeaders={true} onHeaderClick={(event, {
        column
      }) => alert(\`Clicked '\${column.name}' header in column'\`)} onCellClick={(event, {
        column,
        rowData
      }) => alert(\`Clicked cell in column '\${column.name}' containing '\${rowData[column.name]}'\`)} />}\r
      </AutoSizer>;
  },
  name: "clickable headers and cells"
}`,...(be=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var we,Ce,Ne;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(5);
    const Component = withStyles(props => <AutoSizer>\r
          {({
        width
      }) => <MuiVirtualizedTable data={data} classes={{
        cellClickable: props.classes.cellClickable
      }} columns={[{
        name: "firstName",
        header: "First Name"
      }, {
        name: "lastName",
        header: "Last Name (disabled)",
        onHeaderClick: false
      }, {
        name: "jobTitle",
        header: "Job Title (custom)",
        onHeaderClick: () => {
          alert("Job Title header clicked");
        }
      }]} width={width} style={{
        backgroundColor: "white"
      }} includeHeaders={true} onHeaderClick={(event, {
        column
      }) => alert(\`Clicked '\${column.name}' header in column'\`)} onCellClick={(event, {
        column,
        rowData
      }) => alert(\`Clicked cell in column '\${column.name}' containing '\${rowData[column.name]}'\`)} />}\r
        </AutoSizer>, (theme, props) => ({
      cellClickable: {
        cursor: "auto"
      }
    }));
    return <Component />;
  },
  name: "clickable without pointer"
}`,...(Ne=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source}}};var fe,ke,Pe;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(5);
    return <AutoSizer>\r
        {({
        width,
        height
      }) => <MuiVirtualizedTable data={data} columns={[{
        name: "firstName",
        header: "First Name"
      }, {
        name: "lastName",
        header: "Last Name"
      }, {
        name: "jobTitle",
        header: "Job Title"
      }]} width={width} style={{
        backgroundColor: "white"
      }} includeHeaders={true} onCellDoubleClick={(event, {
        column,
        rowData
      }) => alert(\`Double-clicked cell in column '\${column.name}' containing '\${rowData[column.name]}'\`)} onCellContextMenu={(event, {
        column,
        rowData
      }) => {
        event.preventDefault();
        alert(\`Right-clicked cell in column '\${column.name}' containing '\${rowData[column.name]}'\`);
      }} />}\r
      </AutoSizer>;
  },
  name: "double clicks and context menus"
}`,...(Pe=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var ye,xe,Te;j.parameters={...j.parameters,docs:{...(ye=j.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(100);
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
      }]} width={width} includeHeaders={true} style={{
        backgroundColor: "white"
      }} />}\r
      </AutoSizer>;
  },
  name: "pagination"
}`,...(Te=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};var je,He,De;H.parameters={...H.parameters,docs:{...(je=H.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    return <PaginatedTable data={undefined} columns={[{
      name: "firstName"
    }, {
      name: "lastName"
    }]} includeHeaders fixedRowCount={1} width={500} style={{
      backgroundColor: "white"
    }} />;
  },
  name: "null data and include headers"
}`,...(De=(He=H.parameters)==null?void 0:He.docs)==null?void 0:De.source}}};const Be=["DefaultEmpty","Simple","Responsive","CompositeCells","IncludeHeaders","CustomHeaders","FixedFreezeRowS","FixedFreezeColumnS","FixedFreezeBoth","RowHeight","DefaultCellProps","CellPropsAsFunction","TextOverflow","ClickableHeadersAndCells","ClickableWithoutPointer","DoubleClicksAndContextMenus","Pagination","NullDataAndIncludeHeaders"];export{k as CellPropsAsFunction,y as ClickableHeadersAndCells,x as ClickableWithoutPointer,h as CompositeCells,p as CustomHeaders,f as DefaultCellProps,c as DefaultEmpty,T as DoubleClicksAndContextMenus,C as FixedFreezeBoth,w as FixedFreezeColumnS,b as FixedFreezeRowS,g as IncludeHeaders,H as NullDataAndIncludeHeaders,j as Pagination,u as Responsive,N as RowHeight,m as Simple,P as TextOverflow,Be as __namedExportsOrder,Ve as default};
