import { Container, AppBar } from "@mui/material";
import NavigationBarBig from "./NavigationBarBig";
import NavigationBarSmall from "./NavigationBarSmall";

function NavigationBar() {
	return (
		<AppBar
			position="sticky"
			sx={{ backgroundColor: "transparent", padding: "0px 50px" }}
			elevation={0}
		>
			<Container
				maxWidth="lg"
				sx={{
					backgroundColor: "#dc0714",
					padding: "0px 0px !important",
				}}
			>
				<NavigationBarSmall />
				<NavigationBarBig />
			</Container>
		</AppBar>
	);
}

export default NavigationBar;
