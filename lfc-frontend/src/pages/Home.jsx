import { Container, Box } from "@mui/material";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";
import MatchCard from "../components/MatchCard/MatchCard";
import nextMatchesApi from "../api/nextMatchesApi";
export default function Home() {
  return (
    <Box>
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
      <Container
        maxWidth="lg"
        sx={{
          padding: "100px 30px 90px  !important",
          color: "black",
        }}
      >
        <Section
          title="Fixtures"
          link={{ title: "All fixtures", href: "fixtures" }}
        >
          {nextMatchesApi.map((match, index) => (
            <MatchCard
              key={index}
              tournament={match.tournament}
              tournamentLogo={match.tournamentLogo}
              date={match.date}
              team1={match.team1}
              team1Logo={match.team1Logo}
              team2={match.team2}
              team2Logo={match.team2Logo}
              image={match.image}
            />
          ))}
        </Section>
      </Container>
    </Box>
  );
}
