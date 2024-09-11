import { Box, Container } from "@mui/material";

export default function Sponsors({ img, bgColor, num, padding }) {
  return (
    <Box sx={{ backgroundColor: bgColor }}>
      <Container maxWidth="lg">
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          gap={"60px"}
          justifyContent={"space-around"}
        >
          {[...Array(num)].map((_, index) => (
            <Box key={index} padding={padding}>
              <img  src={img} alt="sponsor" width={"100px"} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
