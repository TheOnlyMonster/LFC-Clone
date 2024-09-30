// components/WhyJoin.jsx

import React from "react";
import { Box, Typography } from "@mui/material";
import { getFontStyle } from "../Utils/Utils";

const benefits = [
  "The chance to win amazing prizes every week",
  "Unlock behind-the-scenes videos",
  "Follow the match with live commentary",
  "Keep up to date through the Club newsletter",
  "Read exclusive interviews in the eMagazine",
  "Play EA Sports FIFA 23 at LFC Gaming",
  "Join the conversation on LFC Fan Forums",
  "Earn even more benefits and rewards",
];

const WhyJoin = () => (
  <Box
    padding={"72px 25% 88px 25%"}
    sx={{ backgroundColor: "#f5f5f5" }}
    textAlign={"center"}
  >
    <Typography sx={getFontStyle("#dc0714", "400", "2.5707rem", "normal")}>
      Why join MyLFC?
    </Typography>
    <Typography
      sx={getFontStyle("#757575", "normal", "0.9375rem", "normal", "1.5")}
      paddingTop={"10px"}
      textAlign={"center"}
    >
      Unlock new, exciting and exclusive benefits all in one place.
      <br />
      Join MyLFC, your FREE, Official LFC Account.
    </Typography>
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {benefits.map((benefit, index) => (
        <li key={index}>
          <Typography
            sx={getFontStyle(
              "#757575",
              "normal",
              "0.9375rem",
              "normal",
              "1.5"
            )}
          >
            {benefit}
          </Typography>
        </li>
      ))}
    </ul>
    <Typography
      sx={getFontStyle("#4a4a49", "700", "0.9375rem", "normal")}
      paddingTop={"10px"}
    >
      Already have an account?{" "}
      <Typography
        component={"span"}
        sx={{
          ...getFontStyle("#dc0714", "700", "0.9375rem", "normal"),
          textDecoration: "underline",
          fontStyle: "italic",
        }}
      >
        Log In
      </Typography>
    </Typography>
  </Box>
);

export default WhyJoin;
