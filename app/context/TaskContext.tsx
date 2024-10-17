"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";

export interface Task {
	title: string;
}

interface TaskContextType {
	tasks: Task[];
	addTask: (newTask: Task) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskContextProvider: FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [tasks, setTasks] = useState<Task[]>([{ title: "init" }]);

	const addTask = (newTask: Task) => {
		setTasks((prevTasks) => [...prevTasks, newTask]);
	};

	return (
		<TaskContext.Provider value={{ tasks, addTask }}>
			{children}
		</TaskContext.Provider>
	);
};

export function useTaskContext(): TaskContextType {
	const task = useContext(TaskContext);

	if (!task) {
		throw new Error("No task provided to the useContext");
	}

	return task;
}
