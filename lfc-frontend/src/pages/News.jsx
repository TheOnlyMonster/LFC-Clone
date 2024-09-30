import { Box, Container } from "@mui/material";
import Card from "../components/Card/Card";
import Section from "../components/Section/Section";

const card = {
  category: "Liverpool FC",
  image: "card_photo.webp",
  description:
    "Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League.",
  link: "https://www.liverpoolfc.com/",
  date: "August 25, 2024 13:48:00",
};

const renderCard = (key, gridCol = "span 1") => (
  <Card
    key={key}
    category={card.category}
    image={card.image}
    description={card.description}
    link={card.link}
    date={card.date}
    color="black"
    flexDir={{ xs: "row", sm: "column" }}
    imgFlxBasis={{ xs: "fit-content", sm: "unset" }}
    gridCol={gridCol}
  />
);

const Advertisement = () => (
  <Box
    sx={{ backgroundColor: "#f6f6f6", overflowX: "scroll" }}
    gridColumn={{ lg: "span 1", sm: "span 2", xs: "span 1" }}
  >
    <Container
      maxWidth="xl"
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <img src="adv2.png" alt="adv2" style={{ padding: "30px" }} />
    </Container>
  </Box>
);

export default function News() {
  return (
    <Container
      maxWidth="xl"
      sx={{ padding: "150px 30px 90px  !important", color: "white" }}
    >
      <Section
        title="All News"
        isWhite={false}
        gridTempCol={{ xs: "1fr", sm: "repeat(3, 1fr)" }}
      >
        {[...Array(2)].map((_, i) => renderCard(i))}
        <Advertisement />
        {[...Array(4)].map((_, i) => renderCard(i + 2))}
        <Advertisement />
        {[...Array(3)].map((_, i) => renderCard(i + 6))}
        <Card
          category={card.category}
          image={card.image}
          description={card.description}
          link={card.link}
          date={card.date}
          color="black"
          gridCol={{ xs: "span 1", sm: "span 2" }}
        />
        {[...Array(7)].map((_, i) => renderCard(i + 10))}
        <Card
          category={card.category}
          image={card.image}
          description={card.description}
          link={card.link}
          date={card.date}
          color="black"
          gridCol={{ xs: "span 1", sm: "span 2" }}
        />
        {renderCard(18,"span 1")}
      </Section>
    </Container>
  );
}
