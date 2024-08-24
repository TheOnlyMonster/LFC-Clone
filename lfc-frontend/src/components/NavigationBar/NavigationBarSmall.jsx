import  MenuIcon  from "@mui/icons-material/Menu";
import {
  Toolbar,
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import navBar from "./NavigationBarList";
export default function NavigationBarSmall() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Toolbar
      disableGutters
      sx={{
        display: { md: "flex", lg: "none" },
        justifyContent: "space-between",
      }}
    >
      <Box>
        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {navBar.map((item) => (
            <MenuItem key={item.label} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{item.label}</Typography>
            </MenuItem>
          ))}
        </Menu>
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