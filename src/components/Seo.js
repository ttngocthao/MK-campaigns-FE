import React from "react";
import { Helmet } from "react-helmet";
import TabIcon from "../images/icon.png";
const Seo = ({ title }) => {
  return (
    <Helmet>
      <title>Mobkoi - {title ? ` - ${title}` : ""}</title>
      <link rel="icon" type="image/icon" href={TabIcon} />
      {/* add some google font here if needed */}
    </Helmet>
  );
};

export default Seo;
