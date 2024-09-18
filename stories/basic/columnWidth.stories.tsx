import React from "react";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import MuiVirtualizedTable from "../../src/index";
import { createPersonData } from "../data.js";

export default {
    title: "basic/Column widths",
  };
  
  export const FixedWidthFirstColumn = {
    render: () => {
      const data = createPersonData(100);
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
                    width: 180,
                    cell: (d) => `${d.firstName} ${d.lastName}`,
                    cellProps: { style: { paddingRight: 0 } },
                  },
                  { name: "jobTitle", header: "Job Title" },
                  { name: "jobArea", header: "Job Area" },
                ]}
                width={width}
                maxHeight={height}
                includeHeaders={true}
                style={{ backgroundColor: "white" }}
              />
            )}
          </AutoSizer>
        </div>
      );
    },
  
    name: "fixed width (first column)",
  };
  
  export const MinWidthFirstColumn = {
    render: () => {
      const data = createPersonData(100);
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
                    minWidth: 180,
                    cell: (d) => `${d.firstName} ${d.lastName}`,
                    cellProps: { style: { paddingRight: 0 } },
                  },
                  { name: "jobTitle", header: "Job Title" },
                  { name: "jobArea", header: "Job Area" },
                ]}
                width={width}
                maxHeight={height}
                includeHeaders={true}
                style={{ backgroundColor: "white" }}
              />
            )}
          </AutoSizer>
        </div>
      );
    },
  
    name: "minWidth (first column)",
  };
  
  export const MinWidthAllColumns = {
    render: () => {
      const data = createPersonData(100);
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
                    minWidth: 180,
                    cell: (d) => `${d.firstName} ${d.lastName}`,
                    cellProps: { style: { paddingRight: 0 } },
                  },
                  { name: "jobTitle", header: "Job Title", minWidth: 300 },
                  { name: "jobArea", header: "Job Area", minWidth: 200 },
                ]}
                width={width}
                maxHeight={height}
                includeHeaders={true}
                style={{ backgroundColor: "white" }}
              />
            )}
          </AutoSizer>
        </div>
      );
    },
  
    name: "minWidth (all columns)",
  };
  
  export const PercentageWidthsExceedingTableWidth40Each = {
    render: () => {
      const data = createPersonData(100);
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
                    width: "40%",
                    cell: (d) => `${d.firstName} ${d.lastName}`,
                    cellProps: { style: { paddingRight: 0 } },
                  },
                  { name: "jobTitle", header: "Job Title", width: "40%" },
                  { name: "jobArea", header: "Job Area", width: "40%" },
                ]}
                width={width}
                maxHeight={height}
                includeHeaders={true}
                style={{ backgroundColor: "white" }}
              />
            )}
          </AutoSizer>
        </div>
      );
    },
  
    name: "percentage widths exceeding table width (40% each)",
  };
  
  export const FixedWidthLongHeaders = {
    render: () => {
      const data = createPersonData(100);
      return (
        <div style={{ height: "calc(100vh)" }}>
          <AutoSizer>
            {({ width, height }) => (
              <MuiVirtualizedTable
                data={data}
                columns={[
                  { name: "jobTitle", header: "Job Title" },
                  {
                    name: "fullName",
                    header: "Person Full Name",
                    width: 100,
                    cell: (d) => `${d.firstName} ${d.lastName}`,
                    cellProps: { style: { paddingRight: 0 } },
                  },
                  { name: "jobArea", header: "Job Area" },
                ]}
                width={width}
                maxHeight={height}
                includeHeaders={true}
                fixedRowCount={1}
                onHeaderClick={(event, { column }) =>
                  alert(`Clicked '${column.name}' header in column'`)
                }
                style={{ backgroundColor: "white" }}
              />
            )}
          </AutoSizer>
        </div>
      );
    },
  
    name: "fixed width (long headers)",
  };
  