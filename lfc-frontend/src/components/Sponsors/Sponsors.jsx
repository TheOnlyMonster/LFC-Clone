import { Box, Container } from "@mui/material";


export default function Sponsors() {
  return (
    <Box sx={{ backgroundColor: "#b71515" }}>
      <Container maxWidth="lg">
        <Box display={"flex"} flexWrap={"wrap"} gap={"30px"} justifyContent={"center"} padding={"30px"}>
          {[...Array(16)].map((_, index) => (
            <img
              key={index}
              src="sponsor.svg"
              alt="sponsor"
              width={"100px"}
            />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
