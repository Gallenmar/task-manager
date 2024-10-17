import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Link href="/" style={{ display: "flex", alignItems: "center" }}>
					<Image
						src="/logo.png"
						alt="Task Manager Logo"
						width={40}
						height={40}
					/>
					<Typography variant="h6" sx={{ marginLeft: 1 }}>
						Task Manager
					</Typography>
				</Link>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
