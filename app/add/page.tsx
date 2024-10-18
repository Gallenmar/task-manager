"use client";

import {
	Box,
	Button,
	Card,
	FormControl,
	FormLabel,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useTaskContext } from "../context/TaskContext";
import { useState } from "react";

export default function Add() {
	const { addTask } = useTaskContext();

	const [type, setType] = useState("");
	const [status, setStatus] = useState("");

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		addTask({
			title: data.get("title") as string,
			description: data.get("description") as string,
			type: type as "feature" | "bug" | "enhancement" | "task",
			status: status as "open" | "in-progress" | "closed",
		});
	};

	return (
		<div>
			<Stack
				sx={{
					alignContent: "center",
					height: { xs: "100%", sm: "100dvh" },
					p: 2,
					marginTop: "7rem",
				}}
			>
				<Card variant="outlined">
					<Typography
						variant="h5"
						sx={{ display: "flex", justifyContent: "center" }}
					>
						Create a Task
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
						}}
					>
						<FormControl fullWidth>
							<FormLabel htmlFor="text">Title</FormLabel>
							<TextField
								id="title"
								type="title"
								name="title"
								placeholder="Write a task title"
								autoFocus
								required
								variant="outlined"
							/>
						</FormControl>
						<FormControl fullWidth>
							<FormLabel htmlFor="description">Description</FormLabel>
							<TextField
								id="description"
								name="description"
								placeholder="Describe a task"
								variant="outlined"
							/>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id="type-label">Type</InputLabel>
							<Select
								labelId="type-label"
								id="type"
								value={type}
								onChange={(event) => setType(event.target.value)}
								label="Type"
								required
							>
								<MenuItem value="">---None---</MenuItem>
								<MenuItem value="feature">Feature</MenuItem>
								<MenuItem value="bug">Bug</MenuItem>
								<MenuItem value="enhancement">Enhancement</MenuItem>
								<MenuItem value="task">Task</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id="status-label">Status</InputLabel>
							<Select
								labelId="status-label"
								id="status"
								value={status}
								onChange={(event) => setStatus(event.target.value)}
								label="Status"
								required
							>
								<MenuItem value="">---None---</MenuItem>
								<MenuItem value="open">Open</MenuItem>
								<MenuItem value="in-progress">In Progress</MenuItem>
								<MenuItem value="closed">Closed</MenuItem>
							</Select>
						</FormControl>

						<Button
							type="submit"
							color="secondary"
							variant="contained"
							fullWidth
							sx={{ mt: 2 }}
						>
							Create Task
						</Button>
					</Box>
				</Card>
			</Stack>
		</div>
	);
}
