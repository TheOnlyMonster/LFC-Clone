// components/Preferences.jsx

import React, { useState } from "react";
import { Box, Button, Typography, Collapse } from "@mui/material";
import ContentToggle from "./ContentToggle";
import { getFontStyle } from "../Utils/Utils";

const Preferences = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isManageOpen, setIsManageOpen] = useState(false);

  const handleManageClick = () => {
    setIsManageOpen((prev) => !prev);
  };

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <Box
        sx={{
          gridColumn: { sm: "1 / span 2" },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "center" },
          textAlign: "left",
          padding: 2,
          gap: 2,
        }}
      >
        <Box sx={{ flex: "2" }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", fontSize: "1rem", color: "#4a4a49" }}
          >
            Get more from LFC?
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontWeight: "400",
              fontSize: "0.75rem",
              marginTop: "8px",
              lineHeight: "1.43",
            }}
          >
            Do you want to hear about our products, competitions, new signings,
            tickets, club news, and partner offers?
          </Typography>
          <Typography
            sx={{
              color: "#7c7c7b",
              fontWeight: "400",
              fontSize: "0.625rem",
              marginTop: "8px",
              lineHeight: "1.66",
            }}
          >
            We send offers and news on behalf of our partners but do not share
            your information directly with them.
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: { md: "center" },
            gap: 0.5,
            width: { xs: "100%", md: "auto" },
            flex: "1",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              justifyContent: "center",
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Button
              variant="outlined"
              onClick={() => handleClick("yes")}
              sx={{
                borderColor: "#dc0714",
                color: "red",
                fontWeight: "bold",
                padding: "8px 16px",
                borderWidth: "4px",
                fontStyle: "italic",
                "&::before": {
                  content: '""',
                  display: "inline-block",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  border: "2px solid #dc0714",
                  backgroundColor:
                    selectedOption === "yes" ? "#dc0714" : "transparent",
                  marginRight: "8px",
                  verticalAlign: "middle",
                },
                "&:hover": {
                  borderColor: "#dc0714",
                  color: "red",
                  fontWeight: "bold",
                  padding: "8px 16px",
                  borderWidth: "4px",
                  fontStyle: "italic",
                },
              }}
              fullWidth={false}
            >
              Yes
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleClick("no")}
              sx={{
                borderColor: "#dc0714",
                color: "red",
                fontWeight: "bold",
                padding: "8px 16px",
                borderWidth: "4px",
                fontStyle: "italic",
                "&::before": {
                  content: '""',
                  display: "inline-block",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  border: "2px solid #dc0714",
                  backgroundColor:
                    selectedOption === "no" ? "#dc0714" : "transparent",
                  marginRight: "8px",
                  verticalAlign: "middle",
                },
                "&:hover": {
                  borderColor: "#dc0714",
                  color: "red",
                  fontWeight: "bold",
                  padding: "8px 16px",
                  borderWidth: "4px",
                  fontStyle: "italic",
                },
              }}
              fullWidth={false}
            >
              No
            </Button>
          </Box>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#dc0714",
              color: "red",
              fontWeight: "bold",
              padding: "8px 16px",
              borderWidth: "4px",
              fontStyle: "italic",
              justifyContent: "space-between",
              "&::after": {
                content: '"▼"',
                display: "inline-block",
                marginLeft: "8px",
                verticalAlign: "middle",
              },
              "&:hover": {
                borderColor: "#dc0714",
                color: "red",
                fontWeight: "bold",
                padding: "8px 16px",
                borderWidth: "4px",
                fontStyle: "italic",
              },
            }}
            fullWidth={false}
            onClick={handleManageClick}
          >
            Manage
          </Button>
        </Box>
      </Box>
      <Collapse in={isManageOpen} sx={{ gridColumn: { sm: "1 / span 2" } }}>
        <Box
          sx={{
            marginTop: 4,
            padding: 2,
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={getFontStyle("#4a4a49", "700", "0.75rem")}
            gutterBottom
          >
            CONTENT
          </Typography>
          <Typography sx={getFontStyle("#7c7c7b", "400", "0.625rem")}>
            Please select what type of things you would like to hear more about
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              marginTop: 2,
            }}
          >
            <ContentToggle
              title="Products & Offers"
              decription={
                "Latest information on club products, new launches, retail, ticketing news"
              }
            />
            <ContentToggle
              title="Club Newsletters"
              decription={
                "All the latest news, videos and behind the scenes content from the men's and women's teams"
              }
            />
            <ContentToggle
              title="LFC Foundation"
              decription={
                "Latest information and news from the club’s official charity"
              }
            />
            <ContentToggle
              title="LFC Official Partners"
              decription={
                "Latest information, offers and products from our official partners"
              }
            />
          </Box>

          <Typography
            sx={getFontStyle("#4a4a49", "700", "0.75rem")}
            gutterBottom
            marginTop={4}
          >
            CHANNELS
          </Typography>
          <Typography sx={getFontStyle("#7c7c7b", "400", "0.625rem")}>
            Please select how you would like to hear from us
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              marginTop: 2,
            }}
          >
            <ContentToggle title="Email" width="15%" />
            <ContentToggle title="SMS" width="15%" />
            <ContentToggle title="Direct Mail" width="15%" />
            <ContentToggle title="Telephone" width="15%" />
          </Box>
          <Typography
            sx={getFontStyle("#4a4a49", "700", "0.75rem")}
            gutterBottom
            marginTop={4}
          >
            Other types of communication
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              marginTop: 2,
            }}
          >
            <ContentToggle
              decription="Please note we can send you messages related to your orders, services subscribed and updates relating to products or services you have purchased from us, or information about your account. This includes communications relating to Season Tickets, Ticket Sales and Official Membership benefits. If you explicitly would like to turn off these type of communication, it may limit your ability to be aware of these benefits."
              width="100%"
            />
          </Box>
        </Box>
      </Collapse>
    </>
  );
};

export default Preferences;
