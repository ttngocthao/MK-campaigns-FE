import React from "react";
import Tile from "./Tile";
import styled from "styled-components";
import { Box } from "@mui/system";

import StyledButton from "../buttons/StyledButton";

const ListTiles = styled.ul`
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const TileLayout = ({ data, hideMoreBtn, loadMoreHandle }) => {
  return (
    <>
      <ListTiles>
        {data?.map((c, i) => (
          <Tile
            key={i}
            id={c.id}
            startDate={c.startDate}
            endDate={c.endDate}
            targetImpressions={c.targetImpressions}
            deliveredImpressions={c.deliveredImpressions}
          />
        ))}
      </ListTiles>
      {!hideMoreBtn && (
        <Box sx={{ margin: "2rem auto", maxWidth: "600px" }}>
          <StyledButton text="Load more" clickHandle={loadMoreHandle} />
        </Box>
      )}
    </>
  );
};

export default TileLayout;
