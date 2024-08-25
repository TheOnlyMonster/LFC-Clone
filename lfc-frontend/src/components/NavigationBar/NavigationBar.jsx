import { Container, AppBar } from "@mui/material";
import NavigationBarBig from "./NavigationBarBig";
import NavigationBarSmall from "./NavigationBarSmall";
import { useEffect, useState } from "react";

function NavigationBar() {
  const [marginTop, setMarginTop] = useState('20px');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setMarginTop('0px');
      } else {
        setMarginTop('20px');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "transparent", padding: "0px 50px" }}
      elevation={0}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: "#dc0714",
          padding: "0px 0px !important",
          zIndex: 100,
          position: "absolute",
          top: "100%",
          left: "50%",
					transform: "translateX(-50%)",
					marginTop: marginTop,
        }}
      >
        <NavigationBarSmall />
        <NavigationBarBig />
      </Container>
    </AppBar>
  );
}

export default NavigationBar;
