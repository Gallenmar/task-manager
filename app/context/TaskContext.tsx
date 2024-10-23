'use client';

import { createContext, FC, ReactNode, useContext, useState } from 'react';
import tasksData from '../tasks.json';
export interface Task {
  id: string;
  title: string;
  description: string | null;
  status: 'open' | 'in-progress' | 'closed' | null;
  type: 'feature' | 'bug' | 'enhancement' | 'task' | null;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (newTask: Task) => void;
  deleteTask: (taskId: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskContextProvider: FC<{ children: ReactNode }> = ({
  children
}) => {
  const [tasks, setTasks] = useState<Task[]>(tasksData as Task[]);

  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export function useTaskContext(): TaskContextType {
  const task = useContext(TaskContext);

  if (!task) {
    throw new Error('No task provided to the useContext');
  }

  return task;
}
