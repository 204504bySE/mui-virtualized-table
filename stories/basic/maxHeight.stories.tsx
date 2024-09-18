import React from "react";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import MuiVirtualizedTable from "../../src/index";
import { createPersonData } from "../data.js";
import PaginatedTable from "../PaginatedTable";

export default {
    title: "basic/maxHeight",
  };
  
  export const Basic = {
    render: () => {
      const data = createPersonData(100);
      return (
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
              maxHeight={500}
              style={{ backgroundColor: "white" }}
            />
          )}
        </AutoSizer>
      );
    },
  
    name: "basic",
  };
  
  export const Headers = {
    render: () => {
      const data = createPersonData(100);
      return (
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
              maxHeight={500}
              includeHeaders={true}
              style={{ backgroundColor: "white" }}
            />
          )}
        </AutoSizer>
      );
    },
  
    name: "headers",
  };
  
  export const FixedHeaders = {
    render: () => {
      const data = createPersonData(100);
      return (
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
              maxHeight={500}
              includeHeaders={true}
              fixedRowCount={1}
              style={{ backgroundColor: "white" }}
            />
          )}
        </AutoSizer>
      );
    },
  
    name: "fixed headers",
  };
  
  export const _Pagination = {
    render: () => {
      const data = createPersonData(15);
      return (
        <AutoSizer>
          {({ width, height }) => (
            <PaginatedTable
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
              maxHeight={400}
              includeHeaders={true}
              style={{ backgroundColor: "white" }}
            />
          )}
        </AutoSizer>
      );
    },
  
    name: "pagination",
  };
  
  export const PaginationMaxHeightCalculatedHeight = {
    render: () => {
      const data = createPersonData(15);
      return (
        <AutoSizer>
          {({ width, height }) => (
            <PaginatedTable
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
              maxHeight={800}
              includeHeaders={true}
              style={{ backgroundColor: "white" }}
            />
          )}
        </AutoSizer>
      );
    },
  
    name: "pagination (maxHeight > calculatedHeight)",
  };
  
  export const PaginationFitHeightToRows = {
    render: () => {
      const data = createPersonData(15);
      return (
        <AutoSizer>
          {({ width, height }) => (
            <PaginatedTable
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
              fitHeightToRows={true}
              includeHeaders={true}
              style={{ backgroundColor: "white" }}
            />
          )}
        </AutoSizer>
      );
    },
  
    name: "pagination (fitHeightToRows)",
  };
