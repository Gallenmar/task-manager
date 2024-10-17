"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: "var(--font-roboto)",
	},
	palette: {
		primary: {
			main: "#2E294E",
		},
		secondary: {
			main: "#9055A2",
		},
		// colors for future
		//D499B9
		//E8C1C5
	},
});

export default theme;
