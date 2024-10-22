"use client";

import {
	Box,
	Button,
	Card,
	Container,
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
import { useRouter } from "next/navigation";

export default function Add() {
	const { addTask } = useTaskContext();

	const [type, setType] = useState("");
	const [status, setStatus] = useState("");
	const [errors, setErrors] = useState<{ [key: string]: string }>({});

	const router = useRouter();

	const handleValidation = (title: string, description: string) => {
		const newErr: { [key: string]: string } = {};
		if (title === "") {
			newErr.title = "Title is required.";
		} else if (title.length > 20) {
			newErr.title = "Title can't be more then 20 characters long.";
		}

		if (description.length > 200) {
			newErr.description =
				"Description can't be more then 200 characters long.";
		}
		return newErr;
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const title = data.get("title") as string;
		const description = data.get("description") as string;
		const validationErrors = handleValidation(title, description);

		if (Object.keys(validationErrors).length > 0) {
			console.log(Object.keys(validationErrors));
			setErrors(validationErrors);
			return;
		}

		addTask({
			id: Math.random().toString(36).slice(2, 9),
			title: data.get("title") as string,
			description: data.get("description") as string,
			type: type as "feature" | "bug" | "enhancement" | "task" | null,
			status: status as "open" | "in-progress" | "closed" | null,
		});
		router.push("/");
	};

	return (
		<div>
			<Container maxWidth="sm">
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
									name="title"
									placeholder="Write a task title"
									autoFocus
									variant="outlined"
									error={Boolean(errors.title)}
									helperText={errors.title}
								/>
							</FormControl>
							<FormControl fullWidth>
								<FormLabel htmlFor="description">Description</FormLabel>
								<TextField
									id="description"
									name="description"
									placeholder="Describe a task"
									variant="outlined"
									autoComplete="off"
									multiline
									rows={3}
									error={Boolean(errors.description)}
									helperText={errors.description}
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
								>
									<MenuItem value="">---None---</MenuItem>
									<MenuItem value="open">Open</MenuItem>
									<MenuItem value="in-progress">In Progress</MenuItem>
									<MenuItem value="closed">Closed</MenuItem>
								</Select>
							</FormControl>

							<Button
								type="submit"
								variant="contained"
								fullWidth
								sx={{ mt: 2 }}
							>
								Create Task
							</Button>
						</Box>
					</Card>
				</Stack>
			</Container>
		</div>
	);
}
