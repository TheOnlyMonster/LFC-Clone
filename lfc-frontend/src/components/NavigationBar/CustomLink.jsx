/* eslint-disable react/prop-types */
import { Link } from "@mui/material";

export default function CustomLink({ children, href, weight }) {
	return (
		<Link
			underline="hover"
			href={href ? href : "#"}
			sx={{
				color: "rgba(12, 12, 12, 0.7)",
				fontFamily: `"Roboto Condensed", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif`,
				fontSize: "14px",
				fontWeight: weight ? weight : 400,
				textTransform: "uppercase",
				lineHeight: 1.2,
			}}
		>
			{children}
		</Link>
	);
}
