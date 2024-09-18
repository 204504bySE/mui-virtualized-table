import React from "react";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import MuiVirtualizedTable from "../../src/index";
import { createPersonData } from "../data.js";

export default {
    title: "basic/Resizable Columns",
  };
  
  export const SimpleTable = {
    render: () => {
      const data = createPersonData(1000);
      return (
        <div style={{ height: "calc(100vh)" }}>
          <AutoSizer>
            {({ width, height }) => (
              <MuiVirtualizedTable
                data={data}
                columns={[
                  {
                    name: "fullName",
                    header: "Name",
                    // width: 180,
                    cell: (d) => `${d.firstName} ${d.lastName}`,
                    cellProps: { style: { paddingRight: 0 } },
                  },
                  { name: "jobTitle", header: "Job Title", width: 10 },
                  { name: "jobArea", header: "Job Area" },
                ]}
                width={width}
                resizable
                maxHeight={height}
                includeHeaders={true}
                fixedRowCount={1}
                cellProps={{ style: { paddingRight: 0 } }}
                style={{ backgroundColor: "white" }}
              />
            )}
          </AutoSizer>
        </div>
      );
    },
  
    name: "Simple table",
  };
