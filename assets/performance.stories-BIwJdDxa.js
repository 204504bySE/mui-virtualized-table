import{j as e}from"./GlobalStyles-DEmgRY6Z.js";import{A as i}from"./index-LGruJc33.js";import{c as s,M as d}from"./data-4NJIdAsz.js";import"./index-uubelm5h.js";import"./index-Dei0BBcc.js";const v={title:"basic/Performance"},a={render:()=>{const r=s(1e3);return e.jsx(i,{children:({width:t})=>e.jsx(d,{data:r,columns:[{name:"firstName"},{name:"lastName"}],width:t,style:{backgroundColor:"white"}})})},name:"1000 rows (no virtualizaiton)"},n={render:()=>{const r=s(1e3);return e.jsx(i,{children:({width:t,height:m})=>e.jsx(d,{data:r,columns:[{name:"firstName"},{name:"lastName"}],width:t,height:400,style:{backgroundColor:"white"}})})},name:"1000 rows (fixed height)"},o={render:()=>{const r=s(1e3);return e.jsx("div",{style:{height:"calc(100vh)"},children:e.jsx(i,{children:({width:t,height:m})=>e.jsx(d,{data:r,columns:[{name:"firstName"},{name:"lastName"}],width:t,height:m,style:{backgroundColor:"white"}})})})},name:"1000 rows (viewport height)"};var c,h,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(1000);
    return <AutoSizer>\r
          {({
        width
      }) => <MuiVirtualizedTable data={data} columns={[{
        name: "firstName"
      }, {
        name: "lastName"
      }]} width={width} style={{
        backgroundColor: "white"
      }} />}\r
        </AutoSizer>;
  },
  name: "1000 rows (no virtualizaiton)"
}`,...(l=(h=a.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var u,w,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const data = createPersonData(1000);
    return <AutoSizer>\r
          {({
        width,
        height
      }) => <MuiVirtualizedTable data={data} columns={[{
        name: "firstName"
      }, {
        name: "lastName"
      }]} width={width} height={400} style={{
        backgroundColor: "white"
      }} />}\r
        </AutoSizer>;
  },
  name: "1000 rows (fixed height)"
}`,...(g=(w=n.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var p,x,z;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          name: "firstName"
        }, {
          name: "lastName"
        }]} width={width} height={height} style={{
          backgroundColor: "white"
        }} />}\r
          </AutoSizer>\r
        </div>;
  },
  name: "1000 rows (viewport height)"
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const _=["_1000RowsNoVirtualizaiton","_1000RowsFixedHeight","_1000RowsViewportHeight"];export{n as _1000RowsFixedHeight,a as _1000RowsNoVirtualizaiton,o as _1000RowsViewportHeight,_ as __namedExportsOrder,v as default};
