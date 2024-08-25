import { Box, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";

export default function Section({ title, children, link }) {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} padding={"10px"}>
        <Typography
          sx={{
            position: "relative",
            zIndex: 1,
            display: "inline-block",
            fontSize: "12px",
            fontWeight: "bold",
            margin: "auto 0px",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "#0c0c0c",
              borderRadius: "30px",
              opacity: "0.3",
              width: "130%",
              height: "110%",
              zIndex: -1,
            },
          }}
          variant="button"
          display="block"
          gutterBottom
        >
          {title}
        </Typography>

        <Button href={link.href} sx={{ color: "white" }}>
          {link.title}
        </Button>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "1fr", 
          sm: "repeat(3, 1fr)", 
        }}
        gap={2} 
      >
        {children}
      </Box>
    </>
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
