import { Container, Box } from "@mui/material";
import Section from "../components/Section/Section";
import MatchCard from "../components/MatchCard/MatchCard";
import nextMatchesApi from "../api/nextMatchesApi";
import CardSection from "../components/CardSection/CardSection";
import Sponsors from "../components/Sponsors/Sponsors";
import Card from "../components/Card/Card";
const card = {
  category: "Liverpool FC",
  image: "card_photo.webp",
  description:
    "Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football.",
  link: "https://www.liverpoolfc.com/",
  date: "August 25, 2024 13:48:00",
  color: "white",
};
export default function Home() {
  return (
    <Box>
      <CardSection
        cards={Array(6).fill(card)}
        title="Headlines"
        link={{ title: "All News", href: "news" }}
        bgColor="#dc0714"
        gridTempCol={{
          xs: "1fr",
          sm: "repeat(3, 1fr)",
        }}
      />
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
          isWhite={false}
          gridTempCol={{
            xs: "1fr",
            sm: "repeat(3, 1fr)",
          }}
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
      <Container
        maxWidth="lg"
        sx={{
          padding: "100px 30px 90px  !important",
          color: "white",
        }}
      >
        <Section title="Have you seen?" isWhite={false}>
          <Box position={"relative"} >
            <Card {...card} color="black" />
            <Box
              position={"absolute"}
              right={"0"}
              bottom={"0"}
              padding={"20px"}
              sx={{ transform: "translateY(10px)", backgroundColor: "white" }}
              width={"300px"}
              zIndex={"10"}
            >
              {Array(3)
                .fill(card)
                .map((card, index) => (
                  <Card key={index} {...card} color="black" />
                ))}
            </Box>
          </Box>
        </Section>
      </Container>
      <CardSection
        title="LFC Women"
        link={{ title: "More News", href: "news?categoryId=196" }}
        bgColor="#dc0714"
        cards={Array(3).fill(card)}
        gridTempCol={{
          xs: "1fr",
          sm: "repeat(3, 1fr)",
        }}
      />
      <CardSection
        title="CLUB AND COMMUNITY"
        link={{ title: "More", href: "news?categoryId=181" }}
        bgColor="#f6f6f6"
        isWhite={false}
        cards={Array(3).fill({ ...card, color: "black" })}
        gridTempCol={{
          xs: "1fr",
          sm: "repeat(3, 1fr)",
        }}
      />
      <Sponsors />
    </Box>
  );
}
