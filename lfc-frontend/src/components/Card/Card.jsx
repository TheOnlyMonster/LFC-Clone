import { Box, Link, Typography, Divider } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";
export default function Card({
  category,
  image,
  description,
  link,
  date,
  color,
}) {
  return (
    <Link
      href={link}
      underline="none"
      color={color}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <img src={image} alt={category} width="100%" />
        <Box>
          <Typography
            variant="caption"
            fontSize={"0.6rem"}
            textTransform={"uppercase"}
            gutterBottom
          >
            {formatDistanceToNow(new Date(date), { addSuffix: true })}
          </Typography>
          <Typography
            textTransform={"uppercase"}
            variant="button"
            display={"block"}
            fontSize={"13px"}
            fontWeight={"bold"}
            gutterBottom
          >
            {category}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
          <Divider
            sx={{ backgroundColor: color, opacity: 0.5, marginTop: "20px" }}
          />
        </Box>
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
