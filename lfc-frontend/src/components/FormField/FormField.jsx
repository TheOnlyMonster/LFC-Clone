// components/FormFields.jsx

import { TextField, Box, Typography } from "@mui/material";
import { getFontStyle } from "../Utils/Utils";

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const countryOptions = [
  { label: "UK", value: "UK" },
  { label: "USA", value: "USA" },
  { label: "Canada", value: "Canada" },
  { label: "Australia", value: "Australia" },
];

const textFieldStyles = {
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
};

const FormFields = ({ email, setEmail }) => {
  return (
    <>
      <TextField
        required
        label="First name"
        size="small"
        focused
        sx={textFieldStyles}
      />
      <TextField
        required
        label="Surname"
        size="small"
        focused
        sx={textFieldStyles}
      />
      <TextField
        required
        label="E-mail"
        size="small"
        sx={{
          ...textFieldStyles,
          "& p": {
            color: "red !important",
          },
        }}
        variant="outlined"
        helperText={
          RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(email) ||
          email === ""
            ? ""
            : "Invalid email"
        }
        error={!RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(email)}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        required
        label="Date of birth"
        size="small"
        focused
        sx={textFieldStyles}
      />
      <TextField
        required
        label="Password"
        size="small"
        type="password"
        focused
        sx={textFieldStyles}
      />
      <TextField
        required
        label="Re-enter Password"
        size="small"
        type="password"
        focused
        sx={textFieldStyles}
      />
      <Box
        sx={{
          ...getFontStyle("black", "400", "0.625rem", "normal"),
          backgroundColor: "#f5f5f5",
          padding: "16px",
          gridColumn: { sm: "1 / span 2" },
        }}
      >
        <Typography
          sx={getFontStyle("black", "700", "0.625rem", "normal")}
        >
          For your security, please ensure your password:
        </Typography>
        <div>Is between 8 and 30 characters long</div>
        <div>
          Contains a mix of upper (capital) and lower case letters
        </div>
        <div>Contains at least one number</div>
        <div>
          Contains at least one special character (* : @ | # % , . ; [ ]{" "}
          {} ? - _ ~ $ &lt; &gt; ‘ “ ^ ( ) / ! `)
        </div>
      </Box>
      <TextField
        select
        label="Gender"
        size="small"
        defaultValue="Male"
        focused
        sx={textFieldStyles}
        SelectProps={{
          native: true,
        }}
      >
        {genderOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        select
        label="Country"
        size="small"
        defaultValue="UK"
        focused
        sx={textFieldStyles}
        SelectProps={{
          native: true,
        }}
      >
        {countryOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </>
  );
};

export default FormFields;
