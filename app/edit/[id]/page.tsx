"use client";

import { Container, Typography } from "@mui/material";

export default function EditTask({ params }: { params: { id: string } }) {
	return (
		<Container maxWidth="sm">
			<Typography variant="h5" sx={{ marginTop: "2rem", textAlign: "center" }}>
				Section under construction..
				{params.id}
			</Typography>
		</Container>
	);
}
