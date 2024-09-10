import { Box, Container } from "@mui/material";
import Section from "../Section/Section";
import Card from "../Card/Card";
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
          padding: "100px 30px 90px  !important",
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
            <Card
              key={index}
              category={card.category}
              image={card.image}
              description={card.description}
              link={card.link}
              date={card.date}
              color={card.color}
            />
          ))}
        </Section>
      </Container>
    </Box>
  );
}
