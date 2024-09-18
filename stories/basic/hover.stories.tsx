import React from "react";
import MuiVirtualizedTable from "../../src/index";
import { createDessertData } from "../data.js";

export default {
    title: "basic/Hover",
  };
  
  export const Row = {
    render: () => {
      const data = createDessertData();
      return (
        <MuiVirtualizedTable
          data={data}
          columns={[
            {
              name: "name",
              header: "Dessert (100g serving)",
              cellProps: { style: { paddingRight: 0 } },
            },
            {
              name: "calories",
              header: "Calories",
              cellProps: { align: "right" },
            },
            { name: "fat", header: "Fat (g)", cellProps: { align: "right" } },
            { name: "carbs", header: "Carbs (g)", cellProps: { align: "right" } },
            {
              name: "protein",
              header: "Protein (g)",
              cellProps: { align: "right" },
            },
          ]}
          isCellHovered={(column, rowData, hoveredColumn, hoveredRowData) =>
            rowData.id && rowData.id === hoveredRowData.id
          }
          includeHeaders={true}
          width={900}
          style={{ backgroundColor: "white" }}
        />
      );
    },
  
    name: "row",
  };
  
  export const Column = {
    render: () => {
      const data = createDessertData();
      return (
        <MuiVirtualizedTable
          data={data}
          columns={[
            {
              name: "name",
              header: "Dessert (100g serving)",
              cellProps: { style: { paddingRight: 0 } },
            },
            {
              name: "calories",
              header: "Calories",
              cellProps: { align: "right" },
            },
            { name: "fat", header: "Fat (g)", cellProps: { align: "right" } },
            { name: "carbs", header: "Carbs (g)", cellProps: { align: "right" } },
            {
              name: "protein",
              header: "Protein (g)",
              cellProps: { align: "right" },
            },
          ]}
          isCellHovered={(column, rowData, hoveredColumn, hoveredRowData) =>
            column.name === hoveredColumn.name
          }
          includeHeaders={true}
          width={900}
          style={{ backgroundColor: "white" }}
        />
      );
    },
  
    name: "column",
  };
  
  export const Both = {
    render: () => {
      const data = createDessertData();
      return (
        <MuiVirtualizedTable
          data={data}
          columns={[
            {
              name: "name",
              header: "Dessert (100g serving)",
              cellProps: { style: { paddingRight: 0 } },
            },
            {
              name: "calories",
              header: "Calories",
              cellProps: { align: "right" },
            },
            { name: "fat", header: "Fat (g)", cellProps: { align: "right" } },
            { name: "carbs", header: "Carbs (g)", cellProps: { align: "right" } },
            {
              name: "protein",
              header: "Protein (g)",
              cellProps: { align: "right" },
            },
          ]}
          isCellHovered={(column, rowData, hoveredColumn, hoveredRowData) =>
            (rowData.id && rowData.id === hoveredRowData.id) ||
            column.name === hoveredColumn.name
          }
          includeHeaders={true}
          width={900}
          style={{ backgroundColor: "white" }}
        />
      );
    },
  
    name: "both",
  };
