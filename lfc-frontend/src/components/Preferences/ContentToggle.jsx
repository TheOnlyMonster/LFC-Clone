import { Box, Switch, Typography } from "@mui/material";
import { getFontStyle } from "../Utils/Utils";
const ContentToggle = ({ title = null, decription = null, width = "200px" }) => (
  <Box
    sx={{
      width: { xs: "100%", sm: width },
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 2,
      backgroundColor: "#fafafa",
    }}
  >
    <Typography sx={getFontStyle("#4a4a49", "700", "0.625rem", "normal")}>
      {title != null && title}
      {decription != null && (
        <Typography
          sx={{
            ...getFontStyle("#4a4a49", "400", "0.625rem", "normal", "1.66"),
            paddingTop: "8px",
          }}
        >
          {decription}
        </Typography>
      )}
    </Typography>
    <Switch color="error" />
  </Box>
);

export default ContentToggle;
