import Home from "./pages/Home";
import { NavigationBar, Footer } from "./components";
import { Container } from "@mui/material";
function App() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center", padding: "20px 0", overflowX: "scroll" }}
      >
        <img src={"adv1.gif"} />
      </Container>
      <NavigationBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
