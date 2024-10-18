"use client";

import { Card, Typography } from "@mui/material";
import { Task, useTaskContext } from "./context/TaskContext";

export default function Home() {
	const { tasks } = useTaskContext();

	return (
		<div>
			<Typography variant="h4">Task List:</Typography>
			{tasks.map((task: Task, index: number) => (
				<Card variant="outlined" key={index}>
					{task.title}
				</Card>
			))}
		</div>
	);
}
