import { Box, Link, Typography, Divider } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { getFontStyle } from "../Utils/Utils";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return isNaN(date.getTime())
    ? "Invalid date"
    : formatDistanceToNow(date, { addSuffix: true });
};

export default function Card({
  category,
  image,
  description,
  link,
  date,
  color,
  hideInSmallScreen = false,
  reverse = false,
  flexDir = "column",
  imgFlxBasis = "unset",
  gridCol = "span 1",
}) {
  const content = (
    <>
      <Box
        sx={{
          display: { xs: hideInSmallScreen ? "none" : "block", sm: "block" },
          flexBasis: imgFlxBasis,
        }}
      >
        {reverse ? (
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
                sx={getFontStyle(color, "unset", reverse.fs2)}
                display={"inline"}
              >
                {description}
              </Typography>
              <Typography
                padding={"10px 0px"}
                sx={getFontStyle(color, "300", "12px")}
              >
                {formatDate(date)}
              </Typography>
            </Box>
            <img src={image} alt={category} width="100%" />
          </>
        ) : (
          <>
            <img src={image} alt={category} width="100%" />
            <Box>
              <Typography sx={getFontStyle(color, "300", "9px")}>
                {formatDate(date)}
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
        )}
      </Box>
    </>
  );

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
