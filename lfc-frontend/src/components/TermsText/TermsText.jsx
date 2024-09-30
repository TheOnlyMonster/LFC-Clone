// components/TermsText.jsx

import React from "react";
import { Typography } from "@mui/material";
import { getFontStyle } from "../Utils/Utils";

const TermsText = () => (
  <Typography
    sx={{
      gridColumn: { sm: "1 / span 2" },
      ...getFontStyle("#7c7c7b", "400", "0.625rem", "normal", "1.66"),
    }}
  >
    You can access our preference centre at any time to opt out of
    communications and control how we use your data. By registering
    to join, you confirm that you have read and accept Liverpool
    Football Club Terms and Conditions and have read the club Privacy
    Policy.
  </Typography>
);

export default TermsText;
