import {
  Toolbar,
  Box,
  Divider,
  Typography,
  Fade,
  IconButton,
} from "@mui/material";
import NavItem from "../NavItem/NavItem";
import { useEffect, useState } from "react";
import navBar from "./NavigationBarList";
import CustomLink from "./CustomLink";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { getFontStyle } from "../Utils/Utils";
export default function NavigationBarBig() {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState([]);
  const [imageWidth, setImageWidth] = useState("35px");

  const handleOpenSubMenu = (subCategories) => {
    setSubMenuItems(subCategories);
    setSubMenuVisible(true);
  };

  const handleCloseSubMenu = () => {
    setSubMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setImageWidth("25px");
      } else {
        setImageWidth("35px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (subMenuVisible || window.scrollY > 0) {
      setImageWidth("25px");
    } else setImageWidth("35px");
  }, [subMenuVisible]);

  return (
    <Toolbar
      disableGutters
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        position: "relative",
        boxShadow: subMenuVisible ? "10px 0px 1180px black" : "none",
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        width={"95%"}
        padding={"10px 10px"}
      >
        <Box>
          <img
            src="liverpoolfc_logo.webp"
            width={imageWidth}
            style={{ transition: "all 0.3s" }}
            alt="Liverpool FC Logo"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {navBar.map((item) => (
            <Box
              key={item.label}
              onMouseEnter={() => handleOpenSubMenu(item.subCategories)}
              onMouseLeave={handleCloseSubMenu}
              height={subMenuVisible ? "200%" : "fit-content"}
              padding={"0px 16px"}
              display={"flex"}
              alignItems={"center"}
              sx={{
                transition: "all 0.5s",
                "&:hover": {
                  color: "#fbd3bb !important",
                },
              }}
            >
              <NavItem label={item.label} />
            </Box>
          ))}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "#ea6a72",
              height: "25px",
              alignSelf: "center",
            }}
          />
          <Box padding={"10px"} boxSizing={"border-box"}>
            <img
              src="standard-chartered-logo.png"
              width="80px"
              alt="Standard Chartered Logo"
            />
          </Box>
        </Box>
      </Box>
      {/* Sub Menu */}
      <Fade in={subMenuVisible}>
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            boxSizing: "border-box",
            flexDirection: "column",
          }}
          onMouseLeave={handleCloseSubMenu}
          onMouseEnter={() => setSubMenuVisible(true)}
        >
          <Box display={"flex"} padding={"25px"}>
            {subMenuItems.map((subCategory) => (
              <Box width={"100%"} key={subCategory.subLabel}>
                <Typography
                  textTransform={"uppercase"}
                  sx={getFontStyle("black", 700, "11px")}
                  marginBottom={"10px"}
                >
                  {subCategory.subLabel}
                </Typography>
                {subCategory.subItems.map((subItem) => (
                  <Typography
                    key={subItem}
                    component="a"
                    href={`#${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                    sx={{
                      display: "block",
                      color: "black",
                      padding: "3px 0",
                      textDecoration: "none",
                      cursor: "pointer",
                      "&:hover": {
                        color: "red",
                      },
                      fontSize: "0.8rem",
                    }}
                  >
                    {subItem}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0px 20px",
            }}
          >
            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={3}
            >
              <CustomLink href="/contact" weight={400}>
                Help
              </CustomLink>
              <CustomLink href="/contact" weight={400}>
                Help & FAQs
              </CustomLink>
              <CustomLink href="/contact" weight={400}>
                Contact Us
              </CustomLink>
              <CustomLink href="/contact" weight={400}>
                A - Z
              </CustomLink>
            </Box>
            <Box>
              <IconButton>
                <FacebookOutlinedIcon
                  sx={{ color: "#DC0714" }}
                  fontSize="large"
                />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ color: "#DC0714" }} fontSize="large" />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={{ color: "#DC0714" }} fontSize="large" />
              </IconButton>
              <IconButton>
                <YouTubeIcon sx={{ color: "#DC0714" }} fontSize="large" />
              </IconButton>
              <IconButton>
                <LinkedInIcon sx={{ color: "#DC0714" }} fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Fade>
    </Toolbar>
  );
}
