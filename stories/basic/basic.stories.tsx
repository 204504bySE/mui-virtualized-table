import React from "react";
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import type { StoryObj } from '@storybook/react';
import MuiVirtualizedTable from "../../src/index";
import { createPersonData, createDessertData } from "../data.js";
import { withStyles } from "tss-react/mui";
import PaginatedTable from "../PaginatedTable";

type Story = StoryObj<typeof MuiVirtualizedTable>;

export default {
    title: "Basic",
  };

export const DefaultEmpty: Story = {
  render: () => (
    <MuiVirtualizedTable width={500} style={{ backgroundColor: "white" }} />
  ),

  name: "default (empty)",
};

export const Simple: Story = {
  render: () => {
    const data = createPersonData(5);
    return (
      <MuiVirtualizedTable
        data={data}
        columns={[{ name: "firstName" }, { name: "lastName" }]}
        width={500}
        style={{ backgroundColor: "white" }}
      />
    );
  },

  name: "simple",
};

export const Responsive: Story = {
  render: () => {
    const data = createPersonData(5);
    return (
      <AutoSizer>
        {({ width, height }) => (
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

  name: "responsive",
};

export const CompositeCells: Story = {
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

  name: "composite cells",
};

export const IncludeHeaders: Story = {
  render: () => {
    const data = createPersonData(5);
    return (
      <MuiVirtualizedTable
        data={data}
        columns={[{ name: "firstName" }, { name: "lastName" }]}
        includeHeaders={true}
        width={500}
        style={{ backgroundColor: "white" }}
      />
    );
  },

  name: "include headers",
};

export const CustomHeaders: Story = {
  render: () => {
    const data = createPersonData(5);
    return (
      <MuiVirtualizedTable
        data={data}
        columns={[
          { name: "firstName", header: "First Name" },
          { name: "lastName", header: "Last Name" },
        ]}
        includeHeaders={true}
        width={500}
        style={{ backgroundColor: "white" }}
      />
    );
  },

  name: "custom headers",
};

export const FixedFreezeRowS: Story = {
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
              fixedRowCount={1}
              style={{ backgroundColor: "white" }}
            />
          )}
        </AutoSizer>
      </div>
    );
  },

  name: "fixed/freeze row(s)",
};

export const FixedFreezeColumnS: Story = {
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
              fixedColumnCount={1}
              style={{ backgroundColor: "white" }}
            />
          )}
        </AutoSizer>
      </div>
    );
  },

  name: "fixed/freeze column(s)",
};

export const FixedFreezeBoth: Story = {
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

  name: "fixed/freeze both",
};

export const RowHeight: Story = {
  render: () => {
    const data = createDessertData();
    const orderBy = "FullName desc";
    const [orderProp, orderDirection] = orderBy;
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
        includeHeaders={true}
        width={900}
        rowHeight={24}
        style={{ backgroundColor: "white" }}
      />
    );
  },

  name: "row height",
};

export const DefaultCellProps: Story = {
  render: () => {
    const data = createDessertData();
    const orderBy = "FullName desc";
    const [orderProp, orderDirection] = orderBy;
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
        includeHeaders={true}
        width={900}
        cellProps={{ size: "small" }}
        style={{ backgroundColor: "white" }}
      />
    );
  },

  name: "default cellProps",
};

export const CellPropsAsFunction: Story = {
  render: () => {
    const data = createDessertData();
    const orderBy = "FullName desc";
    const [orderProp, orderDirection] = orderBy;
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
        includeHeaders={true}
        width={900}
        cellProps={(column, rowData) =>
          column.name === "fat" && rowData && rowData[column.name] > 10
            ? { style: { backgroundColor: "rgba(255,0,0,.5)", color: "white" } }
            : {}
        }
        style={{ backgroundColor: "white" }}
      />
    );
  },

  name: "cellProps as function",
};

export const TextOverflow: Story = {
  render: () => {
    const data = createPersonData(10);
    return (
      <MuiVirtualizedTable
        data={data}
        columns={[
          {
            name: "fullName",
            header: "Name",
            width: 100,
            cell: (d) => `${d.firstName} ${d.lastName}`,
          },
          { name: "jobTitle", header: "Job Title", width: 100 },
          { name: "jobArea", header: "Job Area", width: 100 },
        ]}
        width={300}
        includeHeaders={true}
        rowHeight={24}
        style={{ backgroundColor: "white" }}
        // cellProps={{ size="'small"' }}
        cellProps={{ style: { paddingRight: 0 } }}
      />
    );
  },

  name: "text overflow",
};

