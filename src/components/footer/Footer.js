import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #340d47;
  padding: 1rem;
  margin-top: 3rem;
  p {
    color: white;
    max-width: 1200px;
    text-align: right;
    margin: 0 auto;
  }
  a {
    color: white;
    font-size: 0.75rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <a
          rel="noreferrer"
          href="https://my-page-thaotruong.netlify.app/"
          target="_blank"
        >
          Thao Truong
        </a>{" "}
        - <a href="mailto:ttngocthao_87@yahoo.com">ttngocthao_87@yahoo.com</a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
