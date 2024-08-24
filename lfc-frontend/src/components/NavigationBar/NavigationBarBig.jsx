import { Toolbar, Box, Divider, Typography, Fade } from "@mui/material";
import NavItem from "../NavItem/NavItem";
import { useState } from "react";
import navBar from "./NavigationBarList";
export default function NavigationBarBig() {
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [subMenuItems, setSubMenuItems] = useState([]);

  const handleOpenSubMenu = (subCategories) => {
    setSubMenuItems(subCategories);
    setSubMenuVisible(true);
  };

  const handleCloseSubMenu = () => {
    setSubMenuVisible(false);
  };

  return (
    <Toolbar
      disableGutters
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        position: "relative",
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
            width="25px"
            alt="Liverpool FC Logo"
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {navBar.map((item) => (
            <Box
              key={item.label}
              onMouseEnter={() => handleOpenSubMenu(item.subCategories)}
              onMouseLeave={handleCloseSubMenu}
              height={"200%"}
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
            sx={{ backgroundColor: "white" }}
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
            boxShadow: "0px 0px 40px rgba(0, 0, 0, 0.6)",
            display: "flex",
            padding: "25px",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
          onMouseLeave={handleCloseSubMenu}
          onMouseEnter={() => setSubMenuVisible(true)}
        >
          {subMenuItems.map((subCategory) => (
            <Box key={subCategory.subLabel} sx={{ color: "black" }}>
              <Typography
                textTransform={"uppercase"}
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  fontSize: "0.8rem",
                }}
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
      </Fade>
    </Toolbar>
  );
}
