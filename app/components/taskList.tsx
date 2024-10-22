"use client";

import React from "react";
import { Box, Card, IconButton, Link, Typography } from "@mui/material";
import { Task, useTaskContext } from "../context/TaskContext";
import DeleteButton from "./deleteButton";

interface taskListProps {
	n: number;
}

const TaskList: React.FC<taskListProps> = ({ n }) => {
	const { tasks } = useTaskContext();

	return (
		<>
			<Typography variant="h4" sx={{ p: 2, mb: 2 }}>
				Task List:
			</Typography>
			{tasks.length === 0 ? (
				<Typography sx={{ display: "flex", justifyContent: "center" }}>
					No tasks created.
				</Typography>
			) : (
				tasks
					.slice(0, n === -1 ? tasks.length : n)
					.map((task: Task, index: number) => (
						<Card variant="outlined" key={index} sx={{ p: 2, mb: 2 }}>
							<Box
								component="a"
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
								}}
							>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "space-between",
										alignItems: "start",
									}}
								>
									{(task.status || task.type) && (
										<Typography sx={{ color: "gray", fontSize: "0.875rem" }}>
											{task.status} - {task.type}
										</Typography>
									)}
									<Link
										href={`/tasks/${task.id}`}
										style={{ textDecoration: "none" }}
									>
										<Typography variant="h6" sx={{ mb: 1 }}>
											{task.title}
										</Typography>
									</Link>
									{task.description && (
										<Typography variant="body2" color="textSecondary">
											{task.description}
										</Typography>
									)}
								</Box>

								<IconButton aria-label="delete" color="error">
									<DeleteButton taskId={task.id} />
								</IconButton>
							</Box>
						</Card>
					))
			)}
		</>
	);
};

export default TaskList;