export const ClickableHeadersAndCells: Story = {
  render: () => {
    const data = createPersonData(5);
    return (
      <AutoSizer>
        {({ width, height }) => (
          <MuiVirtualizedTable
            data={data}
            columns={[
              { name: "firstName", header: "First Name" },
              {
                name: "lastName",
                header: "Last Name (disabled)",
                onHeaderClick: false,
              },
              {
                name: "jobTitle",
                header: "Job Title (custom)",
                onHeaderClick: (event, { column }) => {
                  alert(
                    `Job Title header clicked; column.name: ${column.name}`,
                  );
                },
              },
            ]}
            width={width}
            style={{ backgroundColor: "white" }}
            includeHeaders={true}
            onHeaderClick={(event, { column }) =>
              alert(`Clicked '${column.name}' header in column'`)
            }
            onCellClick={(event, { column, rowData }) =>
              alert(
                `Clicked cell in column '${column.name}' containing '${
                  rowData[column.name]
                }'`,
              )
            }
          />
        )}
      </AutoSizer>
    );
  },

  name: "clickable headers and cells",
};

export const ClickableWithoutPointer: Story = {
  render: () => {
    const data = createPersonData(5);
    const Component = withStyles((props) => (
        <AutoSizer>
          {({ width }) => (
            <MuiVirtualizedTable
              data={data}
              classes={{ cellClickable: props.classes.cellClickable }}
              columns={[
                { name: "firstName", header: "First Name" },
                {
                  name: "lastName",
                  header: "Last Name (disabled)",
                  onHeaderClick: false,
                },
                {
                  name: "jobTitle",
                  header: "Job Title (custom)",
                  onHeaderClick: () => {
                    alert("Job Title header clicked");
                  },
                },
              ]}
              width={width}
              style={{ backgroundColor: "white" }}
              includeHeaders={true}
              onHeaderClick={(event, { column }) =>
                alert(`Clicked '${column.name}' header in column'`)
              }
              onCellClick={(event, { column, rowData }) =>
                alert(
                  `Clicked cell in column '${column.name}' containing '${
                    rowData[column.name]
                  }'`,
                )
              }
            />
          )}
        </AutoSizer>
      ),(theme,props) => ({
      cellClickable: {
        cursor: "auto",
      },
    }));
    return <Component />;
  },

  name: "clickable without pointer",
};

export const DoubleClicksAndContextMenus: Story = {
  render: () => {
    const data = createPersonData(5);
    return (
      <AutoSizer>
        {({ width, height }) => (
          <MuiVirtualizedTable
            data={data}
            columns={[
              { name: "firstName", header: "First Name" },
              { name: "lastName", header: "Last Name" },
              { name: "jobTitle", header: "Job Title" },
            ]}
            width={width}
            style={{ backgroundColor: "white" }}
            includeHeaders={true}
            onCellDoubleClick={(event, { column, rowData }) =>
              alert(
                `Double-clicked cell in column '${column.name}' containing '${
                  rowData[column.name]
                }'`,
              )
            }
            onCellContextMenu={(event, { column, rowData }) => {
              event.preventDefault();
              alert(
                `Right-clicked cell in column '${column.name}' containing '${
                  rowData[column.name]
                }'`,
              );
            }}
          />
        )}
      </AutoSizer>
    );
  },

  name: "double clicks and context menus",
};

export const Pagination: Story = {
  render: () => {
    const data = createPersonData(100);
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
            includeHeaders={true}
            style={{ backgroundColor: "white" }}
          />
        )}
      </AutoSizer>
    );
  },

  name: "pagination",
};

export const NullDataAndIncludeHeaders: Story = {
  render: () => {
    return (
      <PaginatedTable
        data={undefined}
        columns={[{ name: "firstName" }, { name: "lastName" }]}
        includeHeaders
        fixedRowCount={1}
        width={500}
        style={{ backgroundColor: "white" }}
      />
    );
  },

  name: "null data and include headers",
};
