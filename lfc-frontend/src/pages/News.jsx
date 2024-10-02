import { Box, Container } from "@mui/material";
import Card from "../components/Card/Card";
import Section from "../components/Section/Section";
import { useLoaderData } from "react-router-dom";

const renderCard = (card, key, gridCol = "span 1") => (
  <Card
    key={key}
    category={card.author}
    image={card.urlToImage}
    description={card.description}
    link={card.url}
    date={card.publishedAt}
    color={card.color}
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
  const data = useLoaderData();

  return (
    <Container
      maxWidth="xl"
      sx={{ padding: "150px 30px 90px !important", color: "white" }}
    >
      <Section
        title="All News"
        isWhite={false}
        gridTempCol={{ xs: "1fr", sm: "repeat(3, 1fr)" }}
      >
        {data.slice(0, 2).map((card, i) => renderCard(card, i))}{" "}
        {/* First two cards */}
        <Advertisement />
        {data.slice(2, 6).map((card, i) => renderCard(card, i + 2))}{" "}
        {/* Next four cards */}
        <Advertisement />
        {data.slice(6, 9).map((card, i) => renderCard(card, i + 6))}{" "}
        {/* Next three cards */}
        {renderCard(data[9], "lastCard1", { xs: "span 1", sm: "span 2" })}{" "}
        {/* 10th card */}
        {data.slice(10, 17).map((card, i) => renderCard(card, i + 10))}{" "}
        {/* Next seven cards */}
        {renderCard(data[17], "lastCard2", { xs: "span 1", sm: "span 2" })}{" "}
        {/* 18th card */}
        {renderCard(data[18], "lastCard3", "span 1")} {/* 19th card */}
      </Section>
    </Container>
  );
}
