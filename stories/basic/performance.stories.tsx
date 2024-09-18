import React from "react";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import MuiVirtualizedTable from "../../src/index";
import { createPersonData } from "../data.js";

export default {
    title: "basic/Performance",
  };
  
  export const _1000RowsNoVirtualizaiton = {
    render: () => {
      const data = createPersonData(1000);
      return (
        <AutoSizer>
          {({ width }) => (
            <MuiVirtualizedTable
              data={data}
              columns={[{ name: "firstName" }, { name: "lastName" }]}
              width={width}
              style={{ backgroundColor: "white" }}
            />
          )}
        </AutoSizer>
      );
    },
  
    name: "1000 rows (no virtualizaiton)",
  };
  
  export const _1000RowsFixedHeight = {
    render: () => {
      const data = createPersonData(1000);
      return (
        <AutoSizer>
          {({ width, height }) => (
            <MuiVirtualizedTable
              data={data}
              columns={[{ name: "firstName" }, { name: "lastName" }]}
              width={width}
              height={400}
              style={{ backgroundColor: "white" }}
            />
          )}
        </AutoSizer>
      );
    },
  
    name: "1000 rows (fixed height)",
  };
  
  export const _1000RowsViewportHeight = {
    render: () => {
      const data = createPersonData(1000);
      return (
        <div style={{ height: "calc(100vh)" }}>
          <AutoSizer>
            {({ width, height }) => (
              <MuiVirtualizedTable
                data={data}
                columns={[{ name: "firstName" }, { name: "lastName" }]}
                width={width}
                height={height}
                style={{ backgroundColor: "white" }}
              />
            )}
          </AutoSizer>
        </div>
      );
    },
  
    name: "1000 rows (viewport height)",
  };
