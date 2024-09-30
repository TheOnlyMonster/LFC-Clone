// components/ContentToggle.jsx

import React from "react";
import { Box, Typography, Switch } from "@mui/material";

const ContentToggle = ({ title }) => (
  <Box
    sx={{
      width: "200px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 2,
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      backgroundColor: "#ffffff",
    }}
  >
    <Typography>{title}</Typography>
    <Switch color="error" />
  </Box>
);

export default ContentToggle;
