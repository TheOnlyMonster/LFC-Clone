import { Container, Box, Button, Typography, Divider } from "@mui/material";
import Section from "../components/Section/Section";
import MatchCard from "../components/MatchCard/MatchCard";
import nextMatchesApi from "../api/nextMatchesApi";
import CardSection from "../components/CardSection/CardSection";
import Sponsors from "../components/Sponsors/Sponsors";
import Card from "../components/Card/Card";
import { useEffect, useState } from "react";
import RetailCard from "../components/RetailCard/RetailCard";
import { getFontStyle } from "../components/Utils/Utils";
const card = {
  category: "Liverpool FC",
  image: "card_photo.webp",
  description:
    "Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football.",
  link: "https://www.liverpoolfc.com/",
  date: "August 25, 2024 13:48:00",
  color: "white",
};
const retailCard = {
  description: "Liverpool FC Home Shirt 2021/22",
  price: "£70.00",
  image: "retail.jpg",
  link: "https://store.liverpoolfc.com/",
};
export default function Home() {
  const [topPosition, setTopPosition] = useState(4200);
  const [retailSub, setRetailSub] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (window.innerWidth <= 900) {
        setTopPosition(Math.min(0, 6500 - scrollY));
      } else {
        setTopPosition(Math.min(0, 4200 - scrollY));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Headlines */}
      <CardSection
        cards={Array(6).fill(card)}
        title="Headlines"
        link={{ title: "All News", href: "news" }}
        bgColor="#dc0714"
        gridTempCol={{
          xs: "1fr",
          md: "repeat(3, 1fr)",
        }}
      />
      {/* Fixtures */}
      <Container
        maxWidth="xl"
        sx={{
          padding: "100px 30px 90px  !important",
          color: "black",
        }}
      >
        <Section
          title="Fixtures"
          link={{ title: "All fixtures", href: "fixtures" }}
          isWhite={false}
          gridTempCol={{ xs: "repeat(3, 90%)", sm: "repeat(3, 1fr)" }}
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
      {/* Adv 1 */}
      <Box sx={{ backgroundColor: "#f6f6f6", overflowX: "scroll" }}>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <img src="adv2.png" alt="adv2" style={{ padding: "30px" }} />
        </Container>
      </Box>
      {/* Lfc Retail */}
      <Container
        maxWidth="xl"
        sx={{
          padding: "100px 30px 90px  !important",
          color: "white",
        }}
      >
        {/* Lfc Retail Section */}
        <Section
          title="Lfc Retail"
          isWhite={false}
          ele={
            <>
              <Box display={"flex"} justifyContent={"flex-start"} gap={"30px"}>
                {[
                  "New:24/25 Third kit",
                  "New:24/25 Green GK",
                  "You May Like",
                ].map((title, index) => (
                  <Box key={index}>
                    <Typography
                      padding={"30px 0px 20px 0px"}
                      sx={{
                        position: "relative",
                        ...getFontStyle(
                          retailSub === index ? "black" : "#e0e0e0",
                          "bold",
                          "14px"
                        ),
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: "0",
                          bottom: "0",
                          display: "block",
                          width: "100%",
                          height: "2px",
                          backgroundColor:
                            retailSub === index ? "#dc0714" : "transparent",
                        },
                      }}
                      onClick={() => setRetailSub(index)}
                    >
                      {title}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Divider />
            </>
          }
          gridTempCol={{
            xs: "1fr",
            sm: "repeat(5, minmax(0, 1fr))",
          }}
        >
          {Array(5)
            .fill(retailCard)
            .map((card, index) => (
              <RetailCard key={index} {...card} />
            ))}
        </Section>
        {/* Button */}
        <Container
          maxWidth="xl"
          sx={{
            padding: "40px  !important",
            textAlign: "center",
          }}
        >
          <Button
            sx={{
              justifyContent: "left",
              backgroundColor: "#ffd701",
              ...getFontStyle("black", "bold", "16px"),
              padding: "15px 35px 30px 15px",
              "&:hover": {
                backgroundColor: "#ffe140",
              },
            }}
          >
            Visit the LFC Store Now
          </Button>
        </Container>
      </Container>
      {/* Adv 2 */}
      <Box sx={{ backgroundColor: "#f6f6f6", overflowX: "scroll" }}>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <img src="adv2.png" alt="adv2" style={{ padding: "30px" }} />
        </Container>
      </Box>
      {/* LFC Women */}
      <CardSection
        title="LFC Women"
        link={{ title: "More News", href: "news?categoryId=196" }}
        bgColor="#dc0714"
        cards={Array(3).fill(card)}
        gridTempCol={{ xs: "repeat(3, 90%)", sm: "repeat(3, 1fr)" }}
      />
      {/* Adv 3 */}
      <Box sx={{ backgroundColor: "#f6f6f6", overflowX: "scroll" }}>
        <Container
          maxWidth="xl"
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <img src="adv2.png" alt="adv2" style={{ padding: "30px" }} />
        </Container>
      </Box>
      {/* Have you seen */}
      <Container
        maxWidth="lg"
        sx={{
          padding: "100px 30px 90px  !important",
          color: "white",
        }}
      >
        <Section
          overflowX="visible"
          overflowY="visible"
          title="Have you seen?"
          isWhite={false}
          display="{{ xs: 'block', sm: 'grid' }}"
        >
          <Box position={"relative"}>
            <Card
              {...card}
              color="black"
              reverse={{ fs1: "20px", fs2: "36px" }}
            />
            <Box
              position={{ xs: "static", sm: "absolute" }}
              right={"0"}
              top={`${topPosition}px`}
              padding={"20px"}
              sx={{
                transform: { sm: "translateY(10px)" },
                backgroundColor: "white",
                overflowX: { xs: "scroll", sm: "hidden" },
              }}
              display={{ xs: "grid", sm: "block" }}
              gridTemplateColumns={"repeat(3, 90%)"}
              width={{ xs: "inherit", sm: "300px" }}
              zIndex={"10"}
            >
              {Array(3)
                .fill(card)
                .map((card, index) => (
                  <Card
                    key={index}
                    {...card}
                    color="black"
                    hideInSmallScreen={true}
                  />
                ))}
            </Box>
          </Box>
        </Section>
      </Container>
      {/* quote section */}
      <Box sx={{ backgroundColor: "#ffd700" }}>
        <Container
          maxWidth="lg"
          sx={{
            padding: "100px 30px 90px  !important",
          }}
        >
          <Typography sx={getFontStyle("black", "bold", "14px")}>
            Federico Chiesa
          </Typography>
          <Typography
            sx={getFontStyle("black", "500", "48px", "unset")}
            gutterBottom
          >
            {
              "\"When Richard Hughes called me and he said, 'Do you want to join Liverpool?' – and the coach called me – I said yes immediately because I know the history of this club, I know what it represents to the fans.\""
            }
          </Typography>
          <Box maxWidth={{ sm: "100%", md: "50%" }}>
            <Card
              {...card}
              color="black"
              reverse={{ fs1: "14px", fs2: "18px" }}
            />
          </Box>
        </Container>
      </Box>
      {/* Club and Community */}
      <CardSection
        title="CLUB AND COMMUNITY"
        link={{ title: "More", href: "news?categoryId=181" }}
        bgColor="#f6f6f6"
        isWhite={false}
        cards={Array(3).fill({ ...card, color: "black" })}
        gridTempCol={{ xs: "repeat(3, 90%)", sm: "repeat(3, 1fr)" }}
      />
      <Container maxWidth="xl">
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={"25px"}
          padding={"25px"}
          flexWrap={{ xs: "wrap", md: "unset" }}
        >
          <img src="memorial-1989-desktop.svg" alt="memorial" width={"100%"} />
          <img src="memorial-1985-desktop.svg" alt="memorial" width={"100%"} />
        </Box>
      </Container>
      <Sponsors
        num={7}
        padding={"50px 0px"}
        img={"league_title.svg"}
        bgColor={"#f6f6f6"}
      />
    </>
  );
}
