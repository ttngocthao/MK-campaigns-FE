import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Spinning from "./Spinning";

const WaitingLayout = ({ open, handleClose }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <Spinning />
    </Backdrop>
  );
};

export default WaitingLayout;
