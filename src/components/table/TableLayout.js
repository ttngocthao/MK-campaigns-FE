import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
const columns = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 200,
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 200,
  },
  {
    field: "targetImpressions",
    headerName: "Target",
    width: 200,
  },
  {
    field: "deliveredImpressions",
    headerName: "Delivered",
    width: 200,
  },
];
const TableLayout = ({ data }) => {
  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        pt: 4,
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Box>
  );
};

export default TableLayout;
