import { Typography } from "@mui/material";
import { getFontStyle } from "../Utils/Utils";
import { Link } from "react-router-dom";
function NavItem({ label, to }) {
  return (
    <Link to={to} style={{textDecoration: "none"}}>
      <Typography sx={getFontStyle("white", 700, "14px")}>
      {label}
      </Typography>
    </Link>
  );
}

export default NavItem;

