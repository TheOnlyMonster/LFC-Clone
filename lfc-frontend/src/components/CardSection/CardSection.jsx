import { Box, Button, Container, Typography } from "@mui/material";
import Section from "../Section/Section";
import Card from "../Card/Card";
import { getFontStyle } from "../Utils/Utils";
export default function CardSection({
  cards,
  title,
  link,
  bgColor,
  gridTempCol,
  isWhite = true,
}) {
  return (
    <Box sx={{ backgroundColor: bgColor }}>
      <Container
        maxWidth="xl"
        sx={{
          padding: "150px 30px 90px  !important",
          color: "white",
        }}
      >
        <Section
          title={title}
          link={link}
          isWhite={isWhite}
          gridTempCol={gridTempCol}
        >
          {cards.map((card, index) => (
            <div key={index}>
              {index == 3 && (
                <Box sx={{ backgroundColor: "#ffb025", padding: "15px", boxSizing: "border-box" }}>
                  <Box>
                    <Typography
                      marginTop={"10px"}
                      sx={{...getFontStyle("black", "bold", "20px"), fontSize: {md: "20px", xs: "16px"}}}
                      display={"inline-block"}
                    >
                      SIGN FOR THE REDS
                    </Typography>
                    <Typography
                      marginLeft={"8px"}
                      variant="body1"
                      sx={{ fontSize: {md: "26px", xs: "20px"} }}
                      gutterBottom
                      display={"inline"}
                      color="black"
                    >
                      Register with LFC to win amazing prizes, watch FREE
                      videos, listen to live commentary, get the official Club
                      newsletter and experience the all-new eMagazine
                    </Typography>
                  </Box>
                  <Box textAlign={"end"} margin={"20px 0px"}>
                    <img
                      src={"SIgnForReds.png"}
                      alt="SignForReds"
                      width="150px"
                    />
                  </Box>
                  <Button
                    sx={{
                      width: "100%",
                      justifyContent: "left",
                      backgroundColor: "black",
                      ...getFontStyle("white", "bold", "16px"),
                      padding: "15px",
                      "&:hover": {
                        backgroundColor: "#543c13",
                      },
                    }}
                  >
                    Register
                  </Button>
                </Box>
              )}
              {index != 3 && (
                <Card
                  category={card.category}
                  image={card.image}
                  description={card.description}
                  link={card.link}
                  date={card.date}
                  color={card.color}
                />
              )}
            </div>
          ))}
        </Section>
      </Container>
    </Box>
  );
}
