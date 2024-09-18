import React from "react";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import { createPersonData, createDessertData } from "../data.js";
import MuiVirtualizedTable from "../../src/index";import PaginatedTable from "../PaginatedTable";

export default {
    title: "basic/Examples",
  };
  
  export const Dessert = {
    render: () => {
      const data = createDessertData();
      return (
        <div style={{ height: "calc(100vh)" }}>
          <AutoSizer>
            {({ width, height }) => (
              <PaginatedTable
                data={data}
                columns={[
                  {
                    name: "name",
                    header: "Dessert (100g serving)",
                    width: 200,
                    cellProps: { style: { paddingRight: 0 } },
                  },
                  {
                    name: "calories",
                    header: "Calories",
                    cellProps: { align: "right" },
                  },
                  {
                    name: "fat",
                    header: "Fat (g)",
                    cellProps: { align: "right" },
                  },
                  {
                    name: "carbs",
                    header: "Carbs (g)",
                    cellProps: { align: "right" },
                  },
                  {
                    name: "protein",
                    header: "Protein (g)",
                    cellProps: { align: "right" },
                  },
                ]}
                width={width}
                // width={800}
                maxHeight={height}
                includeHeaders={true}
                // fixedRowCount={1}
                // fixedColumnCount={1}
                defaultPagination={{ rowsPerPage: 10 }}
                style={{ backgroundColor: "white" }}
              />
            )}
          </AutoSizer>
        </div>
      );
    },
  
    name: "dessert",
  };
  
  export const AllTheThings = {
    render: () => {
      const data = createPersonData(1000);
      return (
        <div style={{ height: "calc(100vh)" }}>
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
                  { name: "jobTitle", header: "Job Title", width: 400 },
                  { name: "jobArea", header: "Job Area", width: 400 },
                  { name: "jobType", header: "Job Type", width: 400 },
                ]}
                width={width}
                maxHeight={height}
                includeHeaders={true}
                fixedRowCount={1}
                fixedColumnCount={1}
                style={{ backgroundColor: "white" }}
              />
            )}
          </AutoSizer>
        </div>
      );
    },
  
    name: "all the things",
  };
