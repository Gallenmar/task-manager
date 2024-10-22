"use client";

import { useEffect, useState } from "react";
import TaskList from "./components/taskList";
import { Button, Container, Link } from "@mui/material";
import { useTaskContext } from "./context/TaskContext";

export default function Home() {
	const { tasks } = useTaskContext();

	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsClient(true);
	}, []);
	if (!isClient) {
		return null;
	}
	return (
		<div>
			<Container maxWidth="sm">
				<TaskList n={3} />
				{tasks.length > 3 && (
					<Link sx={{ display: "flex", justifyContent: "center" }} href="/list">
						<Button variant="contained">View all tasks</Button>
					</Link>
				)}
			</Container>
		</div>
	);
}
