import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import MultiGrid, { MultiGridProps } from 'react-virtualized/dist/commonjs/MultiGrid';
import clsx from 'clsx';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableFooter from '@mui/material/TableFooter';
import TablePagination, { TablePaginationProps } from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Theme, useTheme } from '@mui/material/styles';

import Draggable from 'react-draggable';
import { calcColumnWidth, Column, RowData } from './utils';
import { FOOTER_BORDER_HEIGHT, useDefaultStyles } from './style';

const calculateWidths = ({ resizable, columns: Columns }: {resizable: Boolean, columns: any[]}) => {
  var widths: {[key: string]: number} = {};
  if (resizable) {
    var initialWidth = 1;
    var columns: any[] = [];
    Columns.forEach(c => {
      if (c.width) {
        widths[c.name] = 0.1;
        initialWidth = initialWidth - 0.1;
      } else {
        columns.push(c);
      }
    });
    columns.forEach(c => {
      widths[c.name] = initialWidth / columns.length;
    });
  }
  return widths;
};

type CellRendererType = {
    includeHeaders: Boolean
    data: RowData[],
    columns: Column[],
    isCellHovered?: (column: Column, rowData: RowData, hoveredColumn: Column, hoveredRowData: RowData) => Boolean,
    isCellSelected?: (column: Column, rowData: RowData) => Boolean,
    isCellDisabled?: (column: Column, rowData: RowData) => Boolean,
    classes: any,
    orderBy?: string,
    orderDirection?: 'desc' | 'asc',
    onHeaderClick?: false | ((event: React.MouseEvent<HTMLSpanElement, MouseEvent>, {column}: {column: Column}) => any),
    onCellClick: false | ((event: React.MouseEvent<HTMLTableCellElement, MouseEvent>, {column, rowData, data}: {column: Column, rowData: RowData, data: RowData[]}) => any),
    onCellDoubleClick: false | ((event: React.MouseEvent<HTMLTableCellElement, MouseEvent>, {column, rowData, data}: {column: Column, rowData: RowData, data: RowData[]}) => any),
    onCellContextMenu: false | ((event: React.MouseEvent<HTMLTableCellElement, MouseEvent>, {column, rowData, data}: {column: Column, rowData: RowData, data: RowData[]}) => any),
    resizable: Boolean,
    cellProps: any 
}

