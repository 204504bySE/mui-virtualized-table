import {TablePaginationProps} from "@mui/material";
import MuiVirtualizedTable, {MuiVirtualizedTableProps} from "../src";
import {useCallback, useMemo, useState} from "react";
import React from "react";

type PaginatedTableProps = MuiVirtualizedTableProps & {
    defaultPagenation?: TablePaginationProps
};
const PaginatedTable: React.FC<PaginatedTableProps> = (props) => {
    const [page, setPage] = useState(1);
    const [perPage,setPerPage] = useState(props.defaultPagenation?.rowsPerPage ?? 10);
    const handlePageChange = useCallback(() => setPage((prev) => prev + 1), []);
    const handleRowsPerPageChange = useCallback((e:any) => setPage(e.target.value as number), []);
    
    const start = perPage * (page - 1);
    const pageData = useMemo(() => props.data?.slice(start, start+perPage), [props.data, start, perPage]);

    return (
        <MuiVirtualizedTable
          data={pageData}
          pagination={{
            count: props.data?.length ?? 0,
            rowsPerPage: perPage,
            page: page - 1, // material-ui's <TablePagination /> is 0-based
            // rowsPerPageOptions: [5, 10, 25, 100, 1000],
            onPageChange: handlePageChange,
            onRowsPerPageChange: handleRowsPerPageChange
          }}
          {...props}
        />
      );
}

export default PaginatedTable;
