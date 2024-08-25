import { Box, Divider, Typography } from "@mui/material";
export default function MatchCard({
  tournament,
  tournamentLogo,
  date,
  team1,
  team1Logo,
  team2,
  team2Logo,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        color: "black",
        padding: "20px",
        border: "1px solid #e0e0e0",
      }}
    >
      <Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <div>
            <Typography
              textTransform={"uppercase"}
              variant="button"
              display={"block"}
              fontSize={"13px"}
              fontWeight={"bold"}
              gutterBottom
              margin={"0px"}
              
            >
              {tournament}
            </Typography>
            <Typography
              variant="caption"
              display={"block"}
              fontSize={"0.6rem"}
              textTransform={"uppercase"}
              gutterBottom
              marginBottom={"50px"}
            >
              {date}
            </Typography>
          </div>
          <Box>
            <img src={tournamentLogo} alt={tournament} width="25px" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <img src={team1Logo} alt={team1} width="30px" />
          <Typography variant="body2" gutterBottom>
            {team1}
          </Typography>
        </Box>
        <Divider sx={{ margin: "10px 0px" }} />
        <Box
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <img src={team2Logo} alt={team2} width="30px" />
          <Typography variant="body2" gutterBottom>
            {team2}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
