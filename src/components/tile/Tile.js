import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

const StyledTile = styled.li`
  border-radius: 10px;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  box-shadow: 0 3px 5px 2px rgb(255 105 135 / 30%);
  width: 100%;
  max-width: 250px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

const Tile = ({
  id,
  startDate,
  endDate,
  targetImpressions,
  deliveredImpressions,
}) => {
  return (
    <StyledTile>
      <Typography variant="h6">{id}</Typography>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
      <p>Target: {targetImpressions}</p>
      <p>Deliverd: {deliveredImpressions}</p>
    </StyledTile>
  );
};

export default Tile;
