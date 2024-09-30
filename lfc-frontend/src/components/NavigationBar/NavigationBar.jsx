import { Container, AppBar, Box } from "@mui/material";
import NavigationBarBig from "./NavigationBarBig";
import NavigationBarSmall from "./NavigationBarSmall";
import { useEffect, useState } from "react";
function NavigationBar() {
  const [marginTop, setMarginTop] = useState("20px");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setMarginTop("0px");
      } else {
        setMarginTop("0px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0",
          overflowX: "scroll",
          backgroundColor: "transparent",
        }}
      >
        <img src={"adv1.gif"} />
      </Container>
      <AppBar position="sticky" sx={{ padding: "0px 50px" }} elevation={0}>
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: "#dc0714",
            padding: "0px 0px !important",
            zIndex: 100,
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop,
            transition: "all 0.2s",
          }}
        >
          <NavigationBarSmall />
          <NavigationBarBig />
        </Container>
      </AppBar>
      <Box sx={{backgroundColor: "#dc0714", height: "50px"}}></Box>
    </>
  );
}

export default NavigationBar;
