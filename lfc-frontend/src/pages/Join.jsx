import { Box, Button, TextField, Typography } from "@mui/material";
import { getFontStyle } from "../components/Utils/Utils";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
export default function Join() {
  const [email, setEmail] = useState("");
  return (
    <>
      <Box
        padding={"72px 25% 88px 25%"}
        sx={{ backgroundColor: "#f5f5f5" }}
        textAlign={"center"}
      >
        <Typography sx={getFontStyle("#dc0714", "400", "2.5707rem", "normal")}>
          Why join MyLFC?
        </Typography>
        <Typography
          sx={getFontStyle("black", "normal", "0.9375rem", "normal")}
          paddingTop={"10px"}
          textAlign={"center"}
        >
          Unlock new, exciting and exclusive benefits all in one place.
          Join MyLFC, your FREE,Official LFC Account.
        </Typography>
      </Box>
      <Box
        display={"flex"}
        gap={4}
        flexDirection={"column"}
        alignItems={"center"}
        paddingTop={"64px"}
        paddingBottom={"128px"}
      >
        <TextField
          required
          label="E-mail"
          size="small"
          sx={{
            width: "300px",
            "& label": {
              color: "black !important",
            },
            "& fieldset": {
              borderColor: "#b9b4b4 !important",
              borderWidth: "1px !important",
            },
            "&:hover fieldset": {
              borderColor: "black !important",
            },
            "&:focus-within fieldset": {
              borderColor: "red !important",
              borderWidth: "2px !important",
            },
            "&:focus-within label": {
              color: "red !important",
            },
            "& p": {
              color: "red !important",
            },
          }}
          focused
          variant="outlined"
          helperText={
            RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(email) ||
            email === ""
              ? ""
              : "Invalid email"
          }
          error={RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(email)}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          label="Password"
          size="small"
          focused
          sx={{
            width: "300px",
            "& label": {
              color: "black !important",
            },
            "& fieldset": {
              borderColor: "#b9b4b4 !important",
              borderWidth: "1px !important",
            },
            "&:hover fieldset": {
              borderColor: "black !important",
            },
            "&:focus-within fieldset": {
              borderColor: "red !important",
              borderWidth: "2px !important",
            },
            "&:focus-within label": {
              color: "red !important",
            },
          }}
        />
        <Typography
          sx={{
            ...getFontStyle("#dc0714", "700", "0.75rem"),
            textDecoration: "underline",
            fontStyle: "italic",
          }}
        >
          Forgot password
        </Typography>
        <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY} />
        <Button
          sx={{
            backgroundColor: "#dc0714",
            color: "white",
            width: "300px",
            "&:hover": {
              backgroundColor: "black",
            },
            fontStyle: "italic",
            fontWeight: "bold",
            textTransform: "none",
          }}
        >
          Login
        </Button>
        <Typography sx={getFontStyle("black", "normal", "0.75rem;", "normal")}>
          No account?{"  "}
          <Typography
            component={"span"}
            sx={{
              ...getFontStyle("#dc0714", "700", "0.75rem"),
              textDecoration: "underline",
              fontStyle: "italic",
            }}
          >
            Register now
          </Typography>
        </Typography>
      </Box>
    </>
  );
}