const useCellRenderer = ({
  recomputeGridSize,
  columns,
  width,
  includeHeaders,
  data,
  columnWidth,
  isCellHovered,
  isCellSelected,
  isCellDisabled,
  classes,
  orderBy,
  orderDirection,
  onHeaderClick,
  onCellClick,
  onCellDoubleClick,
  onCellContextMenu,
  resizable,
  cellProps: defaultCellProps
}: Pick<MultiGridProps, 'recomputeGridSize' | 'width' | 'columnWidth'
> & CellRendererType) => {
  const [{ hoveredColumn, hoveredRowData }, setHovered] = React.useState<{
    hoveredColumn: null | Column,
    hoveredRowData: null | {[key: string]: any}
  }>
  ({
    hoveredColumn: null,
    hoveredRowData: null
  });

  const [widths, setWidths] = React.useState(
    calculateWidths({resizable, columns})
  );

  React.useEffect(() => {
    recomputeGridSize();
  }, [recomputeGridSize, hoveredColumn, hoveredRowData, widths]);

  const resizableColumnWidths = React.useCallback(
    (index, columns, tableWidth) => widths[columns[index].name] * tableWidth,
    [widths]
  );

  const getColumnWidth = React.useCallback(
    ({ index }: {index: number}) =>
      typeof columnWidth === 'function'
        ? columnWidth({ index })
        : resizable
        ? resizableColumnWidths(index, columns, width)
        : calcColumnWidth(index, columns, width),
    [columnWidth, resizable, columns, width, resizableColumnWidths]
  );

  const resizeRow = React.useCallback(
    ({ dataKey, deltaX }: {dataKey: string, deltaX: number}) =>
      setWidths(prev => {
        const delta = deltaX / width;
        const index = columns.findIndex(c => c.name === dataKey);
        const nextDataKey = columns[index + 1].name;
        return {
          ...prev,
          [dataKey]: prev[dataKey] + delta,
          [nextDataKey]: prev[nextDataKey] - delta
        };
      }),
    [setWidths, columns, width]
  );

  const handleDrag = React.useCallback(
    dataKey => (event: any, { deltaX }: {deltaX: number}) =>
      resizeRow({
        dataKey,
        deltaX
      }),
    [resizeRow]
  );

  const handleMouse = React.useCallback(
    (hoveredColumn: null | Column, hoveredRowData: null | {[key: string]: any}) => (e: React.MouseEvent<HTMLTableCellElement>) =>
      setHovered({
        hoveredColumn,
        hoveredRowData
      }),
    [setHovered]
  );

  const cellRenderer = ({ columnIndex, rowIndex, key, style }: {columnIndex: number, rowIndex: number, key: string, style: React.CSSProperties}) => {
    const column = columns[columnIndex];
    if (!column) { return; }
    const isHeader = includeHeaders && rowIndex === 0;
    const headerOffset = includeHeaders ? 1 : 0;
    const rowData = (data && data[rowIndex - headerOffset]) || {};

    const isSelected = isCellSelected && isCellSelected(column, rowData);
    const isDisabled = isCellDisabled && isCellDisabled(column, rowData);

    const isHovered =
      hoveredColumn &&
      hoveredRowData &&
      isCellHovered &&
      isCellHovered(column, rowData, hoveredColumn, hoveredRowData);

    const resolveCellProps = (cellProps: any) =>
      typeof cellProps === 'function'
        ? cellProps(column, rowData, hoveredColumn, hoveredRowData)
        : cellProps;
    // TODO: Deep merge (do not override all defaultCellProps styles if column.cellProps.styles defined?)
    const { style: cellStyle, ...cellProps }: any = {
      ...resolveCellProps(defaultCellProps),
      ...resolveCellProps(column.cellProps)
    };

    const contents = (
      <div className={classes.cellContents}>
        <span style={{ flex: 'auto' }}>
          {isHeader
            ? column.header != null
              ? column.header
              : column.name
            : column.cell
            ? column.cell(rowData)
            : Array.isArray(rowData) 
              ? rowData[columnIndex]
              : rowData[column.name]}
        </span>
        <span style={{ float: 'right' }}>
          {isHeader && resizable && columnIndex < columns.length - 1 && (
            <Draggable
              axis='x'
              defaultClassName={classes.dragHandle}
              defaultClassNameDragging={classes.DragHandleActive}
              onDrag={handleDrag(column.name)}
              position={{ x: 0, y: 0 }}
            >
              <span className={classes.DragHandleIcon}>⋮</span>
            </Draggable>
          )}
        </span>
      </div>
    );

    const hasCellClick = !isHeader && onCellClick;
    const hasCellDoubleClick = !isHeader && onCellDoubleClick;
    const hasCellContextMenu = !isHeader && onCellContextMenu;
    const isClickable =
      hasCellClick ||
      hasCellDoubleClick ||
      hasCellContextMenu ||
      column.onClick;

    const className = clsx(classes.cell, {
      [classes.cellClickable]: isClickable,
      [classes.cellHovered]: isHovered,
      [classes.cellSelected]: isSelected,
      [classes.cellDisabled]: isDisabled,
      [classes.cellHeader]: isHeader,
      [classes.cellInLastColumn]: columnIndex === columns.length - 1,
      [classes.cellInLastRow]:
        !isHeader && rowIndex === (data ? data.length : 0)
    });

    return (
      <TableCell
        component='div'
        className={className}
        key={key}
        onMouseEnter={handleMouse(column, rowData)}
        onMouseLeave={handleMouse(null, null)}
        style={{
          ...style,
          ...cellStyle
        }}
        {...(hasCellClick && {
          onClick: event => onCellClick(event, { column, rowData, data })
        })} // Can be overridden by cellProps.onClick on column definition
        {...(hasCellDoubleClick && {
          onDoubleClick: event =>
            onCellDoubleClick(event, { column, rowData, data })
        })} // Can be overridden by cellProps.onDoubleClick on column definition
        {...(hasCellContextMenu && {
          onContextMenu: event =>
            onCellContextMenu(event, { column, rowData, data })
        })} // Can be overridden by cellProps.onContextMenu on column definition
        {...cellProps}
      >
        {isHeader &&
        column.onHeaderClick !== false &&
        (column.onHeaderClick || onHeaderClick) ? (
          <TableSortLabel
            active={
              !!orderBy &&
              (orderBy === column.name || orderBy === column.orderBy) &&
              rowIndex === 0
            }
            style={{ width: 'inherit' }} // fix text overflowing
            direction={orderDirection}
            onClick={event =>
              column.onHeaderClick
                ? column.onHeaderClick(event, { column })
                : onHeaderClick && onHeaderClick(event, { column })
            }
          >
            {contents}
          </TableSortLabel>
        ) : isHeader && column.resizable ? (
          <React.Fragment>
            {contents}
            <Draggable
              axis='x'
              defaultClassName='DragHandle'
              defaultClassNameDragging='DragHandleActive'
              onDrag={handleDrag(column.name)}
              position={{ x: 0, y: 0 }}
            >
              <span className='DragHandleIcon'>⋮</span>
            </Draggable>
          </React.Fragment>
        ) : (
          contents
        )}
      </TableCell>
    );
  };

  return { cellRenderer, columnWidth: getColumnWidth };
};

