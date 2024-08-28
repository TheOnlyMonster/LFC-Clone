import { Box, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import { getFontStyle } from "../Utils/Utils";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
export default function Section({ title, children, link, gridTempCol, isWhite = true }) {
  return (
    <Box>
      <Box display={"flex"} justifyContent={"space-between"} padding={"10px"}>
        <Typography
          sx={{
            position: "relative",
            zIndex: 1,
            display: "inline-block",
            ...getFontStyle("white", "bold", "12px"),
            margin: "auto 0px",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#0c0c0c",
              borderRadius: "30px",
              opacity: isWhite ? "0.2" : "1",
              width: "100%",
              height: "100%",
              padding: "7px 12px",
              zIndex: -1,
            },
          }}
          variant="button"
          display="block"
          gutterBottom
        >
          {title}
        </Typography>

        {link && <Button
          href={link.href}
          sx={{ ...getFontStyle(isWhite ? "white" : "black", "bold", "12px") }}
        >
          {link.title}
          <ArrowForwardIosRoundedIcon fontSize="5px" />
        </Button>}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={gridTempCol}
        gap={2}
        position={"relative"}
      >
        {children}
      </Box>
    </Box>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }),
};
