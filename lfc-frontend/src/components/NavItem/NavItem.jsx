import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { getFontStyle } from "../Utils/Utils";

function NavItem({ label }) {
  return (
    <Typography sx={getFontStyle("white", 700, "11px")}>
      {label}
    </Typography>
  );
}

export default NavItem;

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
};
