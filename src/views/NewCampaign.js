import React, { useState } from "react";

import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Box, TextField, Alert, Snackbar } from "@mui/material";
import WaitingLayout from "../components/spinning/WaitingLayout";
import StyledButton from "../components/buttons/StyledButton";
import { constant } from "../constant";
const NewCampaign = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    displayText: "",
    severity: "success",
  });
  const [value, setValue] = useState([null, null]);
  const [target, setTarget] = useState("");
  const [open, setOpen] = useState(false);

  const checkEmptyFields = () => {
    let errors = [];
    value.map((v, i) => {
      if (!v) {
        errors = [
          ...errors,
          i === 0
            ? { startDateErrMsg: "Start date cannot be empty" }
            : { endDateErrMsg: "End date cannot be empty" },
        ];
      }
      return v;
    });
    if (target === "") {
      errors = [...errors, { targetErrMsg: "Target cannot be empty" }];
    }
    return errors;
  };

  const clickHandle = async () => {
    //check empty field

    const errors = checkEmptyFields();
    if (errors.length === 0) {
      setOpen(true);
      const data = {
        startDate: Date.parse(value[0]),
        endDate: Date.parse(value[1]),
        targetImpressions: target,
      };
      const res = await fetch(constant.dataUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        //reset form after submit
        setOpen(false);
        setValue([null, null]);
        setTarget("");
        //  console.log("success", res);
        setSnackbar({
          ...snackbar,
          displayText: "Successfully added new campaign",
          severity: "success",
          open: true,
        });
      } else {
        setOpen(false);
        console.log("error", res);
        setSnackbar({
          ...snackbar,
          displayText: "Error found. Please try again",
          severity: "error",
          open: true,
        });
      }
    }
    if (errors.length !== 0) {
      setSnackbar({
        ...snackbar,
        displayText: "Please fill all the inputs",
        severity: "error",
        open: true,
      });
    }
  };

  return (
    <Box>
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
        <StyledButton text="Add Campaign" clickHandle={clickHandle} />
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.displayText}
        </Alert>
      </Snackbar>
      <WaitingLayout open={open} handleClose={() => setOpen(false)} />
    </Box>
  );
};

export default NewCampaign;
