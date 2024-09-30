import { Box, Typography } from "@mui/material";
import { getFontStyle } from "../components/Utils/Utils";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
export default function AuthLayout() {
  const [boxHeight, setBoxHeight] = useState("100vh");

  useEffect(() => {
    const updateHeight = () => {
      const pageHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      if (pageHeight > viewportHeight) {
        setBoxHeight("auto");
      } else {
        setBoxHeight("100vh");
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <Box
      sx={{ backgroundColor: "#dc0714" }}
      padding={"15px"}
      boxSizing={"border-box"}
      height={boxHeight}
      display="flex"
      flexDirection="column"
    >
      <Box display={"flex"} height={"100%"} justifyContent={"center"}>
        <Box
          maxWidth="1888px"
          width={"100%"}
          flexGrow={1}
          display="flex"
          flexDirection="column"
        >
          <Box position={"relative"} paddingBottom={"15px"}>
            <Typography
              sx={{
                ...getFontStyle(
                  "white",
                  "400",
                  "1rem",
                  "uppercase",
                  "1.75",
                  "pointer"
                ),
                fontStyle: "italic",
                position: "absolute",
                marginTop: "6px",
              }}
              textAlign={"center"}
              color={"white"}
            >
              Back to{" "}
              <Typography
                component={"span"}
                sx={{
                  ...getFontStyle("white", "700", "1rem"),
                  fontStyle: "italic",
                }}
              >
                Web Site
              </Typography>
            </Typography>
            <Box textAlign={"center"}>
              <img src={"../lfc.png"} width={"75px"} />
            </Box>
          </Box>
          <Box sx={{ backgroundColor: "white" }} flexGrow={1}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
