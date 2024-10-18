"use client";
import { grey } from "@mui/material/colors";
import { alpha, createTheme } from "@mui/material/styles";

const theme = createTheme({
	typography: {
		fontFamily: "var(--font-roboto)",
	},
	palette: {
		primary: {
			main: "#2c143a",
		},
		secondary: {
			main: "#9055A2",
		},
		mode: "dark",
		// colors for future
		//D499B9
		//E8C1C5
	},
	components: {
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: "#2c143a",
				},
			},
		},
		MuiCard: {
			styleOverrides: {
				root: ({ theme }) => {
					return {
						padding: 16,
						gap: 16,
						transition: "all 100ms ease",
						backgroundColor: grey[50],
						borderRadius: theme.shape.borderRadius,
						border: `1px solid ${theme.palette.divider}`,
						boxShadow: "none",
						...theme.applyStyles("dark", {
							backgroundColor: grey[800],
						}),
						variants: [
							{
								props: {
									variant: "outlined",
								},
								style: {
									border: `1px solid ${theme.palette.divider}`,
									boxShadow: "none",
									background: "hsl(0, 0%, 100%)",
									...theme.applyStyles("dark", {
										background: alpha(grey[900], 0.4),
									}),
								},
							},
						],
					};
				},
			},
		},
	},
});

export default theme;
