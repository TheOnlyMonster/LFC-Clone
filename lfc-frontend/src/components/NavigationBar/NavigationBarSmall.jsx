import MenuIcon from "@mui/icons-material/Menu";
import {
  Toolbar,
  Box,
  IconButton,
  Typography,
  MenuItem,
  SwipeableDrawer,
  Divider,
} from "@mui/material";
import { useState } from "react";
import navBar from "./NavigationBarList";
import CloseIcon from "@mui/icons-material/Close";
export default function NavigationBarSmall() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [subMenuItems, setSubMenuItems] = useState(null);

  const handleOpenSubMenu = (subCategories) => {
    setSubMenuItems(subCategories);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setSubMenuItems(null);
  };
  return (
    <Toolbar
      disableGutters
      sx={{
        display: { md: "flex", lg: "none" },
        justifyContent: "space-between",
        padding: "0px 15px",
        boxSizing: "border-box",
      }}
    >
      <Box>
        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor="left"
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          onOpen={handleOpenNavMenu}
        >
          <Box
            sx={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              gap: "10px",
            }}
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <Box>
                <img
                  src="liverpoolfc_logo_red.webp"
                  width="25px"
                  alt="Liverpool FC Logo"
                />
              </Box>
              <Box>
                <IconButton onClick={handleCloseNavMenu} sx={{ color: "red" }}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
            <Divider />
            {subMenuItems === null &&
              navBar.map((item) => (
                <MenuItem
                  key={item.label}
                  sx={{
                    padding: "8px 0px",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                    "&:focus": {
                      backgroundColor: "transparent",
                    },
                  }}
                  onClick={() => handleOpenSubMenu(item.subCategories)}
                >
                  <Typography
                    textTransform={"uppercase"}
                    color={"#545454"}
                    fontSize={"0.6rem"}
                    fontWeight={"bold"}
                  >
                    {item.label}
                  </Typography>
                </MenuItem>
              ))}
            {subMenuItems !== null &&
              subMenuItems.map((item) => (
                <Box key={item.subLabel}>
                  <Typography
                    textTransform={"uppercase"}
                    fontSize={"0.7rem"}
                    fontWeight={"bold"}
                  >
                    {item.subLabel}
                  </Typography>
                  {item.subItems.map((subItem) => (
                    <MenuItem
                      key={subItem}
                      sx={{
                        padding: "5px 0px",
                        "&:hover": {
                          backgroundColor: "transparent",
                        }
                      }}
                    >
                      <Typography
                        color={"#545454"}
                        fontSize={"0.7rem"}
                      >
                        {subItem}
                      </Typography>
                    </MenuItem>
                  ))}
                </Box>
              ))}
          </Box>
        </SwipeableDrawer>
      </Box>

      <Box>
        <img src="liverpoolfc_logo.webp" width="25px" alt="Liverpool FC Logo" />
      </Box>

      <Box>
        <img
          src="standard-chartered-logo.png"
          width="80px"
          alt="Standard Chartered Logo"
        />
      </Box>
    </Toolbar>
  );
}
