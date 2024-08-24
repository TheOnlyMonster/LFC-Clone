import MenuIcon from "@mui/icons-material/Menu";
import {
	Toolbar,
	Box,
	IconButton,
	Typography,
	MenuItem,
	SwipeableDrawer,
	Divider,
	Slide,
} from "@mui/material";
import { useState } from "react";
import navBar from "./NavigationBarList";
import CloseIcon from "@mui/icons-material/Close";
import CustomLink from "./CustomLink";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function NavigationBarSmall() {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [subMenuItems, setSubMenuItems] = useState(null);

	const handleOpenSubMenu = (subCategories) => {
		setSubMenuItems(subCategories);
	};

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
		setSubMenuItems(null);
	};
	return (
		<Toolbar
			disableGutters
			sx={{
				display: { md: "flex", lg: "none" },
				justifyContent: "space-between",
				padding: "0px 15px",
				boxSizing: "border-box",
			}}
		>
			<Box>
				<IconButton
					size="large"
					onClick={handleOpenNavMenu}
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<SwipeableDrawer
					anchor="left"
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					onOpen={handleOpenNavMenu}
				>
					<Box
						sx={{
							width: 250,
							display: "flex",
							flexDirection: "column",
							padding: "20px",
							gap: "10px",
						}}
					>
						<Box display={"flex"} justifyContent={"space-between"}>
							<Box>
								<img
									src="liverpoolfc_logo_red.webp"
									width="25px"
									alt="Liverpool FC Logo"
								/>
							</Box>
							<Box>
								<IconButton
									onClick={handleCloseNavMenu}
									sx={{ color: "red" }}
								>
									<CloseIcon />
								</IconButton>
							</Box>
						</Box>
						<Divider />
						{subMenuItems === null &&
							navBar.map((item) => (
								<MenuItem
									key={item.label}
									sx={{
										minHeight: "auto !important",
										padding: "8px 0px",
										"&:hover": {
											backgroundColor: "transparent",
										},
										"&:focus": {
											backgroundColor: "transparent",
										},
									}}
									onClick={() =>
										handleOpenSubMenu(item.subCategories)
									}
								>
									<Typography
										textTransform={"uppercase"}
										color={"#545454"}
										fontSize={"0.6rem"}
										fontWeight={"bold"}
									>
										{item.label}
									</Typography>
								</MenuItem>
							))}
						{subMenuItems !== null && (
							<Slide in={true} direction="left">
								<Box>
									{subMenuItems.map((item) => (
										<Box key={item.subLabel}>
											<Typography
												textTransform="uppercase"
												fontSize="0.7rem"
												fontWeight="bold"
												margin={"10px 0px"}
											>
												{item.subLabel}
											</Typography>
											{item.subItems.map((subItem) => (
												<MenuItem
													key={subItem}
													sx={{
														minHeight:
															"auto !important",
														padding: "5px 0px",
														"&:hover": {
															backgroundColor:
																"transparent",
														},
													}}
												>
													<Typography
														color="#545454"
														fontSize="0.7rem"
													>
														{subItem}
													</Typography>
												</MenuItem>
											))}
											<Divider />
										</Box>
									))}
									<Box
										sx={{
											display: "flex",
											flexDirection: "column-reverse",
											justifyContent: "space-around",
											alignItems: "center",
											gap: "10px",
										}}
									>
										<Box
											display="flex"
											flexDirection={"row"}
											justifyContent={"center"}
											alignItems={"start"}
											gap={2}
										>
											<CustomLink
												href="/contact"
												weight={400}
											>
												Help
											</CustomLink>
											<CustomLink
												href="/contact"
												weight={400}
											>
												Help & FAQs
											</CustomLink>
											<CustomLink
												href="/contact"
												weight={400}
											>
												Contact Us
											</CustomLink>
											<CustomLink
												href="/contact"
												weight={400}
											>
												A - Z
											</CustomLink>
										</Box>
										<Box>
											<IconButton>
												<FacebookOutlinedIcon
													sx={{ color: "#DC0714" }}
													fontSize="medium"
												/>
											</IconButton>
											<IconButton>
												<TwitterIcon
													sx={{ color: "#DC0714" }}
													fontSize="medium"
												/>
											</IconButton>
											<IconButton>
												<InstagramIcon
													sx={{ color: "#DC0714" }}
													fontSize="medium"
												/>
											</IconButton>
											<IconButton>
												<YouTubeIcon
													sx={{ color: "#DC0714" }}
													fontSize="medium"
												/>
											</IconButton>
											<IconButton>
												<LinkedInIcon
													sx={{ color: "#DC0714" }}
													fontSize="medium"
												/>
											</IconButton>
										</Box>
									</Box>
								</Box>
							</Slide>
						)}
					</Box>
				</SwipeableDrawer>
			</Box>

			<Box>
				<img
					src="liverpoolfc_logo.webp"
					width="25px"
					alt="Liverpool FC Logo"
				/>
			</Box>

			<Box>
				<img
					src="standard-chartered-logo.png"
					width="80px"
					alt="Standard Chartered Logo"
				/>
			</Box>
		</Toolbar>
	);
}
