import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Spinning from "../components/spinning/Spinning";
import { Box } from "@mui/system";

import TableLayout from "../components/table/TableLayout";
import TileLayout from "../components/tile/TileLayout";
import ViewToggleBtn from "../components/viewToggleBtn/ViewToggleBtn";
import { constant } from "../constant";
import { convertToDateStr } from "../util/displayDate";

const IndexPage = () => {
  const [campaigns, setCampaigns] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [itemsShow, setItemsShow] = useState(8); //mutiple of this number.
  const [hideMoreBtn, setHideMoreBtn] = useState(false);
  const [view, setView] = React.useState("list");
  const handleChange = (event, nextView) => {
    setView(nextView);
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(constant.dataUrl);
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

  const loadMoreHandle = () => {
    const totalItems = campaigns?.length;
    if (itemsShow < totalItems) {
      setItemsShow(itemsShow + 8);
    } else {
      setHideMoreBtn(true);
    }
  };

  const data =
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
  const dataTable =
    campaigns &&
    campaigns.map((i) => {
      return {
        ...i,
        startDate: convertToDateStr(i.startDate),
        endDate: convertToDateStr(i.endDate),
      };
    });
  return (
    <Box>
      <h1>Mobkoi - Campaigns</h1>

      <Box sx={{ maxWidth: "1200px", margin: "0 auto", p: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ViewToggleBtn view={view} handleChange={handleChange} />

          <Link to="/add-campaign">Add new campaign</Link>
        </Box>

        <Box sx={{ pt: 2 }} variant="p">
          Total campaigns: {campaigns && campaigns.length}
        </Box>
        {isLoading ? (
          <Spinning />
        ) : view === "list" ? (
          <TableLayout data={dataTable} />
        ) : (
          <TileLayout
            data={data}
            loadMoreHandle={loadMoreHandle}
            hideMoreBtn={hideMoreBtn}
          />
        )}
      </Box>
    </Box>
  );
};

export default IndexPage;
