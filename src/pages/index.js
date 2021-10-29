import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Box } from "@mui/system";
import { Button, Link, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { convertToDateStr } from "../util/convertToDateStr";
const Tile = styled.li`
  border-radius: 10px;
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  box-shadow: 0 3px 5px 2px rgb(255 105 135 / 30%);
  width: 100%;
  max-width: 250px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;
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
  const data = useStaticQuery(graphql`
    {
      allCampaign {
        nodes {
          startDate
          endDate
          id
          targetImpressions
          deliveredImpressions
        }
      }
    }
  `);
  const campaigns = data.allCampaign.nodes;
  const rows = campaigns.map((i) => {
    return {
      ...i,
      startDate: convertToDateStr(i.startDate),
      endDate: convertToDateStr(i.endDate),
    };
  });
  return (
    <Layout>
      <h1>Mobkoi - Campaigns</h1>
      <Box sx={{}}>
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
          <Typography variant="h5">Table layout</Typography>
          <Link href="/newCampaign">Add new campaign</Link>
        </Box>

        <Box
          sx={{
            height: 400,
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            p: 2,
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
          />
        </Box>
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
          <Link href="/newCampaign">Add new campaign</Link>
        </Box>
      </Box>
      <ListTiles>
        {rows.map((c, i) => (
          <Tile key={i}>
            <Typography variant="h6">{c.id}</Typography>
            <p>Start Date: {c.startDate}</p>
            <p>End Date: {c.endDate}</p>
            <p>Target: {c.targetImpressions}</p>
            <p>Deliverd: {c.deliveredImpressions}</p>
          </Tile>
        ))}
      </ListTiles>
    </Layout>
  );
};

export default IndexPage;
/*  background: linear-gradient(
45deg, #FE6B8B 30%, #FF8E53 90%);
box-shadow: 0 3px 5px 2px rgb(255 105 135 / 30%)
*/
