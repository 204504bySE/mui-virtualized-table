import{j as e}from"./GlobalStyles-DEmgRY6Z.js";import{A as g}from"./index-LGruJc33.js";import{c as p,a as w}from"./data-4NJIdAsz.js";import{P as u}from"./PaginatedTable-JbAFUTzs.js";import"./index-uubelm5h.js";import"./index-Dei0BBcc.js";const T={title:"basic/Examples"},n={render:()=>{const r=w();return e.jsx("div",{style:{height:"calc(100vh)"},children:e.jsx(g,{children:({width:t,height:i})=>e.jsx(u,{data:r,columns:[{name:"name",header:"Dessert (100g serving)",width:200,cellProps:{style:{paddingRight:0}}},{name:"calories",header:"Calories",cellProps:{align:"right"}},{name:"fat",header:"Fat (g)",cellProps:{align:"right"}},{name:"carbs",header:"Carbs (g)",cellProps:{align:"right"}},{name:"protein",header:"Protein (g)",cellProps:{align:"right"}}],width:t,maxHeight:i,includeHeaders:!0,defaultPagination:{rowsPerPage:10},style:{backgroundColor:"white"}})})})},name:"dessert"},a={render:()=>{const r=p(1e3);return e.jsx("div",{style:{height:"calc(100vh)"},children:e.jsx(g,{children:({width:t,height:i})=>e.jsx(u,{data:r,columns:[{name:"fullName",header:"Name",width:180,cell:s=>`${s.firstName} ${s.lastName}`,cellProps:{style:{paddingRight:0}}},{name:"jobTitle",header:"Job Title",width:400},{name:"jobArea",header:"Job Area",width:400},{name:"jobType",header:"Job Type",width:400}],width:t,maxHeight:i,includeHeaders:!0,fixedRowCount:1,fixedColumnCount:1,style:{backgroundColor:"white"}})})})},name:"all the things"};var o,l,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => {
    const data = createDessertData();
    return <div style={{
      height: "calc(100vh)"
    }}>\r
          <AutoSizer>\r
            {({
          width,
          height
        }) => <PaginatedTable data={data} columns={[{
          name: "name",
          header: "Dessert (100g serving)",
          width: 200,
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
        }]} width={width}
        // width={800}
        maxHeight={height} includeHeaders={true}
        // fixedRowCount={1}
        // fixedColumnCount={1}
        defaultPagination={{
          rowsPerPage: 10
        }} style={{
          backgroundColor: "white"
        }} />}\r
          </AutoSizer>\r
        </div>;
  },
  name: "dessert"
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var h,c,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(1000);
    return <div style={{
      height: "calc(100vh)"
    }}>\r
          <AutoSizer>\r
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
  name: "all the things"
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const j=["Dessert","AllTheThings"];export{a as AllTheThings,n as Dessert,j as __namedExportsOrder,T as default};
