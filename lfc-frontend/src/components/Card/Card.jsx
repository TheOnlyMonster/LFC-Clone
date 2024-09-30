import { Box, Link, Typography, Divider } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
import { getFontStyle } from "../Utils/Utils";
export default function Card({
  category,
  image,
  description,
  link,
  date,
  color,
  hideInSmallScreen = false,
  reverse = null,
  flexDir = "column",
  imgFlxBasis = "unset",
  gridCol="span 1"
}) {
  let content;
  if (reverse) {
    content = (
      <>
        <Box>
          <Typography
            marginTop={"10px"}
            sx={getFontStyle(color, "bold", reverse.fs1)}
            display={"inline-block"}
          >
            {category}
          </Typography>
          <Typography
            marginLeft={"8px"}
            variant="body2"
            gutterBottom
            sx={getFontStyle(color, "unset", reverse.fs2, "unset")}
            display={"inline"}
          >
            {description}
          </Typography>
          <Typography
            padding={"10px 0px"}
            sx={getFontStyle(color, "300", "12px")}
          >
            {formatDistanceToNow(new Date(date), { addSuffix: true })}
          </Typography>
        </Box>
        <img src={image} alt={category} width="100%" />
      </>
    );
  } else {
    content = (
      <>
        <Box
          sx={{
            display: { xs: hideInSmallScreen ? "none" : "block", sm: "block" },
          }}
          flexBasis={imgFlxBasis}
        >
          <img src={image} alt={category} width="100%" />
        </Box>
        <Box>
          <Typography sx={getFontStyle(color, "300", "9px")}>
            {formatDistanceToNow(new Date(date), { addSuffix: true })}
          </Typography>
          <Typography
            marginTop={"10px"}
            sx={getFontStyle(color, "bold", "12px")}
            display={"inline-block"}
          >
            {category}
          </Typography>
          <Typography
            marginLeft={"8px"}
            variant="body2"
            gutterBottom
            display={"inline"}
          >
            {description}
          </Typography>
          <Divider
            sx={{ backgroundColor: color, opacity: 0.5, marginTop: "20px" }}
          />
        </Box>
      </>
    );
  }
  return (
    <Link
      href={link}
      underline="none"
      color={color}
      target="_blank"
      rel="noopener noreferrer"
      padding="10px"
      display={"block"}
      height={"100%"}
      gridColumn={gridCol}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: flexDir,
          justifyContent: "space-around",
          height: "100%",
          gap: "20px",
        }}
      >
        {content}
      </Box>
    </Link>
  );
}

Card.propTypes = {
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
