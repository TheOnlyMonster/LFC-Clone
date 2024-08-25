import { Container, Box } from "@mui/material";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
export default function Home() {
  return (
    <Box sx={{ backgroundColor: "#dc0714" }}>
      <Container
        maxWidth="lg"
        sx={{
          padding: "100px 30px 90px  !important",
          color: "white",
        }}
      >
        <Section title="Headlines" link={{ title: "All news", href: "news" }}>
          <Card
            category="Liverpool FC"
            image="card_photo.webp"
            description="Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football."
            link="https://www.liverpoolfc.com/"
            date="August 25, 2024 13:48:00"
            color="white"
          />
          <Card
            category="Liverpool FC"
            image="card_photo.webp"
            description="Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football."
            link="https://www.liverpoolfc.com/"
            date="August 25, 2024 13:48:00"
            color="white"
          />
          <Card
            category="Liverpool FC"
            image="card_photo.webp"
            description="Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football."
            link="https://www.liverpoolfc.com/"
            date="August 25, 2024 13:48:00"
            color="white"
          />
          <Card
            category="Liverpool FC"
            image="card_photo.webp"
            description="Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football."
            link="https://www.liverpoolfc.com/"
            date="August 25, 2024 13:48:00"
            color="white"
          />
          <Card
            category="Liverpool FC"
            image="card_photo.webp"
            description="Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football."
            link="https://www.liverpoolfc.com/"
            date="August 25, 2024 13:48:00"
            color="white"
          />
          <Card
            category="Liverpool FC"
            image="card_photo.webp"
            description="Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football."
            link="https://www.liverpoolfc.com/"
            date="August 25, 2024 13:48:00"
            color="white"
          />
        </Section>
      </Container>
    </Box>
  );
}
