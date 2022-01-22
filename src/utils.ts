import { ReactNode } from "react";

export type RowData = {[key: string]: ReactNode} | ReactNode[]

export type Column = {
  name: string,
  header?: ReactNode,
  onHeaderClick?: false | ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>, {column}: {column: Column}) => any),
  width?: number,
  minWidth?: number,
  cell?: (rowData: RowData) => ReactNode
  onClick?: any
  cellProps?: any,
  orderBy?: string,
  resizable?: Boolean
};

export function calcColumnWidth(index: number, columns: Column[], tableWidth: number): number {
  const column = columns[index];
  if (!column) {
    return 0;
  }

  let width = getDeterministicColumnWidth(column, tableWidth);

  if (width) {
    return width;
  }

  const totalAllocatedWidth = columns.reduce(
    (result, c) => result + (getDeterministicColumnWidth(c, tableWidth) || 0),
    0
  );

  // Evenly distribute remaining width amoungst columns (accounting for minWidths)
  const variableWidthColumns = columns.filter(
    c => typeof c.width !== 'number' && typeof c.width !== 'string'
  );
  const initialDistributedWidthPerColumn =
    (tableWidth - totalAllocatedWidth) / variableWidthColumns.length;
  const activeMinWidthColumns = variableWidthColumns.filter(
    c => ((c.minWidth ?? 0) > initialDistributedWidthPerColumn ? c.minWidth : 0)
  );
  const allocatedMinWidth = activeMinWidthColumns.reduce(
    (result, c) => result + (c.minWidth ?? 0),
    0
  );
  const remainingWidth = tableWidth - totalAllocatedWidth - allocatedMinWidth;

  return Math.max(
    column.minWidth || 0,
    remainingWidth /
      (variableWidthColumns.length - activeMinWidthColumns.length)
  );
}

function getDeterministicColumnWidth(column: Column, tableWidth: number) {
  if (typeof column.width === 'number') {
    // Fixed width
    return column.width;
  } else if (typeof column.width === 'string') {
    // Percentage width
    const percentageBasedWidth = percentToFixedWidth(column.width, tableWidth);
    return Math.max(percentageBasedWidth, column.minWidth || 0);
  } else {
    // Variable width
    return null;
  }
}

function percentToFixedWidth(percentAsString: string, tableWidth: number) {
  return (parseFloat(percentAsString) / 100) * tableWidth;
}
