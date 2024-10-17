"use client";

import { Typography } from "@mui/material";
import { Task, useTaskContext } from "./context/TaskContext";

export default function Home() {
	const { tasks } = useTaskContext();

	return (
		<div>
			<Typography variant="h4">Hello world!</Typography>
			{tasks.map((task: Task, index: number) => (
				<Typography key={index}>{task.title}</Typography>
			))}
		</div>
	);
}
