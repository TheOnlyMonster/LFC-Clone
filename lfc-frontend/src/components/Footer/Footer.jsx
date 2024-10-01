import { Box, Typography, Divider, IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
Link;
import Sponsors from "../Sponsors/Sponsors";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <Sponsors
        num={4}
        padding={"50px 20px"}
        img={"standard-chartered-logo.png"}
        bgColor={"#dc0714"}
      />
      <Sponsors
        num={12}
        padding={"50px 20px"}
        img={"sponsor.svg"}
        bgColor={"#b71515"}
      />
      <Box
        sx={{
          backgroundColor: "#911712",
          color: "white",
          padding: "40px",
        }}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={"grid"}>
            <Typography
              variant="caption"
              fontSize={"0.6rem"}
              textTransform={"uppercase"}
              gutterBottom
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="caption"
              fontSize={"0.6rem"}
              textTransform={"uppercase"}
              gutterBottom
            >
              Terms and Conditions
            </Typography>
            <Typography
              variant="caption"
              fontSize={"0.6rem"}
              textTransform={"uppercase"}
              gutterBottom
            >
              Anti-Slavery
            </Typography>
            <Typography
              variant="caption"
              fontSize={"0.6rem"}
              textTransform={"uppercase"}
              gutterBottom
            >
              Cookies
            </Typography>
            <Typography
              variant="caption"
              fontSize={"0.6rem"}
              textTransform={"uppercase"}
              gutterBottom
            >
              Help
            </Typography>
            <Link to={"/contact-us"} style={{textDecoration: "none", color: "inherit", display: "block"}}>
              <Typography
                variant="caption"
                fontSize={"0.6rem"}
                textTransform={"uppercase"}
                gutterBottom
              >
                Contact Us
              </Typography>
            </Link>
            <Typography
              variant="caption"
              fontSize={"0.6rem"}
              textTransform={"uppercase"}
              gutterBottom
            >
              Accessibility
            </Typography>
            <Typography
              variant="caption"
              fontSize={"0.6rem"}
              textTransform={"uppercase"}
              gutterBottom
            >
              Cookie Settings
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
              padding: "0px 20px",
            }}
          >
            <IconButton>
              <FacebookOutlinedIcon sx={{ color: "white" }} fontSize="medium" />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: "white" }} fontSize="medium" />
            </IconButton>
            <IconButton>
              <InstagramIcon sx={{ color: "white" }} fontSize="medium" />
            </IconButton>
            <IconButton>
              <YouTubeIcon sx={{ color: "white" }} fontSize="medium" />
            </IconButton>
            <IconButton>
              <LinkedInIcon sx={{ color: "white" }} fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
        <Divider
          sx={{
            backgroundColor: "white",
            opacity: 0.5,
            marginTop: "20px",
          }}
        />
        <Box textAlign={"center"} marginTop={"20px"}>
          <Typography
            variant="caption"
            fontSize={"0.6rem"}
            textTransform={"uppercase"}
            gutterBottom
          >
            © Copyright 2024 The Liverpool Football Club and Athletic Grounds
            Limited. All rights reserved. Match Statistics supplied by Opta
            Sports Data Limited. Reproduced under licence from Football DataCo
            Limited. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
