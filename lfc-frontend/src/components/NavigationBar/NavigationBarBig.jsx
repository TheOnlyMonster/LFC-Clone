import {
  Toolbar,
  Box,
  Divider,
  Typography,
  Fade,
  IconButton,
  MenuItem,
} from "@mui/material";
import NavItem from "../NavItem/NavItem";
import { useEffect, useRef, useState } from "react";
import navBar from "./NavigationBarList";
import CustomLink from "./CustomLink";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import { getFontStyle } from "../Utils/Utils";
import { Link } from "react-router-dom";
const languageMenu = [
  "Deutsch",
  "English",
  "Español",
  "Français",
  "Italiano",
  "日本語",
  "한국어",
  "Português",
  "简体中文",
];
export default function NavigationBarBig() {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState([]);
  const [imageWidth, setImageWidth] = useState("45px");
  const langBoxRef = useRef(null);
  const handleOpenSubMenu = (subCategories) => {
    setSubMenuItems(subCategories);
    setSubMenuVisible(true);
  };

  const handleCloseSubMenu = () => {
    setSubMenuVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setImageWidth("25px");
      } else {
        setImageWidth("45px");
      }
    };
    const handleClickOutside = (event) => {
      if (langBoxRef.current && !langBoxRef.current.contains(event.target)) {
        setLanguageMenuVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (subMenuVisible || window.scrollY > 0) {
      setImageWidth("25px");
    } else setImageWidth("45px");
  }, [subMenuVisible]);

  return (
    <Toolbar
      disableGutters
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        position: "relative",
        boxShadow:
          subMenuVisible || languageMenuVisible
            ? "10px 0px 1180px black"
            : "none",
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
              padding={"0px 26px 0px 0px"}
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
          <Box
            padding={"0px 26px"}
            display={"flex"}
            alignItems={"center"}
            sx={{
              transition: "all 0.5s",
              "&:hover": {
                color: "#fbd3bb !important",
              },
            }}
          >
            <PersonOutlineOutlinedIcon sx={{ margin: "10px 5px" }} />
            <NavItem label={"Join"} to={"/auth/signup"} />
          </Box>
          <Box
            padding={"0px 26px 0px 0px"}
            display={"flex"}
            alignItems={"center"}
            sx={{
              transition: "all 0.5s",
              "&:hover": {
                color: "#fbd3bb !important",
              },
            }}
          >
            <NavItem label={"Login"} to={"auth/login"} />
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              backgroundColor: "#ea6a72",
              height: "25px",
              alignSelf: "center",
            }}
          />
          <Box position={"relative"} display={"inline-flex"}>
            <Box
              onClick={() => setLanguageMenuVisible(!languageMenuVisible)}
              height={subMenuVisible ? "200%" : "fit-content"}
              padding={"0px 26px"}
              display={"flex"}
              position={"relative"}
              alignItems={"center"}
              sx={{
                transition: "all 0.5s",
                "&:hover": {
                  color: "#fbd3bb !important",
                },
              }}
            >
              <LanguageIcon sx={{ margin: "10px 5px", width: "20px" }} />
              <NavItem label={"EN"} />
              <KeyboardArrowDownOutlinedIcon sx={{ color: "#fbd3bb" }} />
            </Box>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                backgroundColor: "#ea6a72",
                height: "25px",
                alignSelf: "center",
              }}
            />
            <Box padding={"0px 0px 0px 26px"} boxSizing={"border-box"}>
              <img
                src="standard-chartered-logo.png"
                width="80px"
                alt="Standard Chartered Logo"
              />
            </Box>
            {/* Language Sub Menu */}
            <Fade in={languageMenuVisible}>
              <Box
                ref={langBoxRef}
                sx={{
                  position: "absolute",
                  top: "132%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "white",
                  width: "133%",
                  display: "flex",
                  justifyContent: "space-around",
                  boxSizing: "border-box",
                  flexDirection: "column",
                  paddingTop: "20px",
                  paddingLeft: "10px",
                }}
              >
                <Typography
                  textTransform={"uppercase"}
                  sx={{
                    ...getFontStyle("black", 700, "14px"),
                    padding: "10px 15px",
                  }}
                >
                  Select Your Language
                </Typography>
                <Box
                  display={"grid"}
                  gridTemplateRows={"repeat(6, min-content)"}
                  gridAutoFlow={"column"}
                  columnGap={"20px"}
                >
                  {languageMenu.map((language, index) => (
                    <MenuItem key={index} sx={{ padding: "10px 15px" }}>
                      <Typography sx={getFontStyle("black", 400, "14px")}>
                        {language}
                      </Typography>
                    </MenuItem>
                  ))}
                </Box>
              </Box>
            </Fade>
          </Box>
        </Box>
      </Box>
      {/* Sub Menu */}
      <Fade in={subMenuVisible && !languageMenuVisible}>
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
                  sx={getFontStyle("black", 700, "14px")}
                  marginBottom={"10px"}
                >
                  {subCategory.subLabel}
                </Typography>
                {subCategory.subItems.map((subItem) => (
                  <Typography
                    key={subItem}
                    component={Link}
                    to={`${subItem.toLowerCase().replace(/\s+/g, "-")}`}
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
