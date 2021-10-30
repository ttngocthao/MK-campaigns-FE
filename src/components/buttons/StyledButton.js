import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Wrap = styled(Button)`
  && {
    background-color: #482880;
    color: white !important;
    width: 100%;
    padding: 0.5rem;
    &:hover {
      background-color: #8561c5;
    }
  }
`;

const StyledButton = ({ text, clickHandle }) => {
  return <Wrap onClick={clickHandle}>{text}</Wrap>;
};

export default StyledButton;
