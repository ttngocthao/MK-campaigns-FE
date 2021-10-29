import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spinning from "../components/spinning/Spinning";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import Tile from "../components/tile/Tile";

const ListTiles = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
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

const IndexPage = () => {
  const [campaigns, setCampaigns] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [itemsShow, setItemsShow] = useState(8); //mutiple of this number.
  const [hideMoreBtn, setHideMoreBtn] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/campaigns");
        const data = await res.json();
        setCampaigns(data);

        //  console.log("res", data);
      } catch (error) {
        console.log("error", error);
      }
      setLoading(false);
    };
    getData();
  }, []);

  const convertToDateStr = (no) => {
    const fullStr = new Date(no).toUTCString();
    return fullStr.slice(5, 16);
  };

  const loadMoreHandle = () => {
    const totalItems = campaigns?.length;
    if (itemsShow < totalItems) {
      setItemsShow(itemsShow + 8);
    } else {
      setHideMoreBtn(true);
    }
  };

  const rows =
    campaigns &&
    campaigns
      .filter((item, index) => index < itemsShow)
      .map((i) => {
        return {
          ...i,
          startDate: convertToDateStr(i.startDate),
          endDate: convertToDateStr(i.endDate),
        };
      });
  return (
    <Box>
      <h1>Mobkoi - Campaigns</h1>
      <Button variant="contained">Testing</Button>
      <Box sx={{ maxWidth: "1200px", margin: "0 auto", p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Table layout</Typography>
          <Link to="/add-campaign">Add new campaign</Link>
        </Box>
        <Box sx={{ pt: 2 }} variant="p">
          Total campaigns: {campaigns && campaigns.length}
        </Box>
        {isLoading ? (
          <Spinning />
        ) : (
          <Box
            sx={{
              height: 400,
              width: "100%",
              pt: 4,
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </Box>
        )}
      </Box>

      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            p: 2,
          }}
        >
          <Typography variant="h5">Tile layout</Typography>
          <Link to="/add-campaign">Add new campaign</Link>
        </Box>
      </Box>
      {isLoading ? (
        <Spinning />
      ) : (
        <>
          <ListTiles>
            {rows?.map((c, i) => (
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
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={loadMoreHandle}
              >
                Load more
              </Button>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default IndexPage;
/*  background: linear-gradient(
45deg, #FE6B8B 30%, #FF8E53 90%);
box-shadow: 0 3px 5px 2px rgb(255 105 135 / 30%)
*/
