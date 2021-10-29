import React from "react";
import Layout from "../components/Layout";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Box, TextField, Button } from "@mui/material";
const NewCampaign = () => {
  const [value, setValue] = React.useState([null, null]);
  const [target, setTarget] = React.useState("");

  const clickHandle = () => {
    console.log("date", value);
    console.log("target", target);
    setValue([null, null]);
    setTarget("");
  };

  return (
    <Layout>
      <Box sx={{ maxWidth: "465px", margin: "0 auto", p: 1 }}>
        <h1>Add new campaign</h1>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Start Date"
            endText="End Date"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
        <br />
        <TextField
          fullWidth
          placeholder="Target Impressions"
          label="Target Impressions"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        />
        <br />
        <br />
        <Button
          sx={{ py: 2 }}
          onClick={clickHandle}
          variant="contained"
          fullWidth
        >
          Add Campaign
        </Button>
      </Box>
    </Layout>
  );
};

export default NewCampaign;