export default function MuiVirtualizedTable({
  data,
  columns,
  width,
  height,
  maxHeight,
  pagination,
  fitHeightToRows,
  fixedRowCount = 0,
  fixedColumnCount = 0,
  rowHeight = 48,
  style,
  useStyles = useDefaultStyles,
  columnWidth,
  includeHeaders = false,
  isCellHovered,
  isCellSelected,
  isCellDisabled,
  classes: Classes,
  orderBy,
  orderDirection,
  onHeaderClick,
  onCellClick,
  onCellDoubleClick,
  onCellContextMenu,
  resizable,
  cellProps,
  ...other
}: MultiGridProps & CellRendererType & {
  pagination: TablePaginationProps,  
}) {
  const classes = useStyles({ classes: Classes });
  const theme = useTheme();

  const multiGrid = React.useRef<MultiGrid>(null);

  const recomputeGridSize = React.useCallback(
    () => multiGrid.current && multiGrid.current.recomputeGridSize(),
    [multiGrid]
  );

  React.useEffect(() => {
    recomputeGridSize();
  }, [columns, data, height, width, recomputeGridSize]);

  let calculatedHeight = 0;
  if (height) {
    calculatedHeight = height; // fixed height
  } else if (pagination && pagination.rowsPerPage && !fitHeightToRows) {
    const rowCount =
      pagination.rowsPerPage +
      (fixedRowCount ? fixedRowCount : includeHeaders ? 1 : 0);
    calculatedHeight = rowCount * (rowHeight as number);
  } else if (Array.isArray(data)) {
    const rowCount =
      data.length + (fixedRowCount ? fixedRowCount : includeHeaders ? 1 : 0);
    calculatedHeight = rowCount * (rowHeight as number);
  }

  const paginationHeight =
    Number(theme?.mixins.toolbar.minHeight ?? 0) + FOOTER_BORDER_HEIGHT;

  const calculatedHeightWithFooter =
    calculatedHeight + (pagination ? paginationHeight : 0);
  const containerHeight =
    maxHeight != null
      ? Math.min(calculatedHeightWithFooter, maxHeight)
      : calculatedHeightWithFooter;
  const multiGridHeight = containerHeight - (pagination ? paginationHeight : 0);

  return (
    <Table
      component='div'
      style={{ width, height: containerHeight, ...style }}
      className={classes.table}
      {...other as any}
    >
      <MultiGrid
        {...useCellRenderer({
          recomputeGridSize,
          data,
          columns,
          width,
          classes,
          includeHeaders,
          columnWidth,
          isCellHovered,
          isCellSelected,
          isCellDisabled,
          orderBy,
          orderDirection,
          onHeaderClick,
          onCellClick,
          onCellDoubleClick,
          onCellContextMenu,
          resizable,
          cellProps,
        })}
        ref={multiGrid}
        width={width}
        columnCount={Array.isArray(columns) ? columns.length : 0}
        fixedColumnCount={fixedColumnCount}
        enableFixedColumnScroll={fixedColumnCount > 0}
        height={multiGridHeight}
        rowHeight={rowHeight}
        rowCount={Array.isArray(data) ? data.length + (includeHeaders ? 1 : 0) : 0}
        fixedRowCount={fixedRowCount}
        enableFixedRowScroll={fixedRowCount > 0}
        // TODO: Read these from `classes` without classes.table inheritance?  How to pass props.classes down to override?
        classNameTopLeftGrid={'topLeftGrid'}
        classNameTopRightGrid={'topRightGrid'}
        classNameBottomLeftGrid={'bottomLeftGrid'}
        classNameBottomRightGrid={'bottomRightGrid'}
      />
      {pagination && (
        <TableFooter component='div' className={classes.footer}>
          <TablePagination component='div' {...pagination} />
        </TableFooter>
      )}
    </Table>
  );
}

MuiVirtualizedTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  width: PropTypes.number,
  height: PropTypes.number,
  maxHeight: PropTypes.number,
  pagination: PropTypes.object,
  fitHeightToRows: PropTypes.bool,
  fixedRowCount: PropTypes.number,
  fixedColumnCount: PropTypes.number,
  rowHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  columnWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  includeHeaders: PropTypes.bool,
  orderBy: PropTypes.string,
  orderDirection: PropTypes.string,
  onHeaderClick: PropTypes.func,
  onCellClick: PropTypes.func,
  onCellDoubleClick: PropTypes.func,
  onCellContextMenu: PropTypes.func,
  noPointer: PropTypes.bool,
  isCellHovered: PropTypes.func,
  isCellSelected: PropTypes.func,
  isCellDisabled: PropTypes.func,
  classes: PropTypes.object,
  cellProps: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  style: PropTypes.object,
  useStyles: PropTypes.func,
};

