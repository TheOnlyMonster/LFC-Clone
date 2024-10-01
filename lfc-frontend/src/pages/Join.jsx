import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import FormField from "../components/FormField/FormField";
import Preferences from "../components/Preferences/Preferences";
import TermsText from "../components/TermsText/TermsText";
import { getFontStyle } from "../components/Utils/Utils";
import WhyJoin from "../components/WhyJoin/WhyJoin";

export default function Join() {
  const [email, setEmail] = useState("");

  return (
    <>
      <WhyJoin />
      <Box
        display={"flex"}
        gap={4}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingTop={"64px"}
        paddingBottom={"128px"}
      >
        <Container maxWidth={"sm"}>
          <Box
            display={"grid"}
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            gap={4}
          >
            <FormField email={email} setEmail={setEmail} />
            <Preferences />
            <TermsText />
          </Box>
        </Container>

        <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} />
        <Button
          sx={{
            backgroundColor: "#dc0714",
            color: "white",
            "&:hover": {
              backgroundColor: "black",
            },
            fontStyle: "italic",
            fontWeight: "bold",
            textTransform: "none",
            marginTop: "16px",
          }}
        >
          Register Now
        </Button>
        <Typography sx={getFontStyle("black", "normal", "0.75rem", "normal")}>
          Already have an account?{" "}
          <Typography
            component={"span"}
            sx={{
              ...getFontStyle("#dc0714", "700", "0.75rem", "normal"),
              textDecoration: "underline",
              fontStyle: "italic",
            }}
          >
            Log In
          </Typography>
        </Typography>
      </Box>
    </>
  );
}
