import React, {useState} from "react";
import Checkbox from "@mui/material/Checkbox";
import MuiVirtualizedTable from "../../src/index";
import { createDessertData } from "../data.js";

export default {
    title: "basic/Selected",
  };
  
  export const _Basic = {
    render: () => {
      const data = createDessertData();
      const [state, setState] = useState<any>({ selectedRowIds: [] });
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
              isCellSelected={(column, rowData) =>
                state.selectedRowIds.some((id) => rowData && rowData.id === id)
              }
              onCellClick={(event, { rowData }) => {
                setState((prevState) => {
                  if (prevState.selectedRowIds.some((id) => rowData.id === id)) {
                    // remove
                    return {
                      selectedRowIds: prevState.selectedRowIds.filter(
                        (id) => id !== rowData.id,
                      ),
                    };
                  } else {
                    // add
                    return {
                      selectedRowIds: [...prevState.selectedRowIds, rowData.id],
                    };
                  }
                });
              }}
              includeHeaders={true}
              width={900}
              style={{ backgroundColor: "white" }}
            />
      );
    },
  
    name: "basic",
  };
  
  export const WithHover = {
    render: () => {
      const data = createDessertData();
      const [state, setState] = useState<any>({ selectedRowIds: [] });
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
              isCellSelected={(column, rowData) =>
                state.selectedRowIds.some((id) => rowData && rowData.id === id)
              }
              isCellHovered={(column, rowData, hoveredColumn, hoveredRowData) =>
                rowData.id && rowData.id === hoveredRowData.id
              }
              onCellClick={(event, { rowData }) => {
                setState((prevState) => {
                  if (prevState.selectedRowIds.some((id) => rowData.id === id)) {
                    // remove
                    return {
                      selectedRowIds: prevState.selectedRowIds.filter(
                        (id) => id !== rowData.id,
                      ),
                    };
                  } else {
                    // add
                    return {
                      selectedRowIds: [...prevState.selectedRowIds, rowData.id],
                    };
                  }
                });
              }}
              includeHeaders={true}
              width={900}
              style={{ backgroundColor: "white" }}
            />
      );
    },
  
    name: "with hover",
  };
  
  export const WithHoverAndCheckbox = {
    render: () => {
      const data = createDessertData();
      const [state, setState] = useState<any>({ selectedRowIds: [] });
      return (
            <MuiVirtualizedTable
              data={data}
              columns={[
                {
                  name: "checkbox",
                  header: (
                    <Checkbox
                      checked={state.selectedRowIds.length > 0}
                      onChange={(e) =>
                        setState((prevState) => {
                          if (prevState.selectedRowIds.length === data.length) {
                            // deselect all
                            return { selectedRowIds: [] };
                          } else {
                            // select all
                            return { selectedRowIds: data.map((d) => d.id) };
                          }
                        })
                      }
                      {...(state.selectedRowIds.length > 0 &&
                        state.selectedRowIds.length !== data.length && {
                          indeterminate: true,
                          color: "default",
                        })}
                    />
                  ),
                  cell: (rowData) => (
                    <Checkbox
                      checked={state.selectedRowIds.some(
                        (id) => rowData.id === id,
                      )}
                    />
                  ),
                  cellProps: { style: { paddingRight: 0 } },
                  width: 72,
                },
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
              isCellSelected={(column, rowData) =>
                state.selectedRowIds.some((id) => rowData && rowData.id === id)
              }
              isCellHovered={(column, rowData, hoveredColumn, hoveredRowData) =>
                rowData.id && rowData.id === hoveredRowData.id
              }
              onCellClick={(event, { rowData }) => {
                setState((prevState) => {
                  if (prevState.selectedRowIds.some((id) => rowData.id === id)) {
                    // remove
                    return {
                      selectedRowIds: prevState.selectedRowIds.filter(
                        (id) => id !== rowData.id,
                      ),
                    };
                  } else {
                    // add
                    return {
                      selectedRowIds: [...prevState.selectedRowIds, rowData.id],
                    };
                  }
                });
              }}
              includeHeaders={true}
              width={900}
              style={{ backgroundColor: "white" }}
            />
      );
    },
  
    name: "with hover and checkbox",
  };
