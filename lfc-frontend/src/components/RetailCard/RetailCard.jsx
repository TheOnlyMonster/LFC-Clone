import { Box, Typography, Button } from "@mui/material";
import { getFontStyle } from "../Utils/Utils";
export default function RetailCard({ description, price, image, link }) {
  return (
    <Box
      border={"solid 1px #d6d6d6"}
      display={{ sm: "block", xs: "flex" }}
      sx={{ flexWrap: { xs: "nowrap", sm: "wrap" } }}
    >
      <Box>
        <img src={image} alt={description} width="100%" height={"100%"} />
      </Box>
      <Box padding={"15px"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
        <Typography
          sx={{
            ...getFontStyle("#838383", "400", "14px"),
            fontSize: { md: "14px", sm: "12px", xs: "21px" },
          }}
        >
          {description}
        </Typography>
        <Typography
          sx={{
            ...getFontStyle("black", "700", "36px"),
            padding: "28px 0px 15px 0px",
            fontSize: { md: "36px", sm: "20px", xs: "36px" },
          }}
        >
          {price}
        </Typography>
        <Button
          sx={{
            width: "100%",
            justifyContent: "left",
            backgroundColor: "black",
            ...getFontStyle("white", "bold", "16px"),
            padding: "15px",
            "&:hover": {
              backgroundColor: "#545454",
            },
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}
