import type { Metadata } from "next";
import "./globals.scss";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Roboto } from "next/font/google";
import theme from "./theme";
import Navbar from "./components/navbar";
import { TaskContextProvider } from "./context/TaskContext";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-roboto",
});

export const metadata: Metadata = {
	title: "Task Manager",
	description: "Manage tasks between your team members",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={roboto.variable}>
				<TaskContextProvider>
					<AppRouterCacheProvider>
						<ThemeProvider theme={theme}>
							<Navbar />
							<Container maxWidth="md">{children}</Container>
						</ThemeProvider>
					</AppRouterCacheProvider>
				</TaskContextProvider>
			</body>
		</html>
	);
}
