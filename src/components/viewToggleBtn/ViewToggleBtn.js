import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import { Typography } from "@material-ui/core";

const ViewToggleBtn = ({ view, handleChange }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <ToggleButtonGroup
        orientation="horizontal"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="list" aria-label="list" style={{ marginRight: 8 }}>
          <ViewListIcon fontSize="large" />
        </ToggleButton>
        <ToggleButton value="module" aria-label="module">
          <ViewModuleIcon fontSize="large" />
        </ToggleButton>
      </ToggleButtonGroup>
      <Typography variant="h5" style={{ paddingLeft: "2rem" }}>
        {view === "list" ? "Table " : "Tile "} layout
      </Typography>
    </Box>
  );
};

export default ViewToggleBtn;
