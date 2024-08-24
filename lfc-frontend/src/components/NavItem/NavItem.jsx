import { Typography } from "@mui/material";

import PropTypes from "prop-types";

function NavItem({ label }) {
  return (
    <Typography
      sx={{
        cursor: "pointer",
        padding: "0px 16px",
        textTransform: "uppercase",
        fontSize: "0.7rem",
        fontWeight: "bold",
      }}
    >
      {label}
    </Typography>
  );
}

export default NavItem;

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
};
